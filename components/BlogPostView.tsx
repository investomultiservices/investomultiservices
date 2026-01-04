
import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import { STATIC_BLOG_POSTS } from './Blog';
import { PageView } from '../App';

interface BlogPostViewProps {
  postId: string | null;
  onBack: () => void;
  setCurrentPage: (page: PageView) => void;
}

const BlogPostView: React.FC<BlogPostViewProps> = ({ postId, onBack, setCurrentPage }) => {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // SEO Synchronization Effect
  useEffect(() => {
    if (post) {
      // 1. Update Document Title
      const originalTitle = document.title;
      document.title = `${post.title} | Investo Insights`;

      // 2. Update Meta Description
      const metaDescription = document.querySelector('meta[name="description"]');
      const originalDescription = metaDescription?.getAttribute('content') || '';
      
      if (metaDescription) {
        // Use excerpt first, fallback to content snippet (160 chars is standard for Google)
        const seoDescription = post.excerpt || post.content?.substring(0, 160).replace(/[#*`]/g, '') + '...';
        metaDescription.setAttribute('content', seoDescription);
      }

      // Cleanup: Restore original metadata when navigating back
      return () => {
        document.title = originalTitle;
        if (metaDescription) {
          metaDescription.setAttribute('content', originalDescription);
        }
      };
    }
  }, [post]);

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
    return (
      <div className="pt-48 pb-24 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-slate-200 border-t-[#0A3D62] rounded-full animate-spin mb-4"></div>
        <p className="text-[#0A3D62] font-bold tracking-widest text-xs uppercase">Loading Insight...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h2 className="text-slate-800 text-2xl mb-4 font-bold">Article Not Found</h2>
        <p className="text-slate-500 mb-8">The requested publication may have been moved or removed.</p>
        <button 
          onClick={onBack} 
          className="bg-[#0A3D62] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#002244] transition-all"
        >
          Return to Blog
        </button>
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
              <div className="w-10 h-10 rounded-full bg-[#0A3D62] flex items-center justify-center text-white font-bold mr-3 shadow-lg border-2 border-white">I</div>
              <span className="font-bold text-slate-600 text-sm">Investo Editorial Team</span>
            </div>
            <span className="text-sm">•</span>
            <span className="text-sm font-medium">{new Date(post.created_at || post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>

        <div className="relative h-[450px] w-full mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
          <img src={post.image_url || post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="text-slate-600 text-lg leading-relaxed whitespace-pre-line space-y-6">
              {post.content}
            </div>
            
            <div className="mt-16 p-10 bg-slate-50 rounded-[2rem] border-l-4 border-[#0A3D62] italic text-slate-500 text-lg shadow-sm">
              "At Investo Multiservices, we believe that clear information leads to better financial decisions. Our mission is to simplify your path to growth."
            </div>
            
            {/* Social Share Placeholder */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Share this Insight</span>
              <div className="flex space-x-4">
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#0A3D62] hover:bg-[#0A3D62]/5 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#78C800] hover:bg-[#78C800]/5 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-40 space-y-10">
              <div className="p-10 bg-[#0A3D62] rounded-[2rem] shadow-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Expert Advice?</h3>
                <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                  Our consultants are ready to help you with your specific requirements.
                </p>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="w-full py-4 bg-[#78C800] text-white rounded-xl font-bold hover:brightness-110 transition-all shadow-lg active:scale-95"
                >
                  Book Consultation
                </button>
              </div>

              <div className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 shadow-sm">
                <h3 className="text-slate-800 font-bold mb-6 uppercase tracking-widest text-xs">Related Topics</h3>
                <ul className="space-y-5">
                  <li><button onClick={() => setCurrentPage('csc-services')} className="text-slate-500 hover:text-[#0A3D62] text-sm font-bold transition-colors block text-left">How to apply for PAN Card</button></li>
                  <li><button onClick={() => setCurrentPage('digital-services')} className="text-slate-500 hover:text-[#0A3D62] text-sm font-bold transition-colors block text-left">Digital Marketing Trends</button></li>
                  <li><button onClick={() => setCurrentPage('financial-services')} className="text-slate-500 hover:text-[#0A3D62] text-sm font-bold transition-colors block text-left">Personal Loan Checklist</button></li>
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
