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
                    <Link to="/buy/guide" className="block px-6 py-3 hover:bg-beige hover:text-gold transition-colors border-b border-gray-50">Buyers Guide</Link>
                    <Link to="/sell/guide" className="block px-6 py-3 hover:bg-beige hover:text-gold transition-colors">Sellers Guide</Link>
                </div>
            </div>

            <Link to="/dubai-real-estate" className="hover:text-gold transition-colors uppercase">Dubai</Link>
            <Link to="/about" className="hover:text-gold transition-colors uppercase">About</Link>
            
            {/* CTA Button */}
            <a href="#contact" className="bg-charcoal text-white px-6 py-2.5 hover:bg-gold transition-colors uppercase tracking-wider text-xs font-bold rounded-sm shadow-md">
                Contact
            </a>

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
      <div className={`fixed inset-0 z-[200] xl:hidden transition-all duration-300 ${isOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible delay-300'}`}>
        {/* Backdrop - Click to close */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Drawer Panel */}
        <div className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col h-full overflow-y-auto`}>
            
            {/* Drawer Header with Close Button */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <span className="text-xl font-serif font-bold text-charcoal">Menu</span>
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-gray-100">
                    <X size={28} />
                </button>
            </div>

            {/* Drawer Content */}
            <div className="flex flex-col p-6 space-y-6">
                <Link to="/" className="text-xl font-medium hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/search" className="text-xl font-medium hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>Search Properties</Link>
                
                <div className="space-y-4">
                    <button onClick={() => toggleDropdown('services')} className="flex items-center justify-between w-full text-xl font-medium hover:text-gold transition-colors">
                        <span>Services</span>
                        <ChevronDown size={20} className={`transform transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <div className={`pl-4 space-y-3 border-l-2 border-gray-100 overflow-hidden transition-all duration-300 ${activeDropdown === 'services' ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                        <Link to="/valuation" className="block text-gray-600 hover:text-gold py-1" onClick={() => setIsOpen(false)}>Home Valuation</Link>
                        <Link to="/buy/guide" className="block text-gray-600 hover:text-gold py-1" onClick={() => setIsOpen(false)}>Buyers Guide</Link>
                        <Link to="/sell/guide" className="block text-gray-600 hover:text-gold py-1" onClick={() => setIsOpen(false)}>Sellers Guide</Link>
                    </div>
                </div>

                <Link to="/dubai-real-estate" className="text-xl font-medium hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>Dubai Real Estate</Link>
                <Link to="/about" className="text-xl font-medium hover:text-gold transition-colors" onClick={() => setIsOpen(false)}>About Us</Link>
                
                <div className="pt-6 mt-4 border-t border-gray-100">
                     <a href="#contact" className="btn-primary w-full text-center py-3 block" onClick={() => setIsOpen(false)}>Contact Us</a>
                </div>
                
                 {/* Google Translate Mobile - Placeholder if needed, or rely on desktop one if visible. 
                     Since the desktop one is hidden in mobile view, we might need a mobile instance or just hide it. 
                     The previous code had it. Let's keep it but ensure it doesn't conflict. */}
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
