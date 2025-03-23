/**
 * assignTaskToBestRobot
 * Chooses the best available robot for a new task.
 * The lower the score, the better suited the robot.
 */
function assignTaskToBestRobot(robots, taskFeatures = {}) {
    let bestRobot = null;
    let bestScore = Infinity;
  
    for (const robot of robots) {
      let score = 0;
      // Penalty if robot is busy or under maintenance
      if (robot.status === "busy") score += 30;
      if (robot.status === "maintenance") score += 999;
      // Mild penalty for high usage
      score += robot.tasksCompleted * 0.1;
  
      // Optionally include taskFeatures (e.g., complexity) in score
  
      if (score < bestScore) {
        bestScore = score;
        bestRobot = robot;
      }
    }
    return bestRobot;
  }
  
  module.exports = { assignTaskToBestRobot };
  