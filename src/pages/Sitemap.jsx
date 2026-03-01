import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FadeIn from '../components/FadeIn';

const Sitemap = () => {
  const links = [
    {
      category: "Main",
      items: [
        { name: "Home", path: "/" },
        { name: "Search Properties", path: "/search" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
      ]
    },
    {
      category: "Services",
      items: [
        { name: "Home Valuation", path: "/valuation" },
        { name: "Buyers Guide", path: "/buy/guide" },
        { name: "Sellers Guide", path: "/sell/guide" },
      ]
    },
    {
      category: "Global",
      items: [
        { name: "Dubai Real Estate", path: "/dubai-real-estate" },
        { name: "Golden Visa Info", path: "/dubai-real-estate" }, // Anchor link usually, but pointing to page for now
      ]
    },
    {
      category: "Legal",
      items: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Sitemap", path: "/sitemap" },
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-charcoal">
      <SEO 
        title="Sitemap - SoftLife Realty" 
        description="Navigate the SoftLife Realty Group website easily with our sitemap."
        keywords="sitemap, site map, softlife realty pages"
      />
      
      <section className="bg-charcoal text-white py-20 relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" alt="Luxury Texture" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 to-charcoal/90"></div>
        </div>

        <div className="container-custom px-4 relative z-10 text-center">
          <Breadcrumbs className="text-white/70 justify-center mb-6" />
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Sitemap</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
              Overview of all pages on our website.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom px-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {links.map((section, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="mb-8">
                  <h3 className="text-xl font-serif font-bold text-charcoal mb-6 border-b-2 border-gold/20 pb-2 inline-block">
                    {section.category}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link 
                          to={link.path} 
                          className="text-gray-600 hover:text-gold transition-colors block py-1"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
