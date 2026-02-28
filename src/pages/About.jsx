import React from 'react';
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
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] md:h-[60vh] md:min-h-[500px] overflow-hidden flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Home Exterior" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container-custom px-4 flex flex-col items-center">
          <Breadcrumbs className="text-white/80 mb-6" />
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-4 md:mb-6 tracking-tight leading-none drop-shadow-2xl">
              About <span className="text-gold italic">SoftLife</span>
            </h1>
            <div className="h-1 w-24 bg-gold mx-auto mb-6 md:mb-8"></div>
            <p className="text-lg md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Redefining global real estate with elegance, expertise, and a personal touch.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container-custom px-4">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                <FadeIn direction="right">
                    <div className="relative h-[400px] md:h-[700px] w-full group overflow-hidden shadow-2xl rounded-sm">
                        <div className="absolute inset-0 bg-gold/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                        <img 
                            src="/Annie & Shakirah.jpeg" 
                            alt="Anne & Shakirah - SoftLife Realty Founders" 
                            className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
                        />
                        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
                            <p className="text-white text-2xl md:text-4xl font-serif italic drop-shadow-lg">Anne & Shakirah</p>
                            <p className="text-gold text-xs md:text-sm font-bold tracking-widest uppercase mt-2">Founders & Principals</p>
                        </div>
                    </div>
                </FadeIn>
                
                <FadeIn direction="left">
                    <div className="pl-0 lg:pl-10">
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
                        
                        <div className="border-l-4 border-gold pl-6 py-2 mb-10">
                            <p className="text-xl font-serif italic text-charcoal">
                                "We believe real estate is the art of matching a soul to a setting. It's about finding the place where your life softens and your dreams expand."
                            </p>
                        </div>

                        <a href="#contact" className="btn-primary inline-flex items-center group">
                            Work With Us <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                    </div>
                </FadeIn>
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
                <a href="#contact" className="inline-block bg-white text-charcoal px-10 py-4 font-bold tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300 transform hover:scale-105">
                    Contact Anne & Shakirah
                </a>
            </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default About;
