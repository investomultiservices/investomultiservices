
import React from 'react';
import { PageView } from '../App';

interface HeroProps {
  setCurrentPage: (page: PageView) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  return (
    <div className="relative bg-white pt-24">
      {/* Background Image Container */}
      <div className="relative h-[450px] md:h-[550px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600880212340-053459a139ad?q=80&w=2000&auto=format&fit=crop" 
          alt="Business Professionals" 
          className="w-full h-full object-cover grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center lg:justify-end">
          <div className="max-w-2xl text-center lg:text-right animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
              Gain Professional Support. <br />
              <span className="text-brand-orange">Focus on Your Future.</span>
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-8 max-w-xl lg:ml-auto font-medium">
              Investo Multiservices offers innovative tools, unique market insights and personalized solutions. We are your partner for whatever your future holds.
            </p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-[#0078D4] hover:bg-[#005a9e] text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Card Section - Updated to reflect actual service categories */}
      <div className="relative lg:-mt-20 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 mt-8 lg:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-0 lg:corporate-card-shadow lg:rounded-xl overflow-hidden">
          {/* Card 1: Individuals */}
          <div className="bg-white p-8 md:p-12 border border-slate-100 lg:border-r lg:border-y-0 lg:border-l-0 group hover:bg-slate-50 transition-colors shadow-lg lg:shadow-none rounded-2xl lg:rounded-none">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-[#0078D4]/10 rounded-xl flex items-center justify-center text-[#0078D4]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 text-center">Individuals & Families</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 text-center min-h-[60px]">
              Access expert home loans, personal insurance, and fast-track PAN card or government document services.
            </p>
            <div className="flex justify-center">
              <button onClick={() => setCurrentPage('financial-services')} className="text-[#0078D4] font-bold text-xs tracking-widest hover:underline uppercase">Personal Solutions</button>
            </div>
          </div>
          
          {/* Card 2: Businesses */}
          <div className="bg-white p-8 md:p-12 border border-slate-100 lg:border-r lg:border-y-0 lg:border-l-0 group hover:bg-slate-50 transition-colors shadow-lg lg:shadow-none rounded-2xl lg:rounded-none">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 text-center">Business & Digital</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 text-center min-h-[60px]">
              Accelerate your growth with professional web design, SEO, and business expansion loans tailored for scaling.
            </p>
            <div className="flex justify-center">
              <button onClick={() => setCurrentPage('digital-services')} className="text-[#0078D4] font-bold text-xs tracking-widest hover:underline uppercase">Scale Business</button>
            </div>
          </div>
          
          {/* Card 3: Community */}
          <div className="bg-white p-8 md:p-12 border border-slate-100 group hover:bg-slate-50 transition-colors shadow-lg lg:shadow-none rounded-2xl lg:rounded-none">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 text-center">Community Support</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 text-center min-h-[60px]">
              Reliable CSC services, farmer registration assistance, and online government application filling.
            </p>
            <div className="flex justify-center">
              <button onClick={() => setCurrentPage('csc-services')} className="text-[#0078D4] font-bold text-xs tracking-widest hover:underline uppercase">Browse Services</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
