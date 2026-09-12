const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        verifiedData: {
            income: { type: String },
            age: { type: String },
            category: { type: String }, // e.g., OBC, SC, ST, General
            state: { type: String },
            address: { type: String },
            otherEntities: { type: Map, of: String }
        },
        uploadedDocuments: [
            {
                documentType: String,
                uploadDate: { type: Date, default: Date.now },
                verified: { type: Boolean, default: true }
            }
        ],
        lastUpdated: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
);

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

module.exports = UserProfile;
