const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const chatRoutes = require("./routes/chatRoutes");
const schemeRoutes = require("./routes/schemeRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const adminRoutes = require("./routes/adminRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const { protect } = require("./middleware/authMiddleware");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "RaastaAI Backend is running 🚀"
    });
});

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        service: "RaastaAI Backend",
        status: "healthy"
    });
});

app.use("/api/auth", authRoutes);

// Protected Routes
app.use("/api/services", protect, serviceRoutes);
app.use("/api/chat", protect, chatRoutes);
app.use("/api/schemes", protect, schemeRoutes);
app.use("/api/applications", protect, applicationRoutes);
app.use("/api/notifications", protect, notificationRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/dashboard", protect, dashboardRoutes);

// Global Error Handler (Must be the last middleware)
app.use(errorMiddleware);

module.exports = app;