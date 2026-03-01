import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ className = "" }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Map route names to readable labels
  const routeNameMap = {
    'search': 'Search Properties',
    'valuation': 'Home Valuation',
    'about': 'About Us',
    'buy': 'Buy',
    'sell': 'Sell',
    'guide': 'Guide',
    'dubai-real-estate': 'Dubai Real Estate',
    'golden-visa': 'Golden Visa',
  };

  return (
    <nav className={`flex items-center text-xs md:text-sm font-medium tracking-widest uppercase ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center hover:text-gold transition-colors duration-300">
            <Home size={14} className="mr-2 mb-0.5" />
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const name = routeNameMap[value] || value.replace(/-/g, ' ');

          // Prevent linking to non-existent parent routes like /buy or /sell
          const isNonExistentRoute = to === '/buy' || to === '/sell';

          return (
            <li key={to}>
              <div className="flex items-center">
                <ChevronRight size={14} className="mx-1 text-gold/70" />
                {isLast || isNonExistentRoute ? (
                  <span className={`${isLast ? 'text-gold font-bold' : 'text-gray-400'} pointer-events-none`}>
                    {name}
                  </span>
                ) : (
                  <Link to={to} className="hover:text-gold transition-colors duration-300">
                    {name}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
