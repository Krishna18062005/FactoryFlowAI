"use client"; // Enable client-side rendering for animations

import { motion } from 'framer-motion';
import Sidebar from '../components/Layout/Sidebar';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
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
  Title
} from 'chart.js';

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
  role: 'admin' | 'manager' | 'operator';
};

const mockUser: User = {
  id: '1',
  name: 'John Doe',
  role: 'admin',
};

// Animation variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Sample data for interactive graphs

// Doughnut Chart: Task Status Distribution
const doughnutData = {
  labels: ['Completed', 'In Progress', 'Pending'],
  datasets: [
    {
      data: [45, 25, 30],
      backgroundColor: ['#34D399', '#FBBF24', '#9CA3AF'],
      hoverOffset: 6,
    },
  ],
};

// Bar Chart: Robot Workload Distribution
const barData = {
  labels: ['Robot A', 'Robot B', 'Robot C', 'Robot D'],
  datasets: [
    {
      label: 'Tasks Completed',
      data: [50, 70, 60, 40],
      backgroundColor: ['#3B82F6', '#F97316', '#10B981', '#F59E0B'],
    },
  ],
};

// Line Chart: Production Efficiency Over Time
const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Efficiency (%)',
      data: [80, 85, 82, 88, 90, 87],
      borderColor: '#3B82F6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      fill: true,
      tension: 0.4,
    },
  ],
};

// Sample table data (e.g., production metrics)
const tableData = [
  { metric: 'Total Robots', value: 25 },
  { metric: 'Active Robots', value: 20 },
  { metric: 'Completed Tasks', value: 320 },
  { metric: 'Pending Tasks', value: 45 },
  { metric: 'Average Efficiency (%)', value: 88 },
];

export default function IndustryOverview() {
  return (
    <>
      <Sidebar user={mockUser} />
      <main className="flex-1 p-8 overflow-auto bg-gradient-to-b from-gray-100 to-white">
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariant}
        >
          {/* Page Title */}
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-800"
            variants={fadeUpVariant}
          >
            Industry Overview & Data Insights
          </motion.h1>

          {/* Introduction */}
          <motion.p
            className="text-gray-700 text-lg leading-relaxed mb-6"
            variants={fadeUpVariant}
          >
            Explore how advanced robotics, AI-driven analytics, and automation are transforming modern manufacturing.
            The interactive graphs and table below offer a clear view of key performance metrics.
          </motion.p>

          {/* Responsive Video Section with Local Video */}
          <motion.section
            className="w-full max-w-4xl mx-auto"
            variants={fadeUpVariant}
          >
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
            <video
               className="absolute top-0 left-0 w-full h-full object-cover"
                
                autoPlay
                muted
                loop
               > 
                 <source src="/industry.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> 
             </div>
          </motion.section>

          {/* Graphs Section */}
          <motion.section
            className="bg-white p-6 rounded-lg shadow-lg"
            variants={fadeUpVariant}
          >
            <h2 className="text-2xl font-semibold mb-4">Performance Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Doughnut Chart */}
              <div className="w-full max-w-md mx-auto">
                <h3 className="text-xl font-medium mb-2">Task Status Distribution</h3>
                <Doughnut
                  data={doughnutData}
                  options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }}
                />
              </div>
              {/* Bar Chart */}
              <div className="w-full max-w-md mx-auto">
                <h3 className="text-xl font-medium mb-2">Robot Workload Distribution</h3>
                <Bar
                  data={barData}
                  options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }}
                />
              </div>
              {/* Line Chart */}
              <div className="w-full max-w-md mx-auto md:col-span-2">
                <h3 className="text-xl font-medium mb-2">Production Efficiency Over Time</h3>
                <Line
                  data={lineData}
                  options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }}
                />
              </div>
            </div>
          </motion.section>

          {/* Data Table Section */}
          <motion.section
            className="bg-white p-6 rounded-lg shadow-lg"
            variants={fadeUpVariant}
          >
            <h2 className="text-2xl font-semibold mb-4">Key Metrics</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Metric
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {row.metric}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Conclusion */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            variants={fadeUpVariant}
          >
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
