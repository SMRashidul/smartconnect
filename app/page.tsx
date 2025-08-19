
'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
      
      if (user) {
        router.push('/dashboard');
      }
    };
    checkUser();
  }, [router]);

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    });
    if (error) console.error('Error logging in:', error);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            SmartConnect
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect students with companies and mentors for meaningful career opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-blue-600">For Students</CardTitle>
              <CardDescription>
                Find your dream internship and connect with industry mentors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Upload your resume and portfolio</li>
                <li>• Match with relevant companies</li>
                <li>• Get mentorship from industry experts</li>
                <li>• Track your application progress</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-green-600">For Companies</CardTitle>
              <CardDescription>
                Discover talented students for your internship programs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Post internship opportunities</li>
                <li>• Review student profiles and resumes</li>
                <li>• Manage application pipeline</li>
                <li>• Connect with top talent</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-purple-600">For Mentors</CardTitle>
              <CardDescription>
                Guide the next generation of professionals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Share your industry expertise</li>
                <li>• Mentor aspiring professionals</li>
                <li>• Build meaningful connections</li>
                <li>• Track mentee progress</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
              <CardDescription>
                Sign in with your Google account to begin
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={handleGoogleLogin} 
                className="w-full"
                size="lg"
              >
                Sign in with Google
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
