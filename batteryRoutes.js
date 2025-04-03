const express = require('express');
const { storeBattery } = require('./batteryController')

const router = express.Router();

// POST endpoint to handle battery data
router.post('/store', storeBattery);

module.exports = router;
