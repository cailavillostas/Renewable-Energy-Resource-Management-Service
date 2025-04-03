const mongoose = require("mongoose");

const EnergyUsageSchema = new mongoose.Schema({
    Customer_ID: String,
    issue_type: Number,
    description: String,
    urgency_level: Number
});

module.exports = mongoose.model("Maintenance", EnergyUsageSchema);  