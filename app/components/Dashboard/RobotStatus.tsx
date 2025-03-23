"use client"; // Ensures animations run only on the client-side

import { motion } from "framer-motion";
import { Robot } from "@/app/types";

interface RobotStatusProps {
  robots: Robot[];
}

export default function RobotStatus({ robots }: RobotStatusProps) {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        🤖 Robot Status
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {robots.map((robot) => (
          <motion.div
            key={robot.id}
            className="border rounded-lg p-6 bg-white shadow-md transition-all duration-300 relative"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Robot Animation */}
            <motion.div
              className="absolute -top-8 right-2"
              animate={
                robot.status === "busy"
                  ? { y: [0, -10, 0], x: [0, 5, -5, 0] }
                  : robot.status === "available"
                  ? { rotate: [0, 5, -5, 0] }
                  : { opacity: 0.3 }
              }
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              {robot.status === "busy" ? (
                <span className="text-yellow-500 text-3xl">⚙️</span> // Busy animation
              ) : robot.status === "available" ? (
                <span className="text-green-500 text-3xl">🤖</span> // Available animation
              ) : (
                <span className="text-gray-400 text-3xl">🔌</span> // Offline animation
              )}
            </motion.div>

            {/* Robot Header */}
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-lg text-gray-900">{robot.name}</h3>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  robot.status === "available"
                    ? "bg-green-100 text-green-800"
                    : robot.status === "busy"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {robot.status}
              </span>
            </div>

            {/* Efficiency Bar */}
            <div className="mt-3">
              <p className="text-sm text-gray-600">Efficiency: {robot.efficiency}%</p>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                <motion.div
                  className="h-2 rounded-full bg-green-500"
                  style={{ width: `${robot.efficiency}%` }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${robot.efficiency}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Current Task (if any) */}
            {robot.currentTask && (
              <motion.p
                className="text-sm text-gray-700 mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                🔧 Current Task: <span className="font-semibold">{robot.currentTask}</span>
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
