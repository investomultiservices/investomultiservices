
import React from 'react';
import { PageView } from '../App';

interface FooterProps {
  setCurrentPage: (page: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <img 
                src="https://raw.githubusercontent.com/faraaz-ansari/investo-multiservices-assets/main/logo.png" 
                alt="Investo Logo" 
                className="w-20 h-20 object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/80?text=I";
                }}
              />
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Your trusted partner for all Financial, Digital, and Government services. Fast processing, affordable rates, and expert guidance guaranteed.
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="https://www.facebook.com/profile.php?id=61585650010886" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0A3D62] transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="https://www.instagram.com/investomultiservices" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#FF8C00] transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.youtube.com/@investomultiservices" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-rose-600 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Navigation</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-[#FF8C00] transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-[#FF8C00] transition-colors">About Us</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="hover:text-[#FF8C00] transition-colors">Services</button></li>
              <li><button onClick={() => setCurrentPage('portfolio')} className="hover:text-[#FF8C00] transition-colors">Portfolio</button></li>
              <li><button onClick={() => setCurrentPage('blog')} className="hover:text-[#FF8C00] transition-colors">Blog</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-[#FF8C00] transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start">
                 <svg className="w-5 h-5 mr-3 text-[#78C800] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                 <div>
                   <p className="font-bold text-white/90">Office Address</p>
                   <p className="text-xs leading-relaxed">Old ITI, opposite sarvodaya school,<br />Rajur, Akole - 422604</p>
                 </div>
              </li>
              <li className="flex items-start">
                 <svg className="w-5 h-5 mr-3 text-[#78C800] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                 <div>
                   <p>9529922984</p>
                   <p>8108610755</p>
                 </div>
              </li>
              <li className="flex items-center">
                 <svg className="w-5 h-5 mr-3 text-[#78C800]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                 <span className="break-all">investomultiservices@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>© 2024 Investo Multiservices. All rights reserved.</p>
          <div className="mt-4 md:mt-0 italic">
            Trusted • Reliable • Faster • Hassle-Free • Expert
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
