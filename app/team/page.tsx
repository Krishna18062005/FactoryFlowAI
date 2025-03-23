import Sidebar from '../components/Layout/Sidebar';

// Temporary mock data
const mockUser = {
  id: '1',
  name: 'John Doe',
  role: 'admin' as const,
};

const teamMembers = [
  {
    id: '1',
    name: 'Alice Johnson',
    role: 'manager',
    team: 'Assembly Line A',
    status: 'active',
  },
  {
    id: '2',
    name: 'Bob Smith',
    role: 'operator',
    team: 'Assembly Line B',
    status: 'active',
  },
  {
    id: '3',
    name: 'Carol Williams',
    role: 'operator',
    team: 'Assembly Line A',
    status: 'offline',
  },
];

export default function Team() {
  return (
    <>
      <Sidebar user={mockUser} />
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Team Management</h1>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Add Team Member
            </button>
          </div>

          <div className="grid gap-8">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Team Members</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Role
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Team
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {teamMembers.map((member) => (
                        <tr key={member.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                                {member.name.charAt(0)}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {member.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs rounded-full capitalize bg-gray-100">
                              {member.role}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {member.team}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${
                                member.status === 'active'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {member.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                              Edit
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium mb-4">Team Distribution</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Assembly Line A</dt>
                    <dd className="font-medium">2</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Assembly Line B</dt>
                    <dd className="font-medium">1</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium mb-4">Role Distribution</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Managers</dt>
                    <dd className="font-medium">1</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Operators</dt>
                    <dd className="font-medium">2</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                    Schedule Meeting
                  </button>
                  <button className="w-full px-4 py-2 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                    Send Announcement
                  </button>
                  <button className="w-full px-4 py-2 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}