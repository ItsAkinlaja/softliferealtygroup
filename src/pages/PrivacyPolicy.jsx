import React from 'react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FadeIn from '../components/FadeIn';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-charcoal">
      <SEO 
        title="Privacy Policy - SoftLife Realty" 
        description="Our commitment to protecting your personal information. Read the SoftLife Realty Group Privacy Policy."
        keywords="privacy policy, data protection, real estate privacy, softlife realty policy"
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Privacy Policy</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
              Your trust is our foundation. We are committed to protecting your privacy and personal data.
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

              <h3>1. Introduction</h3>
              <p>
                SoftLife Realty Group ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. 
                This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) 
                and tell you about your privacy rights and how the law protects you.
              </p>

              <h3>2. Information We Collect</h3>
              <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
              <ul>
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
              </ul>

              <h3>3. How We Use Your Personal Data</h3>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul>
                <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., helping you buy or sell a property).</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal or regulatory obligation.</li>
              </ul>

              <h3>4. Data Security</h3>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. 
                In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>

              <h3>5. Third-Party Links</h3>
              <p>
                This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. 
                We do not control these third-party websites and are not responsible for their privacy statements.
              </p>

              <h3>6. Contact Us</h3>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:info@softliferealtygroup.com">info@softliferealtygroup.com</a>.
              </p>

            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
