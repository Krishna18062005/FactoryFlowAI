'use client';

import Sidebar from '../components/Layout/Sidebar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from 'recharts';

// Temporary mock user data
const mockUser = {
  id: '1',
  name: 'John Doe',
  role: 'admin' as const,
};

// Mock data for charts
const efficiencyData = [
  { name: 'Robot-A1', efficiency: 95 },
  { name: 'Robot-B2', efficiency: 88 },
  { name: 'Robot-C3', efficiency: 92 },
  { name: 'Robot-D4', efficiency: 85 },
];

const taskCompletionData = [
  { day: 'Mon', completed: 45, pending: 10 },
  { day: 'Tue', completed: 52, pending: 8 },
  { day: 'Wed', completed: 48, pending: 12 },
  { day: 'Thu', completed: 55, pending: 5 },
  { day: 'Fri', completed: 50, pending: 7 },
];

export default function Analytics() {
  return (
    <>
      <Sidebar user={mockUser} />
      <main className="flex-1 p-8 overflow-auto bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">📊 Analytics Dashboard</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Robot Efficiency Chart */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold text-blue-700 mb-4">🚀 Robot Efficiency</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={efficiencyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="efficiency" fill="#3B82F6" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Task Completion Trends */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold text-green-700 mb-4">📅 Task Completion Trends</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={taskCompletionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="completed" stroke="#10B981" strokeWidth={3} />
                  <Line type="monotone" dataKey="pending" stroke="#EF4444" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2 hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">📈 Performance Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-blue-100 rounded-lg text-center hover:shadow-md transition duration-300">
                  <h3 className="text-lg font-medium text-blue-800">⚡ Average Efficiency</h3>
                  <p className="text-4xl font-extrabold text-blue-900">90%</p>
                </div>
                <div className="p-6 bg-green-100 rounded-lg text-center hover:shadow-md transition duration-300">
                  <h3 className="text-lg font-medium text-green-800">✅ Tasks Completed Today</h3>
                  <p className="text-4xl font-extrabold text-green-900">45</p>
                </div>
                <div className="p-6 bg-yellow-100 rounded-lg text-center hover:shadow-md transition duration-300">
                  <h3 className="text-lg font-medium text-yellow-800">🤖 Active Robots</h3>
                  <p className="text-4xl font-extrabold text-yellow-900">8/10</p>
                </div>
              </div>
            </div>
          </div>


        <div className="mt-8">
        <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
          🎥 Analytics
        </h3>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <video className="w-full h-auto" autoPlay muted loop>
            <source src="/analy.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
        </div>
      </main>
    </>
  );
}
