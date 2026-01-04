
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'placeholder-key';

// Helper to check if credentials are valid
const hasValidCredentials = 
  supabaseUrl !== 'https://placeholder.supabase.co' && 
  supabaseAnonKey !== 'placeholder-key';

if (!hasValidCredentials) {
  console.warn("Supabase credentials are not configured. Database features will be disabled.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database helpers with added safety checks
export const DB = {
  async getBlogs() {
    if (!hasValidCredentials) return null;
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  },
  
  async createBlog(blog: any) {
    if (!hasValidCredentials) throw new Error("DB not configured");
    const { data, error } = await supabase
      .from('blogs')
      .insert([blog])
      .select();
    if (error) throw error;
    return data[0];
  },

  async deleteBlog(id: string) {
    if (!hasValidCredentials) throw new Error("DB not configured");
    const { error } = await supabase
      .from('blogs')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },

  async getEnquiries() {
    if (!hasValidCredentials) return null;
    const { data, error } = await supabase
      .from('enquiries')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  },

  async submitEnquiry(enquiry: any) {
    if (!hasValidCredentials) {
      console.log("Mocking enquiry submission (DB not configured):", enquiry);
      return;
    }
    const { error } = await supabase
      .from('enquiries')
      .insert([enquiry]);
    if (error) throw error;
  }
};
