import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustStrip from '../components/home/TrustStrip';
import AboutPreview from '../components/home/AboutPreview';
import BusinessDivisions from '../components/home/BusinessDivisions';
import CoreServices from '../components/home/CoreServices';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ServiceProcess from '../components/home/ServiceProcess';
import ManpowerSection from '../components/home/ManpowerSection';
import IndustriesSection from '../components/home/IndustriesSection';
import EmergencyCTA from '../components/home/EmergencyCTA';
import FinalCTA from '../components/home/FinalCTA';

const Home = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <TrustStrip />
      <AboutPreview />
      <BusinessDivisions />
      <CoreServices />
      <WhyChooseUs />
      <ServiceProcess />
      <ManpowerSection />
      <IndustriesSection />
      <EmergencyCTA />
      <FinalCTA />
    </div>
  );
};

export default Home;
