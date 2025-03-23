const express = require("express");
const router = express.Router();
const Robot = require("../models/Robot");

// GET all robots
router.get("/", async (req, res) => {
  try {
    const robots = await Robot.find({});
    return res.status(200).json({ robots });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to fetch robots" });
  }
});

// POST create a new robot
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const newRobot = await Robot.create({ name });
    return res.status(201).json({ robot: newRobot });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to add robot" });
  }
});

module.exports = router;
