
import React from 'react';

const SUCCESS_STORIES = [
  { title: 'Home Loan Approval', desc: 'Processed ₹50L loan for a first-time home buyer in 7 days.', category: 'Financial' },
  { title: 'Farmer ID Ecosystem', desc: 'Successfully registered 500+ local farmers for govt benefits.', category: 'CSC/Govt' },
  { title: 'E-Commerce Launch', desc: 'Custom built scalable digital shop for local retail brand.', category: 'Digital' },
];

const Portfolio: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-emerald-500 font-bold uppercase text-sm mb-4">Case Studies</h2>
        <p className="text-4xl font-bold text-white">Our Success Stories</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SUCCESS_STORIES.map((item, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-4">{item.category}</span>
            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
