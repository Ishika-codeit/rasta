const Application = require("../models/Application");
const Service = require("../models/Service");
const NotificationService = require("../services/notificationService");
const { generateActionPlanPDF } = require("../services/pdfService");
const { createActionPlan } = require("../services/actionPlanner");
const path = require("path");

const createApplication = async (req, res) => {
    try {
        const { serviceId, status = "Not Started" } = req.body;
        const userId = req.user.id; // Use ID from JWT token for security

        if (!serviceId) {
            return res.status(400).json({
                success: false,
                message: "serviceId is required"
            });
        }

        let application = await Application.findOne({ userId, serviceId });

        if (application) {
            return res.status(400).json({
                success: false,
                message: "Application already exists for this service"
            });
        }

        application = new Application({
            userId,
            serviceId,
            status
        });

        await application.save();

        const service = await Service.findById(serviceId);
        await NotificationService.send(userId, {
            title: "Application Started",
            message: `You have started an application for ${service?.name || 'a government service'}. We will keep you updated on the progress!`,
            type: "application_update",
            channel: "in_app"
        });

        return res.status(201).json({
            success: true,
            application
        });
    } catch (error) {
        console.error("Create Application Error:", error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const updateApplicationStatus = async (req, res) => {
    try {
        const { serviceId, status, trackingNumber, notes } = req.body;
        const userId = req.user.id; // Use ID from JWT token for security

        if (!serviceId) {
            return res.status(400).json({
                success: false,
                message: "serviceId is required"
            });
        }

        const application = await Application.findOne({ userId, serviceId });

        if (!application) {
            return res.status(404).json({
                success: false,
                message: "Application not found"
            });
        }

        const oldStatus = application.status;
        if (status) application.status = status;
        if (trackingNumber) application.trackingNumber = trackingNumber;
        if (notes) application.notes = notes;
        application.lastUpdatedBy = "user";

        await application.save();

        if (status && status !== oldStatus) {
            const service = await Service.findById(serviceId);
            await NotificationService.send(userId, {
                title: "Application Update",
                message: `The status of your application for ${service?.name || 'the service'} has changed from ${oldStatus} to ${status}.`,
                type: "application_update",
                channel: "email"
            });
        }

        return res.status(200).json({
            success: true,
            application
        });
    } catch (error) {
        console.error("Update Application Error:", error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getUserApplications = async (req, res) => {
    try {
        const { userId } = req.params;
        // Security: Ensure user can only request their own applications
        if (userId !== req.user.id) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to view these applications"
            });
        }

        const applications = await Application.find({ userId }).populate("serviceId");

        return res.status(200).json({
            success: true,
            applications
        });
    } catch (error) {
        console.error("Get Applications Error:", error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const downloadActionPlan = async (req, res) => {
    try {
        const { applicationId } = req.params;
        const userId = req.user.id;

        const application = await Application.findOne({ _id: applicationId, userId });
        if (!application) {
            return res.status(404).json({ success: false, message: "Application not found" });
        }

        const service = await Service.findById(application.serviceId);
        if (!service) {
            return res.status(404).json({ success: false, message: "Service not found" });
        }

        const actionPlan = createActionPlan(service);

        const pdfPath = await generateActionPlanPDF({
            userId,
            serviceName: service.name,
            actionPlan: actionPlan
        });

        res.download(pdfPath);
    } catch (error) {
        console.error("PDF Download Error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createApplication,
    updateApplicationStatus,
    getUserApplications,
    downloadActionPlan
};
