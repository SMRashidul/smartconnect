'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import StudentDashboard from './student';
import CompanyDashboard from './company';
import AdminDashboard from './admin';
import MentorDashboard from './mentor';
import { getUserRole } from '../../lib/auth';

export default function Dashboard() {
  const [userRole, setUserRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchRole = async () => {
      const role = await getUserRole();
      setUserRole(role);
    };
    fetchRole();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">SMARTConnect Dashboard</h1>
        <Button variant="outline" onClick={handleLogout}>
          <LogOut className="mr-2" /> Logout
        </Button>
      </header>
      <Tabs defaultValue={userRole || 'student'} className="space-y-4">
        <TabsList>
          <TabsTrigger value="student">Student View</TabsTrigger>
          <TabsTrigger value="company">Company View</TabsTrigger>
          <TabsTrigger value="admin">Admin View</TabsTrigger>
          <TabsTrigger value="mentor">Mentor View</TabsTrigger>
        </TabsList>
        <TabsContent value="student">
          <StudentDashboard />
        </TabsContent>
        <TabsContent value="company">
          <CompanyDashboard />
        </TabsContent>
        <TabsContent value="admin">
          <AdminDashboard />
        </TabsContent>
        <TabsContent value="mentor">
          <MentorDashboard />
        </TabsContent>
      </Tabs>
    </div>
  );
}