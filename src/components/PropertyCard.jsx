import React from 'react';
import { MapPin, Bed, Bath, Maximize, ArrowRight } from 'lucide-react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {property.completion}
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
           <p className="text-white font-bold text-lg">{property.price}</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
            <div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-1 line-clamp-1">{property.title}</h3>
                <div className="flex items-center text-gray-500 text-sm">
                    <MapPin size={14} className="mr-1 text-gold-500" />
                    {property.location}
                </div>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-4 my-4 border-t border-b border-gray-100 py-3">
          <div className="flex flex-col items-center text-center">
            <Bed size={18} className="text-gold-500 mb-1" />
            <span className="text-xs text-gray-600">{property.bedrooms} Bed</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Bath size={18} className="text-gold-500 mb-1" />
            <span className="text-xs text-gray-600">{property.bathrooms} Bath</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Maximize size={18} className="text-gold-500 mb-1" />
            <span className="text-xs text-gray-600">{property.area}</span>
          </div>
        </div>

        <div className="space-y-2 mb-4">
             <div className="flex justify-between text-sm">
                <span className="text-gray-500">Developer:</span>
                <span className="font-medium text-charcoal">{property.developer}</span>
            </div>
             <div className="flex justify-between text-sm">
                <span className="text-gray-500">Payment Plan:</span>
                <span className="font-medium text-charcoal">{property.paymentPlan}</span>
            </div>
        </div>

        <button className="w-full btn-secondary py-2 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white">
          Request Details
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
