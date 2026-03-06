import React, { useRef } from 'react';
import { RefreshCw, TrendingUp, Camera, FileSignature, ArrowRight, Download, Target, Globe, Shield } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import jsPDF from 'jspdf';

const SellersGuide = () => {
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
    doc.text("The Seller's Guide: Maximizing Value", margin, yPos);
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
      const introText = "Selling a luxury property requires strategic pricing, impeccable presentation, and global marketing. This guide outlines our proven approach to ensuring your home stands out and sells for its true worth.";
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

    doc.save("SoftLife_Realty_Sellers_Guide.pdf");
  };

    const steps = [
        {
          icon: <TrendingUp size={32} />,
          title: "Strategic Pricing",
          desc: "We analyze comparative market analysis (CMA) data to price your home competitively for maximum return.",
          details: [
            "In-depth analysis of recent comparable sales.",
            "Evaluation of current market trends and inventory.",
            "Pricing strategy tailored to your timeline.",
            "Regular reviews to stay competitive."
          ]
        },
        {
          icon: <Camera size={32} />,
          title: "Preparation & Staging",
          desc: "Our team advises on staging and minor improvements to showcase your home's full potential to buyers.",
          details: [
            "Professional staging consultation.",
            "High-resolution photography and videography.",
            "3D virtual tours and floor plans.",
            "Curb appeal enhancement recommendations."
          ]
        },
        {
          icon: <Globe size={32} />,
          title: "Global Marketing",
          desc: "We launch a comprehensive marketing campaign, reaching local buyers and international investors.",
          details: [
            "Listing on major international portals.",
            "Targeted social media advertising.",
            "Exclusive email campaigns to our network.",
            "Premium print marketing materials."
          ]
        },
        {
          icon: <FileSignature size={32} />,
          title: "Negotiation & Closing",
          desc: "We handle all inquiries, vet potential buyers, and negotiate the best possible terms for your sale.",
          details: [
            "Expert negotiation of offers and counter-offers.",
            "Thorough vetting of buyer financing.",
            "Management of inspections and contingencies.",
            "Seamless coordination of closing process."
          ]
        }
      ];

  return (
    <div className="bg-beige min-h-screen font-sans text-charcoal">
      <SEO 
        title="Seller's Guide - SoftLife Realty" 
        description="Download our expert Seller's Guide. Strategies for pricing, staging, and marketing your luxury property in Dallas and Dubai."
        keywords="home selling guide pdf, real estate seller tips, luxury home marketing, softlife realty seller guide"
      />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Luxury Exterior" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container-custom px-4 flex flex-col items-center">
          <Breadcrumbs className="text-white/80 mb-6" />
          <FadeIn>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
                Maximize Your <span className="text-gold italic">Value</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-light max-w-3xl mx-auto drop-shadow-lg mb-8 leading-relaxed">
                Expert strategies to sell your home for the highest possible price. Download our comprehensive guide.
            </p>
            <button 
                onClick={handleDownloadPDF}
                className="btn-primary inline-flex items-center gap-3 transform hover:scale-105 transition-transform shadow-xl"
            >
                <Download size={20} /> Download Seller's Guide
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
                       <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">The Art of Selling</h2>
                       <div className="h-1 w-24 bg-gold mx-auto mb-8"></div>
                       <p className="text-gray-600 text-lg leading-relaxed">
                           Selling a luxury property requires more than just a "For Sale" sign. It demands a strategic approach, 
                           impeccable presentation, and targeted marketing to reach the right buyers. At SoftLife Realty, 
                           we combine data-driven insights with creative flair to ensure your home stands out and sells for its true worth.
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
                            <div className="flex flex-col md:flex-row gap-8 bg-white p-8 md:p-12 shadow-lg rounded-sm border-r-4 border-gold">
                                <div className="flex-grow order-2 md:order-1">
                                    <div className="flex items-center mb-4">
                                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mr-4">{step.title}</h3>
                                        <span className="text-5xl font-serif font-bold text-gray-100 ml-auto">{idx + 1}</span>
                                    </div>
                                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                        {step.desc}
                                    </p>
                                    
                                    <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                                        <h4 className="font-bold text-charcoal text-sm uppercase tracking-wider mb-4 flex items-center">
                                            <Target size={16} className="mr-2 text-gold" /> Our Approach
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
                                <div className="flex-shrink-0 order-1 md:order-2">
                                    <div className="bg-charcoal text-gold p-6 rounded-full inline-block shadow-md">
                                        {step.icon}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                 </div>
              </div>
           </section>

           {/* Marketing Showcase */}
           <section className="py-20 bg-charcoal text-white text-center relative overflow-hidden">
               {/* Abstract gold accent */}
               <div className="absolute top-0 right-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
               
               <div className="container-custom px-4 relative z-10">
                   <FadeIn>
                       <Shield size={48} className="text-gold mx-auto mb-6" />
                       <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">The SoftLife Advantage</h2>
                       <p className="text-white/80 max-w-3xl mx-auto text-lg mb-10 leading-relaxed">
                           We leverage cutting-edge technology and a vast global network to give your property maximum exposure. 
                           From high-end visuals to exclusive open houses, we create a compelling narrative that attracts qualified buyers.
                       </p>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto mt-12">
                           <div className="p-6 border border-white/10 rounded-sm bg-white/5">
                               <h4 className="font-bold text-gold mb-2">Professional Staging</h4>
                               <p className="text-sm text-gray-400">Transforming spaces to evoke emotion and desire.</p>
                           </div>
                           <div className="p-6 border border-white/10 rounded-sm bg-white/5">
                               <h4 className="font-bold text-gold mb-2">Digital Dominance</h4>
                               <p className="text-sm text-gray-400">Targeted ads on social media and search engines.</p>
                           </div>
                           <div className="p-6 border border-white/10 rounded-sm bg-white/5">
                               <h4 className="font-bold text-gold mb-2">Exclusive Network</h4>
                               <p className="text-sm text-gray-400">Access to a private list of high-net-worth individuals.</p>
                           </div>
                       </div>
                   </FadeIn>
               </div>
           </section>
       </div>

        {/* CTA (Not in PDF) */}
        <section className="bg-white py-16 md:py-20 border-t border-gray-100">
             <div className="container-custom px-4 text-center">
               <FadeIn>
                   <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6 text-charcoal">Curious about your home's current value?</h2>
                   <p className="text-gray-500 mb-8 max-w-2xl mx-auto font-light text-base md:text-lg">Get a complimentary, professional valuation from our experts.</p>
                   <div className="flex flex-col md:flex-row justify-center gap-4">
                       <a href="/valuation" className="btn-primary inline-flex items-center justify-center group">
                           Get Free Valuation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                       </a>
                       <a href="/contact" className="btn-secondary inline-flex items-center justify-center group">
                           Contact an Agent <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                       </a>
                   </div>
               </FadeIn>
           </div>
        </section>
    </div>
  );
};

export default SellersGuide;
