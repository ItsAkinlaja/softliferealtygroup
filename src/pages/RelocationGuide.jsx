import React from 'react';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import Breadcrumbs from '../components/Breadcrumbs';
import { MapPin, Sun, Briefcase, GraduationCap, Coffee, Home } from 'lucide-react';

const RelocationGuide = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-charcoal">
      <SEO 
        title="Moving to Dallas, Texas: The Complete Relocation Guide | Soft Life Realty Group" 
        description="Your comprehensive guide to moving to Dallas, Texas. Explore neighborhoods, schools, job market, and lifestyle tips for a smooth relocation."
        keywords="moving to dallas, dallas relocation guide, living in dallas, dallas neighborhoods, dallas real estate"
      />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1570534261530-0eb81679244d?q=80&w=2070&auto=format&fit=crop" 
          alt="Dallas Skyline" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container-custom px-4 flex flex-col items-center">
          <Breadcrumbs className="text-white/80 mb-6" />
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
                Moving to <span className="text-gold italic">Dallas, Texas</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-light max-w-3xl mx-auto drop-shadow-lg mb-8 leading-relaxed">
                The Complete Relocation Guide
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">Welcome to the Big D</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Dallas is more than just a city; it's a thriving metropolis blending southern hospitality with cosmopolitan flair. 
                    Whether you're moving for a career opportunity, lifestyle change, or family reasons, Dallas offers a diverse and dynamic environment to call home.
                </p>
            </FadeIn>
        </div>
      </section>

      {/* Key Highlights Grid */}
      <section className="section-padding bg-beige">
        <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 group">
                    <Briefcase size={40} className="text-gold mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-charcoal mb-4">Booming Economy</h3>
                    <p className="text-gray-500">Home to numerous Fortune 500 companies and a rapidly growing tech hub, offering abundant career opportunities.</p>
                </div>
                <div className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 group">
                    <Sun size={40} className="text-gold mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-charcoal mb-4">Sunny Lifestyle</h3>
                    <p className="text-gray-500">Enjoy mild winters and plenty of sunshine year-round, perfect for outdoor activities and lakeside living.</p>
                </div>
                <div className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 group">
                    <Home size={40} className="text-gold mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-charcoal mb-4">Housing Market</h3>
                    <p className="text-gray-500">From historic estates to modern high-rises, Dallas offers diverse housing options often at a lower cost than coastal cities.</p>
                </div>
                <div className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 group">
                    <GraduationCap size={40} className="text-gold mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-charcoal mb-4">Top-Rated Schools</h3>
                    <p className="text-gray-500">Access to prestigious public school districts and renowned private institutions.</p>
                </div>
                <div className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 group">
                    <Coffee size={40} className="text-gold mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-charcoal mb-4">Dining & Culture</h3>
                    <p className="text-gray-500">A world-class culinary scene, vibrant arts district, and endless entertainment options await.</p>
                </div>
                <div className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 group">
                    <MapPin size={40} className="text-gold mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-charcoal mb-4">Central Location</h3>
                    <p className="text-gray-500">Ideally situated for easy travel, with DFW International Airport connecting you to the world.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Neighborhoods Teaser */}
      <section className="section-padding bg-white">
          <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                  <h3 className="text-3xl font-serif font-bold text-charcoal mb-6">Finding Your Perfect Neighborhood</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                      Dallas is a collection of unique neighborhoods, each with its own character. 
                      From the upscale luxury of <strong>Preston Hollow</strong> and <strong>Highland Park</strong> to the urban energy of <strong>Uptown</strong> and the family-friendly vibe of <strong>Frisco</strong> and <strong>Plano</strong>.
                  </p>
                  <a href="/search?location=Dallas" className="btn-primary inline-flex items-center">
                      Explore Dallas Homes
                  </a>
              </div>
              <div className="relative h-[400px] rounded-sm overflow-hidden shadow-2xl">
                  <img 
                      src="https://images.unsplash.com/photo-1545153987-25ebc42b262a?q=80&w=2070&auto=format&fit=crop" 
                      alt="Dallas Neighborhood" 
                      className="w-full h-full object-cover"
                  />
              </div>
          </div>
      </section>

      {/* Interactive Map Section */}
      <section className="section-padding bg-sand">
          <div className="container-custom">
              <div className="text-center mb-12">
                  <FadeIn>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4">Explore the Dallas Metroplex</h2>
                      <p className="text-gray-500 max-w-2xl mx-auto">Get a feel for the layout of the city and its surrounding luxury suburbs.</p>
                  </FadeIn>
              </div>
              <FadeIn>
                  <div className="w-full h-[500px] rounded-sm shadow-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                      <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214458.5851841916!2d-96.92091390918292!3d32.82035223336422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus" 
                          width="100%" 
                          height="100%" 
                          style={{ border: 0 }} 
                          allowFullScreen="" 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Dallas Map"
                      ></iframe>
                  </div>
              </FadeIn>
          </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal text-white text-center">
          <div className="container-custom px-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">Ready to Make the Move?</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                  Let our relocation specialists guide you every step of the way. We help with more than just finding a home—we help you find your life in Dallas.
              </p>
              <a href="/contact" className="bg-gold text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all duration-300 rounded-sm shadow-lg">
                  Start Your Relocation Journey
              </a>
          </div>
      </section>
    </div>
  );
};

export default RelocationGuide;