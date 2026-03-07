import React from 'react';
import { ArrowRight, Search, Home } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const Hero = () => {
  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          {/* Using a luxury city/home video from Cloudinary */}
          <source src="https://res.cloudinary.com/dewttmtbc/video/upload/v1772871336/icmzxpctjlkrvp5wdkvj.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 container-custom">
        <FadeIn>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 md:mb-6 tracking-tight leading-none uppercase drop-shadow-2xl">
              Homes for Sale in <br/> <span className="text-white italic font-serif">Dallas, Texas</span>
            </h1>
            <div className="mb-8 md:mb-12 max-w-3xl mx-auto drop-shadow-lg leading-relaxed text-white font-sans font-medium">
                {/* Desktop Text */}
                <p className="hidden md:block text-xl">
                    Access to exclusive off-market properties worldwide.<br/>
                    Data-driven insights for maximum ROI.<br/>
                    Curated selection of premium real estate.<br/>
                    Dedicated support for every step of your journey.
                </p>
                {/* Mobile Text (Summarized) */}
                <p className="block md:hidden text-base">
                    Access to exclusive off-market properties worldwide.<br/>
                    Data-driven insights for maximum ROI.<br/>
                    Curated selection of premium real estate.<br/>
                    Dedicated support for every step of your journey.
                </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 w-full max-w-md md:max-w-none mx-auto">
              {/* Primary CTA - Search */}
              <a href="/search" className="group relative w-full md:w-auto px-8 md:px-10 py-4 md:py-5 bg-gold text-charcoal font-serif font-bold uppercase tracking-[0.15em] overflow-hidden rounded-sm transition-all duration-500 hover:bg-sand hover:text-charcoal hover:shadow-lg hover:-translate-y-1 border border-gold flex justify-center items-center text-sm md:text-base">
                <span className="relative z-10 flex items-center">
                  Start Search <Search className="ml-3 w-4 h-4 md:w-5 md:h-5 group-hover:rotate-90 transition-transform duration-500" />
                </span>
              </a>
              
              {/* Secondary CTA - Valuation */}
              <a href="/valuation" className="group relative w-full md:w-auto px-8 md:px-10 py-4 md:py-5 bg-gold border border-gold text-charcoal font-serif font-bold uppercase tracking-[0.15em] overflow-hidden rounded-sm transition-all duration-500 hover:bg-sand hover:text-charcoal hover:-translate-y-1 flex justify-center items-center text-sm md:text-base">
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
