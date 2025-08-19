'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { UploadForm } from '../components/UploadForm';

export default function StudentDashboard() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (userData.user) {
        const { data: studentData, error: fetchError } = await supabase
          .from('students')
          .select('gpa, resume_link')
          .eq('email', userData.user.email)
          .single();
        if (fetchError) {
          setError(fetchError.message);
        } else if (studentData) {
          setData([
            { name: 'GPA', value: studentData.gpa || 0 },
            { name: 'Skill Match', value: 0 }, // Placeholder; replace with backend API call
          ]);
        }
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Project Status</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <>
              <p>No project assigned yet.</p>
              <Button className="mt-2">Submit Survey</Button>
            </>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Resume & Skills</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : data.length > 0 ? (
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <Bar dataKey="value" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p>No resume data available. Upload below.</p>
          )}
          <UploadForm studentId={(await supabase.auth.getUser()).data.user?.id || ''} />
        </CardContent>
      </Card>
    </div>
  );
}