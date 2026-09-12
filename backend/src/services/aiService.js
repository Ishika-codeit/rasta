const Groq = require("groq-sdk");

const client = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

const detectIntent = async (message, history = []) => {
    const messages = [
        {
            role: "system",
            content: `
You are the intent detection engine for RaastaAI.

RaastaAI is an AI-powered government service navigator
for Indian citizens.

Return ONLY valid JSON. Do NOT include markdown formatting, code blocks, or any preamble.
Return exactly this structure:

{
    "intent": "string",
    "goal": "string",
    "language": "string",
    "category": "string",
    "entities": {}
}

Possible service intents:
- ration_card
- income_certificate
- caste_certificate
- domicile_certificate
- certificate
- check_application_status

Scheme discovery intent:
- scheme_discovery

Possible goals:
- apply
- check_status
- renew
- understand
- find_benefit
- unknown

Possible scheme categories:
- education
- healthcare
- housing
- employment
- agriculture
- women
- senior_citizen
- disability
- food
- financial_assistance
- unknown

Rules:

1. Detect the user's intent. If the request matches a specific service intent (e.g., ration_card, income_certificate, caste_certificate, domicile_certificate), PRIORITIZE that over scheme_discovery.

2. Detect the user's goal.

3. Detect the language.

4. If the user is asking for a general government scheme,
   financial help, scholarship, subsidy, benefit,
   pension or similar support, and it DOES NOT match a specific service, use:
   "scheme_discovery"

5. If intent is "scheme_discovery",
   identify the most relevant category.

6. Only extract information explicitly provided
   by the user.

7. Do not invent information.

8. Return ONLY valid JSON.
                `
        },
        ...history,
        {
            role: "user",
            content: message
        }
    ];

    let response;
    try {
        response = await client.chat.completions.create({
            model: "openai/gpt-oss-20b",
            messages: messages,
            temperature: 0
        });
    } catch (error) {
        console.error("AI API Error:", error);
        return {
            intent: "unknown",
            goal: "unknown",
            language: "en",
            category: "unknown",
            entities: {}
        };
    }

    let result = response.choices[0].message.content;
    console.log("AI RAW RESPONSE:", result);

    try {
        // Handle cases where LLM adds conversational fluff around the JSON
        if (!result.trim().startsWith('{')) {
            const jsonMatch = result.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                result = jsonMatch[0];
            } else {
                throw new Error("No valid JSON found in response");
            }
        }
        const parsed = JSON.parse(result);
        console.log("AI PARSED RESULT:", parsed);
        return parsed;
    } catch (error) {
        console.error("AI JSON Parse Error:", error);
        console.log("FAILED RESULT TEXT:", result);
        // Fallback to a safe default object to prevent system crash
        return {
            intent: "unknown",
            goal: "unknown",
            language: "en",
            category: "unknown",
            entities: {}
        };
    }
};

const generateVoiceResponse = async (structuredData, context = "general") => {
    try {
        const response = await client.chat.completions.create({
            model: "openai/gpt-oss-20b",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful voice assistant for RaastaAI. Convert the provided structured data into a natural, concise, and friendly spoken response. Avoid using lists or special characters. Speak as if you are talking to a citizen over the phone."
                },
                {
                    role: "user",
                    content: `Convert this data into a spoken response: ${JSON.stringify(structuredData)}. Context: ${context}`
                }
            ],
            temperature: 0.7
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error("Voice Response Error:", error);
        return "I'm sorry, I'm having trouble speaking right now. Please check the text on your screen.";
    }
};

const translateText = async (text, targetLanguage) => {
    if (!targetLanguage || targetLanguage === "en" || targetLanguage === "english") {
        return text;
    }

    try {
        const response = await client.chat.completions.create({
            model: "openai/gpt-oss-20b",
            messages: [
                {
                    role: "system",
                    content: `You are a professional translator. Translate the following text into ${targetLanguage}.
                    Maintain the original meaning, tone, and formatting.
                    If the text contains technical government terms, translate them into the most commonly used local terms.
                    Return ONLY the translated text.`
                },
                {
                    role: "user",
                    content: text
                }
            ],
            temperature: 0.3
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error("Translation Error:", error);
        return text;
    }
};

const generateSuggestions = async (intent, goal, context = {}) => {
    try {
        const response = await client.chat.completions.create({
            model: "openai/gpt-oss-20b",
            messages: [
                {
                    role: "system",
                    content: `You are a conversational designer for RaastaAI. Based on the user's current intent and goal, suggest 3 short, helpful follow-up questions that the user might want to ask next.
                    Return ONLY a valid JSON array of strings.
                    Example: ["How do I apply?", "What documents are needed?", "How long does it take?"]`
                },
                {
                    role: "user",
                    content: `Intent: ${intent}, Goal: ${goal}, Context: ${JSON.stringify(context)}`
                }
            ],
            temperature: 0.7
        });

        const result = response.choices[0].message.content;
        return JSON.parse(result);
    } catch (error) {
        console.error("Suggestions Error:", error);
        return ["How can I apply?", "What documents do I need?", "Can you help me with something else?"];
    }
};

/**
 * Generates an "Insider Pro-Tip" for a specific government service.
 */
const generateProTips = async (serviceName, intent) => {
    try {
        const response = await client.chat.completions.create({
            model: "openai/gpt-oss-20b",
            messages: [
                {
                    role: "system",
                    content: `You are a government service expert in India. For the given service, provide one high-value "Pro-Tip" that helps users avoid common mistakes, speed up their application, or ensure their documents are accepted.
                    The tip should be practical, empathetic, and concise.
                    Return ONLY the tip text.`
                },
                {
                    role: "user",
                    content: `Service: ${serviceName}, Intent: ${intent}`
                }
            ],
            temperature: 0.8
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error("Pro-Tips Error:", error);
        return "Ensure all your documents are clear and scanned properly to avoid rejection.";
    }
};

module.exports = {
    detectIntent,
    generateVoiceResponse,
    translateText,
    generateSuggestions,
    generateProTips
};
