const Groq = require("groq-sdk");

const client = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

/**
 * Checks if a user is eligible for a scheme based on OCR text and scheme requirements.
 * @param {string} ocrText - The text extracted from the user's document.
 * @param {Object} scheme - The scheme object from MongoDB.
 * @returns {Promise<Object>} - JSON containing eligible status and reason.
 */
const checkEligibility = async (ocrText, scheme) => {
    try {
        const response = await client.chat.completions.create({
            model: "openai/gpt-oss-20b", // Using the model specified in your aiService
            messages: [
                {
                    role: "system",
                    content: `
You are the Eligibility Verification Engine for RaastaAI.
Your goal is to determine if a user is eligible for a government scheme based on the text extracted from their uploaded document.

INPUTS:
1. Scheme Eligibility Rules: ${JSON.stringify(scheme.eligibility)}
2. Extracted Document Text: "${ocrText}"

RULES:
1. Analyze the extracted text to find values (like age, income, category, state, etc.).
2. Compare these values against the Scheme Eligibility Rules.
3. If the document explicitly proves the user meets the criteria, set eligible to true.
4. If the document proves they DON'T meet the criteria, set eligible to false.
5. If the document is unrelated or doesn't provide enough information to decide, set eligible to "uncertain".

Return ONLY a valid JSON object in this format:
{
    "eligible": boolean | "uncertain",
    "confidence": number (0-1),
    "matchPercentage": number (0-100),
    "reason": "A clear explanation of why the user is or isn't eligible, referencing the document text",
    "gapAnalysis": [
        "List the specific criteria the user DOES NOT meet",
        "List any missing documents"
    ],
    "missingInfo": ["List any missing pieces of information needed to confirm eligibility"],
    "extractedData": {
        "income": "string or null",
        "age": "string or null",
        "category": "string or null",
        "state": "string or null"
    }
}
                    `
                }
            ],
            temperature: 0
        });

        const result = response.choices[0].message.content;
        return JSON.parse(result);
    } catch (error) {
        console.error("Eligibility Check Error:", error);
        throw new Error("Failed to verify eligibility");
    }
};

module.exports = {
    checkEligibility
};
