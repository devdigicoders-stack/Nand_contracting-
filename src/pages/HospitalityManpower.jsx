import React from 'react';

const HospitalityManpower = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <h1 className="text-4xl font-bold text-nand-navy mb-8">Hospitality & Manpower Outsourcing</h1>
        <p className="text-lg text-nand-muted mb-8">This page combines the people/service side of Nand.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-nand-orange mb-4">Hospitality Services</h2>
            <ul className="list-disc pl-5 space-y-2 text-nand-muted">
              <li>Hotel Support Services</li>
              <li>Restaurant Support Services</li>
              <li>Hospitality Operations Support</li>
              <li>Event Hospitality Support</li>
              <li>Guest Service Support</li>
              <li>Hospitality Facility Support</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-nand-orange mb-4">Workforce & Outsourcing</h2>
            <ul className="list-disc pl-5 space-y-2 text-nand-muted">
              <li>Hospitality & Service Staff</li>
              <li>Construction & General Labour</li>
              <li>Facility & Cleaning Support</li>
              <li>Warehouse & Logistics Workforce</li>
              <li>Drivers & Transport Support</li>
              <li>Temporary & Outsourced Workforce</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-nand-orange mb-4">Recruitment & Workforce Support</h2>
            <ul className="list-disc pl-5 space-y-2 text-nand-muted">
              <li>Recruitment Analysis</li>
              <li>Candidate Sourcing</li>
              <li>Screening & Shortlisting</li>
              <li>Interview & Selection</li>
              <li>Documentation & Visa Processing</li>
              <li>Deployment & Aftercare</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalityManpower;
