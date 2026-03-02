import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Google Translate Init
  useEffect(() => {
    const addGoogleTranslateScript = () => {
        if (!document.getElementById("google-translate-script")) {
            const script = document.createElement("script");
            script.id = "google-translate-script";
            script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);
            
            window.googleTranslateElementInit = () => {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'en',
                        includedLanguages: 'en,es,ar,fr,de,hi,zh-CN',
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                        autoDisplay: false,
                    },
                    'google_translate_element'
                );
            };
        }
    };
    addGoogleTranslateScript();
  }, []);

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-[100] border-b border-sand shadow-sm transition-all duration-300">
        <div className="container-custom flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
            <img src="/Soft_Life_Realty_Logo.png" alt="SoftLife Realty Logo" className="h-10 md:h-14 w-auto object-contain hover:opacity-90 transition-opacity" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-8 text-sm font-medium tracking-wide text-gray-800">
            <Link to="/search" className="hover:text-gold transition-colors uppercase">Search</Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
                <button className="flex items-center hover:text-gold transition-colors uppercase py-4">
                    Services <ChevronDown size={14} className="ml-1" />
                </button>
                <div className="absolute left-0 mt-0 w-56 bg-white border border-sand shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 rounded-sm overflow-hidden z-50">
                    <Link to="/valuation" className="block px-6 py-3 hover:bg-beige hover:text-gold transition-colors border-b border-gray-50">Home Valuation</Link>
                    <Link to="/mortgage-calculator" className="block px-6 py-3 hover:bg-beige hover:text-gold transition-colors border-b border-gray-50">Mortgage Calculator</Link>
                    <Link to="/buy/guide" className="block px-6 py-3 hover:bg-beige hover:text-gold transition-colors border-b border-gray-50">Buyers Guide</Link>
                    <Link to="/sell/guide" className="block px-6 py-3 hover:bg-beige hover:text-gold transition-colors">Sellers Guide</Link>
                </div>
            </div>

            <Link to="/dubai-real-estate" className="hover:text-gold transition-colors uppercase">Dubai</Link>
            <Link to="/lifestyle-quiz" className="hover:text-gold transition-colors uppercase">Quiz</Link>
            <Link to="/about" className="hover:text-gold transition-colors uppercase">About</Link>
            
            {/* CTA Button */}
            <Link to="/contact" className="bg-charcoal text-white px-6 py-2.5 hover:bg-gold transition-colors uppercase tracking-wider text-xs font-bold rounded-sm shadow-md">
                Contact
            </Link>

            {/* Google Translate Container with Icon */}
            <div className="ml-2 scale-90 origin-left flex items-center">
              <Globe size={16} className="text-gold mr-2" />
              <div id="google_translate_element"></div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(true)} 
            className={`xl:hidden text-charcoal focus:outline-none hover:text-gold transition-all duration-300 p-2 ${isOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer & Backdrop */}
      <div className={`fixed inset-0 z-[200] xl:hidden transition-all duration-500 ${isOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible delay-500'}`}>
        {/* Backdrop - Click to close */}
        <div 
          className={`absolute inset-0 bg-charcoal/80 backdrop-blur-md transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Drawer Panel */}
        <div className={`absolute top-0 right-0 bottom-0 w-full md:w-[400px] bg-white shadow-2xl transform transition-transform duration-500 cubic-bezier(0.22, 1, 0.36, 1) ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col h-full overflow-y-auto`}>
            
            {/* Drawer Header */}
            <div className="flex justify-between items-center p-8 border-b border-gray-100">
                <img src="/Soft_Life_Realty_Logo.png" alt="Logo" className="h-10 w-auto" />
                <button 
                    onClick={() => setIsOpen(false)} 
                    className="group bg-gray-50 hover:bg-gold p-3 rounded-full transition-all duration-300"
                >
                    <X size={24} className="text-charcoal group-hover:text-white transition-colors" />
                </button>
            </div>

            {/* Drawer Content */}
            <div className="flex flex-col px-8 py-8 space-y-6 flex-grow">
                <Link to="/" className="text-2xl font-serif font-bold text-charcoal hover:text-gold transition-colors flex items-center justify-between group border-b border-gray-50 pb-4" onClick={() => setIsOpen(false)}>
                    Home
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold text-sm">01</span>
                </Link>
                
                <Link to="/search" className="text-2xl font-serif font-bold text-charcoal hover:text-gold transition-colors flex items-center justify-between group border-b border-gray-50 pb-4" onClick={() => setIsOpen(false)}>
                    Search
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold text-sm">02</span>
                </Link>
                
                <div className="space-y-4 border-b border-gray-50 pb-4">
                    <button onClick={() => toggleDropdown('services')} className="flex items-center justify-between w-full text-2xl font-serif font-bold text-charcoal hover:text-gold transition-colors group">
                        <span>Services</span>
                        <ChevronDown size={20} className={`transform transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180 text-gold' : 'text-gray-400'}`} />
                    </button>
                    
                    <div className={`pl-4 space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${activeDropdown === 'services' ? 'max-h-60 opacity-100 pt-2' : 'max-h-0 opacity-0'}`}>
                        <Link to="/valuation" className="block text-lg text-gray-500 hover:text-gold font-light" onClick={() => setIsOpen(false)}>Home Valuation</Link>
                        <Link to="/mortgage-calculator" className="block text-lg text-gray-500 hover:text-gold font-light" onClick={() => setIsOpen(false)}>Mortgage Calculator</Link>
                        <Link to="/buy/guide" className="block text-lg text-gray-500 hover:text-gold font-light" onClick={() => setIsOpen(false)}>Buyers Guide</Link>
                        <Link to="/sell/guide" className="block text-lg text-gray-500 hover:text-gold font-light" onClick={() => setIsOpen(false)}>Sellers Guide</Link>
                    </div>
                </div>

                <Link to="/dubai-real-estate" className="text-2xl font-serif font-bold text-charcoal hover:text-gold transition-colors flex items-center justify-between group border-b border-gray-50 pb-4" onClick={() => setIsOpen(false)}>
                    Dubai
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold text-sm">04</span>
                </Link>

                <Link to="/lifestyle-quiz" className="text-2xl font-serif font-bold text-charcoal hover:text-gold transition-colors flex items-center justify-between group border-b border-gray-50 pb-4" onClick={() => setIsOpen(false)}>
                    Quiz
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold text-sm">05</span>
                </Link>
                
                <Link to="/about" className="text-2xl font-serif font-bold text-charcoal hover:text-gold transition-colors flex items-center justify-between group border-b border-gray-50 pb-4" onClick={() => setIsOpen(false)}>
                    About
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold text-sm">06</span>
                </Link>
                
                <div className="mt-auto pt-8">
                     <Link to="/contact" className="btn-primary w-full text-center py-4 block text-lg" onClick={() => setIsOpen(false)}>Get in Touch</Link>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
