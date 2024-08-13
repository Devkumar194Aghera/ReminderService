const bodyParser = require("body-parser");
const express = require("express");
const { PORT } = require("./config/serverConfig");
const TicketController = require("./controllers/ticket-controllers");
const setupJobs = require("./utils/job");

const configAndStart = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/api/v1/tickets", TicketController.create);

  app.listen(PORT, async () => {
    console.log(`Server is started at : ${PORT}`);
    setupJobs.setupJobs();
  });
};

configAndStart();
