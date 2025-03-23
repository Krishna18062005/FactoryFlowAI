export interface Robot {
  id: string;
  name: string;
  status: 'available' | 'busy' | 'maintenance';
  currentTask?: string;
  efficiency: number;
  lastMaintenance: Date;
}

export interface Task {
  id: string;
  name: string;
  status: 'pending' | 'in-progress' | 'completed';
  assignedRobot?: string;
  startTime?: Date;
  endTime?: Date;
  priority: 'low' | 'medium' | 'high';
}

export interface User {
  id: string;
  name: string;
  role: 'admin' | 'manager' | 'operator';
  team?: string;
}