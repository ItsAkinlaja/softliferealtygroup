import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

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
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-sand shadow-sm transition-all duration-300">
      <div className="container-custom flex justify-between items-center py-4 px-4">
        {/* Logo - Using Image */}
        <Link to="/" className="flex items-center">
          <img src="/Soft_Life_Realty_Logo.png" alt="SoftLife Realty Logo" className="h-14 w-auto object-contain hover:opacity-90 transition-opacity" />
        </Link>

        {/* Desktop Nav - Simplified */}
        <nav className="hidden xl:flex items-center space-x-8 text-sm font-medium tracking-wide text-gray-800">
            <Link to="/search" className="hover:text-gold transition-colors uppercase">Search</Link>
            
            {/* Services Dropdown (Valuation, Buy, Sell) */}
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

            {/* Google Translate Container */}
            <div id="google_translate_element" className="ml-2 scale-90 origin-left"></div>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden text-charcoal focus:outline-none hover:text-gold transition-colors">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`xl:hidden fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} pt-24 px-6 overflow-y-auto`}>
          <div className="flex flex-col space-y-6 text-center">
            <Link to="/search" className="text-xl font-medium uppercase border-b border-gray-100 pb-4" onClick={() => setIsOpen(false)}>Search Properties</Link>
            
            <button onClick={() => toggleDropdown('services')} className="text-xl font-medium uppercase flex items-center justify-center pb-2">
                Services <ChevronDown size={16} className={`ml-2 transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'services' && (
                <div className="bg-beige/50 py-4 space-y-4 rounded-lg animate-fadeIn">
                    <Link to="/valuation" className="block text-gray-600 hover:text-gold" onClick={() => setIsOpen(false)}>Home Valuation</Link>
                    <Link to="/buy/guide" className="block text-gray-600 hover:text-gold" onClick={() => setIsOpen(false)}>Buyers Guide</Link>
                    <Link to="/sell/guide" className="block text-gray-600 hover:text-gold" onClick={() => setIsOpen(false)}>Sellers Guide</Link>
                </div>
            )}

            <Link to="/dubai-real-estate" className="text-xl font-medium uppercase border-b border-gray-100 pb-4" onClick={() => setIsOpen(false)}>Dubai Real Estate</Link>
            <Link to="/about" className="text-xl font-medium uppercase border-b border-gray-100 pb-4" onClick={() => setIsOpen(false)}>About Us</Link>
            <a href="#contact" className="btn-primary w-full mt-4" onClick={() => setIsOpen(false)}>Contact Us</a>
            
             {/* Google Translate Mobile */}
             <div className="flex justify-center pt-8 border-t border-gray-100 mt-4">
                <div id="google_translate_element_mobile"></div> 
             </div>
          </div>
      </div>
    </header>
  );
};

export default Header;
