import React from 'react';
import { Phone, Instagram, Mail, MapPin, Facebook, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-24 pb-12 border-t border-gold/20 font-sans relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
      
      <div className="container-custom px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="block">
                <img src="/Soft_Life_Realty_Logo.png" alt="SoftLife Realty Logo" className="h-24 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-light max-w-xs">
              Redefining the luxury real estate experience. Whether you are buying, selling, or investing, Anne & Shakirah are your trusted global partners.
            </p>
            <div className="flex space-x-4">
                <a href="https://instagram.com/softliferealtygroup" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-gold hover:text-white transition-all duration-300 group">
                    <Instagram size={18} className="text-gray-300 group-hover:text-white" />
                </a>
                <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-gold hover:text-white transition-all duration-300 group">
                    <Facebook size={18} className="text-gray-300 group-hover:text-white" />
                </a>
                <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-gold hover:text-white transition-all duration-300 group">
                    <Linkedin size={18} className="text-gray-300 group-hover:text-white" />
                </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-gold font-bold tracking-[0.2em] uppercase text-xs">Discover</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link to="/search" className="hover:text-gold transition-colors flex items-center group"><ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> Property Search</Link></li>
              <li><Link to="/valuation" className="hover:text-gold transition-colors flex items-center group"><ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> Home Valuation</Link></li>
              <li><Link to="/golden-visa" className="hover:text-gold transition-colors flex items-center group"><ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> Golden Visa</Link></li>
              <li><Link to="/dubai-real-estate" className="hover:text-gold transition-colors flex items-center group"><ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> Dubai Real Estate</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-8">
            <h4 className="text-gold font-bold tracking-[0.2em] uppercase text-xs">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><Link to="/buy/guide" className="hover:text-gold transition-colors flex items-center group"><ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> Buyers Guide</Link></li>
              <li><Link to="/sell/guide" className="hover:text-gold transition-colors flex items-center group"><ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> Sellers Guide</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors flex items-center group"><ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> About Us</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors flex items-center group"><ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors flex items-center group"><ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" /> Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-gold font-bold tracking-[0.2em] uppercase text-xs">Contact</h4>
            <div className="space-y-6 text-sm text-gray-400 font-light">
               <div className="flex items-start space-x-4 group">
                <MapPin size={20} className="text-gold mt-1 flex-shrink-0" />
                <span>Dallas, Texas & <br/>Dubai, UAE</span>
              </div>
               <div className="flex items-start space-x-4 group">
                <Phone size={20} className="text-gold mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                    <a href="tel:+14698231886" className="hover:text-white transition-colors">+1 (469) 823-1886</a>
                    <a href="tel:+14699702664" className="hover:text-white transition-colors">+1 (469) 970-2664</a>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <Mail size={20} className="text-gold mt-1 flex-shrink-0" />
                <a href="mailto:info@softliferealtygroup.com" className="hover:text-white transition-colors break-all">info@softliferealtygroup.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light tracking-wide">
          <p>&copy; {new Date().getFullYear()} SoftLife Realty Group. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
