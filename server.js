const express = require('express');
const mongoose = require('mongoose');
const app = express();
const installationRoutes = require('./routes');

app.use(express.json());
app.use('/installations', installationRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/solarDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));