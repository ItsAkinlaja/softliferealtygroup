import React from 'react';
import { ArrowRight, Globe, Users, Award, Briefcase } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const About = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="container-custom px-4 mb-20 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-black uppercase tracking-wide mb-6">
            About SoftLife Realty
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
            Founded by Anne & Shakirah, SoftLife Realty is redefining the global real estate experience. Bridging the gap between luxury living and strategic investment, we connect discerning clients with exceptional properties worldwide.
          </p>
        </FadeIn>
      </section>

      {/* Founders Section */}
      <section className="mb-20 bg-gray-50 py-20">
        <div className="container-custom px-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <FadeIn direction="right">
                    <div className="relative h-[600px] w-full">
                         {/* Placeholder for Founders Image - using a high-quality professional abstract for now */}
                        <img 
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
                        alt="Anne & Shakirah - SoftLife Realty Founders" 
                        className="w-full h-full object-cover grayscale"
                        />
                    </div>
                </FadeIn>
                <FadeIn direction="left">
                    <h2 className="text-3xl font-serif font-bold text-black uppercase tracking-wide mb-6">
                        Meet The Founders
                    </h2>
                    <h3 className="text-xl text-gray-800 font-medium mb-4 uppercase tracking-wider">Anne & Shakirah</h3>
                    <div className="w-20 h-1 bg-black mb-8"></div>
                    <p className="text-gray-600 leading-relaxed mb-6 font-light">
                        With a shared vision for excellence and a deep understanding of the global market, Anne and Shakirah established SoftLife Realty to offer a boutique experience for the modern investor.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6 font-light">
                        Their partnership combines years of industry expertise, a network of exclusive connections, and a relentless drive to deliver results. Whether navigating complex cross-border transactions or finding the perfect family home, Anne and Shakirah are dedicated to your success.
                    </p>
                    <p className="text-gray-600 leading-relaxed font-light italic">
                        "We don't just sell real estate; we curate lifestyles."
                    </p>
                </FadeIn>
             </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="container-custom px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
             <h2 className="text-3xl font-serif font-bold text-black uppercase tracking-wide mb-6">Our Mission</h2>
             <p className="text-gray-600 leading-relaxed mb-6 font-light">
                At SoftLife Realty, our mission is simple: to empower our clients to build wealth and secure their dream lifestyle through real estate. We believe that every transaction is a stepping stone to a better future.
             </p>
             <p className="text-gray-600 leading-relaxed font-light">
                Whether you are buying your first home in Dallas, selling a luxury estate in Beverly Hills, or investing in a penthouse in Dubai, we bring the same level of dedication, expertise, and integrity to the table.
             </p>
          </FadeIn>
          <FadeIn direction="left">
             <div className="grid grid-cols-2 gap-6">
                <div className="p-8 border border-gray-100 text-center hover:bg-black hover:text-white transition-colors duration-300 group">
                    <Globe size={32} className="mx-auto mb-4 text-black group-hover:text-white" />
                    <h3 className="font-bold uppercase tracking-widest mb-2">Global Reach</h3>
                </div>
                <div className="p-8 border border-gray-100 text-center hover:bg-black hover:text-white transition-colors duration-300 group">
                    <Users size={32} className="mx-auto mb-4 text-black group-hover:text-white" />
                    <h3 className="font-bold uppercase tracking-widest mb-2">Client Focus</h3>
                </div>
                <div className="p-8 border border-gray-100 text-center hover:bg-black hover:text-white transition-colors duration-300 group">
                    <Award size={32} className="mx-auto mb-4 text-black group-hover:text-white" />
                    <h3 className="font-bold uppercase tracking-widest mb-2">Excellence</h3>
                </div>
                <div className="p-8 border border-gray-100 text-center hover:bg-black hover:text-white transition-colors duration-300 group">
                    <Briefcase size={32} className="mx-auto mb-4 text-black group-hover:text-white" />
                    <h3 className="font-bold uppercase tracking-widest mb-2">Integrity</h3>
                </div>
             </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-black uppercase tracking-wide mb-6">Ready to work with Anne & Shakirah?</h2>
            <a href="/#contact" className="btn-primary inline-flex items-center">
                Contact Us Today <ArrowRight className="ml-2" size={20} />
            </a>
        </div>
      </section>
    </div>
  );
};

export default About;
