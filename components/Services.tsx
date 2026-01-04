
import React, { useState, useEffect, useRef } from 'react';
import { PageView } from '../App';

const SERVICE_PILLARS = [
  {
    title: 'Financial & Loan Services',
    summary: 'Professional financial consulting for home loans, personal credits, and life insurance in Rajur Akole.',
    items: ['Home Loan & Mortgage Specialist', 'Life Insurance & Mediclaim Plans', 'Personal & Business Loans', 'Expert Financial Consultation'],
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    color: '#0A3D62',
    view: 'financial-services' as PageView
  },
  {
    title: 'Digital & Web Solutions',
    summary: 'Custom website design, SEO, and digital marketing services to grow your business online in Akole.',
    items: ['Custom Website Development', 'Local SEO & Google Ranking', 'Social Media Digital Marketing', 'E-commerce & Business Portals'],
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    color: '#78C800',
    view: 'digital-services' as PageView
  },
  {
    title: 'Govt (CSC) & PAN Center',
    summary: 'Authorised CSC center in Rajur for fast PAN card applications, caste, and income certificates.',
    items: ['New PAN Card & Corrections', 'Income & Caste Certificates', 'Domicile & Gazetted Services', 'Farmer ID & Govt Schemes'],
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    color: '#FF8C00',
    view: 'csc-services' as PageView
  },
  {
    title: 'Documentation & Jobs',
    summary: 'Online job application center with professional typing, Xerox, and documentation support in Akole.',
    items: ['Govt Job Online Applications', 'English & Marathi Typing Work', 'Documentation & Spiral Binding', 'Xerox, Scanning & Lamination'],
    icon: 'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z',
    color: '#64748b',
    view: 'office-support' as PageView
  }
];

interface ServicesProps {
  setCurrentPage: (page: PageView) => void;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (containerRef.current) observer.unobserve(containerRef.current);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="services" ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-[#0A3D62] font-bold tracking-widest uppercase text-xs mb-4">Investo Multiservices Hub</h2>
        <p className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">Expert Financial & Digital Solutions</p>
        <div className="w-20 h-1 bg-brand-orange mx-auto mb-8"></div>
        <p className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed">
          From Home Loans and PAN Card services to Custom Web Development, we provide reliable and fast-track solutions tailored for local growth.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICE_PILLARS.map((pillar, idx) => (
          <div 
            key={idx} 
            className={`bg-white border border-slate-100 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 group flex flex-col h-full service-card-reveal ${isVisible ? 'active' : ''}`}
            style={{ 
              animationDelay: `${idx * 150}ms`
            }}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 bg-slate-50 group-hover:bg-[#0A3D62] transition-colors">
              <svg className="w-7 h-7 text-[#0A3D62] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={pillar.icon} />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{pillar.title}</h3>
            <p className="text-slate-400 text-[11px] leading-relaxed mb-6 font-medium">
              {pillar.summary}
            </p>
            <ul className="space-y-4 mb-10 flex-grow border-t border-slate-50 pt-6">
              {pillar.items.map((item, i) => (
                <li key={i} className="flex items-start text-slate-600 text-sm">
                  <svg className="w-4 h-4 mr-3 text-[#78C800] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293l-8.707 8.707-4.707-4.707 1.414-1.414 3.293 3.293 7.293-7.293 1.414 1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => setCurrentPage(pillar.view)}
              className="w-full py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold text-slate-600 uppercase tracking-widest hover:bg-[#0A3D62] hover:text-white hover:border-[#0A3D62] transition-all group-hover:shadow-lg"
            >
              Explore Services
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
