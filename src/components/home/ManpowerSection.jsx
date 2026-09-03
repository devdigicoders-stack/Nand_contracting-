import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { HiOutlineUsers } from 'react-icons/hi';
import { BsCheck2 } from 'react-icons/bs';

const ManpowerSection = () => {
  const tags = [
    'Hospitality & Service Staff',
    'Facility & Cleaning Support',
    'Drivers & Transport Support',
    'Construction & General Labour',
    'Warehouse & Logistics Workforce',
    'Temporary & Outsourced Workforce'
  ];

  return (
    <section className="bg-nand-navy overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* LEFT: Image */}
        <div className="relative h-64 sm:h-96 lg:h-auto min-h-[400px]">
          <img 
            src="/NAND_Website_Image_Collection/workforce/workergroup_pic.png" 
            alt="Professional Workforce" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-nand-blue/20 mix-blend-multiply"></div>
        </div>

        {/* RIGHT: Content */}
        <div className="py-16 px-6 sm:px-12 lg:py-24 lg:px-16 xl:px-24 flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <div className="w-1 h-6 bg-nand-orange mr-3"></div>
            <span className="text-nand-orange font-bold text-sm tracking-widest uppercase">
              Manpower Outsourcing
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            The Right Workforce. <br className="hidden sm:block" />
            For the Right Requirement.
          </h2>
          
          <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed max-w-xl">
            NAND supports businesses across Qatar by sourcing, screening and providing suitable personnel for hospitality, construction, logistics, warehousing, facility support and general operations.
          </p>
          
          {/* Tags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-12">
            {tags.map((tag, index) => (
              <div key={index} className="flex items-start text-white">
                <BsCheck2 className="w-5 h-5 text-nand-orange mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{tag}</span>
              </div>
            ))}
          </div>
          
          {/* Small process preview */}
          <div className="flex flex-wrap items-center gap-4 mb-10 text-xs font-bold text-gray-400 tracking-wider uppercase">
            <span>Source</span>
            <span className="w-4 h-px bg-gray-600"></span>
            <span>Screen</span>
            <span className="w-4 h-px bg-gray-600"></span>
            <span>Select</span>
            <span className="w-4 h-px bg-gray-600"></span>
            <span>Deploy</span>
          </div>

          <div className="flex flex-row flex-wrap gap-3">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-nand-orange text-white text-base font-medium rounded-md hover:bg-[#e66d00] transition-colors shadow-sm group"
            >
              Request Manpower
              <FiArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link 
              to="/manpower-hospitality"
              className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-transparent border border-gray-500 text-white text-base font-medium rounded-md hover:border-white hover:bg-white/5 transition-colors group"
            >
              <HiOutlineUsers className="mr-2 w-5 h-5" />
              View Recruitment Process
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ManpowerSection;
