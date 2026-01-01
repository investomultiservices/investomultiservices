
import React from 'react';
import { PageView } from '../App';

interface Props { setCurrentPage: (p: PageView) => void; }

const FinancialServices: React.FC<Props> = ({ setCurrentPage }) => {
  return (
    <article className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <nav className="flex text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 space-x-2">
            <button onClick={() => setCurrentPage('home')} className="hover:text-brand-blue">Home</button>
            <span>/</span>
            <button onClick={() => setCurrentPage('services')} className="hover:text-brand-blue">Services</button>
            <span>/</span>
            <span className="text-brand-blue">Financial</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-blue mb-6">Expert Financial Solutions for <span className="text-brand-orange">Personal & Business Growth</span></h1>
          <p className="text-xl text-slate-500 max-w-3xl leading-relaxed">
            From specialized Life Insurance to tailored Mediclaim services, we help you navigate complex financial systems with ease and transparency.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <section className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center text-white mb-8">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Loan Distribution Hub</h2>
            <p className="text-slate-500 mb-8">We partner with top banks to bring you the best interest rates with minimum paperwork.</p>
            <ul className="space-y-4">
              {['Home Loans & Refinancing', 'Personal Loans for Urgent Needs', 'Business Expansion Credits', 'Mortgage Against Property'].map(item => (
                <li key={item} className="flex items-center text-slate-700 font-medium">
                  <svg className="w-5 h-5 text-brand-green mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <div className="w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center text-white mb-8">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Insurance & Protection</h2>
            <p className="text-slate-500 mb-8">Comprehensive cover for your family, health, and valuable assets.</p>
            <ul className="space-y-4">
              {['Life Insurance Service', 'Mediclaim Service', 'Vehicle & Property Insurance', 'Retirement & Pension Planning'].map(item => (
                <li key={item} className="flex items-center text-slate-700 font-medium">
                  <svg className="w-5 h-5 text-brand-green mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="bg-brand-blue text-white p-16 rounded-[40px] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h2 className="text-3xl font-bold mb-6">Ready to secure your financial future?</h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">Contact our Rajur office for a free eligibility check on Life Insurance or Mediclaim.</p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-brand-orange hover:bg-orange-500 text-white px-10 py-4 rounded-full font-bold shadow-xl transition-all"
          >
            Request Call Back
          </button>
        </section>
      </div>
    </article>
  );
};

export default FinancialServices;
