const express = require("express");
const { chat } = require("../controllers/chatController");
const { verifyEligibility } = require("../controllers/eligibilityController");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/", chat);
router.post("/verify-eligibility", upload.single('document'), verifyEligibility);

module.exports = router;