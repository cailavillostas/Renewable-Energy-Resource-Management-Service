const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const energyRoutes = require("./router");

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", energyRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/energy',)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`energy production monitoring || 5000}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
