
import React from 'react';
import { PageView } from '../App';

interface Props { setCurrentPage: (p: PageView) => void; }

const OfficeSupport: React.FC<Props> = ({ setCurrentPage }) => {
  return (
    <article className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20">
          <h1 className="text-5xl font-extrabold text-brand-blue mb-6">Professional <span className="text-slate-500">Office & Documentation</span> Support</h1>
          <p className="text-lg text-slate-500 max-w-3xl leading-relaxed">
            From high-speed typing to government job application filling, we provide accurate and fast clerical support for students and professionals in Akole.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { 
              title: 'Job Applications', 
              desc: 'Expert assistance in filling online forms for Central & State Govt jobs, Bank exams, and Railway recruitment.',
              icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' 
            },
            { 
              title: 'Typing & Layout', 
              desc: 'Professional English & Marathi typing for affidavits, agreements, projects, and official letters.',
              icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' 
            },
            { 
              title: 'Documentation Hub', 
              desc: 'High-quality Xerox, Scanning, Lamination, and Spiral Binding services for all your important papers.',
              icon: 'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z' 
            }
          ].map((item, i) => (
            <section key={i} className="bg-white p-12 rounded-3xl border border-slate-100 corporate-card-shadow">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-800 mb-8">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="text-brand-blue font-bold text-xs uppercase tracking-widest hover:underline"
              >
                Inquire Now
              </button>
            </section>
          ))}
        </div>

        <section className="mt-24 p-12 bg-brand-orange/5 border border-brand-orange/20 rounded-[40px] text-center">
          <h2 className="text-3xl font-bold text-brand-blue mb-4">Visit Our Office Today</h2>
          <p className="text-slate-600 mb-8">Located opposite Sarvodaya School, Rajur. High-speed internet and expert assistance available.</p>
          <div className="flex justify-center space-x-4">
             <div className="bg-white px-6 py-3 rounded-full shadow-sm text-sm font-bold text-slate-700">Open Mon - Sat</div>
             <div className="bg-white px-6 py-3 rounded-full shadow-sm text-sm font-bold text-slate-700">9:00 AM - 7:00 PM</div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default OfficeSupport;
