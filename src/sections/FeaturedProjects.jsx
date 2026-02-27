import React, { useEffect, useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { getProperties } from '../services/api';

const FeaturedProjects = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      const data = await getProperties();
      setProperties(data);
      setLoading(false);
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
            <a href="/search" className="hidden md:inline-flex items-center text-black font-bold hover:text-gray-600 transition-colors uppercase text-sm tracking-widest border-b border-black pb-1">
                View All Listings <span className="ml-2">&rarr;</span>
            </a>
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
            <a href="/search" className="btn-secondary w-full">View All Listings</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
