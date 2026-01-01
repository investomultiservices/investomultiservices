
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-[#78C800] font-bold tracking-widest uppercase text-xs mb-4">Our Story</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 mb-6 leading-tight">Built on Trust, Driven by <span className="text-[#0A3D62]">Excellence</span></h1>
          <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
            Investo Multiservices was founded with a singular vision: to bridge the gap between complex financial requirements and accessible digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#78C800]/10 rounded-full blur-3xl -z-10"></div>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Team" className="rounded-[2.5rem] shadow-2xl border border-slate-100" />
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To empower individuals and businesses by providing a unified platform for Financial, Digital, and Government services. We believe professionalism shouldn't be complicated.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl">
                <p className="text-4xl font-extrabold text-[#0A3D62] mb-1">10k+</p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Clients Served</p>
              </div>
              <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl">
                <p className="text-4xl font-extrabold text-[#78C800] mb-1">15+</p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Years Expertise</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-[3rem] p-16 text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <div className="text-[#0A3D62] mb-6 flex justify-center">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2 uppercase tracking-wide">Integrity</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Transparent processes and ethical guidance in every consultation.</p>
            </div>
            <div className="space-y-4">
              <div className="text-[#78C800] mb-6 flex justify-center">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2 uppercase tracking-wide">Efficiency</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Fast-track processing for government and financial applications.</p>
            </div>
            <div className="space-y-4">
              <div className="text-[#FF8C00] mb-6 flex justify-center">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-2 uppercase tracking-wide">Community</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Supporting local farmers and small businesses to scale digital.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
