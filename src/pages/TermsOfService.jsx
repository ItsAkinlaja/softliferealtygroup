import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FadeIn from '../components/FadeIn';

const TermsOfService = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-charcoal">
      <SEO 
        title="Terms of Service - SoftLife Realty" 
        description="Review the terms and conditions for using SoftLife Realty Group's services and website."
        keywords="terms of service, terms and conditions, real estate terms, softlife realty legal"
      />
      
      <section className="bg-charcoal text-white py-20 relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" alt="Luxury Texture" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 to-charcoal/90"></div>
        </div>
        
        <div className="container-custom px-4 relative z-10 text-center">
          <Breadcrumbs className="text-white/70 justify-center mb-6" />
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Terms of Service</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
              Please read these terms carefully before using our services.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom px-4 max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="prose prose-lg prose-headings:font-serif prose-headings:text-charcoal prose-a:text-gold hover:prose-a:text-charcoal prose-p:text-gray-600 prose-li:text-gray-600 max-w-none">
              
              <p className="lead text-xl text-gray-500 italic mb-10 border-l-4 border-gold pl-6">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <h3>1. Agreement to Terms</h3>
              <p>
                By accessing or using the SoftLife Realty Group website, you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>

              <h3>2. Use License</h3>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on SoftLife Realty Group's website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>Attempt to decompile or reverse engineer any software contained on SoftLife Realty Group's website;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>

              <h3>3. Disclaimer</h3>
              <p>
                The materials on SoftLife Realty Group's website are provided on an 'as is' basis. SoftLife Realty Group makes no warranties, expressed or implied, 
                and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, 
                fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h3>4. Real Estate Services</h3>
              <p>
                SoftLife Realty Group provides real estate brokerage services. Information presented on this website regarding properties (including price, availability, 
                and features) is subject to change without notice. We recommend verifying all information with one of our licensed agents before making any financial decisions.
              </p>

              <h3>5. Limitations</h3>
              <p>
                In no event shall SoftLife Realty Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, 
                or due to business interruption) arising out of the use or inability to use the materials on SoftLife Realty Group's website.
              </p>

              <h3>6. Governing Law</h3>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the State of Texas and you irrevocably submit to the exclusive 
                jurisdiction of the courts in that State or location.
              </p>

            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
