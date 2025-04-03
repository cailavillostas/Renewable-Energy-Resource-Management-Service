const express = require("express");
const bodyParser = require("body-parser");
const maintenanceRouter = require("./router");
const { default: mongoose } = require("mongoose");

const app = express();
app.use(bodyParser.json());

app.use("/api/maintenance", maintenanceRouter);
 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});