import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, Award, Briefcase } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="bg-beige min-h-screen font-sans text-charcoal">
      <SEO 
        title="About Us - Anne & Shakirah" 
        description="Meet the visionaries behind SoftLife Realty Group. Anne and Shakirah bring a boutique experience to modern real estate investment."
        keywords="about softlife realty, anne and shakirah, luxury real estate agents, dallas realtors, dubai real estate experts"
      />
      {/* Founders Section */}
      <section className="bg-white">
        <div className="container-custom px-4 lg:px-0">
             <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* Image Column */}
                <div className="relative min-h-[60vh] lg:min-h-screen">
                    <div className="absolute inset-0 bg-black/10 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-15"></div>
                    <img 
                        src="/Annie & Shakirah.jpeg" 
                        alt="Anne & Shakirah - SoftLife Realty Founders" 
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20">
                        <p className="text-white text-3xl md:text-5xl font-serif italic drop-shadow-2xl mb-2">Anne & Shakirah</p>
                        <div className="flex items-center gap-4">
                            <div className="h-0.5 w-12 bg-gold"></div>
                            <p className="text-gold text-sm md:text-lg font-bold tracking-[0.3em] uppercase drop-shadow-lg">Founders & Principals</p>
                        </div>
                    </div>
                </div>
                
                {/* Text Column */}
                <div className="flex items-center py-16 md:py-24 lg:py-0">
                    <div className="lg:pl-16 xl:pl-24 pr-4">
                        <h4 className="text-gold font-bold tracking-[0.2em] uppercase mb-4 text-xs md:text-sm">The Visionaries</h4>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-6 md:mb-8 leading-tight">
                            Curating Lifestyles, <br/> Not Just Homes.
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 font-light">
                            With a shared vision for excellence and a deep understanding of the global market, Anne and Shakirah established SoftLife Realty to offer a boutique experience for the modern investor.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                            Their partnership combines years of industry expertise, a network of exclusive connections, and a relentless drive to deliver results. Whether navigating complex cross-border transactions or finding the perfect family home, Anne and Shakirah are dedicated to your success.
                        </p>
                        
                        <div className="bg-beige/30 backdrop-blur-sm border-l-4 border-gold pl-6 py-6 mb-10 pr-4 rounded-r-lg shadow-lg">
                            <p className="text-xl font-serif italic text-charcoal mb-4">
                                "We believe real estate is the art of matching a soul to a setting. It's about finding the place where your life softens and your dreams expand."
                            </p>
                            <p className="text-lg md:text-xl font-serif italic text-gray-900 tracking-wide leading-relaxed">
                                Hebrews 3:4 — "For every house is built by someone, but God is the builder of everything."
                            </p>
                        </div>

                        <Link to="/contact" className="btn-primary inline-flex items-center group">
                            Work With Us <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>
                    </div>
                </div>
             </div>
        </div>
      </section>

      {/* Our Mission Grid */}
      <section className="py-24 bg-beige">
        <div className="container-custom px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-4">Our Core Values</h2>
            <div className="h-0.5 w-16 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
                { icon: <Globe size={32} />, title: "Global Reach", desc: "Connecting you to opportunities across borders." },
                { icon: <Users size={32} />, title: "Client Focus", desc: "Your goals are the compass that guides our work." },
                { icon: <Award size={32} />, title: "Excellence", desc: "Setting the standard for luxury service." },
                { icon: <Briefcase size={32} />, title: "Integrity", desc: "Trust is the currency of our business." }
            ].map((item, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                    <div className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-gold group h-full">
                        <div className="mb-6 text-charcoal group-hover:text-gold transition-colors duration-300 transform group-hover:-translate-y-1">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-serif font-bold text-charcoal mb-3">{item.title}</h3>
                        <p className="text-gray-500 font-light leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-charcoal">
            <img 
                src="https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Luxury Pool" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
        </div>
        <div className="container-custom px-4 relative z-10 text-center">
            <FadeIn>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
                    Ready to elevate your lifestyle?
                </h2>
                <Link to="/contact" className="inline-block bg-white text-charcoal px-10 py-4 font-bold tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300 transform hover:scale-105">
                    Contact Anne & Shakirah
                </Link>
            </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default About;
