import React from 'react';
import { Mail, Phone, MapPin, Globe, Instagram, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FadeIn from '../components/FadeIn';
import ConsultationCTA from '../sections/ConsultationCTA';

const Contact = () => {
  return (
    <div className="bg-beige min-h-screen font-sans text-charcoal">
      <SEO 
        title="Contact Us - SoftLife Realty" 
        description="Get in touch with SoftLife Realty Group. Whether buying, selling, or investing in Dubai and Dallas, our team is here to help."
        keywords="contact softlife realty, real estate contact, dallas realtor contact, dubai property contact"
      />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
          alt="Luxury Office"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container-custom px-4 flex flex-col items-center">
          <Breadcrumbs className="text-white/80 mb-6" />
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
              Get in <span className="text-gold italic">Touch</span>
            </h1>
            <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Ready to start your journey? Our team of experts is just a message away.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-20 bg-white relative -mt-16 z-30 container-custom px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dallas Office */}
            <FadeIn delay={0.1}>
                <div className="bg-beige p-10 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-gold h-full text-center group">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-gold mx-auto mb-6 shadow-md group-hover:bg-gold group-hover:text-white transition-colors">
                        <MapPin size={28} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-2">Dallas, USA</h3>
                    <p className="text-gray-500 mb-6 font-light">Headquarters</p>
                    <div className="space-y-3 text-charcoal font-medium">
                        <p>Highland Park, Dallas</p>
                        <p>Texas, 75205</p>
                        <a href="tel:+14698231886" className="block hover:text-gold transition-colors mt-4">+1 (469) 823-1886</a>
                    </div>
                </div>
            </FadeIn>

            {/* Direct Contact */}
            <FadeIn delay={0.2}>
                <div className="bg-white p-10 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-gold h-full text-center group transform md:-translate-y-4 relative overflow-hidden">
                    {/* Light White Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 opacity-80"></div>
                    
                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-charcoal rounded-full flex items-center justify-center text-gold mx-auto mb-6 shadow-md group-hover:bg-gold group-hover:text-white transition-colors">
                            <Phone size={28} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-2 text-charcoal">Direct Contact</h3>
                        <p className="text-gray-500 mb-6 font-light">Available 24/7 for VIPs</p>
                        <div className="space-y-4">
                            <a href="mailto:info@softliferealtygroup.com" className="block text-lg text-charcoal hover:text-gold transition-colors font-medium">info@softliferealtygroup.com</a>
                            <div className="flex justify-center gap-4 mt-6">
                                <a href="https://wa.me/14698231886" className="p-3 bg-[#25D366] rounded-full hover:bg-white hover:text-[#25D366] text-white shadow-md transition-all hover:scale-110">
                                    <MessageCircle size={20} />
                                </a>
                                <a href="https://instagram.com/softliferealtygroup" className="p-3 bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 rounded-full hover:bg-white hover:text-purple-600 text-white shadow-md transition-all hover:scale-110">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>

            {/* Dubai Office */}
            <FadeIn delay={0.3}>
                <div className="bg-beige p-10 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-gold h-full text-center group">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-gold mx-auto mb-6 shadow-md group-hover:bg-gold group-hover:text-white transition-colors">
                        <Globe size={28} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-2">Dubai, UAE</h3>
                    <p className="text-gray-500 mb-6 font-light">International Office</p>
                    <div className="space-y-3 text-charcoal font-medium">
                        <p>Downtown Dubai</p>
                        <p>United Arab Emirates</p>
                        <a href="tel:+14699702664" className="block hover:text-gold transition-colors mt-4">+1 (469) 970-2664</a>
                    </div>
                </div>
            </FadeIn>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 container-custom px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 bg-charcoal text-white p-10 flex flex-col justify-between relative overflow-hidden">
                    {/* Background Image Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" alt="Luxury Texture" className="w-full h-full object-cover opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 to-charcoal/90"></div>
                    </div>
                    
                    <div className="relative z-10">
                        <h3 className="text-2xl font-serif font-bold mb-6 text-white">Why Choose Us?</h3>
                        <ul className="space-y-4 text-sm font-light text-gray-200">
                            <li className="flex items-center"><span className="w-2 h-2 bg-gold rounded-full mr-3"></span> Global Expertise</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-gold rounded-full mr-3"></span> Personalized Service</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-gold rounded-full mr-3"></span> Exclusive Listings</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-gold rounded-full mr-3"></span> 24/7 Support</li>
                        </ul>
                    </div>
                    <div className="relative z-10 mt-10">
                        <p className="font-serif italic text-gold">"Your dream home is closer than you think."</p>
                    </div>
                </div>
                
                <div className="md:col-span-3 p-10">
                    <ConsultationCTA embedded={true} />
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
