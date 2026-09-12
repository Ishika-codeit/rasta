const { extractTextFromImage } = require("../services/ocrService");
const { checkEligibility } = require("../services/eligibilityService");
const Scheme = require("../models/Scheme");
const Application = require("../models/Application");
const UserProfile = require("../models/UserProfile");
const fs = require("fs");
const mongoose = require("mongoose");

const verifyEligibility = async (req, res) => {
    try {
        const { schemeId } = req.body;
        const userId = req.user.id;
        const file = req.file;

        if (!schemeId) {
            return res.status(400).json({
                success: false,
                message: "schemeId is required"
            });
        }

        // FIX: Validate MongoDB ObjectId to prevent CastError crash
        if (!mongoose.Types.ObjectId.isValid(schemeId)) {
            return res.status(400).json({
                success: false,
                message: "Invalid scheme ID provided"
            });
        }

        if (!file) {
            return res.status(400).json({
                success: false,
                message: "Document upload is required"
            });
        }

        const scheme = await Scheme.findById(schemeId);
        if (!scheme) {
            return res.status(404).json({
                success: false,
                message: "Scheme not found"
            });
        }

        const ocrText = await extractTextFromImage(file.path);

        if (!ocrText || ocrText.trim().length < 10) {
            fs.unlinkSync(file.path);
            return res.status(400).json({
                success: false,
                message: "Could not find enough readable text in the document. Please upload a clearer image."
            });
        }

        const eligibilityResult = await checkEligibility(ocrText, scheme);

        if (eligibilityResult.extractedData) {
            await UserProfile.findOneAndUpdate(
                { userId },
                {
                    $set: {
                        "verifiedData": {
                            ...eligibilityResult.extractedData
                        },
                        lastUpdated: Date.now()
                    },
                    $push: {
                        uploadedDocuments: {
                            documentType: "Verified Document for " + scheme.name,
                            verified: true
                        }
                    }
                },
                { upsert: true }
            );
        }

        let status = "Not Started";
        if (eligibilityResult.eligible === true) {
            status = "Eligible - Ready to Apply";
        } else if (eligibilityResult.eligible === false) {
            status = "Rejected";
        }

        await Application.findOneAndUpdate(
            { userId, serviceId: scheme._id },
            { status },
            { upsert: true }
        );

        fs.unlinkSync(file.path);

        return res.status(200).json({
            success: true,
            schemeName: scheme.name,
            eligibility: eligibilityResult,
            applicationStatus: status
        });

    } catch (error) {
        console.error("Eligibility Verification Error:", error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    verifyEligibility
};
