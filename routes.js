const express = require('express');
const router = express.Router();
const { scheduleInstallation } = require('./controller');

router.post('/schedule', scheduleInstallation);

module.exports = router;