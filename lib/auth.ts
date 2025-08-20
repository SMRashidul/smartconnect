
import { supabase } from './supabaseClient';

export async function getUserRole(): Promise<string | null> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    // Check each table to determine user role
    const tables = ['students', 'companies', 'mentors', 'admins'];
    
    for (const table of tables) {
      const { data, error } = await supabase
        .from(table)
        .select('*')
        .eq('email', user.email)
        .single();
      
      if (data && !error) {
        return table.slice(0, -1); // Remove 's' from table name
      }
    }
    
    return 'student'; // Default to student if not found
  } catch (error) {
    console.error('Error getting user role:', error);
    return null;
  }
}

export async function createUserProfile(userType: string, userData: any) {
  try {
    const { error } = await supabase
      .from(`${userType}s`)
      .insert(userData);
    
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error creating user profile:', error);
    return { success: false, error };
  }
}
