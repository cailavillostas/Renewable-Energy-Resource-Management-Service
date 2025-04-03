const mongoose = require('mongoose');

const batterySchema = new mongoose.Schema({
    customer_id: { type: String, required: true },
    battery_capacity: { type: Number, required: true },
    storage_status: { type: String, required: true },
    installation_date: { type: Date, required: true }
});

module.exports = mongoose.model('Battery', batterySchema);
