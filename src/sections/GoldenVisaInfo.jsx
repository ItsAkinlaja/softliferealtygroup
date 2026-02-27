import React from 'react';
import { CheckCircle, Briefcase, Globe, Users } from 'lucide-react';

const GoldenVisaInfo = () => {
  const benefits = [
    {
      icon: <CheckCircle size={32} className="text-gold-500" />,
      title: "AED 2M Qualification",
      description: "Invest a minimum of AED 2,000,000 in real estate to qualify for the 10-year Golden Visa."
    },
    {
      icon: <Briefcase size={32} className="text-gold-500" />,
      title: "Off-Plan Eligibility",
      description: "Qualify with off-plan properties from approved developers with just a down payment."
    },
    {
      icon: <Users size={32} className="text-gold-500" />,
      title: "Family Sponsorship",
      description: "Sponsor your spouse, children, and parents for long-term residency in the UAE."
    },
    {
      icon: <Globe size={32} className="text-gold-500" />,
      title: "Global Access",
      description: "Enjoy visa-free travel to many countries and a strategic base for global business."
    }
  ];

  return (
    <section className="section-padding bg-ivory">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-4">The UAE Golden Visa</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock a world of opportunities with long-term residency through real estate investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-50 text-center">
              <div className="mb-6 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoldenVisaInfo;
