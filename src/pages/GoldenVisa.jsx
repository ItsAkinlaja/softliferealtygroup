import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import InstagramSlides from '../sections/InstagramSlides';
import ConsultationCTA from '../sections/ConsultationCTA';
import FadeIn from '../components/FadeIn';

const GoldenVisa = () => {
  return (
    <div className="bg-ivory">
        {/* Header */}
        <div className="bg-charcoal text-white py-20">
            <FadeIn className="container-custom px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gold-500">The UAE Golden Visa</h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Your gateway to long-term residency, tax-free living, and global mobility through strategic real estate investment.
                </p>
            </FadeIn>
        </div>

        {/* Introduction */}
        <section className="section-padding">
            <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <FadeIn direction="right">
                    <img 
                        src="https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1974&auto=format&fit=crop" 
                        alt="Dubai Golden Visa" 
                        className="rounded-2xl shadow-2xl"
                    />
                </FadeIn>
                <FadeIn direction="left" delay={0.2}>
                    <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">What is the Golden Visa?</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        The UAE Golden Visa is a long-term residence visa which enables foreign talents to live, work or study in the UAE while enjoying exclusive benefits. Investors, entrepreneurs, scientists, outstanding students and graduates, humanitarian pioneers and frontline heroes are among those eligible for the Golden Visa.
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        For real estate investors, purchasing a property worth AED 2 Million or more grants you a 10-year renewable residency, providing stability and security for you and your family.
                    </p>
                    <ul className="space-y-3">
                        {["10-Year Renewable Residency", "100% Business Ownership", "No Sponsor Required", "Work & Live in Dubai"].map((item, i) => (
                            <li key={i} className="flex items-center text-charcoal font-medium">
                                <Check size={20} className="text-gold-500 mr-2" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </FadeIn>
            </div>
        </section>

        {/* Instagram Slides Integration */}
        <FadeIn>
            <InstagramSlides />
        </FadeIn>

        {/* Detailed Benefits */}
        <section className="section-padding bg-white">
            <div className="container-custom">
                <FadeIn>
                    <h2 className="text-3xl font-serif font-bold text-center mb-12 text-charcoal">Why Secure a Golden Visa?</h2>
                </FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FadeIn delay={0.1}>
                        <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-gold-600 mb-3">Security & Stability</h3>
                            <p className="text-gray-600">Secure your future in one of the safest countries in the world with a 10-year guarantee of residency.</p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                         <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-gold-600 mb-3">Family Future</h3>
                            <p className="text-gray-600">Sponsor your spouse and children, ensuring they have access to world-class education and healthcare.</p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                         <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-gold-600 mb-3">Returns on Investment</h3>
                            <p className="text-gray-600">Benefit from high rental yields and capital appreciation on your qualifying real estate asset.</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>

        {/* CTA */}
        <FadeIn>
            <ConsultationCTA />
        </FadeIn>
    </div>
  );
};

export default GoldenVisa;
