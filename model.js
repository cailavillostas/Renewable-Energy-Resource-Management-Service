const mongoose = require("mongoose");

const EnergyUsageSchema = new mongoose.Schema({
    name: String,
    energy_usage: Number,
    threshold_limit: Number,
    alert_status: String
});

module.exports = mongoose.model("EnergyUsage", EnergyUsageSchema);


