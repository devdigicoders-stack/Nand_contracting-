import React from 'react';
import { MdOutlineRoomService, MdOutlineCleaningServices } from 'react-icons/md';
import { HiOutlineTruck, HiOutlineUserGroup } from 'react-icons/hi2';
import { FaHelmetSafety, FaWarehouse } from 'react-icons/fa6';
import { FiArrowRight } from 'react-icons/fi';

const WorkforceCategories = () => {
  const categories = [
    {
      title: 'Hospitality & Service Staff',
      desc: 'Workforce support for hospitality and service-oriented operational requirements.',
      icon: <MdOutlineRoomService className="w-8 h-8" />
    },
    {
      title: 'Drivers & Transport Support',
      desc: 'Personnel support for transport and related operational requirements.',
      icon: <HiOutlineTruck className="w-8 h-8" />
    },
    {
      title: 'Construction & General Labour',
      desc: 'Workforce support for construction, project and general labour requirements.',
      icon: <FaHelmetSafety className="w-8 h-8" />
    },
    {
      title: 'Warehouse & Logistics Workforce',
      desc: 'Personnel support for warehousing, logistics and operational environments.',
      icon: <FaWarehouse className="w-8 h-8" />
    },
    {
      title: 'Facility & Cleaning Support',
      desc: 'Workforce support for facility operations and cleaning-related requirements.',
      icon: <MdOutlineCleaningServices className="w-8 h-8" />
    },
    {
      title: 'Temporary & Outsourced Workforce',
      desc: 'Flexible workforce arrangements designed around changing operational demand.',
      icon: <HiOutlineUserGroup className="w-8 h-8" />
    }
  ];

  return (
    <section id="workforce-categories" className="py-10 md:py-12 lg:py-16 bg-slate-50">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="badge-premium mb-4">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-current opacity-80"></span>
            Our Manpower Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-nand-navy">
            Workforce Support Across <br className="hidden sm:block"/> Multiple Operational Requirements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-xl p-6 lg:p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col cursor-pointer relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-nand-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-blue-50 text-nand-blue flex items-center justify-center mb-5 lg:mb-6 group-hover:bg-nand-blue group-hover:text-white transition-colors shadow-sm">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-nand-navy mb-3">
                {category.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {category.desc}
              </p>
              <div className="flex items-center text-sm font-semibold text-nand-orange mt-auto">
                Discuss Requirement <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkforceCategories;
