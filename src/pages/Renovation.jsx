import React, { useEffect } from 'react';
import RenovationHero from '../components/renovation/RenovationHero';
import RenovationOverview from '../components/renovation/RenovationOverview';
import RenovationNavigation from '../components/renovation/RenovationNavigation';
import RenovationTypes from '../components/renovation/RenovationTypes';
import InteriorFitout from '../components/renovation/InteriorFitout';
import InteriorWorks from '../components/renovation/InteriorWorks';
import FinishingPackages from '../components/renovation/FinishingPackages';
import ImprovementProcess from '../components/renovation/ImprovementProcess';
import RenovationGallery from '../components/renovation/RenovationGallery';
import RenovationProcess from '../components/renovation/RenovationProcess';
import RenovationWhyNand from '../components/renovation/RenovationWhyNand';
import RenovationCTA from '../components/renovation/RenovationCTA';

const Renovation = () => {
  useEffect(() => {
    document.title = "Renovation & Fit-Out Services in Qatar | NAND";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Explore NAND renovation and fit-out services for villas, apartments, offices and commercial spaces, including interior fit-out, partition, ceiling, flooring and finishing works across Qatar.";
    }
  }, []);

  return (
    <div className="bg-white">
      <RenovationHero />
      <RenovationOverview />
      <RenovationNavigation />
      <RenovationTypes />
      <InteriorFitout />
      <InteriorWorks />
      <FinishingPackages />
      <ImprovementProcess />
      <RenovationGallery />
      <RenovationProcess />
      <RenovationWhyNand />
      <RenovationCTA />
    </div>
  );
};

export default Renovation;
