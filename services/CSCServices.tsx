
import React from 'react';
import { PageView } from '../App';

interface Props { setCurrentPage: (p: PageView) => void; }

const CSCServices: React.FC<Props> = ({ setCurrentPage }) => {
  return (
    <article className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4 block">Authorised Service Provider</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-blue mb-6">Hassle-Free <span className="text-brand-orange">Govt Documentation</span></h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              Serving the Rajur community with reliable Common Service Center (CSC) solutions. We fast-track your certificates and IDs so you don't have to wait in queues.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 grid grid-cols-2 gap-4">
             {['PAN Card', 'Income Cert', 'Caste Cert', 'Domicile', 'Farmer ID', 'Ration Card'].map(tag => (
               <div key={tag} className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-200 text-center font-bold text-slate-700">{tag}</div>
             ))}
          </div>
        </header>

        <section className="mb-24">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Core Government Hub</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 bg-slate-50 rounded-3xl">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <div className="w-1.5 h-6 bg-brand-orange mr-3"></div> Identity & ID Systems
              </h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">From new applications to corrections, we handle all your digital ID requirements with accuracy.</p>
              <div className="space-y-4">
                {['PAN Card Application & Correction', 'Aadhaar Card Related Queries', 'Election Card Printing', 'Passport Application Assistance'].map(s => (
                  <div key={s} className="flex items-center text-slate-700 font-medium text-sm">
                    <svg className="w-5 h-5 text-brand-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    {s}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-10 bg-slate-50 rounded-3xl">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <div className="w-1.5 h-6 bg-brand-green mr-3"></div> Farmer & Rural Support
              </h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">Specialized support for our local agricultural community in the Akole region.</p>
              <div className="space-y-4">
                {['Farmer Registration (7/12 & 8A)', 'Kisan Credit Card Support', 'PM-Kisan Status & Corrections', 'Soil Health Card Processing'].map(s => (
                  <div key={s} className="flex items-center text-slate-700 font-medium text-sm">
                    <svg className="w-5 h-5 text-brand-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="bg-brand-blue p-12 rounded-[40px] flex flex-col md:flex-row items-center justify-between text-white">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Need a Certificate Urgently?</h3>
            <p className="text-white/60">Check required documents instantly with our AI Advisor.</p>
          </div>
          <button onClick={() => setCurrentPage('home')} className="px-8 py-3 bg-white text-brand-blue rounded-full font-bold hover:bg-slate-100 transition-all">Use AI Advisor</button>
        </div>
      </div>
    </article>
  );
};

export default CSCServices;
