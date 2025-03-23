'use client';

import { motion } from 'framer-motion';
import Sidebar from '../components/Layout/Sidebar';

// Temporary mock data
const mockUser = {
  id: '1',
  name: 'John Doe',
  role: 'admin' as const,
};

const maintenanceSchedule = [
  {
    id: '1',
    robotName: 'Robot-A1',
    lastMaintenance: '2023-09-01',
    nextMaintenance: '2023-10-01',
    status: 'scheduled',
    type: 'Routine Check',
  },
  {
    id: '2',
    robotName: 'Robot-B2',
    lastMaintenance: '2023-08-15',
    nextMaintenance: '2023-09-15',
    status: 'overdue',
    type: 'Full Service',
  },
];

export default function Maintenance() {
  return (
    <>
      <Sidebar user={mockUser} />
      <main className="flex-1 p-8 overflow-auto bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            className="text-4xl font-extrabold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            🛠️ Maintenance Dashboard
          </motion.h1>

          <div className="grid gap-8">
            {/* Maintenance Schedule */}
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-4">📅 Maintenance Schedule</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow-md">
                  <thead className="bg-gray-100">
                    <tr>
                      {['Robot', 'Last Maintenance', 'Next Due', 'Status', 'Type', 'Actions'].map((header) => (
                        <th
                          key={header}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {maintenanceSchedule.map((schedule, index) => (
                      <motion.tr
                        key={schedule.id}
                        className="hover:bg-gray-50 transition duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {schedule.robotName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {schedule.lastMaintenance}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {schedule.nextMaintenance}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              schedule.status === 'scheduled'
                                ? 'bg-green-200 text-green-800'
                                : 'bg-red-200 text-red-800'
                            }`}
                          >
                            {schedule.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {schedule.type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button className="text-indigo-600 hover:text-indigo-900 font-semibold">
                            Schedule
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Maintenance Metrics, Inventory & Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: '📊 Maintenance Metrics',
                  data: [
                    { label: 'Scheduled', value: '5', color: 'text-blue-900' },
                    { label: 'Completed', value: '12', color: 'text-green-900' },
                    { label: 'Overdue', value: '1', color: 'text-red-900' },
                  ],
                },
                {
                  title: '📦 Parts Inventory',
                  data: [
                    { label: 'Servo Motors', value: '24' },
                    { label: 'Sensors', value: '56' },
                    { label: 'Control Units', value: '18' },
                  ],
                },
              ].map((section, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h3>
                  <dl className="space-y-3">
                    {section.data.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-gray-600">
                        <dt>{item.label}</dt>
                        {/* <dd className={`font-bold ${item.color || 'text-gray-900'}`}>{item.value}</dd> */}
                      </div>
                    ))}
                  </dl>
                </motion.div>
              ))}

            </div>
          </div>
        </div>
      </main>
    </>
  );
}
