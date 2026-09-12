const Scheme = require("../models/Scheme");

const findRelevantSchemes = async (category) => {
    if (!category) return [];

    const schemes = await Scheme.find({
        category: { $regex: new RegExp(`^${category}$`, 'i') },
        verified: true
    });

    return schemes;
};

module.exports = {
    findRelevantSchemes
};