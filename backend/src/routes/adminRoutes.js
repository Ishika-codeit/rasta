const express = require("express");
const {
    updateService,
    updateScheme,
    addService,
    addScheme
} = require("../controllers/adminController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// All routes here are protected and require admin role
router.patch("/services/:id", protect, admin, updateService);
router.post("/services", protect, admin, addService);
router.patch("/schemes/:id", protect, admin, updateScheme);
router.post("/schemes", protect, admin, addScheme);

module.exports = router;
