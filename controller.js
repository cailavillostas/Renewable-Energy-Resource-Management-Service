const createMaintenanceRequest = (req, res) => {
    const { Customer_ID, issue_type,description,urgency_level } = req.body;
  
    if (!Customer_ID|| !issue_type || !description || !urgency_level) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
   
    const newRequest = {
      Customer_ID: String,
      issue_type: Number,
      description: String,
      urgency_level: Number
    };
  
    console.log("Maintenance request created:", newRequest);
  
    res.status(201).json({ message: "Maintenance request submitted successfully", data: newRequest });
  };
  
  module.exports = { createMaintenanceRequest };
