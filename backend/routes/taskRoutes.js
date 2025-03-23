const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const Robot = require("../models/Robot");
const { assignTaskToBestRobot } = require("../lib/advancedAllocation");

// GET all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({}).populate("assignedRobot");
    return res.status(200).json({ tasks });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

// POST create a new task with AI allocation
router.post("/", async (req, res) => {
  try {
    const { title, description, taskFeatures } = req.body;
    let newTask = new Task({ title, description });

    const robots = await Robot.find({});
    if (robots.length > 0) {
      const chosenRobot = assignTaskToBestRobot(robots, taskFeatures);
      if (chosenRobot) {
        newTask.assignedRobot = chosenRobot._id;
        newTask.status = "in-progress";
        chosenRobot.status = "busy";
        chosenRobot.currentTask = newTask._id;
        await chosenRobot.save();
      }
    }

    await newTask.save();
    newTask = await newTask.populate("assignedRobot");
    return res.status(201).json({ task: newTask });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to create task" });
  }
});

// PUT update a task (e.g., marking completed)
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    if (status) {
      task.status = status;
      if (status === "completed") {
        task.completedAt = new Date();
      }
      await task.save();

      // Free up robot if task is completed
      if (status === "completed" && task.assignedRobot) {
        const robot = await Robot.findById(task.assignedRobot);
        if (robot) {
          robot.status = "idle";
          robot.currentTask = null;
          robot.tasksCompleted += 1;
          await robot.save();
        }
      }
    }

    return res.status(200).json({ task });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to update task" });
  }
});

module.exports = router;
