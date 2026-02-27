import React from 'react';
import { CheckCircle, Briefcase, Globe, Users, ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const GoldenVisaInfo = () => {
  const benefits = [
    {
      icon: <CheckCircle size={32} />,
      title: "AED 2M Qualification",
      description: "Invest a minimum of AED 2,000,000 in real estate to qualify for the 10-year Golden Visa."
    },
    {
      icon: <Briefcase size={32} />,
      title: "Off-Plan Eligibility",
      description: "Qualify with off-plan properties from approved developers with just a down payment."
    },
    {
      icon: <Users size={32} />,
      title: "Family Sponsorship",
      description: "Sponsor your spouse, children, and parents for long-term residency in the UAE."
    },
    {
      icon: <Globe size={32} />,
      title: "Global Access",
      description: "Enjoy visa-free travel to many countries and a strategic base for global business."
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold rounded-full blur-[80px] md:blur-[120px] transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-gold rounded-full blur-[60px] md:blur-[80px] transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container-custom relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
            
            {/* Left Header Column */}
            <div className="lg:col-span-4">
                <FadeIn direction="right">
                    <h4 className="text-gold font-bold tracking-[0.2em] uppercase mb-4 text-xs md:text-sm">Residency by Investment</h4>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-6 leading-tight">
                        The UAE <br/><span className="text-gold italic">Golden Visa</span>
                    </h2>
                    <div className="h-1 w-20 bg-gold mb-8"></div>
                    <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-10 leading-relaxed font-light">
                        Unlock a world of opportunities with long-term residency through real estate investment. Secure your future in one of the world's most dynamic economies.
                    </p>
                    <a href="/golden-visa" className="inline-flex items-center text-charcoal border-b border-gold pb-1 hover:text-gold transition-colors group uppercase tracking-widest text-xs md:text-sm font-bold">
                        Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </a>
                </FadeIn>
            </div>

            {/* Right Benefits Grid */}
            <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                        <FadeIn key={index} delay={index * 0.1} direction="left">
                            <div className="bg-beige/50 backdrop-blur-sm p-8 border border-gray-100 hover:border-gold/50 transition-colors duration-300 group h-full rounded-sm hover:shadow-lg hover:bg-white">
                                <div className="mb-6 text-gold group-hover:scale-110 transition-transform duration-300 origin-left">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-serif font-bold text-charcoal mb-3 group-hover:text-gold transition-colors">{benefit.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-light text-sm">{benefit.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default GoldenVisaInfo;
