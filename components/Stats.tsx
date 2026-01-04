
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { PageView } from '../App';

interface StatsProps {
  setCurrentPage?: (page: PageView) => void;
}

const data = [
  { name: '2021', value: 120 },
  { name: '2022', value: 280 },
  { name: '2023', value: 450 },
  { name: '2024', value: 680 },
];

const Stats: React.FC<StatsProps> = ({ setCurrentPage }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">
        {/* Sticky Sidebar Container */}
        <div className="lg:col-span-1 lg:sticky lg:top-32 self-start">
          <h2 className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-4">Market Growth</h2>
          <h3 className="text-4xl font-extrabold text-slate-800 mb-6">A Proven Path to Scalability</h3>
          <p className="text-slate-500 leading-relaxed mb-8">
            We provide our clients with more than just paperwork. We provide the infrastructure for sustainable financial and digital growth.
          </p>

          {/* Contact Action Section */}
          <div className="mb-12 space-y-4">
            <button 
              onClick={() => setCurrentPage?.('contact')}
              className="block w-full text-center bg-[#0A3D62] hover:bg-[#002244] text-white py-4 rounded-xl font-bold text-sm tracking-widest transition-all shadow-lg hover:shadow-brand-blue/20 transform hover:-translate-y-0.5"
            >
              REQUEST A FREE QUOTE
            </button>
            
            <div className="grid grid-cols-3 gap-3">
              <a 
                href="https://wa.me/919529922984" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-white border border-slate-200 py-3 rounded-xl hover:bg-[#78C800]/5 hover:border-[#78C800] transition-all group"
                title="Chat on WhatsApp"
              >
                <svg className="w-5 h-5 text-[#78C800] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.551 4.118 1.519 5.857L0 24l6.335-1.662C8.034 23.361 10.046 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.72-.51-5.313-1.474l-.381-.227-3.952 1.037 1.055-3.85-.249-.395C2.184 15.497 1.5 13.564 1.5 12c0-5.79 4.71-10.5 10.5-10.5S22.5 6.21 22.5 12 17.79 22.5 12 22.5z"/>
                </svg>
              </a>
              <a 
                href="tel:+918108610755" 
                className="flex items-center justify-center bg-white border border-slate-200 py-3 rounded-xl hover:bg-[#0A3D62]/5 hover:border-[#0A3D62] transition-all group"
                title="Call Now"
              >
                <svg className="w-5 h-5 text-[#0A3D62] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a 
                href="mailto:investomultiservices@gmail.com" 
                className="flex items-center justify-center bg-white border border-slate-200 py-3 rounded-xl hover:bg-[#FF8C00]/5 hover:border-[#FF8C00] transition-all group"
                title="Send Email"
              >
                <svg className="w-5 h-5 text-[#FF8C00] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="border-l-4 border-brand-green pl-4">
              <p className="text-4xl font-bold text-slate-800">98%</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wide">Retention Rate</p>
            </div>
            <div className="border-l-4 border-brand-orange pl-4">
              <p className="text-4xl font-bold text-slate-800">10k+</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wide">Active Clients</p>
            </div>
          </div>
        </div>
        
        {/* Chart Content Area */}
        <div className="lg:col-span-2 h-[500px] bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-inner overflow-hidden">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
              <Tooltip 
                cursor={{fill: 'rgba(0,0,0,0.02)'}}
                contentStyle={{backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'}}
              />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 3 ? '#FF8C00' : '#0A3D62'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;
