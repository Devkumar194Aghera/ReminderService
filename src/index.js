const bodyParser = require("body-parser");
const express = require("express");
const { PORT } = require("./config/serverConfig");
const { sendBasicMail } = require("./services/emailService");
const cron = require("node-cron");

const configAndStart = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    // sendBasicMail(
    //   "sampleacc19412@gmail.com",
    //   "devaghera194@gmail.com",
    //   "Sample email",
    //   "This is a sample email don't take it seriously"
    // );
    cron.schedule("*/0.5 * * * *", () => {
      console.log("running a task every two minutes");
    });
    console.log(`Server is started at : ${PORT}`);
  });
};

configAndStart();
