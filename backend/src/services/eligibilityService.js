const Groq = require("groq-sdk");

const client = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

/**
 * Extracts structured facts from OCR text using AI.
 * The AI ONLY extracts data; it does NOT make the eligibility decision.
 */
const extractFactsFromDocument = async (ocrText) => {
    try {
        const response = await client.chat.completions.create({
            model: "openai/gpt-oss-20b",
            messages: [
                {
                    role: "system",
                    content: `
You are a Document Data Extraction Engine for RaastaAI.
Your goal is to extract specific factual data from the provided text.

DO NOT evaluate eligibility. DO NOT say if the user is eligible.
ONLY extract the values.

Return ONLY a valid JSON object in this format:
{
    "extractedData": {
        "income": number | null,
        "age": number | null,
        "category": "string" | null,
        "state": "string" | null,
        "gender": "string" | null,
        "occupation": "string" | null,
        "education": "string" | null
    },
    "confidence": number (0-1),
    "rawFindings": ["list of quotes from text that justify the values"]
}
                    `
                },
                {
                    role: "user",
                    content: `Extract data from this text: "${ocrText}"`
                }
            ],
            temperature: 0
        });

        const result = response.choices[0].message.content;
        return JSON.parse(result);
    } catch (error) {
        console.error("Fact Extraction Error:", error);
        throw new Error("Failed to extract facts from document");
    }
};

/**
 * Deterministically validates extracted facts against scheme rules.
 */
const validateEligibility = (facts, rules) => {
    if (!rules || Object.keys(rules).length === 0) {
        return {
            status: "MORE_INFORMATION_REQUIRED",
            eligible: null,
            reasons: ["No deterministic eligibility rules defined for this scheme."],
            missingInformation: []
        };
    }

    const reasons = [];
    const missingInformation = [];
    let isEligible = true;

    // 1. Income Check
    if (rules.income) {
        const income = facts.income;
        if (income === null || income === undefined) {
            missingInformation.push("annualIncome");
        } else {
            if (rules.income.max && income > rules.income.max) {
                isEligible = false;
                reasons.push(`Income (${income}) exceeds the maximum limit of ${rules.income.max}`);
            }
            if (rules.income.min && income < rules.income.min) {
                isEligible = false;
                reasons.push(`Income (${income}) is below the minimum limit of ${rules.income.min}`);
            }
        }
    }

    // 2. Age Check
    if (rules.age) {
        const age = facts.age;
        if (age === null || age === undefined) {
            missingInformation.push("age");
        } else {
            if (rules.age.max && age > rules.age.max) {
                isEligible = false;
                reasons.push(`Age (${age}) exceeds the maximum limit of ${rules.age.max}`);
            }
            if (rules.age.min && age < rules.age.min) {
                isEligible = false;
                reasons.push(`Age (${age}) is below the minimum limit of ${rules.age.min}`);
            }
        }
    }

    // 3. Category Check
    if (rules.categories && rules.categories.length > 0) {
        const category = facts.category;
        if (!category) {
            missingInformation.push("category");
        } else if (!rules.categories.includes(category)) {
            isEligible = false;
            reasons.push(`Category ${category} is not eligible. Required: ${rules.categories.join(", ")}`);
        }
    }

    // 4. State Check
    if (rules.states && rules.states.length > 0) {
        const state = facts.state;
        if (!state) {
            missingInformation.push("state");
        } else if (!rules.states.includes(state)) {
            isEligible = false;
            reasons.push(`State ${state} is not eligible. Required: ${rules.states.join(", ")}`);
        }
    }

    // Handle Results
    if (missingInformation.length > 0) {
        return {
            status: "MORE_INFORMATION_REQUIRED",
            eligible: null,
            reasons: ["Some required information is missing from the document."],
            missingInformation
        };
    }

    if (!isEligible) {
        return {
            status: "NOT_ELIGIBLE",
            eligible: false,
            reasons
        };
    }

    return {
        status: "ELIGIBLE",
        eligible: true,
        reasons: ["All eligibility criteria met based on document data."]
    };
};

/**
 * Main entry point: Orchestrates extraction and deterministic validation.
 */
const checkEligibility = async (ocrText, scheme) => {
    try {
        // Step 1: AI extracts facts
        const extractionResult = await extractFactsFromDocument(ocrText);
        const facts = extractionResult.extractedData;

        // Step 2: Backend evaluates rules
        const eligibilityResult = validateEligibility(facts, scheme.eligibilityRules);

        return {
            ...eligibilityResult,
            extractedData: facts,
            confidence: extractionResult.confidence
        };
    } catch (error) {
        console.error("Eligibility Check Error:", error);
        throw new Error("Failed to verify eligibility");
    }
};

module.exports = {
    checkEligibility,
    extractFactsFromDocument,
    validateEligibility
};
