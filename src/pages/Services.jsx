import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServiceDetails from '../components/services/ServiceDetails';
import FinalCTA from '../components/home/FinalCTA';

const Services = () => {
  return (
    <div className="bg-white">
      <ServicesHero />
      <ServiceDetails />
      <FinalCTA />
    </div>
  );
};

export default Services;
