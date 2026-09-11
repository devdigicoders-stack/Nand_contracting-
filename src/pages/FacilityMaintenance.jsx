import React from 'react';

const FacilityMaintenance = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <h1 className="text-4xl font-bold text-nand-navy mb-8">Facility & Technical Maintenance</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-nand-orange mb-4">Facility & Building Maintenance</h2>
            <ul className="list-disc pl-5 space-y-2 text-nand-muted">
              <li>Building Maintenance</li>
              <li>Villa & Apartment Maintenance</li>
              <li>Commercial Property Maintenance</li>
              <li>Preventive Maintenance</li>
              <li>Corrective Maintenance</li>
              <li>Emergency Maintenance</li>
              <li>Annual Maintenance Contracts (AMC)</li>
              <li>General Property Maintenance</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-nand-orange mb-4">Technical Maintenance</h2>
            <h3 className="font-bold text-nand-navy mt-4 mb-2">HVAC & AC Maintenance</h3>
            <ul className="list-disc pl-5 space-y-2 text-nand-muted">
              <li>Air Conditioning Maintenance</li>
              <li>AC Breakdown Support</li>
              <li>Preventive HVAC Services</li>
            </ul>

            <h3 className="font-bold text-nand-navy mt-4 mb-2">Electrical Maintenance</h3>
            <ul className="list-disc pl-5 space-y-2 text-nand-muted">
              <li>Lighting Maintenance</li>
              <li>Electrical Repair Support</li>
              <li>Preventive Electrical Services</li>
            </ul>

            <h3 className="font-bold text-nand-navy mt-4 mb-2">Plumbing & Water Systems</h3>
            <ul className="list-disc pl-5 space-y-2 text-nand-muted">
              <li>Water System Maintenance</li>
              <li>Water Leakage Repairs</li>
              <li>General Plumbing Support</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-nand-orange mb-4">Property Support</h2>
            <ul className="list-disc pl-5 space-y-2 text-nand-muted">
              <li>Common Area Maintenance</li>
              <li>Property Inspection</li>
              <li>Preventive Property Care</li>
              <li>Minor Repair Works</li>
              <li>Building Maintenance Support</li>
              <li>Facility Support Services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-nand-orange mb-4">Emergency Support</h2>
            <ul className="list-disc pl-5 space-y-2 text-nand-muted">
              <li>24/7 Emergency Maintenance Support</li>
              <li>Plumbing Emergencies</li>
              <li>Electrical Emergencies</li>
              <li>AC/HVAC Breakdowns</li>
              <li>Water Leakage Repairs</li>
              <li>General Emergency Repairs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityMaintenance;
