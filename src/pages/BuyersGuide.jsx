import React, { useRef } from 'react';
import { CheckCircle, Search, DollarSign, Key, ArrowRight, Download, FileText, Shield, Home } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import jsPDF from 'jspdf';

const BuyersGuide = () => {
  const guideRef = useRef(null);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let yPos = 20;

    // Header
    doc.setFontSize(22);
    doc.setTextColor(190, 150, 90); // Gold color
    doc.text("SoftLife Realty Group", margin, yPos);
    yPos += 10;
    
    doc.setFontSize(18);
    doc.setTextColor(40, 40, 40); // Charcoal
    doc.text("The Buyer's Journey: Comprehensive Guide", margin, yPos);
    yPos += 15;

    // Contact Info Header
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);
    doc.text("www.softliferealtygroup.com", margin, yPos);
    yPos += 5;
    doc.text("+1 (469) 823-1886 | +1 (469) 970-2664", margin, yPos);
    yPos += 5;
    doc.text("info@softliferealtygroup.com", margin, yPos);
    yPos += 10;

    doc.setDrawColor(190, 150, 90);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 15;

    // Introduction
    doc.setFontSize(12);
    doc.setTextColor(60, 60, 60);
    const introText = "Buying a home is one of the most significant investments you'll make. This guide simplifies the complex real estate landscape into actionable steps, ensuring your experience is seamless and rewarding.";
    const splitIntro = doc.splitTextToSize(introText, pageWidth - 2 * margin);
    doc.text(splitIntro, margin, yPos);
    yPos += splitIntro.length * 7 + 10;

    // Steps
    steps.forEach((step, index) => {
        // Check if we need a new page
        if (yPos > 250) {
            doc.addPage();
            yPos = 20;
        }

        // Step Title
        doc.setFontSize(14);
        doc.setTextColor(190, 150, 90);
        doc.text(`${index + 1}. ${step.title}`, margin, yPos);
        yPos += 8;

        // Step Description
        doc.setFontSize(11);
        doc.setTextColor(40, 40, 40);
        const descText = doc.splitTextToSize(step.desc, pageWidth - 2 * margin);
        doc.text(descText, margin, yPos);
        yPos += descText.length * 6 + 5;

        // Details Bullet Points
        doc.setFontSize(10);
        doc.setTextColor(80, 80, 80);
        step.details.forEach(detail => {
            doc.text(`• ${detail}`, margin + 5, yPos);
            yPos += 6;
        });
        
        yPos += 10; // Spacing between steps
    });

    // Footer
    yPos += 10;
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 10;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text("www.softliferealtygroup.com | +1 (469) 823-1886", margin, yPos);

    doc.save("SoftLife_Realty_Buyers_Guide.pdf");
  };

  const steps = [
    {
      icon: <DollarSign size={32} />,
      title: "Financial Preparation",
      desc: "Determine your budget and get pre-approved for a mortgage. This strengthens your offer and clarifies your price range.",
      details: [
        "Review your credit score and history.",
        "Calculate your debt-to-income ratio.",
        "Gather necessary documents (tax returns, pay stubs).",
        "Get a pre-approval letter from a lender."
      ]
    },
    {
      icon: <Search size={32} />,
      title: "Property Search",
      desc: "We curate a list of properties that match your lifestyle and investment goals, giving you access to both on and off-market listings.",
      details: [
        "Define your must-haves vs. nice-to-haves.",
        "Explore different neighborhoods and amenities.",
        "Attend open houses and private viewings.",
        "Review property disclosures and history."
      ]
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Making an Offer",
      desc: "We analyze market value to draft a competitive offer and negotiate terms that protect your interests.",
      details: [
        "Determine a fair offer price based on comps.",
        "Decide on contingencies (inspection, financing).",
        "Submit a written offer with earnest money.",
        "Negotiate counter-offers if necessary."
      ]
    },
    {
      icon: <Key size={32} />,
      title: "Closing the Deal",
      desc: "From inspections to final paperwork, we guide you through the closing process to ensure a smooth handover.",
      details: [
        "Complete a home inspection and request repairs.",
        "Finalize your mortgage loan.",
        "Conduct a final walkthrough.",
        "Sign closing documents and receive keys."
      ]
    }
  ];

  return (
    <div className="bg-beige min-h-screen font-sans text-charcoal">
       <SEO 
         title="Buyer's Guide - SoftLife Realty" 
         description="Download our comprehensive Buyer's Guide. Step-by-step instructions for buying luxury real estate in Dallas and Dubai."
         keywords="home buying guide pdf, real estate buyer checklist, luxury home buying process, softlife realty guide"
       />
       
       {/* Hero Section */}
       <section className="relative h-[60vh] min-h-[500px] overflow-hidden flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Couple looking at new home" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container-custom px-4 flex flex-col items-center">
          <Breadcrumbs className="text-white/80 mb-6" />
          <FadeIn>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
                The Buyer's <span className="text-gold italic">Journey</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-light max-w-3xl mx-auto drop-shadow-lg mb-8 leading-relaxed">
                Navigating the path to your dream home with confidence, clarity, and our exclusive expertise.
            </p>
            <button 
                onClick={handleDownloadPDF}
                className="btn-primary inline-flex items-center gap-3 transform hover:scale-105 transition-transform shadow-xl"
            >
                <Download size={20} /> Download Official Guide
            </button>
          </FadeIn>
        </div>
      </section>

       {/* Content Wrapper for PDF Generation */}
       <div ref={guideRef} className="bg-white">
           {/* Introduction */}
           <section className="py-20 md:py-24 bg-white">
               <div className="container-custom px-4 text-center max-w-4xl mx-auto">
                   <FadeIn>
                       <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">Your Roadmap to Homeownership</h2>
                       <div className="h-1 w-24 bg-gold mx-auto mb-8"></div>
                       <p className="text-gray-600 text-lg leading-relaxed">
                           Buying a home is one of the most significant investments you'll make. Whether you're a first-time buyer or adding to your portfolio, 
                           our guide simplifies the complex real estate landscape into actionable steps. We are dedicated to ensuring your experience is seamless, 
                           transparent, and rewarding.
                       </p>
                   </FadeIn>
               </div>
           </section>

           {/* Detailed Steps */}
           <section className="py-16 md:py-24 bg-beige/30">
              <div className="container-custom px-4">
                 <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
                    {steps.map((step, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="flex flex-col md:flex-row gap-8 bg-white p-8 md:p-12 shadow-lg rounded-sm border-l-4 border-gold">
                                <div className="flex-shrink-0">
                                    <div className="bg-charcoal text-gold p-4 rounded-full inline-block">
                                        {step.icon}
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center mb-4">
                                        <span className="text-6xl font-serif font-bold text-gray-100 mr-4 -mt-4">{idx + 1}</span>
                                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal">{step.title}</h3>
                                    </div>
                                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                        {step.desc}
                                    </p>
                                    
                                    <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                                        <h4 className="font-bold text-charcoal text-sm uppercase tracking-wider mb-4 flex items-center">
                                            <FileText size={16} className="mr-2 text-gold" /> Key Actions
                                        </h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {step.details.map((detail, dIdx) => (
                                                <li key={dIdx} className="flex items-start text-gray-500 text-sm">
                                                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                 </div>
              </div>
           </section>

           {/* Value Proposition */}
           <section className="py-20 bg-charcoal text-white text-center">
               <div className="container-custom px-4">
                   <FadeIn>
                       <Shield size={48} className="text-gold mx-auto mb-6" />
                       <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Trust SoftLife Realty?</h2>
                       <p className="text-white/80 max-w-3xl mx-auto text-lg mb-10 leading-relaxed">
                           We don't just find houses; we curate lifestyles. Our deep market knowledge in Dallas and Dubai, combined with a commitment to 
                           personalized service, ensures you find a property that resonates with your vision of a "Soft Life."
                       </p>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto mt-12">
                           <div className="p-6 border border-white/10 rounded-sm">
                               <h4 className="font-bold text-gold mb-2">Global Reach</h4>
                               <p className="text-sm text-gray-400">Access to exclusive international listings and investment opportunities.</p>
                           </div>
                           <div className="p-6 border border-white/10 rounded-sm">
                               <h4 className="font-bold text-gold mb-2">Expert Negotiation</h4>
                               <p className="text-sm text-gray-400">Strategies proven to secure the best price and terms for our clients.</p>
                           </div>
                           <div className="p-6 border border-white/10 rounded-sm">
                               <h4 className="font-bold text-gold mb-2">White-Glove Service</h4>
                               <p className="text-sm text-gray-400">Concierge-level support from the first viewing to the final signature.</p>
                           </div>
                       </div>
                   </FadeIn>
               </div>
           </section>
       </div>

       {/* Final CTA (Not in PDF) */}
       <section className="bg-white py-16 md:py-20 border-t border-gray-100">
           <div className="container-custom px-4 text-center">
               <FadeIn>
                   <h2 className="text-2xl md:text-4xl font-serif font-bold text-charcoal mb-6">Ready to begin your journey?</h2>
                   <p className="text-gray-500 mb-8 max-w-2xl mx-auto">Let's turn your vision into a key in your hand.</p>
                   <div className="flex flex-col md:flex-row justify-center gap-4">
                       <a href="/search" className="btn-primary inline-flex items-center justify-center group">
                           Start Your Search <Search className="ml-2 group-hover:scale-110 transition-transform" size={20} />
                       </a>
                       <a href="/contact" className="btn-secondary inline-flex items-center justify-center group">
                           Schedule Consultation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                       </a>
                   </div>
               </FadeIn>
           </div>
       </section>
    </div>
  );
};

export default BuyersGuide;
