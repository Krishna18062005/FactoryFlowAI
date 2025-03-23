/**
 * needsMaintenance
 * Checks if a robot has exceeded thresholds for tasks or days since last maintenance.
 */
function needsMaintenance(robot) {
    const tasksThreshold = 100;
    const daysThreshold = 30;
  
    const tasksCount = robot.tasksCompleted;
    const daysSinceMaint = (Date.now() - new Date(robot.lastMaintenance).getTime()) / (1000 * 60 * 60 * 24);
  
    return tasksCount >= tasksThreshold || daysSinceMaint >= daysThreshold;
  }
  
  module.exports = { needsMaintenance };
  