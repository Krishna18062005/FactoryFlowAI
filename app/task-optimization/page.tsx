"use client"; // Required for client-side animations

import { motion } from "framer-motion";
import Sidebar from "../components/Layout/Sidebar";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title
);

type User = {
  id: string;
  name: string;
  role: "admin" | "manager" | "operator";
};

const mockUser: User = {
  id: "1",
  name: "John Doe",
  role: "admin",
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Sample data for interactive graphs

// Doughnut Chart (Task Status Distribution)
const doughnutData = {
  labels: ["Completed", "In Progress", "Pending"],
  datasets: [
    {
      data: [45, 25, 30],
      backgroundColor: ["#34D399", "#FBBF24", "#9CA3AF"],
      hoverOffset: 6,
    },
  ],
};

// Bar Chart (Resource Allocation per Robot)
const barData = {
  labels: ["Robot A", "Robot B", "Robot C", "Robot D"],
  datasets: [
    {
      label: "Tasks Completed",
      data: [50, 70, 60, 40],
      backgroundColor: ["#3B82F6", "#F97316", "#10B981", "#F59E0B"],
    },
  ],
};

// Line Chart (Production Efficiency Over Time)
const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Efficiency (%)",
      data: [80, 85, 82, 88, 90, 87],
      borderColor: "#3B82F6",
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
};

export default function TaskOptimization() {
  return (
    <>
      <Sidebar user={mockUser} />
      <main className="flex-1 p-8 overflow-auto bg-gradient-to-b from-indigo-50 to-white">
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Page Title */}
          <motion.h1
            className="text-4xl font-extrabold text-indigo-800 text-center"
            variants={fadeUpVariant}
          >
            🚀 Task Optimization & Efficient Allocation
          </motion.h1>

          {/* Overview Section */}
          <motion.section
            variants={fadeUpVariant}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our AI-driven system streamlines task allocation across a network
              of robots, leveraging predictive analytics and dynamic resource
              management to minimize downtime and maximize production
              efficiency.
            </p>
          </motion.section>

          {/* Interactive Graphs Section */}
          <motion.section
            variants={fadeUpVariant}
            className="bg-white p-6 rounded-lg shadow-lg space-y-6 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-3">
              📊 Interactive Performance Metrics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Doughnut Chart */}
              <motion.div
                className="p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-medium text-blue-900 mb-2">
                  Task Status Distribution
                </h3>
                <Doughnut
                  data={doughnutData}
                  options={{
                    responsive: true,
                    plugins: { legend: { position: "bottom" } },
                  }}
                />
              </motion.div>

              {/* Bar Chart */}
              <motion.div
                className="p-6 bg-yellow-50 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-medium text-yellow-900 mb-2">
                  Robot Workload Distribution
                </h3>
                <Bar
                  data={barData}
                  options={{
                    responsive: true,
                    plugins: { legend: { position: "bottom" } },
                  }}
                />
              </motion.div>
            </div>

            {/* Line Chart */}
            <motion.div
              className="p-6 bg-green-50 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-medium text-green-900 mb-2">
                Production Efficiency Over Time
              </h3>
              <Line
                data={lineData}
                options={{
                  responsive: true,
                  plugins: { legend: { position: "bottom" } },
                }}
              />
            </motion.div>
          </motion.section>
        </motion.div>

        <div className="mt-8">
        <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
          🎥 Optimization
        </h3>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <video className="w-full h-auto" autoPlay muted loop>
            <source src="/opti.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      </main>
    </>
  );
}
