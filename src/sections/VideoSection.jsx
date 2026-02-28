import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(e => console.error("Play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative h-[60vh] bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2069&auto=format&fit=crop"
          loop
          playsInline
          muted
        >
          <source src="https://res.cloudinary.com/dewttmtbc/video/upload/v1772304291/cwdgbv4u6w5htjkem36g.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay - Always present but less opaque when playing */}
        <div className={`absolute inset-0 bg-black/40 pointer-events-none transition-opacity duration-500 ${isPlaying ? 'opacity-20' : 'opacity-60'}`}></div>
      </div>
      
      {/* Content Layer - always on top */}
      <div className={`relative z-20 text-center px-4 transition-all duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <button 
          onClick={togglePlay}
          className="bg-white/20 backdrop-blur-md p-6 rounded-full text-white mb-6 hover:bg-gold hover:scale-110 transition-all duration-300 border border-white/30 cursor-pointer"
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

      {/* Invisible Click Layer for Pausing */}
      {isPlaying && (
        <div 
            className="absolute inset-0 z-10 cursor-pointer"
            onClick={togglePlay}
        ></div>
      )}
    </section>
  );
};

export default VideoSection;
