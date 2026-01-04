
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
              title: 'Full-Stack Development', 
              desc: 'High-performance, secure, and fully responsive web applications built with the latest frameworks to solve complex business needs.',
              features: [
                'E-commerce & Dynamic Shop Portals', 
                'Corporate Multi-page Architectures', 
                'Custom CRM & Dashboard Integration', 
                'Progressive Web App (PWA) Delivery'
              ],
              icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
              theme: 'brand-green'
            },
            { 
              title: 'Authority SEO & SEM', 
              desc: 'Data-driven search engine optimization focusing on technical performance and high-intent local keyword rankings.',
              features: [
                'Google My Business (GMB) Supremacy', 
                'Deep Keyword & Competitor Research', 
                'Technical Speed & Vital Audits', 
                'Content Strategy & Authority Building'
              ],
              icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
              theme: 'brand-blue'
            },
            { 
              title: 'Performance Marketing', 
              desc: 'Comprehensive social media management and digital advertising campaigns that turn visitors into loyal customers.',
              features: [
                'Targeted FB & Instagram Ad Funnels', 
                'High-Conversion Sales Copywriting', 
                'Professional Brand Identity Design', 
                'Monthly Analytics & Growth Reports'
              ],
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
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">We follow a world-class agile approach to ensure every digital project is delivered on time, with zero compromises on code quality or user experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Audit', desc: 'Deep dive into your business goals, target demographics, and competitor gap analysis.' },
              { step: '02', title: 'UX Architecture', desc: 'Strategic wireframing and user journey mapping to ensure maximum conversion rates.' },
              { step: '03', title: 'Agile Production', desc: 'Scalable development using modern stacks with continuous quality assurance testing.' },
              { step: '04', title: 'SEO Deployment', desc: 'Launching with full technical SEO optimization, indexing, and performance monitoring.' }
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
        <section className="bg-slate-900 rounded-[3rem] p-16 mb-32 text-center overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue rounded-full blur-[100px] -ml-48 -mb-48"></div>
          </div>
          <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-12">The Power Behind the Build</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-16 font-medium">We utilize the most stable and cutting-edge technologies to ensure your business platform is ready for future scaling.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            {['ReactJS (UI)', 'Next.js (Performance)', 'Tailwind (Aesthetics)', 'Node.js (Back-end)', 'PostgreSQL (Data)', 'Cloudflare (Security)', 'Vercel (Scalability)'].map(tech => (
              <div key={tech} className="px-8 py-3 border border-slate-700 rounded-full text-slate-300 text-sm font-bold tracking-widest uppercase">
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Insights & FAQ */}
        <section className="bg-white p-12 md:p-20 rounded-[40px] border border-slate-200">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-4xl font-extrabold text-brand-blue mb-8 leading-tight">Digital Growth <br />Intelligence</h2>
              <div className="space-y-12">
                {[
                  { 
                    q: 'How does digital presence impact small-to-medium businesses?', 
                    a: 'In today’s market, your website is your digital storefront. Over 80% of customers research a business online before visiting. A professional site builds instant trust and expands your reach beyond your physical location in Rajur and Akole.' 
                  },
                  { 
                    q: 'What is the real ROI on Local SEO?', 
                    a: 'Local SEO has one of the highest conversion rates in digital marketing. By appearing in "near me" searches, you capture customers at the exact moment of high intent, resulting in significantly higher quality leads compared to traditional flyers or ads.' 
                  },
                  { 
                    q: 'Why choose custom development over template builders?', 
                    a: 'Template builders are often bloated with unnecessary code that slows down your site and hurts your SEO. Custom development ensures your site is lightweight, ultra-fast (Core Web Vitals), and uniquely tailored to your specific business operations.' 
                  },
                  {
                    q: 'Is social media marketing necessary for B2B?',
                    a: 'Absolutely. Social media is no longer just for B2C. B2B decision makers use platforms like LinkedIn and Facebook to gauge the credibility and authority of a service provider. Consistent, professional posting builds industry authority.'
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="group border-b border-slate-50 pb-8 last:border-0">
                    <h4 className="text-lg font-bold text-slate-800 mb-4 group-hover:text-brand-green transition-colors flex items-start">
                      <span className="text-brand-orange mr-3 mt-1 text-xs">●</span>
                      {faq.q}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium pl-6">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-blue p-12 rounded-[2.5rem] text-white shadow-2xl sticky top-40 border border-white/10">
              <h3 className="text-3xl font-extrabold mb-6">Launch Your <br />Digital Hub Today</h3>
              <p className="text-white/70 text-base mb-10 leading-relaxed font-medium">
                Stop losing customers to tech-savvy competitors. Our team is ready to deliver global quality with local reliability right here in the Akole region.
              </p>
              <div className="space-y-5 mb-12">
                <div className="flex items-center text-sm font-bold text-brand-green">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  FREE TECHNICAL SITE AUDIT
                </div>
                <div className="flex items-center text-sm font-bold text-brand-green">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  COMPREHENSIVE SEO ROADMAP
                </div>
                <div className="flex items-center text-sm font-bold text-brand-green">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  24/7 DEDICATED SUPPORT
                </div>
              </div>
              <button onClick={() => setCurrentPage('contact')} className="w-full bg-brand-green py-5 rounded-2xl font-black text-lg hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-brand-green/20 uppercase tracking-widest">Inquire for Free Quote</button>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default DigitalServices;
