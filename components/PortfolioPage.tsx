
import React from 'react';

const PortfolioPage: React.FC = () => {
  const categories = ['All', 'Financial', 'Digital', 'Govt'];
  const [activeFilter, setActiveFilter] = React.useState('All');

  const portfolioItems = [
    { title: 'Modern Real Estate Site', category: 'Digital', desc: 'Custom SEO-optimized portal.' },
    { title: 'MSME Loan Processing', category: 'Financial', desc: 'Fast-tracked ₹2Cr business loan.' },
    { title: 'Digital Farmer Network', category: 'Govt', desc: 'Centralized 200+ Farmer IDs.' },
    { title: 'Corporate Branding SEO', category: 'Digital', desc: 'Achieved #1 rank for local services.' },
    { title: 'Life Insurance Portfolio', category: 'Financial', desc: 'Secure family futures for 50+ families.' },
    { title: 'Govt Job Portal Support', category: 'Govt', desc: 'Assisted 100+ candidates in apps.' },
  ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(i => i.category === activeFilter);

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-[#78C800] font-bold uppercase text-xs tracking-widest mb-4">Our Track Record</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-8">Work that Speaks for Itself</h1>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-8 py-2.5 rounded-full font-bold text-xs tracking-widest transition-all ${
                  activeFilter === cat ? 'bg-[#0A3D62] text-white shadow-xl' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] group hover:bg-white hover:shadow-2xl transition-all cursor-pointer">
              <span className="text-[#78C800] text-[10px] font-extrabold uppercase tracking-[0.2em] mb-4 block">{item.category}</span>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-[#0A3D62] transition-colors">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">{item.desc}</p>
              <div className="h-56 w-full bg-white rounded-2xl overflow-hidden border border-slate-100 flex items-center justify-center relative shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D62]/5 to-transparent"></div>
                <svg className="w-16 h-16 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="bg-[#0A3D62] p-2 rounded-lg text-white">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
