import React from 'react';
import { Phone, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-20 pb-10 border-t border-gray-100" id="contact">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <img src="/Soft_Life_Realty_Logo.png" alt="SoftLife Realty Logo" className="h-20 w-auto object-contain" />
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Redefining the luxury real estate experience. Whether you are buying, selling, or investing, Anne & Shakirah are your trusted global partners.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-black uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-light">
              <li><a href="/search" className="hover:text-black transition-colors uppercase">Home Search</a></li>
              <li><a href="/valuation" className="hover:text-black transition-colors uppercase">Home Valuation</a></li>
              <li><a href="/buy/guide" className="hover:text-black transition-colors uppercase">Buyers Guide</a></li>
              <li><a href="/sell/guide" className="hover:text-black transition-colors uppercase">Sellers Guide</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-black uppercase tracking-widest">Contact</h4>
            <div className="space-y-3 text-sm text-gray-500 font-light">
               <p className="flex items-center space-x-2">
                <Phone size={16} className="text-black" />
                <span>+1 (469) 823-1886</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone size={16} className="text-black" />
                <span>+1 (469) 970-2664</span>
              </p>
              <p className="flex items-center space-x-2">
                <ExternalLink size={16} className="text-black" />
                <span>www.softliferealtygroup.com</span>
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-black uppercase tracking-widest">Follow Us</h4>
             <div className="flex items-center space-x-4">
                <a href="https://instagram.com/softliferealtygroup" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">
                    <Instagram size={24} />
                </a>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-10 text-center text-xs text-gray-400 font-light">
          <p>&copy; {new Date().getFullYear()} SoftLife Realty Group. All rights reserved.</p>
          <p className="mt-2">SoftLife Realty Group operates as an independent real estate broker.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
