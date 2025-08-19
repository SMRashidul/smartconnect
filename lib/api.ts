import { supabase } from './supabaseClient';

export async function fetchStudentData(studentId: string) {
  const { data } = await supabase.from('students').select('*').eq('id', studentId).single();
  return data;
}

export async function fetchCompanyData(email: string) {
  const { data } = await supabase.from('companies').select('*').eq('contact_email', email).single();
  return data;
}

export async function fetchMentorData(email: string) {
  const { data } = await supabase.from('mentors').select('*').eq('email', email).single();
  return data;
}