import React from 'react';
import SEO from '../components/SEO';
import { Widget } from '@typeform/embed-react';

const BuyerInquiry = () => {
  return (
    <div className="min-h-screen bg-beige pt-20">
      <SEO 
        title="Buyer Inquiry | Soft Life Realty Group" 
        description="Start your home buying journey with Soft Life Realty Group. Tell us what you're looking for in your dream home."
      />
      
      <div className="container-custom px-4 py-12">
        <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">Find Your Dream Home</h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
                Please complete the form below to help us understand your preferences and find the perfect property for you.
            </p>
        </div>

        <div className="w-full h-[600px] md:h-[700px] rounded-sm overflow-hidden shadow-2xl bg-white">
            <Widget id="HASkdHGb" style={{ width: '100%', height: '100%' }} className="my-form" />
        </div>
      </div>
    </div>
  );
};

export default BuyerInquiry;