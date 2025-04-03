const mongoose = require("mongoose");

const EnergyProductionSchema = new mongoose.Schema({
    location: { type: String, required: true },
    energy_type: { type: String, required: true },
    production_rate: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("EnergyProduction", EnergyProductionSchema);

