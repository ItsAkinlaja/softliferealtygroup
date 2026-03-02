import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { fetchMLSListings } from '../services/mlsApi';

const FeaturedProjects = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // Fetch only MLS listings for Featured Projects
        const mlsData = await fetchMLSListings(6); // Fetch 6 items to fill the grid nicely
        setProperties(mlsData);
      } catch (error) {
        console.error("Error fetching featured projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-4xl font-serif font-bold text-black mb-2 uppercase tracking-wide">Featured Listings</h2>
                <p className="text-gray-500 max-w-xl font-light">
                    Exclusive properties curated for the discerning investor.
                </p>
            </div>
            <Link to="/search" className="hidden md:inline-flex items-center text-black font-bold hover:text-gray-600 transition-colors uppercase text-sm tracking-widest border-b border-black pb-1">
                View All Listings <span className="ml-2">&rarr;</span>
            </Link>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black mx-auto"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center md:hidden">
            <Link to="/search" className="btn-secondary w-full">View All Listings</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
