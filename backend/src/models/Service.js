const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        intent: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        description: {
            type: String,
            required: true
        },

        category: {
            type: String,
            required: true
        },

        keywords: {
            type: [String],
            default: []
        },

        languages: {
            type: [String],
            default: []
        },

        requiredDocuments: {
            type: [String],
            default: []
        },

        steps: {
            type: [String],
            default: []
        },

        officialUrl: {
            type: String,
            required: true
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

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;