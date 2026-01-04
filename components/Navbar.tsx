
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileMenuOpen]);

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

  // Determine navbar height for mobile menu offset
  // Base is roughly 75-80px, scrolled is 60-65px
  const mobileMenuTop = isScrolled ? 'top-[64px]' : 'top-[82px]';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Accent Bar */}
      <div className="bg-[#0A3D62] h-1.5 w-full"></div>
      
      {/* Main Nav Bar */}
      <div className={`bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-slate-100 ${isScrolled ? 'py-3 shadow-md' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => handleNavClick('home')}>
            <div className="flex items-end space-x-1 h-8 mr-2 transition-transform group-hover:scale-105">
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
          
          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-12">
            <div className="flex space-x-8 items-center">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-xs font-bold tracking-widest transition-colors py-2 relative group ${
                  currentPage === 'home' ? 'text-[#0A3D62]' : 'text-slate-500 hover:text-[#0A3D62]'
                }`}
              >
                HOME
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0A3D62] transform transition-transform duration-300 ${currentPage === 'home' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`text-xs font-bold tracking-widest transition-colors py-2 relative group ${
                  currentPage === 'about' ? 'text-[#0A3D62]' : 'text-slate-500 hover:text-[#0A3D62]'
                }`}
              >
                ABOUT US
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0A3D62] transform transition-transform duration-300 ${currentPage === 'about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>

              {/* Desktop Dropdown */}
              <div 
                className="relative group/dropdown"
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
                  <div className="p-2 space-y-1 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    {serviceDropdownItems.map((item) => (
                      <button
                        key={item.view}
                        onClick={() => handleNavClick(item.view)}
                        className="w-full flex flex-col text-left px-4 py-3 rounded-xl hover:bg-slate-50 transition-all group/item"
                      >
                        <span className={`text-xs font-extrabold ${item.color} group-hover/item:translate-x-1 transition-transform`}>
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
                className={`text-xs font-bold tracking-widest transition-colors py-2 relative group ${
                  currentPage === 'portfolio' ? 'text-[#0A3D62]' : 'text-slate-500 hover:text-[#0A3D62]'
                }`}
              >
                PORTFOLIO
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0A3D62] transform transition-transform duration-300 ${currentPage === 'portfolio' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>

              <button
                onClick={() => handleNavClick('blog')}
                className={`text-xs font-bold tracking-widest transition-colors py-2 relative group ${
                  currentPage === 'blog' ? 'text-[#0A3D62]' : 'text-slate-500 hover:text-[#0A3D62]'
                }`}
              >
                BLOG
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0A3D62] transform transition-transform duration-300 ${currentPage === 'blog' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`text-xs font-bold tracking-widest transition-colors py-2 relative group ${
                  currentPage === 'contact' ? 'text-[#0A3D62]' : 'text-slate-500 hover:text-[#0A3D62]'
                }`}
              >
                CONTACT
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#0A3D62] transform transition-transform duration-300 ${currentPage === 'contact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>
            </div>
          </div>

          {/* Hamburger Menu Toggle */}
          <button 
            className="lg:hidden text-slate-800 p-2 focus:outline-none hover:bg-slate-50 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 absolute' : 'mb-1.5'}`}></span>
              <span className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></span>
              <span className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 absolute' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className={`lg:hidden fixed inset-0 ${mobileMenuTop} bg-white z-[60] overflow-y-auto pb-20 animate-fade-in`}
          style={{ height: 'calc(100vh - 80px)' }}
        >
          <div className="p-6 space-y-2">
            <button onClick={() => handleNavClick('home')} className="block w-full text-left py-4 px-4 rounded-xl hover:bg-slate-50 border-b border-slate-50 font-bold text-slate-700 transition-colors">HOME</button>
            <button onClick={() => handleNavClick('about')} className="block w-full text-left py-4 px-4 rounded-xl hover:bg-slate-50 border-b border-slate-50 font-bold text-slate-700 transition-colors">ABOUT US</button>
            <button onClick={() => handleNavClick('services')} className="block w-full text-left py-4 px-4 rounded-xl hover:bg-slate-100 border-b border-slate-50 font-bold text-[#0A3D62] transition-colors">SERVICES</button>
            
            <div className="pl-8 space-y-3 pt-2 border-b border-slate-50 pb-6">
              {serviceDropdownItems.map(item => (
                <button 
                  key={item.view} 
                  onClick={() => handleNavClick(item.view)} 
                  className={`block w-full text-left py-2 text-sm font-bold transition-transform hover:translate-x-1 ${item.color}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <button onClick={() => handleNavClick('portfolio')} className="block w-full text-left py-4 px-4 rounded-xl hover:bg-slate-50 border-b border-slate-50 font-bold text-slate-700 transition-colors">PORTFOLIO</button>
            <button onClick={() => handleNavClick('blog')} className="block w-full text-left py-4 px-4 rounded-xl hover:bg-slate-50 border-b border-slate-50 font-bold text-slate-700 transition-colors">BLOG</button>
            <button onClick={() => handleNavClick('contact')} className="block w-full text-left py-4 px-4 rounded-xl hover:bg-slate-50 border-b border-slate-50 font-bold text-slate-700 transition-colors">CONTACT</button>
            
            <div className="mt-12 p-6 bg-[#0A3D62] rounded-3xl text-white">
              <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-4">Direct Support</p>
              <a href="tel:+919529922984" className="flex items-center space-x-3 mb-4">
                <svg className="w-5 h-5 text-[#78C800]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span className="font-bold">+91 95299 22984</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
