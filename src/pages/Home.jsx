import React from 'react';
import Hero from '../sections/Hero';
import GoldenVisaInfo from '../sections/GoldenVisaInfo';
import WhyInvest from '../sections/WhyDubai';
import FeaturedProjects from '../sections/FeaturedProjects';
import SignatureNeighborhoods from '../sections/SignatureNeighborhoods';
import VideoSection from '../sections/VideoSection';
import Testimonials from '../sections/Testimonials';
import ConsultationCTA from '../sections/ConsultationCTA';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="Luxury Real Estate in Dallas & Dubai" 
        description="SoftLife Realty Group connects you with premium properties in Dallas and Dubai. Explore our exclusive listings and expert valuation services today."
        keywords="luxury real estate, dallas homes, dubai property, golden visa, real estate investment"
      />
      <Hero />
      <FadeIn>
        <SignatureNeighborhoods />
      </FadeIn>
      <FadeIn>
        <FeaturedProjects />
      </FadeIn>
      <FadeIn>
        <WhyInvest />
      </FadeIn>
      <FadeIn>
        <GoldenVisaInfo />
      </FadeIn>
      <FadeIn>
        <VideoSection />
      </FadeIn>
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <FadeIn>
        <ConsultationCTA />
      </FadeIn>
    </>
  );
};

export default Home;
