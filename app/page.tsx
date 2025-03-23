import Sidebar from './components/Layout/Sidebar';
import RobotStatus from './components/Dashboard/RobotStatus';
import TaskList from './components/Dashboard/TaskList';

// Temporary mock data
const mockUser = {
  id: '1',
  name: 'John Doe',
  role: 'admin' as const,
};

const mockRobots = [
  {
    id: '1',
    name: 'Robot-A1',
    status: 'available' as const,
    efficiency: 95,
    lastMaintenance: new Date(),
  },
  {
    id: '2',
    name: 'Robot-B2',
    status: 'busy' as const,
    currentTask: 'Assembly Line 1',
    efficiency: 88,
    lastMaintenance: new Date(),
  },
];

const mockTasks = [
  {
    id: '1',
    name: 'Door Assembly',
    status: 'in-progress' as const,
    assignedRobot: 'Robot-B2',
    priority: 'high' as const,
    startTime: new Date(),
  },
  {
    id: '2',
    name: 'Paint Application',
    status: 'pending' as const,
    priority: 'medium' as const,
  },
];

export default function Home() {
  return (
    <>
      <Sidebar user={mockUser} />
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          <div className="space-y-8">
            <RobotStatus robots={mockRobots} />
            <TaskList tasks={mockTasks} />
          </div>
        </div>
      </main>
    </>
  );
}
