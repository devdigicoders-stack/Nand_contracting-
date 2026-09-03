import React from 'react';
import { HiOutlineHomeModern, HiOutlineBuildingOffice2, HiOutlineTruck, HiOutlineBriefcase } from 'react-icons/hi2';
import { MdOutlineHotel, MdOutlineEngineering } from 'react-icons/md';
import { FaWarehouse } from 'react-icons/fa';

const IndustriesSection = () => {
  const industries = [
    { name: 'Commercial Properties', icon: <HiOutlineBuildingOffice2 className="w-8 h-8" /> },
    { name: 'Residential Properties', icon: <HiOutlineHomeModern className="w-8 h-8" /> },
    { name: 'Hospitality Businesses', icon: <MdOutlineHotel className="w-8 h-8" /> },
    { name: 'Property & Facility Operators', icon: <MdOutlineEngineering className="w-8 h-8" /> },
    { name: 'Construction Contractors', icon: <HiOutlineBriefcase className="w-8 h-8" /> },
    { name: 'Logistics & Warehousing', icon: <FaWarehouse className="w-8 h-8" /> },
    { name: 'General Business Operations', icon: <HiOutlineTruck className="w-8 h-8" /> }
  ];

  return (
    <section className="py-16 md:py-24 bg-nand-light">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-nand-navy mb-12">
          Supporting Diverse Operational Requirements
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="flex items-center bg-white border border-gray-100 rounded-md px-6 py-4 shadow-sm hover:shadow-md hover:border-nand-blue/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-nand-orange mr-3">
                {industry.icon}
              </div>
              <span className="font-semibold text-nand-navy text-sm md:text-base">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default IndustriesSection;
