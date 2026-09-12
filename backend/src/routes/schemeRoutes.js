const express = require("express");

const {
    createScheme,
    getAllSchemes,
    getSchemeById,
    updateScheme,
    deleteScheme,
    discoverSchemes
} = require("../controllers/schemeController");

const router = express.Router();

router.post("/", createScheme);

router.get("/", getAllSchemes);

router.get("/discover/:category", discoverSchemes);

router.get("/:id", getSchemeById);

router.put("/:id", updateScheme);

router.delete("/:id", deleteScheme);

module.exports = router;