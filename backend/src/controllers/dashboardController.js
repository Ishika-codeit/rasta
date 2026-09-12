const User = require("../models/User");
const UserProfile = require("../models/UserProfile");
const Application = require("../models/Application");
const Notification = require("../models/Notification");
const Scheme = require("../models/Scheme");

const getUserDashboard = async (req, res) => {
    try {
        const userId = req.user.id;

        // 1. Fetch basic user info
        const user = await User.findById(userId).select("fullName email role");

        // 2. Fetch verified profile data
        const profile = await UserProfile.findOne({ userId });

        // 3. Fetch application summaries
        const applications = await Application.find({ userId }).populate("serviceId");
        const latestApplication = applications.length > 0
            ? applications.sort((a, b) => b.createdAt - a.createdAt)[0]
            : null;

        // 4. Fetch unread notification count
        const unreadCount = await Notification.countDocuments({ userId, isRead: false });

        // 5. Personalized Scheme Recommendations
        // Logic: Find schemes that match the user's verified category or profile data
        let recommendations = [];
        if (profile && profile.verifiedData) {
            const { category } = profile.verifiedData;
            if (category) {
                recommendations = await Scheme.find({
                    category: category,
                    verified: true
                }).limit(3);
            } else {
                // Fallback: Get a few general verified schemes
                recommendations = await Scheme.find({ verified: true }).limit(3);
            }
        } else {
            // Fallback: Get general verified schemes
            recommendations = await Scheme.find({ verified: true }).limit(3);
        }

        return res.status(200).json({
            success: true,
            data: {
                user: {
                    fullName: user.fullName,
                    email: user.email,
                    role: user.role
                },
                profile: profile ? profile.verifiedData : null,
                stats: {
                    totalApplications: applications.length,
                    unreadNotifications: unreadCount,
                    latestApplicationStatus: latestApplication
                        ? {
                            service: latestApplication.serviceId.name,
                            status: latestApplication.status
                          }
                        : "No active applications"
                },
                recommendations: recommendations.map(s => ({
                    name: s.name,
                    description: s.description,
                    officialUrl: s.officialUrl
                }))
            }
        });
    } catch (error) {
        console.error("Dashboard Error:", error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getUserDashboard
};
