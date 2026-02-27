import React from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import FadeIn from '../components/FadeIn';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';

// Reusing mock data for now
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
        id: 3,
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
      {
        id: 4,
        title: "Skyline Penthouse",
        location: "New York, USA",
        price: "$18,000,000",
        type: "Penthouse",
        bedrooms: 5,
        bathrooms: 6,
        area: "6,000 sqft",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        developer: "Extell",
        paymentPlan: "Cash",
        completion: "Ready",
        features: ["Central Park View", "Private Elevator", "Concierge", "Spa"]
      },
      {
        id: 5,
        title: "Mediterranean Villa",
        location: "Marbella, Spain",
        price: "$4,500,000",
        type: "Villa",
        bedrooms: 5,
        bathrooms: 5,
        area: "5,000 sqft",
        image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop",
        developer: "Private",
        paymentPlan: "Mortgage Available",
        completion: "Ready",
        features: ["Sea View", "Infinity Pool", "Smart Home", "Gated Community"]
      },
      {
        id: 6,
        title: "Waterfront Mansion",
        location: "Miami, USA",
        price: "$22,000,000",
        type: "Mansion",
        bedrooms: 7,
        bathrooms: 9,
        area: "10,000 sqft",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
        developer: "Private",
        paymentPlan: "Cash",
        completion: "Ready",
        features: ["Private Dock", "Home Cinema", "Gym", "Rooftop Terrace"]
      }
];

const HomeSearch = () => {
  return (
    <div className="bg-beige min-h-screen font-sans text-charcoal">
      <SEO 
        title="Search Luxury Properties" 
        description="Find your dream home with SoftLife Realty Group. Browse exclusive listings in Dallas, Dubai, London, and other prime locations."
        keywords="property search, luxury homes for sale, dallas real estate listings, dubai apartments, penthouses for sale"
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Modern City Skyline" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container-custom px-4 flex flex-col items-center w-full">
            <Breadcrumbs className="text-white/80 mb-6" />
            <FadeIn>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 tracking-tight drop-shadow-lg">
                    Find Your <span className="text-gold italic">Sanctuary</span>
                </h1>
                
                {/* Search Bar */}
                <div className="bg-white p-2 md:p-4 shadow-2xl rounded-sm max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-2 md:gap-4">
                    <div className="flex-grow relative group">
                        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-gold transition-colors" size={20} />
                        <input 
                            type="text" 
                            placeholder="City, Neighborhood, or Address" 
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none outline-none text-charcoal placeholder-gray-400 focus:bg-white transition-colors h-full"
                        />
                    </div>
                    <button className="btn-primary md:w-auto w-full flex items-center justify-center py-4 px-8">
                        Search <Search size={18} className="ml-2" />
                    </button>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                    {['Price Range', 'Property Type', 'Beds & Baths', 'More Filters'].map((filter) => (
                        <button key={filter} className="px-6 py-2 bg-black/40 backdrop-blur-md border border-white/30 text-white text-sm hover:bg-white hover:text-black transition-all rounded-full flex items-center">
                            {filter} <Filter size={12} className="ml-2" />
                        </button>
                    ))}
                </div>
            </FadeIn>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="container-custom px-4">
            <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-charcoal">Exclusive Listings</h2>
                    <p className="text-gray-500 text-sm mt-1">Showing {MOCK_RESULTS.length} premium properties</p>
                </div>
                <div className="hidden md:block">
                    <select className="bg-transparent border-none text-sm font-bold uppercase tracking-wider text-charcoal outline-none cursor-pointer hover:text-gold transition-colors">
                        <option>Sort by: Newest</option>
                        <option>Price: High to Low</option>
                        <option>Price: Low to High</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {MOCK_RESULTS.map((prop, idx) => (
                    <FadeIn key={prop.id} delay={idx * 0.1}>
                        <PropertyCard property={prop} />
                    </FadeIn>
                ))}
            </div>
            
            <div className="mt-16 text-center">
                <button className="btn-secondary px-12">Load More Properties</button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSearch;
