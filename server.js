
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const energyRoutes = require("./router");

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", energyRoutes);



mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

