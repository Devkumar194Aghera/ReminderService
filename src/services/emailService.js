const sender = require("../config/emailConfig");
const { TicketRepository } = require("../repository/ticket-repository");
const repo = new TicketRepository();

const sendBasicMail = async (mailFrom, mailTo, mailSubject, mailBody) => {
  try {
    const response = await sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
    });
    console.log(response);
  } catch (error) {
    console.log("Error in service layer" + error);
    throw error;
  }
};

const fetchPendingEmail = async (timestamp) => {
  try {
    const tickets = await repo.get({ status: "PENDING" });
    return tickets;
  } catch (error) {
    console.log("Error in service layer" + error);
    throw error;
  }
};

const createNotification = async (data) => {
  try {
    const tickets = await repo.create(data);
    return tickets;
  } catch (error) {
    console.log("Error in service layer" + error);
    throw error;
  }
};

const updateNotification = async (data, emailId) => {
  try {
    const tickets = await repo.update(data, emailId);
    return tickets;
  } catch (error) {
    console.log("Error in service layer" + error);
    throw error;
  }
};

module.exports = {
  updateNotification,
  createNotification,
  sendBasicMail,
  fetchPendingEmail,
};
