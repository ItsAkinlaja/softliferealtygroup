import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const testimonials = [
  {
    id: 1,
    name: "Sarah & James Thompson",
    location: "Dallas, Texas",
    text: "Working with SoftLife Realty Group was an absolute dream. Anne's attention to detail and understanding of the luxury market in Dallas helped us find a home that wasn't even on our radar. Truly exceptional service.",
    initials: "SJ"
  },
  {
    id: 2,
    name: "Ahmed Al-Fayed",
    location: "Dubai, UAE",
    text: "As an international investor, I needed someone I could trust implicitly. Shakirah navigated the Golden Visa process and property acquisition seamlessly. The level of professionalism is unmatched.",
    initials: "AA"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Highland Park, Dallas",
    text: "We were selling a unique property that required a specific buyer. The marketing strategy was sophisticated and targeted. We closed above asking price in record time.",
    initials: "ER"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-beige relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container-custom px-4 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-charcoal">Client Stories</h2>
            <div className="h-1 w-24 bg-gold mx-auto"></div>
          </FadeIn>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Grid (Hidden on Mobile) */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex;
              return (
                <div 
                  key={testimonial.id}
                  className={`bg-white p-8 rounded-sm shadow-lg border-t-4 border-gold transition-all duration-500 transform ${isActive ? 'md:-translate-y-4 shadow-2xl' : 'hover:-translate-y-2'}`}
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-charcoal text-gold rounded-full flex items-center justify-center text-xl font-serif font-bold mx-auto mb-4 border-2 border-gold">
                        {testimonial.initials}
                      </div>
                      <div className="text-center">
                        <h4 className="text-lg font-serif font-bold text-charcoal">{testimonial.name}</h4>
                        <p className="text-gold text-xs font-bold uppercase tracking-wider">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <div className="relative flex-grow">
                      <Quote className="text-gold/10 absolute -top-2 -left-2 w-8 h-8" />
                      <p className="text-gray-600 text-sm leading-relaxed italic relative z-10 pt-4 text-center">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Swipe Carousel */}
          <div className="md:hidden relative h-[400px]">
            {testimonials.map((testimonial, index) => {
              let position = 'opacity-0 pointer-events-none translate-x-full';
              if (index === currentIndex) {
                position = 'opacity-100 translate-x-0 z-10';
              } else if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) {
                 position = 'opacity-0 pointer-events-none -translate-x-full';
              }

              return (
                <div 
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-500 ease-out transform ${position}`}
                >
                    <div className="bg-white p-8 rounded-sm shadow-xl border-t-4 border-gold h-full flex flex-col justify-center">
                        <div className="mb-6">
                            <div className="w-20 h-20 bg-charcoal text-gold rounded-full flex items-center justify-center text-2xl font-serif font-bold mx-auto mb-4 border-2 border-gold shadow-md">
                                {testimonial.initials}
                            </div>
                            <div className="text-center">
                                <h4 className="text-xl font-serif font-bold text-charcoal">{testimonial.name}</h4>
                                <p className="text-gold text-xs font-bold uppercase tracking-wider">{testimonial.location}</p>
                            </div>
                        </div>
                        
                        <div className="relative text-center">
                            <Quote className="text-gold/10 absolute -top-4 left-0 w-10 h-10" />
                            <p className="text-gray-600 text-base leading-relaxed italic relative z-10 px-4">
                                "{testimonial.text}"
                            </p>
                        </div>
                    </div>
                </div>
              );
            })}
            
            {/* Mobile Controls */}
            <button 
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 p-2 bg-white/80 shadow-md rounded-full text-charcoal z-20"
            >
                <ChevronLeft size={24} />
            </button>
            <button 
                onClick={() => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 p-2 bg-white/80 shadow-md rounded-full text-charcoal z-20"
            >
                <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Mobile Dots Indicator */}
          <div className="flex justify-center mt-8 md:hidden">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${idx === currentIndex ? 'bg-gold w-6' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
