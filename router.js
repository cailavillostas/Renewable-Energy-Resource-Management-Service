const express = require("express");
const router = express.Router();
const { createMaintenanceRequest } = require("./controller");

router.post("/add", createMaintenanceRequest);

module.exports = router;
