import React from 'react';
import { TrendingUp, Globe, Building, ShieldCheck } from 'lucide-react';

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
    <section className="section-padding bg-black text-white relative overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white uppercase tracking-wide">Why Choose Us</h2>
          <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed font-light">
            We are more than just real estate agents; we are your strategic partners in building wealth through property. With a focus on buying and selling, we deliver results that exceed expectations.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                      <div className="bg-white/10 p-3 rounded-none text-white border border-white/20">
                          {reason.icon}
                      </div>
                      <div>
                          <h4 className="font-bold text-lg mb-1 uppercase tracking-wider">{reason.title}</h4>
                          <p className="text-sm text-gray-400 font-light">{reason.text}</p>
                      </div>
                  </div>
              ))}
          </div>
        </div>

        <div className="relative">
            <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
                alt="Modern Luxury Home" 
                className="relative shadow-2xl w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
