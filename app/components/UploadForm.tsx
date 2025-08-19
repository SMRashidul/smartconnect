'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function UploadForm({ studentId }: { studentId: string }) {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }
    const { data, error: uploadError } = await supabase.storage
      .from('resumes')
      .upload(`${studentId}/${file.name}`, file);
    if (uploadError) {
      setError(uploadError.message);
    } else {
      setError(null);
      alert('Resume uploaded successfully!');
      router.push('/dashboard'); // Refresh dashboard
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="resume">Upload Resume</Label>
        <Input id="resume" type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}