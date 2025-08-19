
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
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/');
        return;
      }
      
      const role = await getUserRole();
      setUserRole(role);
      setLoading(false);
    };
    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">SmartConnect</h1>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {userRole === 'admin' ? (
          <Tabs defaultValue="admin" className="space-y-4">
            <TabsList>
              <TabsTrigger value="admin">Admin</TabsTrigger>
              <TabsTrigger value="student">Student View</TabsTrigger>
              <TabsTrigger value="company">Company View</TabsTrigger>
              <TabsTrigger value="mentor">Mentor View</TabsTrigger>
            </TabsList>
            <TabsContent value="admin">
              <AdminDashboard />
            </TabsContent>
            <TabsContent value="student">
              <StudentDashboard />
            </TabsContent>
            <TabsContent value="company">
              <CompanyDashboard />
            </TabsContent>
            <TabsContent value="mentor">
              <MentorDashboard />
            </TabsContent>
          </Tabs>
        ) : userRole === 'student' ? (
          <StudentDashboard />
        ) : userRole === 'company' ? (
          <CompanyDashboard />
        ) : userRole === 'mentor' ? (
          <MentorDashboard />
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Welcome to SmartConnect!</h2>
            <p className="text-gray-600">Your role is being set up. Please contact support if this persists.</p>
          </div>
        )}
      </main>
    </div>
  );
}
