import React from 'react';
import Hero from '../sections/Hero';
import GoldenVisaInfo from '../sections/GoldenVisaInfo';
import WhyInvest from '../sections/WhyDubai';
import FeaturedProjects from '../sections/FeaturedProjects';
import VideoSection from '../sections/VideoSection';
import ConsultationCTA from '../sections/ConsultationCTA';
import FadeIn from '../components/FadeIn';

const Home = () => {
  return (
    <>
      <Hero />
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
        <ConsultationCTA />
      </FadeIn>
    </>
  );
};

export default Home;
