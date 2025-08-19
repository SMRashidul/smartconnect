import { supabase } from './supabaseClient';

export async function getUserRole() {
  const { data } = await supabase.auth.getUser();
  return data.user?.user_metadata?.role || (await checkDefaultRole()) || 'student';
}

async function checkDefaultRole() {
  const { data: userData } = await supabase.auth.getUser();
  if (userData.user) {
    const { data: student } = await supabase
      .from('students')
      .select('email')
      .eq('email', userData.user.email)
      .single();
    return student ? 'student' : null;
  }
  return null;
}