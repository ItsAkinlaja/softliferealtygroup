import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm text-charcoal text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-sm">
          {property.completion}
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 z-20">
           <p className="text-white font-serif font-bold text-2xl drop-shadow-md">{property.price}</p>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4">
            <h3 className="text-xl font-serif font-bold text-charcoal mb-2 line-clamp-1 group-hover:text-gold transition-colors">{property.title}</h3>
            <div className="flex items-center text-gray-500 text-sm font-medium">
                <MapPin size={16} className="mr-1 text-gold" />
                {property.location}
            </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6 border-t border-b border-gray-100 py-4">
          <div className="flex flex-col items-center text-center">
            <span className="text-charcoal font-bold text-lg">{property.bedrooms}</span>
            <span className="text-[10px] uppercase tracking-wider text-gray-400">Beds</span>
          </div>
          <div className="flex flex-col items-center text-center border-l border-r border-gray-100">
            <span className="text-charcoal font-bold text-lg">{property.bathrooms}</span>
            <span className="text-[10px] uppercase tracking-wider text-gray-400">Baths</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-charcoal font-bold text-lg">{property.area.split(' ')[0]}</span>
            <span className="text-[10px] uppercase tracking-wider text-gray-400">Sq. Ft.</span>
          </div>
        </div>

        <div className="space-y-3 mb-6 flex-grow">
             <div className="flex justify-between text-sm border-b border-gray-50 pb-2">
                <span className="text-gray-400 font-light">Developer</span>
                <span className="font-medium text-charcoal">{property.developer}</span>
            </div>
             <div className="flex justify-between text-sm border-b border-gray-50 pb-2">
                <span className="text-gray-400 font-light">Payment Plan</span>
                <span className="font-medium text-charcoal">{property.paymentPlan}</span>
            </div>
        </div>

        <Link 
          to={`/contact?interest=${encodeURIComponent(property.title)}`}
          className="w-full btn-secondary py-3 flex items-center justify-center group-hover:bg-charcoal group-hover:text-white group-hover:border-charcoal mt-auto transition-all duration-300"
        >
          Request Details
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
