const express = require("express");
const router = express.Router();
const energyController = require("./controller");

router.get("/alerts/:id/usage", energyController.getEnergyAlert);

module.exports = router;