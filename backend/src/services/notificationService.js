const nodemailer = require("nodemailer");
const Notification = require("../models/Notification");
const User = require("../models/User");

/**
 * NotificationService handles sending notifications through different channels.
 */
const NotificationService = {
    /**
     * Send a notification to a user
     * @param {String} userId - The ID of the user
     * @param {Object} options - { title, message, type, channel }
     */
    send: async (userId, options) => {
        const { title, message, type = "general", channel = "in_app" } = options;

        try {
            // 1. Store notification in DB (In-App notification)
            await Notification.create({
                userId,
                title,
                message,
                type,
                channel: "in_app"
            });

            // 2. Handle specific channels
            if (channel === "email") {
                await NotificationService.sendEmail(userId, title, message);
            } else if (channel === "sms") {
                // Future integration with Twilio/MessageBird
                console.log(`[SMS MOCK] Sending SMS to user ${userId}: ${message}`);
            }

            return { success: true };
        } catch (error) {
            console.error("Notification Service Error:", error);
            return { success: false, error: error.message };
        }
    },

    /**
     * Private method to send email via Nodemailer
     */
    sendEmail: async (userId, title, message) => {
        try {
            const user = await User.findById(userId);
            if (!user || !user.email) {
                console.error("Email failed: User not found or has no email");
                return;
            }

            // Transport configuration
            // Note: In production, these MUST come from process.env
            const transporter = nodemailer.createTransport({
                host: process.env.EMAIL_HOST || "smtp.ethereal.email",
                port: process.env.EMAIL_PORT || 587,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            await transporter.sendMail({
                from: `"Raasta AI" <${process.env.EMAIL_FROM || "no-reply@raasta.ai"}>`,
                to: user.email,
                subject: title,
                text: message,
                html: `<b>${title}</b><p>${message}</p>`
            });

            console.log(`Email sent successfully to ${user.email}`);
        } catch (error) {
            console.error("Nodemailer Error:", error);
        }
    }
};

module.exports = NotificationService;
