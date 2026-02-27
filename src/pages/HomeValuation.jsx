import React from 'react';
import { ArrowRight } from 'lucide-react';

const HomeValuation = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="container-custom px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-black uppercase tracking-wide mb-6">
            What is your home worth?
          </h1>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            In today's shifting real estate market, it's more important than ever to know the true value of your property. Our experts use real-time market data to provide you with an accurate valuation.
          </p>
        </div>

        {/* Valuation Form */}
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 md:p-12 border border-gray-100 shadow-sm mb-20">
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-black uppercase tracking-wider mb-2">Property Address</label>
                    <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-black outline-none transition-colors"
                        placeholder="Enter full address"
                    />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-black uppercase tracking-wider mb-2">First Name</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-black outline-none transition-colors"
                            placeholder="John"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-black uppercase tracking-wider mb-2">Last Name</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-black outline-none transition-colors"
                            placeholder="Doe"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-black uppercase tracking-wider mb-2">Email Address</label>
                        <input 
                            type="email" 
                            className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-black outline-none transition-colors"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-black uppercase tracking-wider mb-2">Phone Number</label>
                        <input 
                            type="tel" 
                            className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-black outline-none transition-colors"
                            placeholder="+1 (123) 456-7890"
                        />
                    </div>
                </div>

                 <div>
                    <label className="block text-sm font-bold text-black uppercase tracking-wider mb-2">Property Type</label>
                    <select className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-black outline-none transition-colors text-gray-700">
                        <option>Single Family Home</option>
                        <option>Condo / Apartment</option>
                        <option>Townhouse</option>
                        <option>Luxury Estate</option>
                        <option>Land</option>
                        <option>Commercial</option>
                    </select>
                </div>

                <button type="submit" className="w-full btn-primary mt-4 flex justify-center items-center">
                    Get My Valuation
                    <ArrowRight size={18} className="ml-2" />
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default HomeValuation;
