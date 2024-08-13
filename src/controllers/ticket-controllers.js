const TicketService = require("../services/emailService");

const create = async (req, res) => {
  try {
    const data = req.body;
    const notificaiton = await TicketService.createNotification(data);
    return res.status(200).json({
      data: notificaiton,
      message: "Successfully created an  email reminder",
      success: true,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "Unable to register an email reminder",
      success: false,
      error: error,
    });
  }
};

module.exports = { create };
