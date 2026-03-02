import React from 'react';
import { TrendingUp, Home, DollarSign, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const HomeValuation = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you! Your valuation request has been received. One of our experts will contact you shortly.");
  };

  return (
    <div className="bg-beige min-h-screen font-sans text-charcoal">
      <SEO 
        title="Home Valuation" 
        description="Get an accurate, professional valuation of your property. Our experts analyze market trends and unique features to determine your home's true value."
        keywords="home valuation, property appraisal, sell my home, real estate market analysis, house value"
      />
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/6032416/pexels-photo-6032416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Luxury Home Interior" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 container-custom">
          <span className="text-gold text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
            Market Analysis
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
            Discover Your Home's <br/> <span className="italic text-gold-light">True Value</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl leading-relaxed drop-shadow-md">
            Unlock the potential of your property with a comprehensive valuation from SoftLife Realty Group. Precision, expertise, and market insight tailored to you.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container-custom px-4 py-16 md:py-24 -mt-20 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: The "Why" & Trust */}
            <div className="lg:col-span-5 space-y-12 pt-10">
                <div className="bg-white p-8 md:p-10 shadow-lg border-l-4 border-gold">
                    <h3 className="text-2xl font-serif font-bold mb-4 text-charcoal">More Than Just a Number</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Automated tools can only tell you so much. Our valuation process combines real-time data with the nuanced expertise of our luxury specialists to give you a figure you can trust.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="bg-beige p-2 rounded-full mr-4 text-gold">
                                <TrendingUp size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-charcoal">Market Trends</h4>
                                <p className="text-sm text-gray-500">Analysis of current buyer demand and neighborhood shifts.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-beige p-2 rounded-full mr-4 text-gold">
                                <Home size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-charcoal">Property Unique Features</h4>
                                <p className="text-sm text-gray-500">We value the custom details that algorithms miss.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-beige p-2 rounded-full mr-4 text-gold">
                                <DollarSign size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-charcoal">Investment Potential</h4>
                                <p className="text-sm text-gray-500">Strategic advice on maximizing your ROI before selling.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-sm h-64 shadow-md group">
                     <img 
                        src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Elegant Living Room" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <span className="text-white font-serif text-2xl italic">"Excellence in every detail."</span>
                    </div>
                </div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:col-span-7">
                <div className="bg-white p-8 md:p-12 shadow-2xl rounded-sm border-t border-gold/20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-serif font-bold text-charcoal mb-3">Request Your Valuation</h2>
                        <div className="h-1 w-20 bg-gold mx-auto mb-4"></div>
                        <p className="text-gray-500">Please provide the details below. Your privacy is our priority.</p>
                    </div>

                    <form className="space-y-8" onSubmit={handleSubmit}>
                        {/* Property Details */}
                        <div>
                            <h4 className="text-sm font-bold text-gold uppercase tracking-widest mb-6 flex items-center">
                                <span className="bg-gold w-2 h-2 rounded-full mr-2"></span>
                                Property Information
                            </h4>
                            <div className="space-y-6">
                                <div className="group">
                                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2 group-focus-within:text-gold transition-colors">Property Address</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-gold outline-none transition-all placeholder-gray-300 text-lg"
                                        placeholder="123 Luxury Lane, Dallas, TX"
                                    />
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="group">
                                        <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2 group-focus-within:text-gold transition-colors">Property Type</label>
                                        <select className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-gold outline-none transition-all text-gray-700 text-lg">
                                            <option>Single Family Home</option>
                                            <option>Condo / Apartment</option>
                                            <option>Townhouse</option>
                                            <option>Luxury Estate</option>
                                            <option>Penthouse</option>
                                            <option>Land</option>
                                            <option>Commercial</option>
                                        </select>
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2 group-focus-within:text-gold transition-colors">Bedrooms / Bathrooms</label>
                                        <input 
                                            type="text" 
                                            className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-gold outline-none transition-all placeholder-gray-300 text-lg"
                                            placeholder="e.g. 4 Beds / 3 Baths"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="pt-6">
                            <h4 className="text-sm font-bold text-gold uppercase tracking-widest mb-6 flex items-center">
                                <span className="bg-gold w-2 h-2 rounded-full mr-2"></span>
                                Your Contact Details
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                                <div className="group">
                                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2 group-focus-within:text-gold transition-colors">First Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-gold outline-none transition-all placeholder-gray-300 text-lg"
                                        placeholder="Jane"
                                    />
                                </div>
                                <div className="group">
                                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2 group-focus-within:text-gold transition-colors">Last Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-gold outline-none transition-all placeholder-gray-300 text-lg"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="group">
                                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2 group-focus-within:text-gold transition-colors">Email Address</label>
                                    <input 
                                        type="email" 
                                        className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-gold outline-none transition-all placeholder-gray-300 text-lg"
                                        placeholder="jane@example.com"
                                    />
                                </div>
                                <div className="group">
                                    <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2 group-focus-within:text-gold transition-colors">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-gold outline-none transition-all placeholder-gray-300 text-lg"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <button type="submit" className="w-full btn-primary py-4 text-lg flex justify-center items-center group relative overflow-hidden">
                                <span className="relative z-10 flex items-center">
                                    Get My Professional Valuation
                                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                            <p className="text-center text-xs text-gray-400 mt-4">
                                By submitting this form, you agree to be contacted by SoftLife Realty Group regarding your property inquiry.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeValuation;
