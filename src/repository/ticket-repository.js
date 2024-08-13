const { NotificationTicket } = require("../models/index");
const { Op } = require("sequelize");
class TicketRepository {
  async getAll() {
    try {
      const tickets = await NotificationTicket.findAll();
      return tickets;
    } catch (error) {
      console.log("Error in the repository layer" + error);
      throw error;
    }
  }
  async get(filter) {
    try {
      const tickets = await NotificationTicket.findAll({
        where: {
          status: filter.status,
          notificationTime: {
            [Op.gte]: new Date(),
          },
        },
      });
      return tickets;
    } catch (error) {
      console.log("Error in the repository layer" + error);
      throw error;
    }
  }
  async create(data) {
    try {
      const tickets = await NotificationTicket.create(data);
      return tickets;
    } catch (error) {
      console.log("Error in the repository layer" + error);
      throw error;
    }
  }
  async update(data, emailId) {
    try {
      const tickets = await NotificationTicket.update(data, {
        where: {
          id: emailId,
        },
      });
      return tickets;
    } catch (error) {
      console.log("Error in the repository layer" + error);
      throw error;
    }
  }
}

module.exports = {
  TicketRepository,
};
