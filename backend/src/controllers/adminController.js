const Service = require("../models/Service");
const Scheme = require("../models/Scheme");

const updateService = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const service = await Service.findByIdAndUpdate(id, updateData, { new: true });
        if (!service) return res.status(404).json({ success: false, message: "Service not found" });

        res.json({ success: true, service });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateScheme = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const scheme = await Scheme.findByIdAndUpdate(id, updateData, { new: true });
        if (!scheme) return res.status(404).json({ success: false, message: "Scheme not found" });

        res.json({ success: true, scheme });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const addService = async (req, res) => {
    try {
        const service = await Service.create(req.body);
        res.status(201).json({ success: true, service });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const addScheme = async (req, res) => {
    try {
        const scheme = await Scheme.create(req.body);
        res.status(201).json({ success: true, scheme });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    updateService,
    updateScheme,
    addService,
    addScheme
};
