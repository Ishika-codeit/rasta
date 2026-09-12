require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");
const { QuestionEngine } = require("./questionEngine");

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Try the primary model first; if it's overloaded, fall back to a secondary model
const PRIMARY_MODEL = "gemini-2.5-flash";
const FALLBACK_MODEL = "gemini-3.1-flash-lite";

// In-memory session store for UserContext
const sessions = {};

async function generateWithFallback(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: PRIMARY_MODEL,
      contents: prompt,
    });
    return response.text;
  } catch (err) {
    console.warn(`${PRIMARY_MODEL} failed (${err.status || "error"}), retrying with ${FALLBACK_MODEL}...`);
    const response = await ai.models.generateContent({
      model: FALLBACK_MODEL,
      contents: prompt,
    });
    return response.text;
  }
}

// Maps language codes to full names and native script
const LANGUAGE_NAMES = {
  "en-IN": { name: "English", script: "Latin/English script", short: "en" },
  "hi-IN": { name: "Hindi", script: "Devanagari script (हिंदी)", short: "hi" },
  "bn-IN": { name: "Bengali", script: "Bengali script (বাংলা)", short: "bn" },
  "ta-IN": { name: "Tamil", script: "Tamil script (தமிழ்)", short: "ta" },
  "te-IN": { name: "Telugu", script: "Telugu script (తెలుగు)", short: "te" },
  "mr-IN": { name: "Marathi", script: "Devanagari script, Marathi (मराठी)", short: "mr" },
};

// Helper to extract entities using AI
async function extractEntities(text, lang) {
  const prompt = `Extract the following fields from the user's message:
  - intent (PENSION_ISSUE, EDUCATION_ASSISTANCE, HEALTHCARE_ASSISTANCE, SCHOLARSHIP_QUERY, EMPLOYMENT_ASSISTANCE, HOUSING_SCHEME, or UNKNOWN)
  - location_state (State name or code)
  - age (Number)
  - income_bracket (Annual income)
  - education_level (Education level)
  - existing_pension (Yes/No)
  - problem_type (Description of problem)
  - gender (Male/Female/Other)
  - caste_category (General/OBC/SC/ST)
  - occupation (Job/Role)
  - disability_status (Yes/No)
  - bank_account_status (Yes/No)
  - marital_status (Married/Unmarried/etc)
  - family_size (Number)

  Respond ONLY with a JSON object. If a field is missing, use null.
  User Message: "${text}"
  Language: ${lang}`;

  const result = await generateWithFallback(prompt);
  try {
    // Clean result of any markdown code blocks
    const jsonString = result.replace(/```json|```/g, "").trim();
    return JSON.parse(jsonString);
  } catch (e) {
    console.error("Failed to parse entities JSON:", e);
    return {};
  }
}

app.post("/api/chat", async (req, res) => {
  try {
    const { text, lang, sessionId } = req.body;

    if (!text) {
      return res.status(400).json({ error: "No text provided" });
    }

    // Handle session
    const sId = sessionId || "default";
    if (!sessions[sId]) {
      sessions[sId] = {
        intent: null,
        location_state: null,
        age: null,
        income_bracket: null,
        education_level: null,
        existing_pension: null,
        problem_type: null,
        gender: null,
        caste_category: null,
        occupation: null,
        disability_status: null,
        bank_account_status: null,
        marital_status: null,
        family_size: null,
        language: lang,
        questionCount: 0,
        lastAskedField: null,
      };
    }
    const context = sessions[sId];
    context.language = lang;

    // 1. Extract entities from current input
    const entities = await extractEntities(text, lang);

    // Update context with extracted entities
    for (const key in entities) {
      if (entities[key] !== null) {
        context[key] = entities[key];
      }
    }

    // 2. Define critical fields for this context
    const criticalFields = [
      "intent", "location_state", "age", "income_bracket", "education_level",
      "gender", "caste_category", "occupation"
    ];
    context.missingCriticalFields = criticalFields.filter(f => !context[f]);

    // Check if ready
    context.isReadyForMatching = context.missingCriticalFields.length === 0;
    context.maxQuestionsReached = context.questionCount >= 10;

    // 3. Determine next move using QuestionEngine
    const nextMove = QuestionEngine.getNextMove(context);

    if (nextMove === "PROCESSING_RECOMMENDATION") {
      // AI generates personalized recommendation
      const langInfo = LANGUAGE_NAMES[lang] || { name: "English", script: "Latin/English script" };
      const prompt = `You are RaastaAI, a friendly assistant that helps Indian citizens find government schemes.

      User Context:
      - Intent: ${context.intent}
      - State: ${context.location_state}
      - Age: ${context.age}
      - Income: ${context.income_bracket}
      - Education: ${context.education_level}
      - Category: ${context.caste_category}
      - Occupation: ${context.occupation}

      IMPORTANT: Reply ONLY in ${langInfo.name}, written in ${langInfo.script}.
      Keep response short (2-4 sentences). Suggest 1-2 specific schemes based on the context.

      User's message: "${text}"`;

      const aiReply = await generateWithFallback(prompt);
      const guidance = QuestionEngine.getSchemeGuidance(context);

      res.json({ reply: `${aiReply}\n\n${guidance}` });
    } else if (nextMove === "LLM_FALLBACK") {
      // Fallback to standard AI response
      const langInfo = LANGUAGE_NAMES[lang] || { name: "English", script: "Latin/English script" };
      const prompt = `You are RaastaAI, a friendly assistant that helps Indian citizens find government schemes.
      IMPORTANT: Reply ONLY in ${langInfo.name}, written in ${langInfo.script}.
      User's message: "${text}"`;
      const reply = await generateWithFallback(prompt);
      res.json({ reply });
    } else {
      // Return the engine's question
      res.json({ reply: nextMove });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong on the server" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
