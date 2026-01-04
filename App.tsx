
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AISection from './components/AISection';
import Stats from './components/Stats';
import Footer from './components/Footer';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import PortfolioPage from './components/PortfolioPage';
import ServicesPage from './components/ServicesPage';
import BlogPostView from './components/BlogPostView';
import Admin from './components/Admin';
import ServiceDetailsPlaceholder from './components/ServiceDetailsPlaceholder';

// New Service Pages
import FinancialServices from './services/FinancialServices';
import DigitalServices from './services/DigitalServices';
import CSCServices from './services/CSCServices';
import OfficeSupport from './services/OfficeSupport';

export type PageView = 
  | 'home' | 'about' | 'services' | 'blog' | 'portfolio' | 'contact' 
  | 'blog-post' | 'admin' | 'service-details'
  | 'financial-services' | 'digital-services' | 'csc-services' | 'office-support';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  // Secret Developer Access: Ctrl + Alt + Shift + A
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.shiftKey && e.key === 'A') {
        setCurrentPage(prev => prev === 'admin' ? 'home' : 'admin');
        console.log("Developer Mode Toggled");
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Dynamic Title and SEO Meta Update
  useEffect(() => {
    window.scrollTo(0, 0);
    const titles: Record<PageView, string> = {
      home: 'Investo Multiservices | One-Stop Financial & Digital Hub Rajur Akole',
      about: 'About Us | Our Mission & Values | Investo Multiservices',
      services: 'Our Services Hub | Loans, Digital & CSC Support | Investo',
      blog: 'Latest Blog & Insights | Investo Multiservices',
      portfolio: 'Success Stories | Our Portfolio | Investo Multiservices',
      contact: 'Contact Experts | Get in Touch | Investo Multiservices Rajur',
      'blog-post': 'Loading Insight...', // Placeholder, BlogPostView overrides this once data is loaded
      admin: 'Admin Console | Investo Management',
      'service-details': 'Service Details | Investo Multiservices',
      'financial-services': 'Expert Financial Solutions | Home & Personal Loans | Investo',
      'digital-services': 'Custom Web Design & SEO Services | Investo Digital Rajur',
      'csc-services': 'Government & CSC Support | PAN Card & Certifications | Investo',
      'office-support': 'Professional Office & Documentation Support | Investo Akole'
    };
    document.title = titles[currentPage] || 'Investo Multiservices';
  }, [currentPage, selectedPostId]);

  const handleOpenPost = (id: string) => {
    setSelectedPostId(id);
    setCurrentPage('blog-post');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <Stats setCurrentPage={setCurrentPage} />
            <section className="py-24 bg-white border-y border-slate-100">
              <Services setCurrentPage={setCurrentPage} />
            </section>
            <section id="ai-section" className="py-24 bg-slate-50">
              <AISection />
            </section>
          </>
        );
      case 'about': return <About />;
      case 'services': return <ServicesPage setCurrentPage={setCurrentPage} />;
      case 'blog': return <Blog onOpenPost={handleOpenPost} />;
      case 'blog-post': 
        return (
          <BlogPostView 
            postId={selectedPostId} 
            onBack={() => setCurrentPage('blog')} 
            setCurrentPage={setCurrentPage} 
          />
        );
      case 'portfolio': return <PortfolioPage setCurrentPage={setCurrentPage} />;
      case 'contact': return <Contact />;
      case 'admin': return <Admin />;
      case 'service-details': 
        return (
          <ServiceDetailsPlaceholder 
            onBack={() => setCurrentPage('home')} 
            onContactClick={() => setCurrentPage('contact')}
          />
        );
      
      // Dedicated Service Pages
      case 'financial-services': return <FinancialServices setCurrentPage={setCurrentPage} />;
      case 'digital-services': return <DigitalServices setCurrentPage={setCurrentPage} />;
      case 'csc-services': return <CSCServices setCurrentPage={setCurrentPage} />;
      case 'office-support': return <OfficeSupport setCurrentPage={setCurrentPage} />;
      
      default: return <Hero setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-all duration-500">
      {currentPage !== 'admin' && <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />}
      
      <main id="main-content" className="flex-grow">
        <div className="animate-fade-in">
          {renderPage()}
        </div>
      </main>

      {currentPage !== 'admin' && <Footer setCurrentPage={setCurrentPage} />}
    </div>
  );
};

export default App;
