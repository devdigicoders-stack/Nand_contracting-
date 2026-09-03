import React from 'react';
import { Link } from 'react-router-dom';
import { FaHelmetSafety } from 'react-icons/fa6';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';

const BusinessDivisions = () => {
  return (
    <section className="py-16 md:py-24 bg-nand-light">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-nand-orange font-bold text-sm tracking-widest uppercase mb-3 block">
            Our Integrated Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-nand-navy mb-6">
            One Partner. <br className="hidden sm:block" />
            Multiple Operational Solutions.
          </h2>
          <p className="text-nand-muted text-lg">
            NAND combines contracting, property, hospitality and workforce capabilities to support multiple client requirements through one professional service provider.
          </p>
        </div>

        {/* Divisions Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* CARD 01: Contracting & Maintenance */}
          <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-nand-blue/30 transition-all duration-300 flex flex-col">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="/NAND_Website_Image_Collection/hero/doha-skyline.jpg" 
                alt="Contracting and Maintenance" 
                className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white flex items-center">
                <FaHelmetSafety className="w-8 h-8 text-nand-orange mr-3" />
                <h3 className="text-2xl font-bold font-heading">Contracting & Maintenance</h3>
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <p className="text-nand-muted mb-6">
                Integrated support for property maintenance, civil works, technical systems, renovation, finishing and emergency requirements.
              </p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center text-sm font-semibold text-nand-navy before:content-[''] before:w-1.5 before:h-1.5 before:bg-nand-orange before:rounded-full before:mr-3">Facility & Building Maintenance</li>
                <li className="flex items-center text-sm font-semibold text-nand-navy before:content-[''] before:w-1.5 before:h-1.5 before:bg-nand-orange before:rounded-full before:mr-3">Civil & Construction Works</li>
                <li className="flex items-center text-sm font-semibold text-nand-navy before:content-[''] before:w-1.5 before:h-1.5 before:bg-nand-orange before:rounded-full before:mr-3">Technical Maintenance</li>
                <li className="flex items-center text-sm font-semibold text-nand-navy before:content-[''] before:w-1.5 before:h-1.5 before:bg-nand-orange before:rounded-full before:mr-3">Renovation & Fit-Out</li>
                <li className="flex items-center text-sm font-semibold text-nand-navy before:content-[''] before:w-1.5 before:h-1.5 before:bg-nand-orange before:rounded-full before:mr-3">Painting, Decoration & Gypsum</li>
                <li className="flex items-center text-sm font-semibold text-nand-navy before:content-[''] before:w-1.5 before:h-1.5 before:bg-nand-orange before:rounded-full before:mr-3">Emergency Support</li>
              </ul>
              
              <Link to="/contracting" className="inline-flex items-center text-nand-blue font-bold group-hover:text-nand-orange transition-colors">
                Explore Contracting Services
                <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* CARD 02: Manpower & Hospitality */}
          <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-nand-orange/30 transition-all duration-300 flex flex-col">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="/NAND_Website_Image_Collection/hero/doha-skyline.jpg" 
                alt="Manpower and Hospitality Solutions" 
                className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white flex items-center">
                <HiOutlineUserGroup className="w-8 h-8 text-nand-blue mr-3" />
                <h3 className="text-2xl font-bold font-heading">Manpower & Hospitality</h3>
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <p className="text-nand-muted mb-6">
                Flexible workforce and operational support for hospitality, construction, logistics, warehousing, facility support and general operations.
              </p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center text-sm font-semibold text-nand-navy before:content-[''] before:w-1.5 before:h-1.5 before:bg-nand-blue before:rounded-full before:mr-3">Hospitality Staff</li>
                <li className="flex items-center text-sm font-semibold text-nand-navy before:content-[''] before:w-1.5 before:h-1.5 before:bg-nand-blue before:rounded-full before:mr-3">Construction Labour</li>
                <li className="flex items-center text-sm font-semibold text-nand-navy before:content-[''] before:w-1.5 before:h-1.5 before:bg-nand-blue before:rounded-full before:mr-3">Facility Support</li>
                <li className="flex items-center text-sm font-semibold text-nand-navy before:content-[''] before:w-1.5 before:h-1.5 before:bg-nand-blue before:rounded-full before:mr-3">Drivers</li>
                <li className="flex items-center text-sm font-semibold text-nand-navy before:content-[''] before:w-1.5 before:h-1.5 before:bg-nand-blue before:rounded-full before:mr-3">Warehouse & Logistics</li>
                <li className="flex items-center text-sm font-semibold text-nand-navy before:content-[''] before:w-1.5 before:h-1.5 before:bg-nand-blue before:rounded-full before:mr-3">Temporary Workforce</li>
              </ul>
              
              <Link to="/manpower-hospitality" className="inline-flex items-center text-nand-orange font-bold group-hover:text-nand-blue transition-colors">
                Explore Manpower Solutions
                <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessDivisions;
