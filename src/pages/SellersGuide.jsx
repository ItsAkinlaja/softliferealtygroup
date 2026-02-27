import React from 'react';
import { RefreshCw, TrendingUp, Camera, FileSignature } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const SellersGuide = () => {
    const steps = [
        {
          icon: <TrendingUp size={32} />,
          title: "1. Strategic Pricing",
          desc: "We analyze comparative market analysis (CMA) data to price your home competitively for maximum return."
        },
        {
          icon: <Camera size={32} />,
          title: "2. Preparation & Staging",
          desc: "Our team advises on staging and minor improvements to showcase your home's full potential to buyers."
        },
        {
          icon: <RefreshCw size={32} />,
          title: "3. Global Marketing",
          desc: "We launch a comprehensive marketing campaign, reaching local buyers and international investors."
        },
        {
          icon: <FileSignature size={32} />,
          title: "4. Negotiation & Closing",
          desc: "We handle all inquiries, vet potential buyers, and negotiate the best possible terms for your sale."
        }
      ];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Header */}
      <div className="container-custom px-4 mb-16 text-center">
        <FadeIn>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-black uppercase tracking-wide mb-6">
                Sellers Guide
            </h1>
            <p className="text-lg text-gray-500 font-light max-w-3xl mx-auto">
                Maximize the value of your property with our expert selling strategy.
            </p>
        </FadeIn>
      </div>

       {/* Steps */}
       <div className="container-custom px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {steps.map((step, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                    <div className="p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300 bg-white h-full">
                        <div className="mb-6 text-black">{step.icon}</div>
                        <h3 className="text-xl font-bold uppercase tracking-wide mb-4">{step.title}</h3>
                        <p className="text-gray-600 font-light leading-relaxed">{step.desc}</p>
                    </div>
                </FadeIn>
            ))}
          </div>
       </div>

        {/* CTA */}
        <div className="bg-black text-white py-20">
           <div className="container-custom px-4 text-center">
               <h2 className="text-3xl font-serif font-bold uppercase tracking-wide mb-6">Get a Free Home Valuation</h2>
               <a href="/valuation" className="btn-primary bg-white text-black border-white hover:bg-gray-200">
                   Value My Home
               </a>
           </div>
       </div>
    </div>
  );
};

export default SellersGuide;
