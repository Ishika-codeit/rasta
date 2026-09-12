const mongoose = require("mongoose");

const schemeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true,
            trim: true
        },

        category: {
            type: String,
            required: true,
            trim: true
        },

        keywords: {
            type: [String],
            default: []
        },

        benefits: {
            type: [String],
            default: []
        },

        eligibility: {
            type: [String],
            default: []
        },

        requiredDocuments: {
            type: [String],
            default: []
        },

        applicationSteps: {
            type: [String],
            default: []
        },

        officialUrl: {
            type: String,
            required: true,
            trim: true
        },

        languages: {
            type: [String],
            default: ["en"]
        },

        verified: {
            type: Boolean,
            default: false
        },

        lastVerified: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true
    }
);

const Scheme = mongoose.model("Scheme", schemeSchema);

module.exports = Scheme;