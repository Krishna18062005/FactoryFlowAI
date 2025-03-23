const express = require("express");
const router = express.Router();
const Robot = require("../models/Robot");
const { needsMaintenance } = require("../lib/maintenanceModel");

// GET list of robots needing maintenance
router.get("/", async (req, res) => {
  try {
    const robots = await Robot.find({});
    const maintenanceList = robots.filter(robot => needsMaintenance(robot));
    return res.status(200).json({ maintenanceList });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to check maintenance" });
  }
});

module.exports = router;
