const sender = require("../config/emailConfig");

const sendBasicMail = (mailFrom, mailTo, mailSubject, mailBody) => {
  try {
    sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
    });
  } catch (error) {
    console.log("Error in service layer" + error);
  }
};

module.exports = {
  sendBasicMail,
};
