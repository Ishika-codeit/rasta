const Service = require("../models/Service");

const getClarificationQuestion = async (aiResult) => {

    // Abhi sirf generic "certificate" intent ko handle karenge
    if (aiResult.intent !== "certificate") {
        return null;
    }

    // MongoDB se certificate category ki verified services lao
    const services = await Service.find({
        category: "certificate",
        verified: true
    }).select("name intent");

    // Agar koi service nahi mili
    if (services.length === 0) {
        return null;
    }

    // Options prepare karo
    const options = services.map((service) => ({
        name: service.name,
        intent: service.intent
    }));

    return {
        needsClarification: true,
        question: "Aapko kaunsa certificate chahiye?",
        options: options
    };
};

module.exports = {
    getClarificationQuestion
};
