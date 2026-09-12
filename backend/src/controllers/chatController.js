const { createActionPlan } = require("../services/actionPlanner");
const { detectIntent, generateVoiceResponse, translateText, generateSuggestions } = require("../services/aiService");
const { getClarificationQuestion } = require("../services/questionEngine");
const { findRelevantSchemes } = require("../services/schemeDiscovery");
const Service = require("../models/Service");
const Conversation = require("../models/Conversation");
const Application = require("../models/Application");
const UserProfile = require("../models/UserProfile");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/apiError");

const chat = asyncHandler(async (req, res) => {
    const { message, intent, voice = false } = req.body;
    const userId = req.user.id;

    if (!message && !intent) {
        throw new ApiError(400, "Message or intent is required", "INVALID_INPUT");
    }

    let conversation = await Conversation.findOne({ userId });
    if (!conversation) {
        conversation = new Conversation({ userId, messages: [] });
    }

    const userProfile = await UserProfile.findOne({ userId });
    const userApplications = await Application.find({ userId }).populate("serviceId");
    const history = conversation.messages.map(m => ({ role: m.role, content: m.content }));

    const systemContext = {
        role: "system",
        content: `USER_CONTEXT:
        Verified Data: ${JSON.stringify(userProfile?.verifiedData || "None")}
        Active Applications: ${JSON.stringify(userApplications.map(a => ({ service: a.serviceId.name, status: a.status })))}
        `
    };

    const contextualHistory = [systemContext, ...history];
    let aiResult;
    let responseText = "";
    let finalData = {};

    if (message) {
        aiResult = await detectIntent(message, contextualHistory);
        const clarification = await getClarificationQuestion(aiResult);

        if (clarification) {
            responseText = clarification.question;
            conversation.messages.push({ role: 'user', content: message });
            conversation.messages.push({ role: 'assistant', content: responseText });
            await conversation.save();

            const translatedQuestion = await translateText(responseText, aiResult.language);
            const voiceResponse = voice ? await generateVoiceResponse({ question: translatedQuestion }, "clarification") : null;

            const rawSuggestions = await generateSuggestions(aiResult.intent, aiResult.goal, { clarification: true });
            const translatedSuggestions = await Promise.all(
                rawSuggestions.map(s => translateText(s, aiResult.language))
            );

            return res.status(200).json({
                success: true,
                intent: aiResult.intent,
                goal: aiResult.goal,
                language: aiResult.language,
                clarification: {
                    ...clarification,
                    question: translatedQuestion
                },
                voiceResponse,
                suggestedQuestions: translatedSuggestions
            });
        }
    } else {
        aiResult = { intent: intent };
    }

    // HANDLE EDGE CASE: Unknown Intent
    if (aiResult.intent === "unknown") {
        responseText = "I'm sorry, I didn't quite understand that. Could you please rephrase your request or tell me which government service you are looking for?";

        if (message) {
            conversation.messages.push({ role: 'user', content: message });
        }
        conversation.messages.push({ role: 'assistant', content: responseText });
        await conversation.save();

        const translatedResponse = await translateText(responseText, aiResult.language || "en");

        return res.status(200).json({
            success: true,
            intent: "unknown",
            message: translatedResponse,
            suggestedQuestions: ["I want to apply for a certificate", "What schemes are available for me?", "How do I check my application status?"]
        });
    }

    if (aiResult.intent === "check_application_status") {
        if (userApplications.length === 0) {
            responseText = "You haven't started any applications yet. Would you like to find a service to apply for?";
        } else {
            const statusList = userApplications.map(app =>
                `${app.serviceId.name}: ${app.status} ${app.trackingNumber ? `(Tracking ID: ${app.trackingNumber})` : ""}`
            ).join("\n");
            responseText = `Here is the current status of your applications:\n${statusList}`;
        }
        finalData = { applications: userApplications };
    } else if (aiResult.intent === "scheme_discovery") {
        console.log(`SCHEME DISCOVERY: Category [${aiResult.category}]`);
        const schemes = await findRelevantSchemes(aiResult.category);

        if (schemes.length > 0) {
            responseText = `I found some schemes that might help you: ${schemes.map(s => s.name).join(", ")}`;
        } else {
            responseText = "I couldn't find any government schemes that match your request. Could you please provide more details or try a different category?";
        }
        finalData = { schemes };
    } else {
        const service = await Service.findOne({ intent: aiResult.intent, verified: true });
        console.log(`DATABASE SEARCH: Searching for intent [${aiResult.intent}]... Result: ${service ? 'FOUND' : 'NOT FOUND'}`);
        if (!service) {
            throw new ApiError(404, "No verified service found", "SERVICE_NOT_FOUND");
        }
        const actionPlan = createActionPlan(service);
        responseText = `Here is the action plan for ${service.name}.`;

        const proTip = await generateProTips(service.name, aiResult.intent);
        const translatedProTip = await translateText(proTip, aiResult.language);

        finalData = {
            service: {
                name: service.name,
                description: service.description
            },
            actionPlan,
            proTip: translatedProTip
        };
    }

    if (message) {
        conversation.messages.push({ role: 'user', content: message });
    }
    conversation.messages.push({ role: 'assistant', content: responseText });
    await conversation.save();

    const translatedResponse = await translateText(responseText, aiResult.language);
    const voiceResponse = voice ? await generateVoiceResponse(finalData, aiResult.intent) : null;

    const rawSuggestions = await generateSuggestions(aiResult.intent, aiResult.goal, {
        userProfile: userProfile?.verifiedData,
        applications: userApplications.map(a => a.status)
    });
    const translatedSuggestions = await Promise.all(
        rawSuggestions.map(s => translateText(s, aiResult.language))
    );

    res.status(200).json({
        success: true,
        intent: aiResult.intent,
        goal: aiResult.goal || "apply",
        language: aiResult.language || "en",
        message: translatedResponse,
        ...finalData,
        voiceResponse,
        suggestedQuestions: translatedSuggestions
    });
});

module.exports = { chat };
