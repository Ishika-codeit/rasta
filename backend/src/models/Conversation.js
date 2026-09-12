const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ['user', 'assistant'],
        required: true
    },
    content: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const conversationSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
            index: true
        },
        messages: [messageSchema],
        lastActive: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;
