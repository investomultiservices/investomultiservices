
import React, { useState, useEffect } from 'react';
import { DB } from '../services/supabaseClient';
import { BlogPost } from '../types';

export const STATIC_BLOG_POSTS: BlogPost[] = [
  {
    id: 'static-1',
    title: 'How to Choose the Right Home Loan in 2024',
    category: 'Finance',
    created_at: '2024-03-15T12:00:00Z',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    image_url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Navigating the complex world of interest rates and eligibility can be daunting. Here is our expert guide.',
    content: `Choosing a home loan is one of the most significant financial decisions...`
  }
];

interface BlogProps {
  onOpenPost: (id: string) => void;
}

const Blog: React.FC<BlogProps> = ({ onOpenPost }) => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogs() {
      try {
        const data = await DB.getBlogs();
        setBlogs(data && data.length > 0 ? (data as BlogPost[]) : STATIC_BLOG_POSTS);
      } catch (err) {
        setBlogs(STATIC_BLOG_POSTS);
      } finally {
        setLoading(false);
      }
    }
    loadBlogs();
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-[#78C800] font-bold uppercase text-xs tracking-widest mb-4">Investo Insights</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">Latest from Our Blog</h1>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-4 gap-8">
            {[1,2,3,4].map(i => (
              <div key={i} className="animate-pulse space-y-4">
                <div className="bg-slate-100 rounded-3xl h-48 w-full"></div>
                <div className="bg-slate-100 rounded-lg h-4 w-3/4"></div>
                <div className="bg-slate-100 rounded-lg h-3 w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogs.map((post) => (
              <div 
                key={post.id} 
                className="group cursor-pointer bg-slate-50 p-5 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300"
                onClick={() => onOpenPost(post.id)}
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 h-48">
                  <img src={(post.image_url || post.image) + '&w=600&q=80'} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0A3D62] text-white text-[10px] px-3 py-1.5 rounded-full font-bold uppercase tracking-widest shadow-lg">{post.category}</span>
                  </div>
                </div>
                <p className="text-slate-400 text-[10px] mb-2 font-bold uppercase tracking-wider">{new Date(post.created_at || post.date || '').toLocaleDateString()}</p>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#0A3D62] transition-colors leading-tight mb-4 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center text-[#0A3D62] text-xs font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                  Read Article 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-24 p-12 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Subscribe to our Newsletter</h3>
            <p className="text-slate-500">Get the latest updates on government services and financial tips.</p>
          </div>
          <div className="flex w-full md:w-auto space-x-3">
            <input type="email" placeholder="Email Address" className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:ring-2 focus:ring-[#0A3D62] w-full md:w-72 outline-none shadow-sm" />
            <button className="bg-[#0A3D62] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#002244] transition-all shadow-lg">Join</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
