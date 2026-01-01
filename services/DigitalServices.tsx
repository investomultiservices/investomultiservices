
import React from 'react';
import { PageView } from '../App';

interface Props { setCurrentPage: (p: PageView) => void; }

const DigitalServices: React.FC<Props> = ({ setCurrentPage }) => {
  return (
    <article className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-24 text-center">
          <nav className="flex justify-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 space-x-2">
            <button onClick={() => setCurrentPage('home')} className="hover:text-brand-blue transition-colors">Home</button>
            <span>/</span>
            <span className="text-brand-blue">Digital Solutions</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-blue mb-8 tracking-tight">Innovative <span className="text-brand-green">Digital Transformation</span></h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            Elevating local businesses with global digital standards. We don't just build websites; we build scalable digital engines designed for consistent business growth in the modern economy.
          </p>
        </header>

        {/* Core Pillars Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { 
              title: 'Custom Web Apps', 
              desc: 'High-performance, secure, and fully responsive web applications built with the latest frameworks to solve complex business needs.',
              features: ['E-commerce Solutions', 'Corporate Portals', 'CRM Integration', 'Web App Speed Optimization'],
              icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
              theme: 'brand-green'
            },
            { 
              title: 'Strategic SEO', 
              desc: 'Data-driven search engine optimization focusing on technical performance and high-intent local keyword rankings.',
              features: ['Local GMB Ranking', 'On-Page Content Strategy', 'Technical SEO Audit', 'Backlink Management'],
              icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
              theme: 'brand-blue'
            },
            { 
              title: 'Brand Marketing', 
              desc: 'Comprehensive social media management and digital advertising campaigns that turn visitors into loyal customers.',
              features: ['FB & IG Ads Management', 'Professional Copywriting', 'Brand Identity Design', 'Conversion Optimization'],
              icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
              theme: 'brand-orange'
            }
          ].map((s, i) => (
            <section key={i} className="bg-white p-12 rounded-[2.5rem] corporate-card-shadow border border-slate-100 group hover:-translate-y-2 transition-all flex flex-col h-full">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all ${
                s.theme === 'brand-green' ? 'bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white' : 
                s.theme === 'brand-blue' ? 'bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white' : 
                'bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white'
              }`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} /></svg>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-800 mb-6">{s.title}</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{s.desc}</p>
              <ul className="space-y-3 pt-6 border-t border-slate-50">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center text-xs font-bold text-slate-600 uppercase tracking-tight">
                    <svg className="w-4 h-4 mr-2 text-brand-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293l-8.707 8.707-4.707-4.707 1.414-1.414 3.293 3.293 7.293-7.293 1.414 1.414z" clipRule="evenodd" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Development Process Deep Dive */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue mb-4">Our Development Lifecycle</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We follow a structured 4-stage approach to ensure every digital project is delivered on time, with zero compromises on quality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your business goals, target audience, and competition.' },
              { step: '02', title: 'Architecture', desc: 'Wireframing and UI/UX design to map out the perfect user journey.' },
              { step: '03', title: 'Production', desc: 'Agile development phase using cutting-edge coding standards.' },
              { step: '04', title: 'Optimization', desc: 'Rigorous testing for speed, security, and mobile responsiveness.' }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 bg-white border border-slate-100 rounded-3xl group hover:shadow-xl transition-all">
                <span className="text-5xl font-black text-slate-100 group-hover:text-brand-green/10 transition-colors absolute top-4 right-4">{item.step}</span>
                <h3 className="text-xl font-bold text-slate-800 mb-4 relative z-10">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="bg-slate-900 rounded-[3rem] p-16 mb-32 text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue rounded-full blur-[100px] -ml-48 -mb-48"></div>
          </div>
          <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-12">Built with Modern Tech</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            {['ReactJS', 'Next.js', 'TailwindCSS', 'Node.js', 'PostgreSQL', 'Cloudflare'].map(tech => (
              <div key={tech} className="px-6 py-2 border border-slate-700 rounded-full text-slate-400 text-sm font-bold tracking-widest uppercase">
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Expansion */}
        <section className="bg-white p-12 md:p-20 rounded-[40px] border border-slate-200">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-4xl font-extrabold text-brand-blue mb-8 leading-tight">Digital Strategy <br />Insights</h2>
              <div className="space-y-10">
                {[
                  { 
                    q: 'How does digital presence impact small businesses?', 
                    a: 'In today’s market, your website is your digital storefront. Over 80% of customers research a business online before visiting. A professional site builds instant trust and expands your reach beyond your physical location.' 
                  },
                  { 
                    q: 'What is the ROI on Local SEO?', 
                    a: 'Local SEO has one of the highest conversion rates. By appearing in "near me" searches, you capture customers at the exact moment they are looking for your services, resulting in higher quality leads and walk-ins.' 
                  },
                  { 
                    q: 'Why choose custom development over template builders?', 
                    a: 'Template builders are often bloated with unnecessary code that slows down your site. Custom development ensures your site is lightweight, ultra-fast, and uniquely tailored to your specific business logic.' 
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="group">
                    <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-brand-green transition-colors">{faq.q}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-blue p-12 rounded-[2.5rem] text-white shadow-2xl sticky top-40">
              <h3 className="text-3xl font-extrabold mb-6">Let's Build Your <br />Digital Hub</h3>
              <p className="text-white/70 text-base mb-10 leading-relaxed">
                Whether you need a simple landing page or a complex e-commerce system, our team is ready to deliver global quality with local reliability.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center text-sm font-bold text-brand-green">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  FREE TECHNICAL AUDIT
                </div>
                <div className="flex items-center text-sm font-bold text-brand-green">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  24/7 SERVER MONITORING
                </div>
                <div className="flex items-center text-sm font-bold text-brand-green">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  DEDICATED ACCOUNT MANAGER
                </div>
              </div>
              <button onClick={() => setCurrentPage('contact')} className="w-full bg-brand-green py-5 rounded-2xl font-black text-lg hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-green/20">Claim Your Free Quote</button>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default DigitalServices;
