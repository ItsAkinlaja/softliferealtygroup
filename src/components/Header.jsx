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
      <div className="bg-charcoal text-white py-2 hidden md:block">
        <div className="container-custom px-4 flex justify-between items-center text-xs tracking-wider">
            <div className="flex gap-6">
                <a href="tel:+14698231886" className="hover:text-gold transition-colors font-bold">+1 (469) 823-1886</a>
                <a href="tel:+14699702664" className="hover:text-gold transition-colors font-bold">+1 (469) 970-2664</a>
            </div>
            <div className="flex gap-4">
                <a href="mailto:info@softliferealtygroup.com" className="hover:text-gold transition-colors">info@softliferealtygroup.com</a>
            </div>
        </div>
      </div>
      <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-[100] border-b border-sand shadow-sm transition-all duration-300">
        <div className="container-custom flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
            <img src="/Soft_Life_Realty_Logo.png" alt="SoftLife Realty Logo" className="h-10 md:h-14 w-auto object-contain hover:opacity-90 transition-opacity" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-8 text-sm font-sans font-medium tracking-wide text-gray-800">
            <Link to="/" className="hover:text-charcoal transition-colors uppercase">Home</Link>
            <Link to="/search" className="hover:text-charcoal transition-colors uppercase">Search</Link>
            
            {/* Buy Dropdown */}
            <div className="relative group">
                <button className="flex items-center hover:text-gold transition-colors uppercase py-4 font-sans">
                    Buy <ChevronDown size={14} className="ml-1" />
                </button>
                <div className="absolute left-0 mt-0 w-64 bg-white border border-sand shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 rounded-sm overflow-hidden z-50">
                    <Link to="/buy/guide" className="block px-6 py-3 hover:bg-beige hover:text-gold transition-colors border-b border-gray-50 font-sans">Buyers Guide</Link>
                    <Link to="/buyer-inquiry" className="block px-6 py-3 hover:bg-beige hover:text-gold transition-colors border-b border-gray-50 font-sans">Buyer Inquiry</Link>
                    <Link to="/mortgage-calculator" className="block px-6 py-3 hover:bg-beige hover:text-gold transition-colors border-b border-gray-50 font-sans">Mortgage Calculator</Link>
                    <Link to="/relocation-guide" className="block px-6 py-3 hover:bg-beige hover:text-gold transition-colors font-sans">Moving to Dallas, Texas</Link>
                </div>
            </div>

            {/* Sell Dropdown */}
            <div className="relative group">
                <button className="flex items-center hover:text-gold transition-colors uppercase py-4 font-sans">
                    Sell <ChevronDown size={14} className="ml-1" />
                </button>
                <div className="absolute left-0 mt-0 w-56 bg-white border border-sand shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 rounded-sm overflow-hidden z-50">
                    <Link to="/valuation" className="block px-6 py-3 hover:bg-beige hover:text-gold transition-colors border-b border-gray-50 font-sans">Home Valuation</Link>
                    <Link to="/seller-inquiry" className="block px-6 py-3 hover:bg-beige hover:text-gold transition-colors border-b border-gray-50 font-sans">Seller Inquiry</Link>
                    <Link to="/sell/guide" className="block px-6 py-3 hover:bg-beige hover:text-gold transition-colors font-sans">Sellers Guide</Link>
                </div>
            </div>

            <Link to="/dubai-real-estate" className="hover:text-gold transition-colors uppercase">Dubai</Link>
            
            {/* CTA Button */}
            <Link to="/contact" className="bg-charcoal text-white px-6 py-2.5 hover:bg-gold transition-colors uppercase tracking-wider text-xs font-bold rounded-sm shadow-md font-serif">
                Let's Connect
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

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <button
            onClick={() => setIsOpen(false)}
            className="absolute top-32 right-6 bg-charcoal hover:bg-gold text-white hover:text-charcoal transition-colors p-3 rounded-full shadow-lg border-2 border-white z-[110]"
            aria-label="Close Menu"
        >
            <X size={36} />
        </button>

        <nav className="flex flex-col items-center space-y-6 text-center w-full max-w-md px-6">
            <Link to="/" className="text-3xl font-serif font-bold text-charcoal hover:text-gold transition-colors flex items-center justify-between group border-b border-gray-50 pb-4 w-full" onClick={() => setIsOpen(false)}>
                Home
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold text-sm">01</span>
            </Link>

            <Link to="/search" className="text-3xl font-serif font-bold text-charcoal hover:text-gold transition-colors flex items-center justify-between group border-b border-gray-50 pb-4 w-full" onClick={() => setIsOpen(false)}>
                Search
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold text-sm">02</span>
            </Link>
            
            {/* Mobile Buy Dropdown */}
            <div className="w-full border-b border-gray-50 pb-4">
                <button onClick={() => toggleDropdown('buy')} className="flex items-center justify-between w-full text-3xl font-serif font-bold text-charcoal hover:text-gold transition-colors group">
                    <span>Buy</span>
                    <ChevronDown size={24} className={`transform transition-transform duration-300 ${activeDropdown === 'buy' ? 'rotate-180 text-gold' : 'text-gray-400'}`} />
                </button>
                
                <div className={`space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${activeDropdown === 'buy' ? 'max-h-60 opacity-100 pt-4' : 'max-h-0 opacity-0'}`}>
                        <Link to="/buy/guide" className="block text-xl text-gray-500 hover:text-gold font-light" onClick={() => setIsOpen(false)}>Buyers Guide</Link>
                        <Link to="/buyer-inquiry" className="block text-xl text-gray-500 hover:text-gold font-light" onClick={() => setIsOpen(false)}>Buyer Inquiry</Link>
                        <Link to="/mortgage-calculator" className="block text-xl text-gray-500 hover:text-gold font-light" onClick={() => setIsOpen(false)}>Mortgage Calculator</Link>
                        <Link to="/relocation-guide" className="block text-xl text-gray-500 hover:text-gold font-light" onClick={() => setIsOpen(false)}>Moving to Dallas</Link>
                    </div>
                </div>

                {/* Mobile Sell Dropdown */}
                <div className="w-full border-b border-gray-50 pb-4">
                    <button onClick={() => toggleDropdown('sell')} className="flex items-center justify-between w-full text-3xl font-serif font-bold text-charcoal hover:text-gold transition-colors group">
                        <span>Sell</span>
                        <ChevronDown size={24} className={`transform transition-transform duration-300 ${activeDropdown === 'sell' ? 'rotate-180 text-gold' : 'text-gray-400'}`} />
                    </button>
                    
                    <div className={`space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${activeDropdown === 'sell' ? 'max-h-60 opacity-100 pt-4' : 'max-h-0 opacity-0'}`}>
                        <Link to="/valuation" className="block text-xl text-gray-500 hover:text-gold font-light" onClick={() => setIsOpen(false)}>Home Valuation</Link>
                        <Link to="/seller-inquiry" className="block text-xl text-gray-500 hover:text-gold font-light" onClick={() => setIsOpen(false)}>Seller Inquiry</Link>
                        <Link to="/sell/guide" className="block text-xl text-gray-500 hover:text-gold font-light" onClick={() => setIsOpen(false)}>Sellers Guide</Link>
                    </div>
                </div>

            <Link to="/dubai-real-estate" className="text-3xl font-serif font-bold text-charcoal hover:text-gold transition-colors flex items-center justify-between group border-b border-gray-50 pb-4 w-full" onClick={() => setIsOpen(false)}>
                Dubai
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold text-sm">05</span>
            </Link>
            
            <Link to="/contact" className="text-3xl font-serif font-bold text-charcoal hover:text-gold transition-colors flex items-center justify-between group border-b border-gray-50 pb-4 w-full" onClick={() => setIsOpen(false)}>
                Let's Connect
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold text-sm">06</span>
            </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
