import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const neighborhoods = [
  {
    id: 1,
    name: "Downtown Dubai",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=1935&auto=format&fit=crop",
    link: "/search?location=Dubai"
  },
  {
    id: 2,
    name: "Highland Park",
    location: "Texas, USA",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop",
    link: "/search?location=Dallas"
  },
  {
    id: 3,
    name: "Emirates Hills",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?q=80&w=2070&auto=format&fit=crop",
    link: "/search?location=Dubai"
  },
  {
    id: 4,
    name: "Southlake",
    location: "Dallas, USA",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    link: "/search?location=Dallas"
  }
];

const SignatureNeighborhoods = () => {
  return (
    <section className="section-padding bg-charcoal text-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16 relative">
          <FadeIn>
            <p className="text-white font-script text-6xl md:text-7xl mb-4 opacity-90 transform -rotate-3">
              Exclusive Portfolio
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 relative z-10 text-white">Signature Locations</h2>
            <div className="h-1 w-24 bg-white mx-auto mb-6 relative z-10"></div>
            <p className="text-gray-300 max-w-2xl mx-auto font-light text-lg relative z-10">
              Discover the most prestigious addresses in our portfolio. From the skyline of Dubai to the estates of Dallas.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {neighborhoods.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <Link to={item.link} className="group relative block h-[400px] overflow-hidden rounded-sm">
                {/* Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-2">{item.location}</p>
                  <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-gold transition-colors duration-300">{item.name}</h3>
                  <span className="inline-flex items-center text-white text-sm font-medium tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 border-b border-gold pb-1">
                    View Listings
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureNeighborhoods;
