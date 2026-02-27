import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import FadeIn from '../components/FadeIn';

// Reusing mock data for now - in real app this would be a dynamic search
const MOCK_RESULTS = [
    {
        id: 1,
        title: "The Royal Atlantis Residences",
        location: "Palm Jumeirah, Dubai",
        price: "$5,200,000",
        type: "Penthouse",
        bedrooms: 4,
        bathrooms: 5,
        area: "4,500 sqft",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
        developer: "Kerzner International",
        paymentPlan: "Ready to Move",
        completion: "Ready",
        features: ["Private Pool", "Beach Access", "Michelin Dining", "Concierge"]
      },
      {
        id: 2,
        title: "Beverly Hills Estate",
        location: "Los Angeles, USA",
        price: "$12,500,000",
        type: "Mansion",
        bedrooms: 6,
        bathrooms: 8,
        area: "12,000 sqft",
        image: "https://images.unsplash.com/photo-1600596542815-2a4304aa5d25?q=80&w=2075&auto=format&fit=crop",
        developer: "Private",
        paymentPlan: "Cash / Mortgage",
        completion: "Ready",
        features: ["Home Theater", "Wine Cellar", "Infinity Pool", "Guest House"]
      },
      {
        id: 4,
        title: "Mayfair Townhouse",
        location: "London, UK",
        price: "$10,800,000",
        type: "Townhouse",
        bedrooms: 3,
        bathrooms: 3,
        area: "2,800 sqft",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        developer: "Grosvenor",
        paymentPlan: "Flexible",
        completion: "Ready",
        features: ["Historic Facade", "Modern Interior", "Private Garden", "Central Location"]
      },
];

const HomeSearch = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="container-custom px-4">
        {/* Search Header */}
        <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-black uppercase tracking-wide mb-8">
                Find Your Dream Home
            </h1>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto bg-gray-50 p-4 rounded-lg flex flex-col md:flex-row gap-4 border border-gray-200">
                <div className="flex-grow relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search by city, address, or zip code" 
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded outline-none focus:border-black transition-colors"
                    />
                </div>
                <button className="btn-primary md:w-auto w-full flex items-center justify-center">
                    Search
                </button>
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
                <button className="px-4 py-2 border border-gray-200 text-sm hover:border-black transition-colors flex items-center bg-white">
                    Price Range <Filter size={14} className="ml-2" />
                </button>
                <button className="px-4 py-2 border border-gray-200 text-sm hover:border-black transition-colors flex items-center bg-white">
                    Property Type <Filter size={14} className="ml-2" />
                </button>
                <button className="px-4 py-2 border border-gray-200 text-sm hover:border-black transition-colors flex items-center bg-white">
                    Beds & Baths <Filter size={14} className="ml-2" />
                </button>
            </div>
        </div>

        {/* Results */}
        <div className="mb-20">
            <h2 className="text-xl font-bold uppercase tracking-wide mb-6 border-b border-gray-100 pb-2">Latest Listings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MOCK_RESULTS.map((prop) => (
                    <FadeIn key={prop.id}>
                        <PropertyCard property={prop} />
                    </FadeIn>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSearch;
