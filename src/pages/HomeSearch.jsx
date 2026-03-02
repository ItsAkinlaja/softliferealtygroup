import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, ChevronDown } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import FadeIn from '../components/FadeIn';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import { fetchMLSListings } from '../services/mlsApi';
import { useLocation } from 'react-router-dom';

const HomeSearch = () => {
  const location = useLocation();
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  
  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('Any');
  const [bedrooms, setBedrooms] = useState('Any');
  const [propertyType, setPropertyType] = useState('Any');
  const [sortBy, setSortBy] = useState('Newest Listed');
  
  // More Filters State
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [bathrooms, setBathrooms] = useState('Any');
  const [minArea, setMinArea] = useState('');
  
  // Scroll State for Sticky Header
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Hide header on scroll down, show on scroll up (with a small buffer)
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Load Initial Data
  useEffect(() => {
    // Scroll to top immediately when a new search is loaded
    if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
    }

    const loadData = async () => {
      setLoading(true);
      try {
        // Fetch initial batch, potentially with search query from URL
        const params = new URLSearchParams(location.search);
        const locationParam = params.get('location') || '';
        
        if (locationParam) {
            setSearchQuery(locationParam);
            
            // If URL has a search param, fetch the full batch immediately and filter it
            // This mirrors the logic in handleSearch to ensure consistency
            const mlsData = await fetchMLSListings(100, 0); 
            
            const query = locationParam.toLowerCase();
            const filtered = mlsData.filter(p => 
                p.title.toLowerCase().includes(query) || 
                p.location.toLowerCase().includes(query) ||
                (p.id && p.id.toString().includes(query))
            );

            setProperties(filtered);
            setFilteredProperties(filtered.slice(0, 20));
            setOffset(20);
            setHasMore(filtered.length > 20);
        } else {
            // Default load without search param
            const mlsData = await fetchMLSListings(20, 0); 
            setProperties(mlsData);
            setFilteredProperties(mlsData);
            setOffset(20);
            setHasMore(mlsData.length === 20);
        }

      } catch (error) {
        console.error("Failed to load listings:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [location.search]);

  // Handle Search Submission (Client-side Reset and Fetch from full list simulation)
  // Since SimplyRETS test feed 'q' param is limited, we'll fetch a larger batch and filter locally for this demo
  const handleSearch = async (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
        setLoading(true);
        try {
            // Fetch a larger batch to ensure we have data to filter
            // In a real production app with a full paid MLS feed, the server-side 'q' param would work.
            // For this test feed, we fetch more and filter client-side to simulate the experience.
            const mlsData = await fetchMLSListings(100, 0); 
            
            let filtered = mlsData;
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                filtered = mlsData.filter(p => 
                    p.title.toLowerCase().includes(query) || 
                    p.location.toLowerCase().includes(query) ||
                    (p.id && p.id.toString().includes(query))
                );
            }

            setProperties(filtered); // Store the filtered subset as the "source of truth" for this search session
            setFilteredProperties(filtered.slice(0, 20)); // Show first 20
            setOffset(20);
            setHasMore(filtered.length > 20);
        } catch (error) {
            console.error("Failed to search listings:", error);
        } finally {
            setLoading(false);
        }
    }
  };

  // Handle Load More
  const handleLoadMore = async () => {
    if (loadingMore || !hasMore) return;
    
    setLoadingMore(true);
    
    // Simulate network delay for load more
    setTimeout(() => {
        const nextBatch = properties.slice(offset, offset + 20);
        
        if (nextBatch.length > 0) {
            setFilteredProperties(prev => [...prev, ...nextBatch]);
            setOffset(prev => prev + 20);
            setHasMore(offset + 20 < properties.length);
        } else {
            setHasMore(false);
        }
        setLoadingMore(false);
    }, 500);
  };

  // Handle Filtering (Client-side for other filters)
  useEffect(() => {
    // Start with the properties we fetched (which might already be search-filtered)
    let result = [...properties];

    // 1. Search Query - Already handled in handleSearch for the initial fetch, 
    // but we keep this here if the user types without hitting enter (optional)
    // or to refine the already-fetched batch.
    if (searchQuery) {
         const query = searchQuery.toLowerCase();
         // Double check filtering in case properties changed
         result = result.filter(p => 
             p.title.toLowerCase().includes(query) || 
             p.location.toLowerCase().includes(query) ||
             (p.id && p.id.toString().includes(query))
         );
    }

    // 2. Price Range
    if (priceRange !== 'Any') {
        result = result.filter(p => {
            const price = parseInt(p.price.replace(/[^0-9]/g, ''));
            if (priceRange === 'Under $1M') return price < 1000000;
            if (priceRange === '$1M - $3M') return price >= 1000000 && price <= 3000000;
            if (priceRange === '$3M - $5M') return price > 3000000 && price <= 5000000;
            if (priceRange === '$5M+') return price > 5000000;
            return true;
        });
    }

    // 3. Bedrooms
    if (bedrooms !== 'Any') {
        result = result.filter(p => {
            if (bedrooms === '4+') return p.bedrooms >= 4;
            return p.bedrooms === parseInt(bedrooms);
        });
    }

    // 4. Property Type
    if (propertyType !== 'Any') {
        result = result.filter(p => p.type === propertyType);
    }

    // 5. More Filters: Bathrooms
    if (bathrooms !== 'Any') {
        result = result.filter(p => {
            if (bathrooms === '4+') return p.bathrooms >= 4;
            return p.bathrooms >= parseInt(bathrooms);
        });
    }

    // 6. More Filters: Min Area
    if (minArea) {
        result = result.filter(p => {
            const area = parseInt(p.area.replace(/[^0-9]/g, ''));
            return area >= parseInt(minArea);
        });
    }

    // 7. Sorting
    if (sortBy === 'Price (High to Low)') {
        result.sort((a, b) => {
            const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
            const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
            return priceB - priceA;
        });
    } else if (sortBy === 'Price (Low to High)') {
        result.sort((a, b) => {
            const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
            const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
            return priceA - priceB;
        });
    } else {
        // Default: Newest Listed
        result.sort((a, b) => b.id - a.id);
    }

    setFilteredProperties(result);
  }, [properties, searchQuery, priceRange, bedrooms, propertyType, bathrooms, minArea, sortBy]);

  // Handle Reset Filters
  const handleReset = async () => {
    setLoading(true);
    setSearchQuery('');
    setPriceRange('Any');
    setBedrooms('Any');
    setPropertyType('Any');
    setBathrooms('Any');
    setMinArea('');
    setShowMoreFilters(false);
    
    try {
        // Reset to default API fetch (first 20 results, no query)
        const mlsData = await fetchMLSListings(20, 0); 
        setProperties(mlsData);
        setFilteredProperties(mlsData);
        setOffset(20);
        setHasMore(mlsData.length === 20);
    } catch (error) {
        console.error("Failed to reset listings:", error);
    } finally {
        setLoading(false);
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
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" alt="Luxury Texture" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 to-charcoal/90"></div>
        </div>
        
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
      <div className={`sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm py-4 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full md:translate-y-0'}`}>
        <div className="container-custom px-4 flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-1/3">
                <input 
                    type="text" 
                    placeholder="City, Neighborhood, or MLS#" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearch}
                    className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 focus:border-gold outline-none transition-colors rounded-sm"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <button 
                    onClick={handleSearch}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-charcoal text-white p-1.5 rounded-sm hover:bg-gold transition-colors"
                >
                    <Search size={14} />
                </button>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto items-center">
                {/* Price Filter */}
                <div className="relative group">
                    <select 
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="appearance-none pl-4 pr-10 py-2 bg-white border border-gray-200 hover:border-gold focus:outline-none cursor-pointer text-sm"
                    >
                        <option value="Any">Price Range</option>
                        <option value="Under $1M">Under $1M</option>
                        <option value="$1M - $3M">$1M - $3M</option>
                        <option value="$3M - $5M">$3M - $5M</option>
                        <option value="$5M+">$5M+</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" />
                </div>

                {/* Bedrooms Filter */}
                <div className="relative group">
                    <select 
                        value={bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)}
                        className="appearance-none pl-4 pr-10 py-2 bg-white border border-gray-200 hover:border-gold focus:outline-none cursor-pointer text-sm"
                    >
                        <option value="Any">Bedrooms</option>
                        <option value="1">1 Bed</option>
                        <option value="2">2 Beds</option>
                        <option value="3">3 Beds</option>
                        <option value="4+">4+ Beds</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" />
                </div>

                {/* Property Type Filter */}
                <div className="relative group">
                    <select 
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="appearance-none pl-4 pr-10 py-2 bg-white border border-gray-200 hover:border-gold focus:outline-none cursor-pointer text-sm"
                    >
                        <option value="Any">Property Type</option>
                        <option value="RES">Residential</option>
                        <option value="CND">Condo</option>
                        <option value="RNT">Rental</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" />
                </div>

                <div className="relative">
                    <button 
                        onClick={() => setShowMoreFilters(!showMoreFilters)}
                        className={`flex items-center px-4 py-2 border transition-colors text-sm whitespace-nowrap ml-auto md:ml-0 ${showMoreFilters ? 'bg-gold border-gold text-white' : 'bg-charcoal text-white border-charcoal hover:bg-gold hover:border-gold'}`}
                    >
                        <Filter size={14} className="mr-2" /> More Filters
                    </button>
                    
                    {/* More Filters Dropdown */}
                    {showMoreFilters && (
                        <div className="absolute right-0 top-full mt-2 w-64 bg-white shadow-xl border border-gray-100 p-4 z-50 rounded-sm animate-fade-in-up">
                            <div className="mb-4">
                                <label className="block text-xs font-bold text-charcoal mb-2 uppercase tracking-wide">Bathrooms</label>
                                <select 
                                    value={bathrooms}
                                    onChange={(e) => setBathrooms(e.target.value)}
                                    className="w-full p-2 bg-gray-50 border border-gray-200 text-sm focus:border-gold outline-none"
                                >
                                    <option value="Any">Any</option>
                                    <option value="1">1+</option>
                                    <option value="2">2+</option>
                                    <option value="3">3+</option>
                                    <option value="4+">4+</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-xs font-bold text-charcoal mb-2 uppercase tracking-wide">Min Sq. Ft.</label>
                                <input 
                                    type="number" 
                                    value={minArea}
                                    onChange={(e) => setMinArea(e.target.value)}
                                    placeholder="e.g. 2000"
                                    className="w-full p-2 bg-gray-50 border border-gray-200 text-sm focus:border-gold outline-none"
                                />
                            </div>
                            <button 
                                onClick={handleReset}
                                className="w-full text-center py-2 bg-gray-100 hover:bg-gray-200 text-xs font-bold uppercase tracking-wider text-gray-600 transition-colors"
                            >
                                Reset All Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Mobile Reset Filters Button */}
            <div className="md:hidden mt-2 w-full">
                <button 
                    onClick={handleReset}
                    className="w-full py-3 bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
                >
                    Reset Filters
                </button>
            </div>
        </div>
      </div>

      {/* Results Grid */}
      <section className="section-padding pt-8 md:pt-12 min-h-[50vh]">
        <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 gap-4">
                <p className="text-gray-500 text-sm">
                    Showing <span className="font-bold text-charcoal">{filteredProperties.length}</span> Properties
                </p>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 hidden md:inline">Sort by:</span>
                    <div className="relative">
                        <select 
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="appearance-none pl-2 pr-8 bg-transparent border-none text-sm font-bold text-charcoal focus:outline-none cursor-pointer text-right"
                        >
                            <option>Newest Listed</option>
                            <option>Price (High to Low)</option>
                            <option>Price (Low to High)</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none text-charcoal" />
                    </div>
                </div>
            </div>

            {loading ? (
                 <div className="text-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold mx-auto"></div>
                    <p className="mt-4 text-gray-400 text-sm">Loading MLS Data...</p>
                 </div>
            ) : filteredProperties.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProperties.map((property) => (
                            <div key={property.id} className="h-full">
                                <PropertyCard property={property} />
                            </div>
                        ))}
                    </div>
                    
                    {hasMore && (
                        <div className="mt-12 text-center">
                            <button 
                                onClick={handleLoadMore}
                                disabled={loadingMore}
                                className="px-8 py-3 bg-white border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all uppercase tracking-widest text-xs font-bold shadow-sm flex items-center justify-center mx-auto"
                            >
                                {loadingMore ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-charcoal mr-2"></div>
                                        Loading...
                                    </>
                                ) : (
                                    "Load More Listings"
                                )}
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className="text-center py-20 bg-white rounded-sm shadow-sm">
                    <p className="text-xl font-serif text-charcoal mb-2">No properties found.</p>
                    <p className="text-gray-500 text-sm">Try adjusting your filters or search query.</p>
                    <button 
                        onClick={() => {
                            setSearchQuery('');
                            setPriceRange('Any');
                            setBedrooms('Any');
                            setPropertyType('Any');
                        }}
                        className="mt-6 btn-secondary"
                    >
                        Clear All Filters
                    </button>
                </div>
            )}
        </div>
      </section>
    </div>
  );
};

export default HomeSearch;
