
import React, { useState, useEffect, useRef } from 'react';
import { PageView } from '../App';

interface NavbarProps {
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceDropdownItems: { label: string; view: PageView; desc: string; color: string }[] = [
    { label: 'Financial Services', view: 'financial-services', desc: 'Life Insurance & Loans', color: 'text-[#0A3D62]' },
    { label: 'Digital Solutions', view: 'digital-services', desc: 'Web & Marketing', color: 'text-[#78C800]' },
    { label: 'CSC & Govt Services', view: 'csc-services', desc: 'PAN & Govt Certs', color: 'text-[#FF8C00]' },
    { label: 'Office Support', view: 'office-support', desc: 'Documentation', color: 'text-slate-500' },
  ];

  const handleNavClick = (view: PageView) => {
    setCurrentPage(view);
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
      <div className="bg-[#0A3D62] h-1.5 w-full"></div>
      
      {/* Top utility bar removed to eliminate login options for customers */}

      <div className={`bg-white transition-all ${isScrolled ? 'py-3 shadow-md' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="flex items-end space-x-1 h-8 mr-2">
                <div className="w-1.5 h-3 bg-[#0A3D62]"></div>
                <div className="w-1.5 h-5 bg-[#3498db]"></div>
                <div className="w-1.5 h-7 bg-[#78C800] relative">
                    <div className="absolute -top-1 -right-2 w-3 h-3 border-t-2 border-r-2 border-[#FF8C00] rotate-45"></div>
                </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-extrabold tracking-tighter text-slate-800">INVESTO</span>
              <div className="bg-[#FF8C00] px-1 py-0.5 mt-0.5">
                <span className="text-[8px] font-bold text-white tracking-widest uppercase">MULTISERVICES</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-12">
            <div className="flex space-x-8 items-center">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-xs font-bold tracking-widest transition-colors ${
                  currentPage === 'home' ? 'text-[#0A3D62]' : 'text-slate-500 hover:text-[#0A3D62]'
                }`}
              >
                HOME
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`text-xs font-bold tracking-widest transition-colors ${
                  currentPage === 'about' ? 'text-[#0A3D62]' : 'text-slate-500 hover:text-[#0A3D62]'
                }`}
              >
                ABOUT US
              </button>

              <div 
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick('services')}
                  className={`flex items-center text-xs font-bold tracking-widest transition-colors py-2 ${
                    currentPage === 'services' || currentPage.includes('services') || currentPage === 'office-support' ? 'text-[#0A3D62]' : 'text-slate-500 hover:text-[#0A3D62]'
                  }`}
                >
                  SERVICES
                  <svg 
                    className={`ml-1 w-3 h-3 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-[#0A3D62]' : 'text-slate-400'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white border border-slate-100 corporate-card-shadow rounded-2xl overflow-hidden transition-all duration-300 transform origin-top ${
                    isDropdownOpen ? 'opacity-100 scale-100 translate-y-2 visible' : 'opacity-0 scale-95 translate-y-0 invisible'
                  }`}
                >
                  <div className="p-2 bg-slate-50 border-b border-slate-100">
                    <button 
                      onClick={() => handleNavClick('services')}
                      className="w-full text-left px-4 py-2 text-[10px] font-bold text-slate-400 hover:text-[#0A3D62] transition-colors"
                    >
                      BROWSE ALL SERVICES →
                    </button>
                  </div>
                  <div className="p-2 space-y-1">
                    {serviceDropdownItems.map((item) => (
                      <button
                        key={item.view}
                        onClick={() => handleNavClick(item.view)}
                        className="w-full flex flex-col text-left px-4 py-3 rounded-xl hover:bg-slate-50 transition-all group"
                      >
                        <span className={`text-xs font-extrabold ${item.color} group-hover:translate-x-1 transition-transform`}>
                          {item.label}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {item.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleNavClick('portfolio')}
                className={`text-xs font-bold tracking-widest transition-colors ${
                  currentPage === 'portfolio' ? 'text-[#0A3D62]' : 'text-slate-500 hover:text-[#0A3D62]'
                }`}
              >
                PORTFOLIO
              </button>

              <button
                onClick={() => handleNavClick('blog')}
                className={`text-xs font-bold tracking-widest transition-colors ${
                  currentPage === 'blog' ? 'text-[#0A3D62]' : 'text-slate-500 hover:text-[#0A3D62]'
                }`}
              >
                BLOG
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`text-xs font-bold tracking-widest transition-colors ${
                  currentPage === 'contact' ? 'text-[#0A3D62]' : 'text-slate-500 hover:text-[#0A3D62]'
                }`}
              >
                CONTACT
              </button>
            </div>
          </div>

          <button 
            className="lg:hidden text-slate-800 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-2xl animate-fade-in h-screen overflow-y-auto pb-20">
          <div className="p-6 space-y-4">
            <button onClick={() => handleNavClick('home')} className="block w-full text-left py-4 border-b border-slate-50 font-bold text-slate-700">HOME</button>
            <button onClick={() => handleNavClick('about')} className="block w-full text-left py-4 border-b border-slate-50 font-bold text-slate-700">ABOUT US</button>
            <button onClick={() => handleNavClick('services')} className="block w-full text-left py-4 border-b border-slate-50 font-bold text-[#0A3D62]">SERVICES</button>
            <div className="pl-6 space-y-4 pt-2 border-b border-slate-50 pb-4">
              {serviceDropdownItems.map(item => (
                <button key={item.view} onClick={() => handleNavClick(item.view)} className={`block w-full text-left text-sm font-bold ${item.color}`}>{item.label}</button>
              ))}
            </div>
            <button onClick={() => handleNavClick('portfolio')} className="block w-full text-left py-4 border-b border-slate-50 font-bold text-slate-700">PORTFOLIO</button>
            <button onClick={() => handleNavClick('blog')} className="block w-full text-left py-4 border-b border-slate-50 font-bold text-slate-700">BLOG</button>
            <button onClick={() => handleNavClick('contact')} className="block w-full text-left py-4 border-b border-slate-50 font-bold text-slate-700">CONTACT</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
