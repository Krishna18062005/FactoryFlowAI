require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./config/dbConnect");

// Import Routes
const taskRoutes = require("./routes/taskRoutes");
const robotRoutes = require("./routes/robotRoutes");
const maintenanceRoutes = require("./routes/maintenanceRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
dbConnect();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);
app.use("/api/robots", robotRoutes);
app.use("/api/maintenance", maintenanceRoutes);

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
