const energyData = {
    "eli": { name: "Eli", energy_usage: 120, threshold_limit: 100, alert_status: "Triggered" },
    "chris": { name: "Chris", energy_usage: 90, threshold_limit: 100, alert_status: "Normal" },
    "france": { name: "France", energy_usage: 150, threshold_limit: 130, alert_status: "Triggered" },
    "angel": { name: "Angel", energy_usage: 75, threshold_limit: 100, alert_status: "Normal" },
    "caila": { name: "Cj", energy_usage: 200, threshold_limit: 180, alert_status: "Triggered" }
};

exports.getEnergyAlert = (req, res) => {
    const id = req.params.id.toLowerCase();
    if (!energyData[id]) {
        return res.status(404).json({ error: "Customer data not found" });
    }
    res.json(energyData[id]);
};


