import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, ChevronDown } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import FadeIn from '../components/FadeIn';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { fetchMLSListings } from '../services/mlsApi';

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
  const [properties, setProperties] = useState(MOCK_RESULTS);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      // Fetch fresh MLS data
      const mlsData = await fetchMLSListings(6, 0);
      
      // Combine manual "Featured" listings with MLS data
      setProperties([...MOCK_RESULTS, ...mlsData]);
      setOffset(6); // Next fetch starts after the first 6
      setLoading(false);
    };

    loadData();
  }, []);

  const handleLoadMore = async () => {
    setLoadingMore(true);
    try {
      // Fetch next batch
      const nextBatch = await fetchMLSListings(6, offset);
      
      if (nextBatch.length > 0) {
          setProperties(prev => [...prev, ...nextBatch]);
          setOffset(prev => prev + 6);
      }
    } catch (error) {
      console.error("Failed to load more listings:", error);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <div className="bg-beige min-h-screen font-sans text-charcoal">
      <SEO 
        title="Search Properties" 
        description="Search our extensive database of luxury properties in Dallas, Dubai, and select international markets."
        keywords="property search, find homes, luxury real estate search, mls listings dallas"
      />
      
      {/* Header */}
      <section className="relative h-[30vh] min-h-[250px] bg-charcoal flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 container-custom px-4">
          <Breadcrumbs className="text-white/60 mb-4 justify-center" />
          <FadeIn>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">
              Property <span className="text-gold italic">Search</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm py-4">
        <div className="container-custom px-4 flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-1/3">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Search by location, building, or MLS#" 
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-gold outline-none transition-colors rounded-sm text-sm"
                />
            </div>

            {/* Filters */}
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                <button className="flex items-center px-4 py-2 bg-white border border-gray-200 hover:border-gold hover:text-gold transition-colors text-sm whitespace-nowrap">
                    Price Range <ChevronDown size={14} className="ml-2" />
                </button>
                <button className="flex items-center px-4 py-2 bg-white border border-gray-200 hover:border-gold hover:text-gold transition-colors text-sm whitespace-nowrap">
                    Bedrooms <ChevronDown size={14} className="ml-2" />
                </button>
                <button className="flex items-center px-4 py-2 bg-white border border-gray-200 hover:border-gold hover:text-gold transition-colors text-sm whitespace-nowrap">
                    Property Type <ChevronDown size={14} className="ml-2" />
                </button>
                <button className="flex items-center px-4 py-2 bg-charcoal text-white hover:bg-gold transition-colors text-sm whitespace-nowrap">
                    <Filter size={14} className="mr-2" /> More Filters
                </button>
            </div>
        </div>
      </div>

      {/* Results Grid */}
      <section className="section-padding pt-12">
        <div className="container-custom">
            <div className="flex justify-between items-center mb-8">
                <p className="text-gray-500 text-sm">Showing <span className="font-bold text-charcoal">{properties.length}</span> Properties</p>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 hidden md:inline">Sort by:</span>
                    <select className="bg-transparent border-none text-sm font-bold text-charcoal focus:outline-none cursor-pointer">
                        <option>Newest Listed</option>
                        <option>Price (High to Low)</option>
                        <option>Price (Low to High)</option>
                    </select>
                </div>
            </div>

            {loading ? (
                 <div className="text-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold mx-auto"></div>
                    <p className="mt-4 text-gray-400 text-sm">Loading MLS Data...</p>
                 </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property) => (
                        <FadeIn key={property.id}>
                            <PropertyCard property={property} />
                        </FadeIn>
                    ))}
                </div>
            )}
            
            {/* Pagination / Load More */}
            <div className="mt-16 text-center">
                <button 
                  onClick={handleLoadMore} 
                  disabled={loadingMore}
                  className="btn-secondary min-w-[200px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loadingMore ? 'Loading...' : 'Load More Listings'}
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSearch;
