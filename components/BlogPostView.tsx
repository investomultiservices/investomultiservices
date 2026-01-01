
import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import { STATIC_BLOG_POSTS } from './Blog';

interface BlogPostViewProps {
  postId: string | null;
  onBack: () => void;
}

const BlogPostView: React.FC<BlogPostViewProps> = ({ postId, onBack }) => {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      if (!postId) return;
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .eq('id', postId)
          .single();
        
        if (data) {
          setPost(data);
        } else {
          // Fallback to static if not found in DB
          setPost(STATIC_BLOG_POSTS.find(p => p.id === postId));
        }
      } catch (err) {
        setPost(STATIC_BLOG_POSTS.find(p => p.id === postId));
      } finally {
        setLoading(false);
      }
    }
    loadPost();
  }, [postId]);

  if (loading) {
    return <div className="pt-48 pb-24 text-center text-[#0A3D62] font-bold">Loading insight...</div>;
  }

  if (!post) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h2 className="text-slate-800 text-2xl mb-4">Post not found</h2>
        <button onClick={onBack} className="text-[#0A3D62] font-bold underline">Go back to Blog</button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center text-slate-500 hover:text-[#0A3D62] transition-colors mb-12 group font-bold text-xs tracking-widest uppercase"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Insights
        </button>

        <div className="mb-12">
          <span className="bg-[#78C800]/10 text-[#78C800] text-[10px] px-4 py-2 rounded-full font-extrabold uppercase tracking-widest mb-8 inline-block">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center text-slate-400 space-x-6">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#0A3D62] flex items-center justify-center text-white font-bold mr-3 shadow-lg">I</div>
              <span className="font-bold text-slate-600 text-sm">Investo Editorial Team</span>
            </div>
            <span className="text-sm">•</span>
            <span className="text-sm font-medium">{new Date(post.created_at || post.date).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="relative h-[450px] w-full mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
          <img src={post.image_url || post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="text-slate-600 text-lg leading-relaxed whitespace-pre-line space-y-6">
              {post.content}
            </div>
            
            <div className="mt-16 p-10 bg-slate-50 rounded-[2rem] border-l-4 border-[#0A3D62] italic text-slate-500 text-lg">
              "At Investo Multiservices, we believe that clear information leads to better financial decisions. Our mission is to simplify your path to growth."
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-40 space-y-10">
              <div className="p-10 bg-[#0A3D62] rounded-[2rem] shadow-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Expert Advice?</h3>
                <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                  Our consultants are ready to help you with your specific requirements.
                </p>
                <button className="w-full py-4 bg-[#78C800] text-white rounded-xl font-bold hover:brightness-110 transition-all shadow-lg">
                  Book Consultation
                </button>
              </div>

              <div className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 shadow-sm">
                <h3 className="text-slate-800 font-bold mb-6 uppercase tracking-widest text-xs">Related Topics</h3>
                <ul className="space-y-5">
                  <li><button className="text-slate-500 hover:text-[#0A3D62] text-sm font-bold transition-colors block text-left">How to apply for PAN Card</button></li>
                  <li><button className="text-slate-500 hover:text-[#0A3D62] text-sm font-bold transition-colors block text-left">Digital Marketing Trends</button></li>
                  <li><button className="text-slate-500 hover:text-[#0A3D62] text-sm font-bold transition-colors block text-left">Personal Loan Checklist</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostView;
