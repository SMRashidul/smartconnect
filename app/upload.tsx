'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';

export default function Upload() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [program, setProgram] = useState('');
  const [gpa, setGpa] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignup = async () => {
    setError(null);
    // Register user with any email
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { role: 'student' } },
    });
    if (authError) {
      setError(authError.message);
      return;
    }

    // Upload resume
    if (file && authData.user) {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(`${authData.user.id}/${file.name}`, file);
      if (uploadError) {
        setError(uploadError.message);
        return;
      }

      // Save student data
      const { error: dbError } = await supabase.from('students').insert({
        name,
        email,
        program,
        gpa: parseFloat(gpa) || 0,
        resume_link: `resumes/${authData.user.id}/${file.name}`,
      });
      if (dbError) {
        setError(dbError.message);
        return;
      }
    }

    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Student Registration</h1>
        <p className="text-sm text-gray-600 mb-4">Use any valid email to register.</p>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e.g., student@example.com" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="program">Program</Label>
            <Input id="program" value={program} onChange={(e) => setProgram(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="gpa">GPA</Label>
            <Input id="gpa" type="number" value={gpa} onChange={(e) => setGpa(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="resume">Upload Resume</Label>
            <Input id="resume" type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
          </div>
          <Button onClick={handleSignup} className="w-full">Register & Upload</Button>
        </div>
      </div>
    </div>
  );
}