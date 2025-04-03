const Battery = require('./battery');// Import the Battery model

// Controller function to handle storing battery data
const storeBattery = async (req, res) => {
    try {
        const { customer_id, battery_capacity, storage_status, installation_date } = req.body;

        // Basic validation
        if (!customer_id || !battery_capacity || !storage_status || !installation_date) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Create a new Battery document and save it
        const newBattery = new Battery({ customer_id, battery_capacity, storage_status, installation_date });
        await newBattery.save();

        res.status(201).json({
            message: 'Battery data stored successfully',
            data: newBattery
        });

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

module.exports = { storeBattery };
