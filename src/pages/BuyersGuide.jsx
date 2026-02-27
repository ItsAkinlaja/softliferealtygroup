import React from 'react';
import { CheckCircle, Search, DollarSign, Key, ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';

const BuyersGuide = () => {
  const steps = [
    {
      icon: <DollarSign size={32} />,
      title: "Financial Preparation",
      desc: "Determine your budget and get pre-approved for a mortgage. This strengthens your offer and clarifies your price range."
    },
    {
      icon: <Search size={32} />,
      title: "Property Search",
      desc: "We curate a list of properties that match your lifestyle and investment goals, giving you access to both on and off-market listings."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Making an Offer",
      desc: "We analyze market value to draft a competitive offer and negotiate terms that protect your interests."
    },
    {
      icon: <Key size={32} />,
      title: "Closing the Deal",
      desc: "From inspections to final paperwork, we guide you through the closing process to ensure a smooth handover."
    }
  ];

  return (
    <div className="bg-beige min-h-screen font-sans text-charcoal">
       <SEO 
         title="Buyer's Guide" 
         description="Step-by-step guide to buying your dream home. From financial preparation to closing the deal, we guide you through every stage."
         keywords="home buying guide, real estate tips, first time home buyer, luxury home buying process"
       />
       {/* Hero Section */}
       <section className="relative h-[50vh] min-h-[400px] overflow-hidden flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Couple looking at new home" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container-custom px-4 flex flex-col items-center">
          <Breadcrumbs className="text-white/80 mb-4" />
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight drop-shadow-lg">
                The Buyer's <span className="text-gold italic">Journey</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-md">
                Navigating the path to your dream home with confidence and clarity.
            </p>
          </FadeIn>
        </div>
      </section>

       {/* Steps Section */}
       <section className="py-20">
          <div className="container-custom px-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {steps.map((step, idx) => (
                    <FadeIn key={idx} delay={idx * 0.1}>
                        <div className="group bg-white p-10 shadow-sm hover:shadow-2xl transition-all duration-500 border-l-4 border-transparent hover:border-gold relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-6xl font-serif font-bold text-gold">{idx + 1}</span>
                            </div>
                            
                            <div className="mb-6 text-charcoal group-hover:text-gold transition-colors duration-300">
                                {step.icon}
                            </div>
                            
                            <h3 className="text-2xl font-serif font-bold text-charcoal mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 font-light leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    </FadeIn>
                ))}
             </div>
          </div>
       </section>

       {/* Luxury CTA */}
       <section className="bg-white py-20 border-t border-gray-100">
           <div className="container-custom px-4 text-center">
               <FadeIn>
                   <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">Found your dream aesthetic?</h2>
                   <p className="text-gray-500 mb-8 max-w-2xl mx-auto">Let's turn that vision into a key in your hand.</p>
                   <a href="/search" className="btn-primary inline-flex items-center group">
                       Start Your Search <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                   </a>
               </FadeIn>
           </div>
       </section>
    </div>
  );
};

export default BuyersGuide;
