const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
            index: true
        },
        serviceId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Service",
            required: true
        },
        status: {
            type: String,
            enum: [
                "Not Started",
                "Eligible - Ready to Apply",
                "Documents Uploaded",
                "Submitted",
                "Under Review",
                "Approved",
                "Rejected"
            ],
            default: "Not Started"
        },
        trackingNumber: {
            type: String,
            trim: true
        },
        deadlineDate: {
            type: Date,
            default: null
        },
        notes: {
            type: String
        },
        lastUpdatedBy: {
            type: String, // "user" or "system"
            default: "system"
        }
    },
    {
        timestamps: true
    }
);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
