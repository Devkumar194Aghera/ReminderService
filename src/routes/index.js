const express = require("express");

const router = express.Router();
const v1APIEndpoints = require("./v1/index");

router.use("v1/", v1APIEndpoints);

module.exports = router;
