const cron = require("node-cron");
const emailService = require("../services/emailService");

const setupJobs = () => {
  cron.schedule("0 */1 * * *", async () => {
    try {
      const emails = await emailService.fetchPendingEmail();
      emails.forEach(async (email) => {
        await emailService.sendBasicMail(
          "sampleacc19412@gmail.com",
          email.recepientEmail,
          email.subject,
          email.content
        );
        // console.log(email.dataValues.id);
        const res = await emailService.updateNotification(
          { status: "SUCCESS" },
          email.dataValues.id
        );
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  });
};

module.exports = { setupJobs };
