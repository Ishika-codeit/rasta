const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const Service = require("./src/models/Service");
const Scheme = require("./src/models/Scheme");

const servicesData = [
    {
        name: "Income Certificate",
        intent: "income_certificate",
        description: "Official document certifying the annual income of an individual or family.",
        category: "certificate",
        officialUrl: "https://edistrict.gov.in",
        verified: true,
        requiredDocuments: ["Aadhaar Card", "Ration Card", "Salary Slip/Affidavit"],
        steps: ["Visit e-District portal", "Register and Login", "Fill Income Application form", "Upload documents", "Pay fee and submit"],
        languages: ["en", "hi"]
    },
    {
        name: "Caste Certificate",
        intent: "caste_certificate",
        description: "Document proving the caste of an individual for reservation benefits.",
        category: "certificate",
        officialUrl: "https://edistrict.gov.in",
        verified: true,
        requiredDocuments: ["Aadhaar Card", "Father's Caste Certificate", "Residential Proof"],
        steps: ["Visit e-District portal", "Select Caste Certificate service", "Enter personal details", "Upload supporting docs", "Submit for verification"],
        languages: ["en", "hi"]
    },
    {
        name: "Ration Card",
        intent: "ration_card",
        description: "Essential document for subsidized food grains and identification.",
        category: "food",
        officialUrl: "https://nfsa.gov.in",
        verified: true,
        requiredDocuments: ["Aadhaar Card", "Passport size photo", "Address Proof"],
        steps: ["Visit NFSA portal", "Select state portal", "Fill application form", "Upload Aadhaar", "Visit local food office for verification"],
        languages: ["en", "hi"]
    }
];

const schemesData = [
    {
        name: "Post-Matric Scholarship",
        description: "Financial assistance for students from SC/ST/OBC categories for higher education.",
        category: "education",
        officialUrl: "https://scholarships.gov.in",
        verified: true,
        benefits: ["Tuition fee waiver", "Maintenance allowance"],
        eligibility: ["Family income below 2.5 Lakhs", "Belong to SC/ST/OBC category", "Minimum 50% marks in previous exam"],
        requiredDocuments: ["Caste Certificate", "Income Certificate", "Marksheets"],
        applicationSteps: ["Register on National Scholarship Portal", "Fill application", "Upload documents", "Get verified by institution"],
        languages: ["en", "hi"]
    },
    {
        name: "PM-Kisan Samman Nidhi",
        description: "Direct income support for all landholding farmer families.",
        category: "agriculture",
        officialUrl: "https://pmkisan.gov.in",
        verified: true,
        benefits: ["₹6,000 per year in three installments"],
        eligibility: ["Must be a land-holding farmer", "Valid Aadhaar and Bank account"],
        requiredDocuments: ["Aadhaar Card", "Land ownership documents", "Bank Passbook"],
        applicationSteps: ["Register on PM-Kisan portal", "Enter Aadhaar and land details", "Submit for verification"],
        languages: ["en", "hi"]
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/raastaai");
        console.log("Connected to MongoDB...");

        // Wipe dummy data
        await Service.deleteMany({});
        await Scheme.deleteMany({});
        console.log("Dummy data cleared.");

        // Insert real data
        await Service.insertMany(servicesData);
        await Scheme.insertMany(schemesData);
        console.log("Real government data seeded successfully! 🚀");

        process.exit(0);
    } catch (error) {
        console.error("Seeding Error:", error);
        process.exit(1);
    }
};

seedDB();
