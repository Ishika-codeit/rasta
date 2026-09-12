const Tesseract = require('tesseract.js');

/**
 * Extracts text from an image using Tesseract.js
 * @param {Buffer|string} imageSource - Buffer of the image or path to the image file
 * @returns {Promise<string>} - The extracted text
 */
const extractTextFromImage = async (imageSource) => {
    try {
        const { data: { text } } = await Tesseract.recognize(
            imageSource,
            'eng', // Language: English
            { logger: m => console.log(m.status + ': ' + Math.round(m.progress * 100) + '%') }
        );
        return text;
    } catch (error) {
        console.error("OCR Extraction Error:", error);
        throw new Error("Failed to extract text from image");
    }
};

module.exports = {
    extractTextFromImage
};
