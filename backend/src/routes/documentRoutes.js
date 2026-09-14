const express = require("express");
const {
    uploadDocument,
    getUserDocuments,
    syncDigiLocker,
    getDocumentDetails,
    deleteDocument
} = require("../controllers/documentController");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/upload", upload.single('document'), uploadDocument);
router.get("/", getUserDocuments);
router.post("/sync", syncDigiLocker);
router.get("/:id", getDocumentDetails);
router.delete("/:id", deleteDocument);

module.exports = router;
