import React from 'react';
import { Shield, Home, Users, Globe, FileCheck, Coins } from 'lucide-react';

const InstagramSlides = () => {
    const slides = [
        {
            icon: <Coins size={32} className="text-white" />,
            title: "Investment Amount",
            content: "Minimum AED 2 Million (approx. $545,000) investment.",
            bg: "bg-black"
        },
        {
            icon: <Home size={32} className="text-black" />,
            title: "Off-Plan",
            content: "Qualify with approved off-plan properties.",
            bg: "bg-gray-100"
        },
         {
            icon: <Shield size={32} className="text-white" />,
            title: "Escrow Protection",
            content: "Protected by Dubai Land Department laws.",
            bg: "bg-black"
        },
        {
            icon: <FileCheck size={32} className="text-black" />,
            title: "Digital Process",
            content: "Seamless application and tracking.",
            bg: "bg-gray-100"
        },
         {
            icon: <Users size={32} className="text-white" />,
            title: "Family",
            content: "Sponsor spouse and children for 10 years.",
            bg: "bg-black"
        }
    ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-black uppercase tracking-wide">Golden Visa Essentials</h2>
      </div>

      {/* Horizontal Scroll / Grid for Desktop */}
      <div className="flex overflow-x-auto pb-8 space-x-6 px-4 md:grid md:grid-cols-3 md:overflow-visible md:space-x-0 md:gap-6 container-custom snap-x snap-mandatory">
          {slides.map((slide, idx) => (
              <div key={idx} className={`min-w-[280px] md:min-w-0 snap-center p-8 flex flex-col items-center justify-center text-center h-64 border border-gray-200 transition-transform hover:-translate-y-2 duration-300 ${slide.bg}`}>
                  <div className="mb-4">
                      {slide.icon}
                  </div>
                  <h3 className={`text-lg font-bold mb-2 uppercase tracking-wide ${slide.bg.includes('black') ? 'text-white' : 'text-black'}`}>
                      {slide.title}
                  </h3>
                  <p className={`text-sm leading-relaxed font-light ${slide.bg.includes('black') ? 'text-gray-300' : 'text-gray-600'}`}>
                      {slide.content}
                  </p>
              </div>
          ))}
      </div>
    </section>
  );
};

export default InstagramSlides;
