const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
    {
        userId: {
            type: String, // Using string to match current auth pattern, but should be ObjectId
            required: true,
            index: true
        },
        title: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        type: {
            type: String,
            enum: ["application_update", "eligibility_alert", "general"],
            default: "general"
        },
        isRead: {
            type: Boolean,
            default: false
        },
        channel: {
            type: String,
            enum: ["email", "sms", "in_app"],
            default: "in_app"
        }
    },
    {
        timestamps: true
    }
);

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
