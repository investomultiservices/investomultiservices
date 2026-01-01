
import React from 'react';
import { PageView } from '../App';

interface Props { setCurrentPage: (p: PageView) => void; }

const ServicesPage: React.FC<Props> = ({ setCurrentPage }) => {
  const categories = [
    { title: 'Financial Services', path: 'financial-services' as PageView, color: 'bg-brand-blue', desc: 'Home Loans, Personal Loans & Insurance' },
    { title: 'Digital Solutions', path: 'digital-services' as PageView, color: 'bg-brand-green', desc: 'Web Design, SEO & Digital Marketing' },
    { title: 'CSC & Govt Services', path: 'csc-services' as PageView, color: 'bg-brand-orange', desc: 'PAN, Certifications & Farmer IDs' },
    { title: 'Office Support', path: 'office-support' as PageView, color: 'bg-slate-500', desc: 'Job Apps, Typing & Documentation' },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <h2 className="text-brand-blue font-bold uppercase text-xs tracking-widest mb-4">Service Framework</h2>
          <h1 className="text-5xl font-extrabold text-slate-800 mb-8">Solutions Designed for Your Success</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our specialized service pillars. Click on a category to view detailed documentation requirements and benefits.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(cat.path)}
              className="text-left bg-slate-50 p-10 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all"
            >
              <div className={`w-12 h-12 ${cat.color} rounded-xl mb-8 flex items-center justify-center text-white`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-brand-blue">{cat.title}</h3>
              <p className="text-slate-500 text-sm mb-6">{cat.desc}</p>
              <span className="text-brand-blue font-bold text-xs uppercase tracking-widest group-hover:underline">Explore Page →</span>
            </button>
          ))}
        </div>

        <div className="mt-32 p-12 bg-slate-50 rounded-[40px] border border-slate-200 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Expert Guidance in Rajur</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              We understand that government processes and financial planning can be stressful. Our team acts as your local guide to ensure you get what you need without the usual headaches.
            </p>
            <button onClick={() => setCurrentPage('contact')} className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold shadow-lg">Schedule Visit</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-brand-blue">Faster</h4>
              <p className="text-xs text-slate-400">Streamlined processing</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-brand-blue">Secure</h4>
              <p className="text-xs text-slate-400">Data privacy first</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
