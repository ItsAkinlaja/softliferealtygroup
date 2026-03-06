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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Left: Contact Info */}
            <FadeIn delay={0.1}>
                <div className="space-y-12">
                    <div className="bg-beige p-10 rounded-sm shadow-xl border-l-4 border-gold h-full">
                        <h3 className="text-3xl font-serif font-bold text-charcoal mb-8 border-b border-gray-200 pb-4">Contact Information</h3>
                        
                        <div className="space-y-8">
                            <div className="flex items-start group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold shadow-md mr-6 group-hover:bg-gold group-hover:text-white transition-colors flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-charcoal mb-2">Call Us Directly</h4>
                                    <div className="space-y-2">
                                        <a href="tel:+14698231886" className="block text-xl text-gray-600 hover:text-gold transition-colors font-medium">+1 (469) 823-1886</a>
                                        <a href="tel:+14699702664" className="block text-xl text-gray-600 hover:text-gold transition-colors font-medium">+1 (469) 970-2664</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold shadow-md mr-6 group-hover:bg-gold group-hover:text-white transition-colors flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-charcoal mb-2">Email Us</h4>
                                    <a href="mailto:info@softliferealtygroup.com" className="block text-lg text-gray-600 hover:text-gold transition-colors">info@softliferealtygroup.com</a>
                                </div>
                            </div>

                            <div className="flex items-start group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold shadow-md mr-6 group-hover:bg-gold group-hover:text-white transition-colors flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-charcoal mb-2">Office Locations</h4>
                                    <p className="text-gray-600 mb-1">Highland Park, Dallas, TX 75205</p>
                                    <p className="text-gray-600">Downtown Dubai, UAE</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-10 border-t border-gray-200 pt-8">
                            <a href="https://wa.me/14698231886" className="flex items-center justify-center w-full py-3 bg-[#25D366] text-white rounded-sm hover:bg-[#1da851] transition-colors shadow-md font-bold uppercase tracking-wide text-sm">
                                <MessageCircle size={18} className="mr-2" /> WhatsApp 1
                            </a>
                            <a href="https://wa.me/14699702664" className="flex items-center justify-center w-full py-3 bg-[#25D366] text-white rounded-sm hover:bg-[#1da851] transition-colors shadow-md font-bold uppercase tracking-wide text-sm">
                                <MessageCircle size={18} className="mr-2" /> WhatsApp 2
                            </a>
                        </div>
                    </div>
                </div>
            </FadeIn>

            {/* Right: Contact Form (Moved Up) */}
            <FadeIn delay={0.2}>
                <div className="bg-white p-10 rounded-sm shadow-2xl border-t-4 border-gold h-full">
                    <h3 className="text-3xl font-serif font-bold text-charcoal mb-2">Send a Message</h3>
                    <p className="text-gray-500 mb-8">Whether you're buying, selling, or relocating, we're here to assist you.</p>
                    <ConsultationCTA embedded={true} />
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
