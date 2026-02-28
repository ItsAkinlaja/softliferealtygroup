import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const testimonials = [
  {
    id: 1,
    name: "Sarah & James Thompson",
    location: "Dallas, Texas",
    text: "Working with SoftLife Realty Group was an absolute dream. Anne's attention to detail and understanding of the luxury market in Dallas helped us find a home that wasn't even on our radar. Truly exceptional service.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Ahmed Al-Fayed",
    location: "Dubai, UAE",
    text: "As an international investor, I needed someone I could trust implicitly. Shakirah navigated the Golden Visa process and property acquisition seamlessly. The level of professionalism is unmatched.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Highland Park, Dallas",
    text: "We were selling a unique property that required a specific buyer. The marketing strategy was sophisticated and targeted. We closed above asking price in record time.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
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

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-sm shadow-xl overflow-hidden min-h-[400px] md:min-h-[350px]">
            <div className="absolute top-0 left-0 w-2 h-full bg-gold z-20"></div>
            
            <div className="relative h-full">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                    index === currentIndex 
                      ? 'opacity-100 translate-x-0' 
                      : index < currentIndex 
                        ? 'opacity-0 -translate-x-10' 
                        : 'opacity-0 translate-x-10'
                  }`}
                >
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Image Side */}
                    <div className="w-full md:w-2/5 h-64 md:h-full relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative">
                      <Quote className="text-gold/20 absolute top-8 right-8 w-16 h-16 md:w-24 md:h-24" />
                      
                      <p className="text-gray-600 text-lg md:text-xl leading-relaxed italic mb-8 relative z-10">
                        "{testimonial.text}"
                      </p>
                      
                      <div>
                        <h4 className="text-xl font-serif font-bold text-charcoal">{testimonial.name}</h4>
                        <p className="text-gold text-sm font-medium uppercase tracking-wider">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex space-x-2 z-30">
              <button 
                onClick={prevSlide}
                className="p-3 bg-white border border-gray-100 text-charcoal hover:bg-gold hover:text-white transition-all duration-300 rounded-full shadow-md"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="p-3 bg-white border border-gray-100 text-charcoal hover:bg-gold hover:text-white transition-all duration-300 rounded-full shadow-md"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
