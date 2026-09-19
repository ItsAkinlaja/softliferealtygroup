import React from 'react';
import { Youtube } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const CHANNEL_URL = 'https://www.youtube.com/channel/UCdQyyHelsJF5ArVunItbebA/about';

const videos = [
  {
    id: 'dfbX8rbzysA',
    title: 'Soft Life Realty – Featured Video 1',
  },
  {
    id: 'fHn-7gv6Sa0',
    title: 'Soft Life Realty – Featured Video 2',
  },
  {
    id: 'R-gLEKx3H0w',
    title: 'Soft Life Realty – Featured Video 3',
  },
  {
    id: 'HTB7WpgpR9I',
    title: 'Soft Life Realty – Featured Video 4',
  },
];

const YouTubeSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <FadeIn>
          <div className="text-center mb-10 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-charcoal mb-4 leading-tight">
              Watch &amp; Learn
            </h2>
            <div className="h-1 w-16 sm:w-24 bg-gold mx-auto mb-5"></div>
            <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
              Explore our latest videos on Dallas real estate, luxury living, and investment opportunities.
            </p>
          </div>
        </FadeIn>

        {/* Video Grid — 1 col on mobile, 2 col on tablet+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {videos.map((video) => (
            <FadeIn key={video.id}>
              <div className="overflow-hidden rounded-sm shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                {/* 16:9 aspect ratio wrapper */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn>
          <div className="mt-10 flex flex-col items-center gap-3 px-4">
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-charcoal text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gold active:scale-95 transition-all duration-300 rounded-sm"
            >
              <Youtube size={18} />
              Subscribe for Weekly Videos
            </a>
            <p className="text-center text-gray-400 text-xs sm:text-sm">
              New videos every week — market insights, property tours &amp; relocation tips.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default YouTubeSection;
