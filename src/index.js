const bodyParser = require("body-parser");
const express = require("express");
const { PORT } = require("./config/serverConfig");

const configAndStart = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server is started at : ${PORT}`);
  });
};

configAndStart();
