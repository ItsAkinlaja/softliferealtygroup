import React from 'react';
import { ArrowRight, Search, Home } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const Hero = () => {
  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          {/* Using a luxury city/home video from Cloudinary */}
          <source src="https://res.cloudinary.com/dewttmtbc/video/upload/v1772301941/xuibfjgsx68xyvlesh8h.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 container-custom">
        <FadeIn>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 md:mb-6 tracking-tight leading-none uppercase drop-shadow-2xl">
              Your Global <br/> <span className="text-gold italic">Real Estate Partner</span>
            </h1>
            <p className="text-base md:text-xl text-white/90 font-light mb-8 md:mb-12 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
                Connecting you with exclusive properties and investment opportunities in Dallas, Dubai, and beyond.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 w-full max-w-md md:max-w-none mx-auto">
              {/* Primary CTA - Search */}
              <a href="/search" className="group relative w-full md:w-auto px-8 md:px-10 py-4 md:py-5 bg-white text-charcoal font-bold uppercase tracking-[0.15em] overflow-hidden rounded-sm transition-all duration-500 hover:bg-gold hover:text-white hover:shadow-lg hover:-translate-y-1 border border-white flex justify-center items-center text-sm md:text-base">
                <span className="relative z-10 flex items-center">
                  Start Search <Search className="ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:rotate-90 transition-transform duration-500" />
                </span>
              </a>
              
              {/* Secondary CTA - Valuation */}
              <a href="/valuation" className="group relative w-full md:w-auto px-8 md:px-10 py-4 md:py-5 bg-transparent border border-white text-white font-bold uppercase tracking-[0.15em] overflow-hidden rounded-sm transition-all duration-500 hover:bg-white hover:text-charcoal hover:-translate-y-1 flex justify-center items-center text-sm md:text-base">
                <span className="relative z-10 flex items-center">
                  Get Valuation <Home className="ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-500" />
                </span>
              </a>
            </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
