
'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const skillsData = [
  { name: 'JavaScript', value: 85 },
  { name: 'React', value: 80 },
  { name: 'Node.js', value: 75 },
  { name: 'Python', value: 70 },
  { name: 'SQL', value: 65 },
];

const projectStatusData = [
  { name: 'Completed', value: 8, color: '#10B981' },
  { name: 'In Progress', value: 3, color: '#F59E0B' },
  { name: 'Planned', value: 2, color: '#6B7280' },
];

const applicationProgressData = [
  { month: 'Jan', applications: 5, interviews: 2, offers: 0 },
  { month: 'Feb', applications: 8, interviews: 3, offers: 1 },
  { month: 'Mar', applications: 12, interviews: 5, offers: 2 },
  { month: 'Apr', applications: 15, interviews: 7, offers: 3 },
];

export default function StudentDashboard() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: studentData } = await supabase
          .from('students')
          .select('*')
          .eq('email', user.email)
          .single();
        setUserData(studentData);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Welcome back, {userData?.name || 'Student'}!</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-blue-600">12</h3>
              <p className="text-sm text-gray-600">Applications Sent</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-green-600">5</h3>
              <p className="text-sm text-gray-600">Interviews Scheduled</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-purple-600">2</h3>
              <p className="text-sm text-gray-600">Offers Received</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-orange-600">3</h3>
              <p className="text-sm text-gray-600">Active Mentorships</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skills Assessment */}
        <Card>
          <CardHeader>
            <CardTitle>Skills Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
            <Button className="mt-4 w-full" variant="outline">
              Take Skills Assessment
            </Button>
          </CardContent>
        </Card>

        {/* Project Status */}
        <Card>
          <CardHeader>
            <CardTitle>Project Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={projectStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {projectStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <Button className="mt-4 w-full" variant="outline">
              Add New Project
            </Button>
          </CardContent>
        </Card>

        {/* Application Progress */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Application Progress Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={applicationProgressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="applications" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="interviews" stroke="#10B981" strokeWidth={2} />
                <Line type="monotone" dataKey="offers" stroke="#F59E0B" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Application submitted to TechCorp</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Interview scheduled with StartupXYZ</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Mentorship session completed</p>
                  <p className="text-xs text-gray-500">3 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resume & Documents */}
        <Card>
          <CardHeader>
            <CardTitle>Resume & Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <p className="font-medium">Resume_2024.pdf</p>
                <p className="text-sm text-gray-500">Updated 2 weeks ago</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="font-medium">Portfolio_Website.pdf</p>
                <p className="text-sm text-gray-500">Updated 1 month ago</p>
              </div>
              <Button className="w-full" variant="outline">
                Upload New Document
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
