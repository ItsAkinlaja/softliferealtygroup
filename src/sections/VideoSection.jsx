import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative h-[60vh] bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-60"
          poster="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2069&auto=format&fit=crop"
          loop
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-dubai-skyline-at-night-4527-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay */}
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}></div>
      </div>
      
      <div className={`relative z-10 text-center px-4 transition-all duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <button 
          onClick={togglePlay}
          className="bg-white/20 backdrop-blur-md p-6 rounded-full text-white mb-6 hover:bg-gold hover:scale-110 transition-all duration-300 group border border-white/30"
        >
          <Play size={48} className="fill-white ml-1" />
        </button>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg">
            Dubai: The City of the Future
        </h2>
        <p className="text-xl text-gray-200 drop-shadow-md">
            Watch how investors secure residency through real estate
        </p>
      </div>

      {/* Pause button when playing (optional, visible on hover) */}
      {isPlaying && (
        <div className="absolute bottom-8 right-8 z-20">
           <button 
            onClick={togglePlay}
            className="bg-black/50 backdrop-blur-sm p-3 rounded-full text-white hover:bg-gold transition-colors"
          >
            <Pause size={24} />
          </button>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
