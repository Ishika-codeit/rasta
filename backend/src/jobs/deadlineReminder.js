const cron = require('node-cron');
const Application = require('../models/Application');
const NotificationService = require('../services/notificationService');

/**
 * DeadlineReminder Job
 * Runs every 12 hours to check for applications with upcoming deadlines.
 */
const startDeadlineReminder = () => {
    console.log('📅 Deadline Reminder Job started...');

    // Schedule: Every 12 hours (0 0 */12 * * *)
    cron.schedule('0 0 */12 * * *', async () => {
        console.log('Checking for upcoming deadlines...');

        try {
            const now = new Date();
            const threeDaysFromNow = new Date();
            threeDaysFromNow.setDate(now.getDate() + 3);

            // Find applications where:
            // 1. deadlineDate is set
            // 2. deadlineDate is between now and 3 days from now
            // 3. status is not "Approved" or "Rejected"
            const upcomingDeadlines = await Application.find({
                deadlineDate: {
                    $gte: now,
                    $lte: threeDaysFromNow
                },
                status: { $nin: ["Approved", "Rejected"] }
            }).populate('serviceId');

            if (upcomingDeadlines.length === 0) {
                console.log('No upcoming deadlines found.');
                return;
            }

            console.log(`Found ${upcomingDeadlines.length} applications nearing deadline.`);

            for (const app of upcomingDeadlines) {
                const deadlineStr = app.deadlineDate.toDateString();
                const serviceName = app.serviceId ? app.serviceId.name : "your government service";

                const title = "Deadline Alert: Government Application";
                const message = `Hello! This is a reminder that your application for ${serviceName} has a deadline on ${deadlineStr}. Please ensure you complete all requirements soon.`;

                await NotificationService.send(app.userId, {
                    title,
                    message,
                    type: "reminder",
                    channel: "in_app"
                });
            }

            console.log('Deadline reminders sent successfully.');
        } catch (error) {
            console.error('Error in Deadline Reminder Job:', error);
        }
    });
};

module.exports = startDeadlineReminder;
