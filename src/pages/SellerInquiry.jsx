import React from 'react';
import SEO from '../components/SEO';
import { Widget } from '@typeform/embed-react';

const SellerInquiry = () => {
  return (
    <div className="min-h-screen bg-beige pt-20">
      <SEO 
        title="Seller Inquiry | Soft Life Realty Group" 
        description="Get started with selling your home. Tell us about your property and Soft Life Realty Group will help you maximize its value."
      />
      
      <div className="container-custom px-4 py-12">
        <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">Sell Your Property</h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
                Provide some details about your property, and our team will prepare a comprehensive market analysis and strategy.
            </p>
        </div>

        <div className="w-full h-[600px] md:h-[700px] rounded-sm overflow-hidden shadow-2xl bg-white">
            <Widget id="Ko6sIgc2" style={{ width: '100%', height: '100%' }} className="my-form" />
        </div>
      </div>
    </div>
  );
};

export default SellerInquiry;