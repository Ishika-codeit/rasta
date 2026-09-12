const express = require("express");
const {
    createApplication,
    updateApplicationStatus,
    getUserApplications,
    downloadActionPlan
} = require("../controllers/applicationController");

const router = express.Router();

router.post("/create", createApplication);
router.patch("/update", updateApplicationStatus);
router.get("/user/:userId", getUserApplications);
router.get("/download-plan/:applicationId", downloadActionPlan);

module.exports = router;
