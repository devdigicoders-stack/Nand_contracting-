import React, { useEffect } from 'react';
import ManpowerHero from '../components/manpower/ManpowerHero';
import ManpowerOverview from '../components/manpower/ManpowerOverview';
import WorkforceCategories from '../components/manpower/WorkforceCategories';
import HospitalityServices from '../components/manpower/HospitalityServices';
import PropertySupport from '../components/manpower/PropertySupport';
import RecruitmentNetwork from '../components/manpower/RecruitmentNetwork';
import RecruitmentProcess from '../components/manpower/RecruitmentProcess';
import ManpowerWhyNand from '../components/manpower/ManpowerWhyNand';
import ManpowerRequirementForm from '../components/manpower/ManpowerRequirementForm';
import ManpowerCTA from '../components/manpower/ManpowerCTA';

const Manpower = () => {
  useEffect(() => {
    document.title = "Manpower Supply & Hospitality Services in Qatar | NAND";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "NAND provides manpower outsourcing, hospitality staff, construction labour, logistics workforce, facility support and outsourced staffing solutions for businesses across Qatar.";
    }
  }, []);

  return (
    <div className="bg-white">
      <ManpowerHero />
      <ManpowerOverview />
      <WorkforceCategories />
      <HospitalityServices />
      <PropertySupport />
      <RecruitmentNetwork />
      <RecruitmentProcess />
      <ManpowerWhyNand />
      <ManpowerRequirementForm />
      <ManpowerCTA />
    </div>
  );
};

export default Manpower;
