import React from 'react';
import { Link } from 'react-router-dom';
import { FaHelmetSafety } from 'react-icons/fa6';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2';

const BusinessDivisions = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-nand-light to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-nand-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-nand-orange/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          
          {/* CARD 01: Contracting & Maintenance */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:shadow-nand-blue/10 hover:border-nand-blue/30 transition-all duration-500 hover:-translate-y-2 flex flex-col relative z-10">
            <div className="relative h-56 overflow-hidden bg-gray-100">
              <img 
                src="/NAND_Website_Image_Collection/hero/doha-skyline.jpg" 
                alt="Contracting and Maintenance" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            <div className="p-8 flex flex-col flex-grow bg-white">
              <div className="flex items-start mb-5">
                <div className="w-12 h-12 rounded-lg bg-nand-orange/10 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                  <FaHelmetSafety className="w-6 h-6 text-nand-orange" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-nand-navy leading-tight group-hover:text-nand-blue transition-colors">Contracting &<br/>Maintenance</h3>
              </div>

              <p className="text-nand-muted mb-6 line-clamp-3">
                Integrated support for property maintenance, civil works, technical systems, renovation, finishing and emergency requirements.
              </p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-nand-orange mt-1.5 mr-3 flex-shrink-0"></span>Facility & Building Maintenance</li>
                <li className="flex items-start text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-nand-orange mt-1.5 mr-3 flex-shrink-0"></span>Civil & Construction Works</li>
                <li className="flex items-start text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-nand-orange mt-1.5 mr-3 flex-shrink-0"></span>Technical Maintenance</li>
                <li className="flex items-start text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-nand-orange mt-1.5 mr-3 flex-shrink-0"></span>Renovation & Fit-Out</li>
              </ul>
              
              <Link to="/contracting" className="inline-flex items-center text-nand-blue font-bold group-hover:text-nand-orange transition-colors mt-auto w-fit">
                Explore Contracting
                <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* CARD 02: Manpower & Hospitality */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:shadow-nand-orange/10 hover:border-nand-orange/30 transition-all duration-500 hover:-translate-y-2 flex flex-col relative z-10">
            <div className="relative h-56 overflow-hidden bg-gray-100">
              <img 
                src="/NAND_Website_Image_Collection/hero/doha-skyline.jpg" 
                alt="Manpower and Hospitality Solutions" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            <div className="p-8 flex flex-col flex-grow bg-white">
              <div className="flex items-start mb-5">
                <div className="w-12 h-12 rounded-lg bg-nand-blue/10 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                  <HiOutlineUserGroup className="w-7 h-7 text-nand-blue" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-nand-navy leading-tight group-hover:text-nand-orange transition-colors">Manpower &<br/>Hospitality</h3>
              </div>

              <p className="text-nand-muted mb-6 line-clamp-3">
                Flexible workforce and operational support for hospitality, construction, logistics, warehousing, facility support and general operations.
              </p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-nand-blue mt-1.5 mr-3 flex-shrink-0"></span>Hospitality Staff</li>
                <li className="flex items-start text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-nand-blue mt-1.5 mr-3 flex-shrink-0"></span>Construction Labour</li>
                <li className="flex items-start text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-nand-blue mt-1.5 mr-3 flex-shrink-0"></span>Facility Support</li>
                <li className="flex items-start text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-nand-blue mt-1.5 mr-3 flex-shrink-0"></span>Drivers & Logistics</li>
              </ul>
              
              <Link to="/manpower-hospitality" className="inline-flex items-center text-nand-orange font-bold group-hover:text-nand-blue transition-colors mt-auto w-fit">
                Explore Manpower
                <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* CARD 03: Renovation & Fit-Out */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:shadow-teal-500/10 hover:border-teal-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col relative z-10">
            <div className="relative h-56 overflow-hidden bg-gray-100">
              <img 
                src="/NAND_Website_Image_Collection/hero/doha-skyline.jpg" 
                alt="Renovation and Fit-Out" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            <div className="p-8 flex flex-col flex-grow bg-white">
              <div className="flex items-start mb-5">
                <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                  <HiOutlineWrenchScrewdriver className="w-7 h-7 text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-nand-navy leading-tight group-hover:text-teal-600 transition-colors">Renovation &<br/>Fit-Out</h3>
              </div>

              <p className="text-nand-muted mb-6 line-clamp-3">
                Expert renovation, interior design implementation, and fit-out services transforming commercial and residential spaces across Qatar.
              </p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 mr-3 flex-shrink-0"></span>Commercial Fit-Outs</li>
                <li className="flex items-start text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 mr-3 flex-shrink-0"></span>Residential Renovation</li>
                <li className="flex items-start text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 mr-3 flex-shrink-0"></span>Gypsum & Ceiling Works</li>
                <li className="flex items-start text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 mr-3 flex-shrink-0"></span>Painting & Decoration</li>
              </ul>
              
              <Link to="/renovation-fitout" className="inline-flex items-center text-teal-600 font-bold group-hover:text-nand-navy transition-colors mt-auto w-fit">
                Explore Renovation
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
