import React from 'react';
import { CheckCircle, Search, DollarSign, Key } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const BuyersGuide = () => {
  const steps = [
    {
      icon: <DollarSign size={32} />,
      title: "1. Financial Preparation",
      desc: "Determine your budget and get pre-approved for a mortgage. This strengthens your offer and clarifies your price range."
    },
    {
      icon: <Search size={32} />,
      title: "2. Property Search",
      desc: "We curate a list of properties that match your lifestyle and investment goals, giving you access to both on and off-market listings."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "3. Making an Offer",
      desc: "We analyze market value to draft a competitive offer and negotiate terms that protect your interests."
    },
    {
      icon: <Key size={32} />,
      title: "4. Closing the Deal",
      desc: "From inspections to final paperwork, we guide you through the closing process to ensure a smooth handover."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
       {/* Header */}
       <div className="container-custom px-4 mb-16 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-black uppercase tracking-wide mb-6">
                Buyers Guide
            </h1>
            <p className="text-lg text-gray-500 font-light max-w-3xl mx-auto">
                Navigating the path to your dream home with confidence and clarity.
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
               <h2 className="text-3xl font-serif font-bold uppercase tracking-wide mb-6">Start Your Search Today</h2>
               <a href="/search" className="btn-primary bg-white text-black border-white hover:bg-gray-200">
                   View Listings
               </a>
           </div>
       </div>
    </div>
  );
};

export default BuyersGuide;
