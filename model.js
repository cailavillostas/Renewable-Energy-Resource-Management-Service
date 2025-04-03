const mongoose = require('mongoose');

const installationSchema = new mongoose.Schema({
    customer_id: String,
    installation_date: Date,
    panel_type: String,
    location: String,
    status: { type: String, default: 'Scheduled' }
});

module.exports = mongoose.model('Installation', installationSchema);
