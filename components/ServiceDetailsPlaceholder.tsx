
import React from 'react';
import { PageView } from '../App';

interface ServiceDetailsPlaceholderProps {
  onBack: () => void;
  onContactClick: () => void;
}

const ServiceDetailsPlaceholder: React.FC<ServiceDetailsPlaceholderProps> = ({ onBack, onContactClick }) => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center text-slate-500 hover:text-[#0A3D62] transition-colors mb-12 group font-bold text-xs tracking-widest uppercase"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Services
        </button>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-6 text-brand-blue">Service Excellence</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Detailed information about this specific service pillar is currently being updated to provide you with the most accurate and up-to-date guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-800 mb-4">What to Expect</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Our professional team follows a rigorous process to ensure high-quality delivery and client satisfaction. We handle the complexities so you can focus on your goals.
            </p>
            <ul className="space-y-3">
              {['Initial Consultation', 'Document Review', 'Strategic Planning', 'Execution & Support'].map((step, i) => (
                <li key={i} className="flex items-center text-slate-600 text-sm font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#0A3D62] text-white flex items-center justify-center text-[10px] mr-3 font-bold">{i+1}</div>
                  {step}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-[#0A3D62] rounded-3xl text-white shadow-xl">
            <h3 className="text-xl font-bold mb-4">Direct Assistance</h3>
            <p className="text-white/70 text-sm mb-8">
              Need immediate answers? Our on-site experts at our Rajur office are available for one-on-one consultations.
            </p>
            <div className="space-y-4">
              <a href="tel:+919529922984" className="flex items-center space-x-3 group">
                <svg className="w-5 h-5 text-[#78C800] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span className="font-bold">+91 95299 22984</span>
              </a>
              <a href="mailto:investomultiservices@gmail.com" className="flex items-center space-x-3 group">
                <svg className="w-5 h-5 text-[#78C800] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span className="font-bold text-sm">investomultiservices@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-10 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to get started?</h3>
          <p className="text-slate-500 mb-8">Click below to share your requirements through our secure contact portal.</p>
          <button 
            onClick={onContactClick}
            className="bg-[#FF8C00] text-white px-10 py-4 rounded-full font-bold hover:brightness-110 transition-all shadow-lg active:scale-95"
          >
            Inquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPlaceholder;
