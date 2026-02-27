import React from 'react';
import { TrendingUp, Globe, Building, ShieldCheck } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const WhyInvest = () => {
    const reasons = [
        {
            icon: <Globe size={24} />,
            title: "Global Reach",
            text: "Access to exclusive off-market properties worldwide."
        },
        {
            icon: <TrendingUp size={24} />,
            title: "Market Expertise",
            text: "Data-driven insights for maximum ROI."
        },
        {
            icon: <Building size={24} />,
            title: "Luxury Portfolio",
            text: "Curated selection of premium real estate."
        },
         {
            icon: <ShieldCheck size={24} />,
            title: "Trusted Advisors",
            text: "Dedicated support for every step of your journey."
        }
    ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/80 z-10"></div>
          <img 
              src="https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Luxury Texture Background" 
              className="w-full h-full object-cover opacity-50"
          />
      </div>

      <div className="container-custom relative z-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            
            {/* Left Content */}
            <FadeIn direction="right">
                <div className="text-white">
                    <h4 className="text-gold font-bold tracking-[0.2em] uppercase mb-4 text-xs md:text-sm">Our Promise</h4>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white leading-tight">
                        Why Choose <span className="text-gold italic">SoftLife?</span>
                    </h2>
                    <div className="h-1 w-20 bg-gold mb-8"></div>
                    <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 leading-relaxed font-light max-w-xl">
                        We are more than just real estate agents; we are your strategic partners in building wealth through property. With a focus on buying and selling, we deliver results that exceed expectations.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        {reasons.map((reason, idx) => (
                            <div key={idx} className="flex items-start space-x-4 group">
                                <div className="bg-white/5 p-4 rounded-sm text-gold border border-white/10 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                                    {reason.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 uppercase tracking-wide text-white group-hover:text-gold transition-colors">{reason.title}</h4>
                                    <p className="text-sm text-gray-400 font-light group-hover:text-gray-200 transition-colors">{reason.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>

            {/* Right Image Composition */}
            <FadeIn direction="left">
                <div className="relative">
                    {/* Decorative Border */}
                    <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold/30 z-0 hidden md:block"></div>
                    
                    <div className="relative z-10 overflow-hidden shadow-2xl group">
                        <div className="absolute inset-0 bg-gold/10 group-hover:bg-transparent transition-colors duration-500 z-20 pointer-events-none"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
                            alt="Modern Luxury Home" 
                            className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Floating Badge */}
                        <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-6 max-w-xs shadow-lg z-30 border-l-4 border-gold">
                            <p className="text-charcoal font-serif italic text-lg leading-snug">
                                "Excellence is not an act, but a habit."
                            </p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
