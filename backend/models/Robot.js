const mongoose = require("mongoose");

const robotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ["idle", "busy", "maintenance"], default: "idle" },
  tasksCompleted: { type: Number, default: 0 },
  lastMaintenance: { type: Date, default: Date.now },
  currentTask: { type: mongoose.Schema.Types.ObjectId, ref: "Task" }
});

module.exports = mongoose.model("Robot", robotSchema);
