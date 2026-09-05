import React from 'react';
import { HiOutlineBuildingOffice2, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { FiSearch, FiTool } from 'react-icons/fi';
import { MdOutlineHomeRepairService, MdOutlineSupportAgent } from 'react-icons/md';

const PropertySupport = () => {
  const services = [
    { title: 'Common Area Maintenance', icon: <HiOutlineBuildingOffice2 className="w-6 h-6" /> },
    { title: 'Property Inspection', icon: <FiSearch className="w-6 h-6" /> },
    { title: 'Preventive Property Care', icon: <MdOutlineHomeRepairService className="w-6 h-6" /> },
    { title: 'Minor Repair Works', icon: <FiTool className="w-6 h-6" /> },
    { title: 'Building Maintenance Support', icon: <HiOutlineWrenchScrewdriver className="w-6 h-6" /> },
    { title: 'Facility Support Services', icon: <MdOutlineSupportAgent className="w-6 h-6" /> },
  ];

  return (
    <section className="py-10 md:py-12 lg:py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
            Property Support
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nand-navy mb-6">
            Helping Properties Remain <br className="hidden sm:block"/> Functional & Operationally Ready
          </h2>
          <p className="text-base lg:text-lg leading-7 text-slate-600">
            NAND supports property owners and operators with ongoing property-care requirements designed to help buildings remain functional, presentable and operationally ready.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 border border-slate-200 rounded-xl hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 text-nand-blue flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-nand-navy">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PropertySupport;
