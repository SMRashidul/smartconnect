
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const menteeProgressData = [
  { name: 'John Doe', progress: 85 },
  { name: 'Jane Smith', progress: 72 },
  { name: 'Mike Johnson', progress: 94 },
  { name: 'Sarah Wilson', progress: 67 },
];

const sessionTypeData = [
  { name: 'Career Guidance', value: 12, color: '#3B82F6' },
  { name: 'Technical Skills', value: 8, color: '#10B981' },
  { name: 'Interview Prep', value: 5, color: '#F59E0B' },
  { name: 'Project Review', value: 7, color: '#EF4444' },
];

export default function MentorDashboard() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Mentor Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-blue-600">4</h3>
              <p className="text-sm text-gray-600">Active Mentees</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-green-600">32</h3>
              <p className="text-sm text-gray-600">Sessions Completed</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-purple-600">4.8</h3>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-orange-600">2</h3>
              <p className="text-sm text-gray-600">Successful Placements</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Mentee Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={menteeProgressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="progress" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Session Types</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sessionTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sessionTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Career Planning with John Doe</p>
                  <p className="text-sm text-gray-500">Tomorrow, 2:00 PM</p>
                </div>
                <Button size="sm">Join</Button>
              </div>
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Technical Review with Jane Smith</p>
                  <p className="text-sm text-gray-500">Friday, 10:00 AM</p>
                </div>
                <Button size="sm">Join</Button>
              </div>
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Interview Prep with Mike Johnson</p>
                  <p className="text-sm text-gray-500">Monday, 3:00 PM</p>
                </div>
                <Button size="sm">Join</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
