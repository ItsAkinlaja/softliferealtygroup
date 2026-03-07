import React from 'react';
import { CheckCircle, Home, Users, Award, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FadeIn from '../components/FadeIn';
import { Widget } from '@typeform/embed-react';

const BuyerInquiry = () => {
  return (
    <div className="bg-beige min-h-screen font-sans text-charcoal">
      <SEO
        title="Buyer Inquiry | Soft Life Realty Group"
        description="Start your home buying journey with Soft Life Realty Group. Tell us what you're looking for in your dream home."
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Luxury Home"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container-custom px-4 flex flex-col items-center">
          <Breadcrumbs className="text-white/80 mb-6" />
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
              Find Your <span className="text-gold italic">Dream Home</span>
            </h1>
            <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Let us guide you through your home buying journey with personalized service and expert knowledge.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white relative -mt-16 z-30">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

            {/* Left: Benefits & Info */}
            <FadeIn delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
                    Why Choose Soft Life Realty?
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    With years of experience in Dallas and Dubai real estate markets, we provide personalized guidance
                    to help you find the perfect property that matches your lifestyle and investment goals.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Home className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-2">Exclusive Listings</h3>
                      <p className="text-gray-600 text-sm">Access to off-market properties and luxury homes.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-2">Personalized Service</h3>
                      <p className="text-gray-600 text-sm">Tailored recommendations based on your preferences.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-2">Expert Guidance</h3>
                      <p className="text-gray-600 text-sm">Professional advice from certified real estate experts.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal mb-2">24/7 Support</h3>
                      <p className="text-gray-600 text-sm">Round-the-clock assistance throughout your journey.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-beige p-6 rounded-lg border-l-4 border-gold">
                  <h3 className="font-bold text-charcoal mb-3">What to Expect</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                      Initial consultation to understand your needs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                      Curated property recommendations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                      Market analysis and pricing guidance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                      Full support through closing
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Right: Inquiry Form */}
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-2xl border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-3">Start Your Journey</h3>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours with personalized recommendations.
                  </p>
                </div>

                <div className="w-full h-[600px] md:h-[700px] rounded-lg overflow-hidden bg-gray-50">
                  <Widget
                    id="HASkdHGb"
                    style={{ width: '100%', height: '100%' }}
                    className="my-form"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyerInquiry;