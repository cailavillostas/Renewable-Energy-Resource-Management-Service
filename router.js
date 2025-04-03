const express = require("express");
const router = express.Router();
const energyController = require("./controller");

router.get("/energy/production", energyController.getEnergyProduction);
router.post('/energy-production', energyController.createEnergyProduction);



module.exports = router;




