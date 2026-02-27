import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="relative h-[60vh] bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2069&auto=format&fit=crop" 
          alt="Dubai Video Placeholder" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <button className="bg-white/20 backdrop-blur-md p-6 rounded-full text-white mb-6 hover:bg-gold-500 hover:scale-110 transition-all duration-300 group border border-white/30">
          <Play size={48} className="fill-white ml-1" />
        </button>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Dubai: The City of the Future
        </h2>
        <p className="text-xl text-gray-200">
            Watch how investors secure residency through real estate
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
