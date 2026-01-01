
import React, { useState, useEffect } from 'react';
import { DB, supabase } from '../services/supabaseClient';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blogs' | 'enquiries'>('blogs');
  const [blogs, setBlogs] = useState<any[]>([]);
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [showBlogForm, setShowBlogForm] = useState(false);
  
  // Blog Form State
  const [newBlog, setNewBlog] = useState({
    title: '',
    category: 'Finance',
    image_url: '',
    excerpt: '',
    content: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const b = await DB.getBlogs();
      const e = await DB.getEnquiries();
      setBlogs(b || []);
      setEnquiries(e || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `blog-images/${fileName}`;

      const { data, error } = await supabase.storage
        .from('investo-assets')
        .upload(filePath, file);

      if (error) throw error;

      const { data: { publicUrl } } = supabase.storage
        .from('investo-assets')
        .getPublicUrl(filePath);

      setNewBlog({ ...newBlog, image_url: publicUrl });
    } catch (error) {
      alert('Error uploading image');
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const handleCreateBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await DB.createBlog({ ...newBlog, created_at: new Date().toISOString() });
      setShowBlogForm(false);
      setNewBlog({ title: '', category: 'Finance', image_url: '', excerpt: '', content: '' });
      fetchData();
    } catch (err) {
      alert('Error creating blog');
    }
  };

  const handleDeleteBlog = async (id: string) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      await DB.deleteBlog(id);
      fetchData();
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-950 text-emerald-500 font-bold">Initializing Admin Workspace...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-8 flex flex-col h-screen fixed">
        <div className="flex items-center space-x-3 mb-12">
          <img 
            src="https://raw.githubusercontent.com/faraaz-ansari/investo-multiservices-assets/main/logo.png" 
            alt="Investo Logo" 
            className="w-10 h-10 object-contain"
          />
          <span className="font-bold tracking-tight text-white">Admin Console</span>
        </div>

        <nav className="space-y-4 flex-grow">
          <button 
            onClick={() => setActiveTab('blogs')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'blogs' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'text-slate-400 hover:bg-slate-800'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2v4a2 2 0 002 2h4"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h5"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12h8"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16h8"/></svg>
            <span className="font-medium">Blogs</span>
          </button>
          <button 
            onClick={() => setActiveTab('enquiries')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'enquiries' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'text-slate-400 hover:bg-slate-800'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            <span className="font-medium">Enquiries</span>
          </button>
        </nav>

        <button 
          onClick={() => window.location.href = '/'}
          className="text-slate-500 hover:text-white text-sm flex items-center space-x-2 p-4 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
          <span>Exit Admin</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-grow p-12">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-white capitalize">{activeTab} Management</h1>
            <p className="text-slate-500">Secure backend for Investo Multiservices data.</p>
          </div>
          {activeTab === 'blogs' && (
            <button 
              onClick={() => setShowBlogForm(true)}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-xl font-bold transition-all flex items-center space-x-2 shadow-lg shadow-emerald-600/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
              <span>Add New Post</span>
            </button>
          )}
        </header>

        {activeTab === 'blogs' ? (
          <div className="grid gap-6">
            <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-950 border-b border-slate-800">
                  <tr>
                    <th className="px-6 py-4 text-slate-400 font-bold text-xs uppercase tracking-widest">Title</th>
                    <th className="px-6 py-4 text-slate-400 font-bold text-xs uppercase tracking-widest">Category</th>
                    <th className="px-6 py-4 text-slate-400 font-bold text-xs uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {blogs.map(blog => (
                    <tr key={blog.id} className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">{blog.title}</td>
                      <td className="px-6 py-4">
                        <span className="bg-emerald-500/10 text-emerald-500 text-[10px] px-3 py-1 rounded-full font-bold uppercase">{blog.category}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button onClick={() => handleDeleteBlog(blog.id)} className="text-rose-500 hover:text-rose-400 transition-colors p-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {enquiries.map(e => (
              <div key={e.id} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-sm hover:border-emerald-500/30 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">{e.first_name} {e.last_name}</h3>
                    <p className="text-emerald-500 text-sm font-medium">{e.subject}</p>
                  </div>
                  <span className="text-slate-500 text-xs bg-slate-950 px-3 py-1 rounded-full">{new Date(e.created_at).toLocaleString()}</span>
                </div>
                <p className="text-slate-400 italic bg-slate-950/50 p-6 rounded-2xl border border-slate-800 mb-4 leading-relaxed">
                  "{e.message}"
                </p>
                <div className="flex justify-end space-x-4">
                  <button className="text-emerald-500 hover:text-emerald-400 text-xs font-bold uppercase tracking-widest transition-colors">Mark Resolved</button>
                  <button className="text-rose-500 hover:text-rose-400 text-xs font-bold uppercase tracking-widest transition-colors">Archive</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Blog Form */}
        {showBlogForm && (
          <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[60] flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-3xl p-10 shadow-3xl overflow-y-auto max-h-[90vh] animate-fade-in">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-white">Create Professional Insight</h2>
                <button onClick={() => setShowBlogForm(false)} className="text-slate-500 hover:text-white transition-colors">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
              <form onSubmit={handleCreateBlog} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Title</label>
                  <input 
                    required 
                    value={newBlog.title} 
                    onChange={e => setNewBlog({...newBlog, title: e.target.value})} 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Category</label>
                    <select 
                      value={newBlog.category} 
                      onChange={e => setNewBlog({...newBlog, category: e.target.value})} 
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500"
                    >
                      <option>Finance</option>
                      <option>Digital</option>
                      <option>Govt Services</option>
                      <option>Marketing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Image Cover</label>
                    <div className="relative">
                       <input 
                        type="file" 
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden" 
                        id="blog-image-upload"
                      />
                      <label 
                        htmlFor="blog-image-upload" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-400 block cursor-pointer hover:bg-slate-800 transition-colors text-center"
                      >
                        {uploading ? 'Uploading...' : newBlog.image_url ? '✓ Image Ready' : 'Upload Image'}
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Excerpt (SEO Summary)</label>
                  <input 
                    required 
                    value={newBlog.excerpt} 
                    onChange={e => setNewBlog({...newBlog, excerpt: e.target.value})} 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Content</label>
                  <textarea 
                    required 
                    rows={8} 
                    value={newBlog.content} 
                    onChange={e => setNewBlog({...newBlog, content: e.target.value})} 
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 font-mono text-sm" 
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={uploading}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold shadow-lg shadow-emerald-600/20 transition-all disabled:opacity-50"
                >
                  Publish to Live Site
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
