
import { createClient } from '@supabase/supabase-js';

// These would normally come from environment variables
const supabaseUrl = process.env.SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database helpers
export const DB = {
  async getBlogs() {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  },
  
  async createBlog(blog: any) {
    const { data, error } = await supabase
      .from('blogs')
      .insert([blog])
      .select();
    if (error) throw error;
    return data[0];
  },

  async deleteBlog(id: string) {
    const { error } = await supabase
      .from('blogs')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },

  async getEnquiries() {
    const { data, error } = await supabase
      .from('enquiries')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
  },

  async submitEnquiry(enquiry: any) {
    const { error } = await supabase
      .from('enquiries')
      .insert([enquiry]);
    if (error) throw error;
  }
};
