const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  Email_id: process.env.Email_id,
  Email_pass: process.env.Email_pass,
};
