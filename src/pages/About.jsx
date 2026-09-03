import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import CompanyOverview from '../components/about/CompanyOverview';
import PurposeSection from '../components/about/PurposeSection';
import MissionSection from '../components/about/MissionSection';
import VisionSection from '../components/about/VisionSection';
import ValuesSection from '../components/about/ValuesSection';
import LeadershipSection from '../components/about/LeadershipSection';
import ServiceApproach from '../components/about/ServiceApproach';
import OrganisationChart from '../components/about/OrganisationChart';
import WhyNand from '../components/about/WhyNand';
import AboutCTA from '../components/about/AboutCTA';

const About = () => {
  useEffect(() => {
    document.title = "About NAND Contracting & Hospitality Services | Doha, Qatar";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Learn about NAND Contracting & Hospitality Services, a Doha-based provider of contracting, maintenance, renovation, hospitality, property support and manpower solutions across Qatar.";
    }
  }, []);

  return (
    <div className="bg-white">
      <AboutHero />
      <CompanyOverview />
      <PurposeSection />
      <MissionSection />
      <VisionSection />
      <ValuesSection />
      <LeadershipSection />
      <ServiceApproach />
      <OrganisationChart />
      <WhyNand />
      <AboutCTA />
    </div>
  );
};

export default About;
