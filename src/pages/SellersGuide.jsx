import React from 'react';
import { RefreshCw, TrendingUp, Camera, FileSignature, ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';

const SellersGuide = () => {
    const steps = [
        {
          icon: <TrendingUp size={32} />,
          title: "Strategic Pricing",
          desc: "We analyze comparative market analysis (CMA) data to price your home competitively for maximum return."
        },
        {
          icon: <Camera size={32} />,
          title: "Preparation & Staging",
          desc: "Our team advises on staging and minor improvements to showcase your home's full potential to buyers."
        },
        {
          icon: <RefreshCw size={32} />,
          title: "Global Marketing",
          desc: "We launch a comprehensive marketing campaign, reaching local buyers and international investors."
        },
        {
          icon: <FileSignature size={32} />,
          title: "Negotiation & Closing",
          desc: "We handle all inquiries, vet potential buyers, and negotiate the best possible terms for your sale."
        }
      ];

  return (
    <div className="bg-beige min-h-screen font-sans text-charcoal">
      <SEO 
        title="Seller's Guide" 
        description="Maximize your property's value with our expert seller's guide. Learn about strategic pricing, staging, and global marketing."
        keywords="selling a home, home selling tips, real estate marketing, property valuation strategies"
      />
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Luxury Exterior" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container-custom px-4 flex flex-col items-center">
          <Breadcrumbs className="text-white/80 mb-4" />
          <FadeIn>
            <h1 className="text-3xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight drop-shadow-lg">
                Maximize Your <span className="text-gold italic">Value</span>
            </h1>
            <p className="text-base md:text-xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-md">
                Expert strategies to sell your home for the highest possible price.
            </p>
          </FadeIn>
        </div>
      </section>

       {/* Steps */}
       <section className="py-16 md:py-20">
          <div className="container-custom px-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {steps.map((step, idx) => (
                    <FadeIn key={idx} delay={idx * 0.1}>
                        <div className="group bg-white p-6 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 border-l-4 border-transparent hover:border-gold relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-6xl font-serif font-bold text-gold">{idx + 1}</span>
                            </div>
                            
                            <div className="mb-6 text-charcoal group-hover:text-gold transition-colors duration-300">
                                {step.icon}
                            </div>
                            
                            <h3 className="text-xl md:text-2xl font-serif font-bold text-charcoal mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                {step.title}
                            </h3>
                            <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    </FadeIn>
                ))}
             </div>
          </div>
       </section>

        {/* CTA */}
        <section className="bg-charcoal text-white py-16 md:py-20 relative overflow-hidden">
             {/* Abstract gold accent */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
             
             <div className="container-custom px-4 text-center relative z-10">
               <FadeIn>
                   <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6">Curious about your home's current value?</h2>
                   <p className="text-white/70 mb-8 max-w-2xl mx-auto font-light text-sm md:text-base">Get a complimentary, professional valuation from our experts.</p>
                   <a href="/valuation" className="inline-flex items-center bg-gold text-white px-8 py-4 font-bold tracking-widest uppercase hover:bg-white hover:text-charcoal transition-all duration-300">
                       Get Free Valuation <ArrowRight className="ml-2" size={20} />
                   </a>
               </FadeIn>
           </div>
       </section>
    </div>
  );
};

export default SellersGuide;
