const express = require("express");
const Notification = require("../models/Notification");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Get all notifications for the logged in user
router.get("/", protect, async (req, res) => {
    try {
        const notifications = await Notification.find({ userId: req.user.id }).sort({ createdAt: -1 });
        res.json({
            success: true,
            notifications
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// Mark notification as read
router.patch("/read/:id", protect, async (req, res) => {
    try {
        const notification = await Notification.findOne({ _id: req.params.id, userId: req.user.id });
        if (!notification) {
            return res.status(404).json({ success: false, message: "Notification not found" });
        }
        notification.isRead = true;
        await notification.save();
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;
