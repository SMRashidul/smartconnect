
'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { LogOut, Settings, Bell, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import StudentDashboard from './student';
import CompanyDashboard from './company';
import AdminDashboard from './admin';
import MentorDashboard from './mentor';
import { getUserRole } from '../../lib/auth';

export default function Dashboard() {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/');
        return;
      }
      
      setUser(user);
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-westcliff-primary to-westcliff-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-white font-bold text-2xl">SC</span>
          </div>
          <div className="text-lg text-gray-600">Loading your dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Professional Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-westcliff-primary to-westcliff-secondary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">SC</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-westcliff-primary">SmartConnect</h1>
                <p className="text-sm text-gray-600 capitalize">{userRole} Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-westcliff-primary">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-westcliff-primary">
                <Settings className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-westcliff-primary rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-semibold text-gray-900">
                    {user?.email?.split('@')[0] || 'User'}
                  </p>
                  <p className="text-xs text-gray-600">{user?.email}</p>
                </div>
              </div>
              <Button onClick={handleLogout} variant="outline" size="sm" className="border-red-200 text-red-600 hover:bg-red-50">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {userRole === 'admin' ? (
          <Tabs defaultValue="admin" className="space-y-6">
            <TabsList className="bg-white shadow-sm border border-gray-200 p-1 rounded-xl">
              <TabsTrigger value="admin" className="data-[state=active]:bg-westcliff-primary data-[state=active]:text-white rounded-lg">Admin Overview</TabsTrigger>
              <TabsTrigger value="student" className="data-[state=active]:bg-westcliff-primary data-[state=active]:text-white rounded-lg">Student View</TabsTrigger>
              <TabsTrigger value="company" className="data-[state=active]:bg-westcliff-primary data-[state=active]:text-white rounded-lg">Company View</TabsTrigger>
              <TabsTrigger value="mentor" className="data-[state=active]:bg-westcliff-primary data-[state=active]:text-white rounded-lg">Mentor View</TabsTrigger>
            </TabsList>
            <TabsContent value="admin" className="space-y-6">
              <AdminDashboard />
            </TabsContent>
            <TabsContent value="student" className="space-y-6">
              <StudentDashboard />
            </TabsContent>
            <TabsContent value="company" className="space-y-6">
              <CompanyDashboard />
            </TabsContent>
            <TabsContent value="mentor" className="space-y-6">
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
          <div className="text-center bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-2xl font-bold text-westcliff-primary mb-4">Welcome to SmartConnect!</h2>
            <p className="text-gray-600 max-w-md mx-auto">Your account is being set up. Please contact support if this persists.</p>
          </div>
        )}
      </main>
    </div>
  );
}
