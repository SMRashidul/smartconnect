
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const userGrowthData = [
  { month: 'Jan', students: 120, companies: 15, mentors: 25 },
  { month: 'Feb', students: 150, companies: 20, mentors: 32 },
  { month: 'Mar', students: 180, companies: 25, mentors: 40 },
  { month: 'Apr', students: 220, companies: 30, mentors: 48 },
];

const activityData = [
  { category: 'Applications', count: 450 },
  { category: 'Interviews', count: 120 },
  { category: 'Placements', count: 65 },
  { category: 'Mentorships', count: 85 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Platform Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-blue-600">220</h3>
              <p className="text-sm text-gray-600">Total Students</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-green-600">30</h3>
              <p className="text-sm text-gray-600">Partner Companies</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-purple-600">48</h3>
              <p className="text-sm text-gray-600">Active Mentors</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-orange-600">65</h3>
              <p className="text-sm text-gray-600">Successful Placements</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="students" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="companies" stroke="#10B981" strokeWidth={2} />
                <Line type="monotone" dataKey="mentors" stroke="#F59E0B" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Platform Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
