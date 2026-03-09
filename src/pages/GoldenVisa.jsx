import React from 'react';
import { Check, ArrowRight, MessageCircle } from 'lucide-react';
import InstagramSlides from '../sections/InstagramSlides';
import ConsultationCTA from '../sections/ConsultationCTA';
import FadeIn from '../components/FadeIn';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';

const GoldenVisa = () => {
  return (
    <div className="bg-beige min-h-screen font-sans text-charcoal">
        <SEO 
            title="UAE Golden Visa - Dubai Real Estate Investment" 
            description="Secure your 10-year renewable UAE Golden Visa through strategic real estate investment. Learn about eligibility, benefits, and qualifying properties."
            keywords="uae golden visa, dubai golden visa, dubai residency by investment, buy property in dubai, dubai real estate investor visa"
        />
        {/* Hero Section - Dubai Real Estate / Golden Visa */}
        <section className="relative h-[50vh] min-h-[400px] md:h-[60vh] md:min-h-[500px] overflow-hidden flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                preload="metadata"
                poster="https://res.cloudinary.com/dewttmtbc/image/upload/v1772351058/ozycyujmu4itfjlc8dqh.jpg"
                className="absolute inset-0 w-full h-full object-cover object-center"
            >
                <source src="https://res.cloudinary.com/dewttmtbc/video/upload/v1772301941/xuibfjgsx68xyvlesh8h.mp4" type="video/mp4" />
                {/* Fallback image if video cannot play */}
                <img 
                    src="https://res.cloudinary.com/dewttmtbc/image/upload/v1772351058/ozycyujmu4itfjlc8dqh.jpg" 
                    alt="Dubai real estate skyline" 
                    className="w-full h-full object-cover"
                />
            </video>
            <div className="relative z-20 container-custom px-4 flex flex-col items-center">
                <Breadcrumbs className="text-white/80 mb-6" />
                <FadeIn>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
                        The UAE <span className="text-gold italic">Golden Visa</span>
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-light">
                        Your gateway to long-term residency, tax-free living, and global mobility through strategic real estate investment.
                    </p>
                </FadeIn>
            </div>
        </section>

        {/* Introduction */}
        <section className="section-padding bg-white">
            <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <FadeIn direction="right">
                    <div className="relative rounded-sm overflow-hidden shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1974&auto=format&fit=crop" 
                            alt="Dubai Lifestyle" 
                            className="w-full h-auto hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </FadeIn>
                <FadeIn direction="left" delay={0.2}>
                    <h2 className="text-4xl font-serif font-bold text-charcoal mb-6">What is the Golden Visa?</h2>
                    <div className="h-1 w-20 bg-gold mb-8"></div>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg font-light">
                        The UAE Golden Visa is a long-term residence visa which enables foreign talents to live, work or study in the UAE while enjoying exclusive benefits. Investors, entrepreneurs, scientists, outstanding students and graduates, humanitarian pioneers and frontline heroes are among those eligible.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
                        For real estate investors, purchasing a property worth AED 2 Million or more grants you a 10-year renewable residency, providing stability and security for you and your family.
                    </p>
                    <ul className="space-y-4">
                        {["10-Year Renewable Residency", "100% Business Ownership", "No Sponsor Required", "Work & Live in Dubai"].map((item, i) => (
                            <li key={i} className="flex items-center text-charcoal font-medium text-lg">
                                <span className="bg-gold/20 p-1 rounded-full mr-3">
                                    <Check size={16} className="text-gold" />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </FadeIn>
            </div>
        </section>

        {/* Instagram Slides Integration */}
        <section className="bg-beige py-10">
            <FadeIn>
                <InstagramSlides />
            </FadeIn>
        </section>

        {/* Detailed Benefits */}
        <section className="section-padding bg-white">
            <div className="container-custom">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-charcoal mb-4">Why Secure a Golden Visa?</h2>
                        <div className="h-0.5 w-16 bg-gold mx-auto"></div>
                    </div>
                </FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <FadeIn delay={0.1}>
                        <div className="p-8 border border-gray-100 bg-beige/30 hover:bg-white hover:shadow-xl transition-all duration-300 h-full group">
                            <h3 className="text-2xl font-serif font-bold text-charcoal group-hover:text-gold mb-4 transition-colors">Security & Stability</h3>
                            <p className="text-gray-600 leading-relaxed font-light">Secure your future in one of the safest countries in the world with a 10-year guarantee of residency.</p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                         <div className="p-8 border border-gray-100 bg-beige/30 hover:bg-white hover:shadow-xl transition-all duration-300 h-full group">
                            <h3 className="text-2xl font-serif font-bold text-charcoal group-hover:text-gold mb-4 transition-colors">Family Future</h3>
                            <p className="text-gray-600 leading-relaxed font-light">Sponsor your spouse and children, ensuring they have access to world-class education and healthcare.</p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                         <div className="p-8 border border-gray-100 bg-beige/30 hover:bg-white hover:shadow-xl transition-all duration-300 h-full group">
                            <h3 className="text-2xl font-serif font-bold text-charcoal group-hover:text-gold mb-4 transition-colors">Returns on Investment</h3>
                            <p className="text-gray-600 leading-relaxed font-light">Benefit from high rental yields and capital appreciation on your qualifying real estate asset.</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>

        {/* WhatsApp Contact Section */}
        <section className="py-16 bg-charcoal text-white">
            <div className="container-custom px-4">
                <FadeIn>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">Connect With Our Dubai Experts</h2>
                        <p className="text-white max-w-2xl mx-auto font-light opacity-90">Available for immediate assistance on WhatsApp for all your Dubai real estate inquiries.</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                        <a 
                            href="https://wa.me/14698231886" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-sm transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 w-full md:w-auto justify-center"
                        >
                            <MessageCircle className="mr-3" size={24} />
                            <div className="text-left">
                                <p className="text-xs uppercase font-bold tracking-widest opacity-80 leading-none mb-1">WhatsApp 1</p>
                                <p className="text-lg font-bold">+1 (469) 823-1886</p>
                            </div>
                        </a>
                        <a 
                            href="https://wa.me/14699702664" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-sm transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 w-full md:w-auto justify-center"
                        >
                            <MessageCircle className="mr-3" size={24} />
                            <div className="text-left">
                                <p className="text-xs uppercase font-bold tracking-widest opacity-80 leading-none mb-1">WhatsApp 2</p>
                                <p className="text-lg font-bold">+1 (469) 970-2664</p>
                            </div>
                        </a>
                    </div>
                </FadeIn>
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
