import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          {/* Using a luxury city/home video from Pexels */}
          <source src="https://videos.pexels.com/video-files/7578544/7578544-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 container-custom">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight leading-tight uppercase drop-shadow-2xl">
          Your Global Real Estate Partner
        </h1>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
          <a href="/search" className="btn-primary border-white bg-transparent hover:bg-white hover:text-black min-w-[200px]">
            Home Search
          </a>
          <a href="/valuation" className="btn-secondary border-white text-white hover:bg-white hover:text-black min-w-[200px]">
            Home Valuation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
