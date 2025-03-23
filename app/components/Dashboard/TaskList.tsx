"use client"; // Ensures animations run only on the client-side

import { motion } from "framer-motion";
import { Task } from "@/app/types";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        📋 Task Queue
      </h2>

      <div className="overflow-x-auto">
        <motion.table
          className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Task
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Priority
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Assigned Robot
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {tasks.map((task, index) => (
              <motion.tr
                key={task.id}
                className="hover:bg-gray-50 transition duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {task.name}
                </td>

                {/* Status Column with Moving Animation for In-Progress */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <motion.span
                    className={`px-2 py-1 rounded-full text-xs ${
                      task.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : task.status === "in-progress"
                        ? "bg-yellow-100 text-yellow-800 flex items-center space-x-2"
                        : "bg-gray-100 text-gray-800"
                    }`}
                    animate={
                      task.status === "in-progress"
                        ? { x: [-5, 5, -5, 5, 0] }
                        : {}
                    }
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    {task.status === "in-progress" && "🔄"} {task.status}
                  </motion.span>
                </td>

                {/* Priority Column */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      task.priority === "high"
                        ? "bg-red-100 text-red-800"
                        : task.priority === "medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {task.priority}
                  </span>
                </td>

                {/* Assigned Robot Column */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {task.assignedRobot ? (
                    <motion.span
                      className="flex items-center space-x-1"
                      animate={{ x: [0, 3, -3, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                    >
                      🤖 {task.assignedRobot}
                    </motion.span>
                  ) : (
                    "-"
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>

      {/* Video Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
          🎥 Task Process
        </h3>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <video className="w-full h-auto" autoPlay muted loop>
            <source src="/dash.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
