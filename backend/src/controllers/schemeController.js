const Scheme = require("../models/Scheme");
const { findRelevantSchemes } = require("../services/schemeDiscovery");

// Create Scheme
const createScheme = async (req, res) => {
    try {
        const scheme = await Scheme.create(req.body);

        res.status(201).json({
            success: true,
            scheme
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Get All Schemes
const getAllSchemes = async (req, res) => {
    try {
        const schemes = await Scheme.find();

        res.status(200).json({
            success: true,
            count: schemes.length,
            schemes
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Get Scheme By ID
const getSchemeById = async (req, res) => {
    try {
        const scheme = await Scheme.findById(req.params.id);

        if (!scheme) {
            return res.status(404).json({
                success: false,
                message: "Scheme not found"
            });
        }

        res.status(200).json({
            success: true,
            scheme
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Update Scheme
const updateScheme = async (req, res) => {
    try {
        const scheme = await Scheme.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!scheme) {
            return res.status(404).json({
                success: false,
                message: "Scheme not found"
            });
        }

        res.status(200).json({
            success: true,
            scheme
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Delete Scheme
const deleteScheme = async (req, res) => {
    try {
        const scheme = await Scheme.findByIdAndDelete(req.params.id);

        if (!scheme) {
            return res.status(404).json({
                success: false,
                message: "Scheme not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Scheme deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const discoverSchemes = async (req, res) => {
    try {
        const { category } = req.params;

        if (!category) {
            return res.status(400).json({
                success: false,
                message: "Category is required"
            });
        }

        const schemes = await findRelevantSchemes(category);

        res.status(200).json({
            success: true,
            category: category,
            count: schemes.length,
            schemes: schemes
        });

    } catch (error) {
        console.error("Scheme Discovery Error:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


module.exports = {
    createScheme,
    getAllSchemes,
    getSchemeById,
    updateScheme,
    deleteScheme,
    discoverSchemes
};