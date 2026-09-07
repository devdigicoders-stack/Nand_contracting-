import React from 'react';
import { HiOutlineHomeModern, HiOutlineBuildingOffice2, HiOutlineTruck, HiOutlineBriefcase } from 'react-icons/hi2';
import { MdOutlineHotel, MdOutlineEngineering } from 'react-icons/md';
import { FaWarehouse } from 'react-icons/fa';

const IndustriesSection = () => {
  const industries = [
    { 
      name: 'Commercial Properties', 
      desc: 'Offices, retail hubs & business towers', 
      icon: <HiOutlineBuildingOffice2 className="w-6 h-6" /> 
    },
    { 
      name: 'Residential Properties', 
      desc: 'Luxury villas, compounds & apartments', 
      icon: <HiOutlineHomeModern className="w-6 h-6" /> 
    },
    { 
      name: 'Hospitality Businesses', 
      desc: '5-star hotels, resorts, cafes & dining', 
      icon: <MdOutlineHotel className="w-6 h-6" /> 
    },
    { 
      name: 'Property Operators', 
      desc: 'Facility managers & asset owners', 
      icon: <MdOutlineEngineering className="w-6 h-6" /> 
    },
    { 
      name: 'Construction Contractors', 
      desc: 'Subcontracting civil & finishing works', 
      icon: <HiOutlineBriefcase className="w-6 h-6" /> 
    },
    { 
      name: 'Logistics & Warehousing', 
      desc: 'Supply chain & warehouse workforce', 
      icon: <FaWarehouse className="w-6 h-6" /> 
    },
    { 
      name: 'Corporate Enterprises', 
      desc: 'Ongoing facility and staff support', 
      icon: <HiOutlineTruck className="w-6 h-6" /> 
    }
  ];

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nand-orange/10 border border-nand-orange/20 text-nand-orange text-xs font-bold uppercase tracking-wider mb-3">
          <span className="w-2 h-2 rounded-full bg-nand-orange animate-pulse"></span>
          Industries We Serve
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-nand-navy mb-3 leading-tight">
          Supporting Diverse Operational <span className="text-gradient-gold">Sectors in Qatar</span>
        </h2>
        
        <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8 sm:mb-6 sm:mb-8">
          Tailored solutions engineered to meet the stringent standards of diverse industries across the Qatar market.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="group bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-nand-orange/40 rounded-2xl p-5 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-gradient-to-br group-hover:from-nand-orange group-hover:to-[#FFB067] text-nand-orange group-hover:text-white flex items-center justify-center mb-4 shadow-sm border border-slate-200/60 group-hover:border-transparent transition-all duration-300">
                {industry.icon}
              </div>
              
              <div>
                <h3 className="font-bold font-heading text-nand-navy text-base mb-1 group-hover:text-nand-orange transition-colors">
                  {industry.name}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {industry.desc}
                </p>
              </div>
            </div>
          ))}
          
          {/* 8th Box: Custom Consultation */}
          <div className="bg-gradient-to-br from-nand-navy to-[#0c2b48] rounded-2xl p-5 text-left flex flex-col justify-between text-white shadow-md">
            <div className="text-nand-orange text-xs font-bold uppercase tracking-wider mb-2">
              Custom Requirements?
            </div>
            <div>
              <h3 className="font-bold font-heading text-white text-base mb-1">
                Tailored Operations
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-3">
                Need specialized workforce or facility scope for your sector?
              </p>
            </div>
            <a 
              href="/contact" 
              className="text-xs font-bold text-nand-orange hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Speak with our team →
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default IndustriesSection;
