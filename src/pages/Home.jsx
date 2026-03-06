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
        title="Homes for Sale in Dallas, TX | Soft Life Realty Group" 
        description="Discover homes for sale in Dallas, TX with Soft Life Realty Group. Explore neighborhoods and get expert help relocating to Dallas."
        keywords="homes for sale dallas tx, soft life realty group, dallas real estate, relocating to dallas, dubai real estate"
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
