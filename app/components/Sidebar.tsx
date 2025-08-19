'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabaseClient';

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <div className="w-64 bg-white h-screen p-4 shadow">
      <h2 className="text-xl font-bold mb-6">SMARTConnect</h2>
      <nav className="space-y-2">
        <Link href="/dashboard" className="block p-2 hover:bg-gray-100">Dashboard</Link>
        <Link href="/upload" className="block p-2 hover:bg-gray-100">Upload</Link>
      </nav>
      <Button variant="outline" className="mt-4 w-full" onClick={handleLogout}>
        <LogOut className="mr-2" /> Logout
      </Button>
    </div>
  );
}