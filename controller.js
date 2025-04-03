const Installation = require('./model');

exports.scheduleInstallation = async (req, res) => {
    try {
        const { customer_id, installation_date, panel_type, location } = req.body;
        if (!customer_id || !installation_date || !panel_type || !location) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const newInstallation = new Installation({
            customer_id,
            installation_date: new Date(installation_date),
            panel_type,
            location,
            status: 'Scheduled'
        });
        const savedInstallation = await newInstallation.save();
        res.status(201).json({ message: 'Installation scheduled', id: savedInstallation._id });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
