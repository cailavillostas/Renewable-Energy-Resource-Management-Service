const mongoose = require('mongoose');

const energyProductionSchema = new mongoose.Schema({
    location: { type: String, required: true },
    energy_type: { type: String, required: true },
    production_rate: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

const EnergyProduction = mongoose.model('EnergyProduction', energyProductionSchema);

exports.createEnergyProduction = async (req, res) => {
    const { location, energy_type, production_rate } = req.body;

    if (!location || !energy_type || !production_rate) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
      
        const newEnergyProduction = new EnergyProduction({
            location,
            energy_type,
            production_rate
        });

      
        const savedProduction = await newEnergyProduction.save();

        res.status(201).json(savedProduction);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to save energy production data" });
    }
};

exports.getEnergyProduction = async (req, res) => {
    try {
        const energyProductions = await EnergyProduction.find(); 
        res.status(200).json(energyProductions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch energy production data" });
    }
};