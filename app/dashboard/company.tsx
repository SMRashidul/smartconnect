'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export default function CompanyDashboard() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (userData.user) {
        const { data: companyData, error: fetchError } = await supabase
          .from('companies')
          .select('satisfaction_rating')
          .eq('contact_email', userData.user.email)
          .single();
        if (fetchError) {
          setError(fetchError.message);
        } else if (companyData) {
          setData([{ name: 'Satisfaction', value: companyData.satisfaction_rating || 0 }]);
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
          <CardTitle>Project Scope</CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder="Submit Scope" />
          <Button className="mt-2">Submit</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Satisfaction Trend</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : data.length > 0 ? (
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <Bar dataKey="value" fill="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p>No satisfaction data available.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}