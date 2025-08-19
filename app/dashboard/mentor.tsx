'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export default function MentorDashboard() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (userData.user) {
        const { data: mentorData, error: fetchError } = await supabase
          .from('mentors')
          .select('assigned_students')
          .eq('email', userData.user.email)
          .single();
        if (fetchError) {
          setError(fetchError.message);
        } else if (mentorData && mentorData.assigned_students) {
          setData([{ name: 'Alignment Score', value: 0 }]); // Placeholder; replace with backend API
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
          <CardTitle>Student Alignment</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : data.length > 0 ? (
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <Bar dataKey="value" fill="#ff7300" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p>No alignment data available.</p>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Red Flags</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No alerts</p>
          <Button>Add Comment</Button>
        </CardContent>
      </Card>
    </div>
  );
}