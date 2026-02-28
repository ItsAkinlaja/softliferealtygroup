import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FadeIn from '../components/FadeIn';
import ConsultationCTA from '../sections/ConsultationCTA';

const Contact = () => {
  return (
    <div className="bg-beige min-h-screen font-sans text-charcoal">
      <SEO 
        title="Contact Us" 
        description="Get in touch with SoftLife Realty Group. Whether buying, selling, or investing in Dubai and Dallas, our team is here to help."
        keywords="contact softlife realty, real estate contact, dallas realtor contact, dubai property contact"
      />
      <section className="relative h-[40vh] min-h-[320px] overflow-hidden flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1974&auto=format&fit=crop" 
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container-custom px-4 flex flex-col items-center">
          <Breadcrumbs className="text-white/80 mb-4" />
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2 tracking-tight drop-shadow-lg">
              Contact <span className="text-gold italic">Us</span>
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto font-light">
              Anne & Shakirah are ready to assist with your real estate goals.
            </p>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <ConsultationCTA />
      </FadeIn>
    </div>
  );
};

export default Contact;
