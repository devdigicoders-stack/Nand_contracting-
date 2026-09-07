import React from 'react';
import { Link } from 'react-router-dom';
import { FaHelmetSafety } from 'react-icons/fa6';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2';

const BusinessDivisions = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-nand-light to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-nand-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-nand-orange/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-6 sm:mb-8">
          <span className="text-nand-orange font-bold text-xs sm:text-sm tracking-widest uppercase mb-2.5 block">
            Our Integrated Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-nand-navy mb-4 leading-tight">
            One Partner. <span className="text-gradient-gold">Multiple Operational Solutions.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            NAND combines contracting, property maintenance, hospitality support and skilled workforce capabilities to fulfill your operational requirements across Qatar.
          </p>
        </div>

        {/* Divisions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* CARD 01: Contracting & Maintenance */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl hover:shadow-nand-blue/10 hover:border-nand-blue/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col relative z-10">
            <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
              <img 
                src="/NAND_Website_Image_Collection/services/contracting-division.jpg" 
                alt="NAND Contracting and Civil Maintenance in Qatar" 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-nand-navy uppercase tracking-wider shadow-sm">
                Division 01
              </div>
            </div>
            
            <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-grow bg-white">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-nand-orange/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <FaHelmetSafety className="w-5 h-5 text-nand-orange" />
                </div>
                <h3 className="text-xl font-bold font-heading text-nand-navy leading-tight group-hover:text-nand-blue transition-colors">
                  Contracting & Maintenance
                </h3>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed">
                Integrated support for property maintenance, civil works, technical MEP systems, and emergency repairs.
              </p>
              
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-center text-xs sm:text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-nand-orange mr-2.5 shrink-0"></span>Facility & Building Maintenance</li>
                <li className="flex items-center text-xs sm:text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-nand-orange mr-2.5 shrink-0"></span>Civil & Construction Works</li>
                <li className="flex items-center text-xs sm:text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-nand-orange mr-2.5 shrink-0"></span>Technical HVAC & Electrical</li>
                <li className="flex items-center text-xs sm:text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-nand-orange mr-2.5 shrink-0"></span>Preventive Asset Management</li>
              </ul>
              
              <Link to="/contracting" className="inline-flex items-center text-xs sm:text-sm text-nand-blue font-bold group-hover:text-nand-orange transition-colors mt-auto w-fit">
                Explore Contracting
                <FiArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* CARD 02: Manpower & Hospitality */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl hover:shadow-nand-orange/10 hover:border-nand-orange/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col relative z-10">
            <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
              <img 
                src="/NAND_Website_Image_Collection/hospitality/hospitality-property-lobby.png" 
                alt="Manpower and Hospitality Solutions in Qatar" 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-nand-navy uppercase tracking-wider shadow-sm">
                Division 02
              </div>
            </div>
            
            <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-grow bg-white">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-nand-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <HiOutlineUserGroup className="w-5 h-5 text-nand-blue" />
                </div>
                <h3 className="text-xl font-bold font-heading text-nand-navy leading-tight group-hover:text-nand-orange transition-colors">
                  Manpower & Hospitality
                </h3>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed">
                Flexible workforce and operational support for hotels, construction sites, logistics, and facilities.
              </p>
              
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-center text-xs sm:text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-nand-blue mr-2.5 shrink-0"></span>Hospitality & Front of House</li>
                <li className="flex items-center text-xs sm:text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-nand-blue mr-2.5 shrink-0"></span>Construction & Civil Labour</li>
                <li className="flex items-center text-xs sm:text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-nand-blue mr-2.5 shrink-0"></span>Facility & Housekeeping Support</li>
                <li className="flex items-center text-xs sm:text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-nand-blue mr-2.5 shrink-0"></span>Drivers & Logistics Staff</li>
              </ul>
              
              <Link to="/manpower-hospitality" className="inline-flex items-center text-xs sm:text-sm text-nand-orange font-bold group-hover:text-nand-blue transition-colors mt-auto w-fit">
                Explore Manpower
                <FiArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* CARD 03: Renovation & Fit-Out */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl hover:shadow-teal-500/10 hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col relative z-10">
            <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
              <img 
                src="/NAND_Website_Image_Collection/renovation/renovation-fitout-site.png" 
                alt="Renovation and Fit-Out in Qatar" 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-nand-navy uppercase tracking-wider shadow-sm">
                Division 03
              </div>
            </div>
            
            <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-grow bg-white">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <HiOutlineWrenchScrewdriver className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold font-heading text-nand-navy leading-tight group-hover:text-teal-600 transition-colors">
                  Renovation & Fit-Out
                </h3>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed">
                Expert interior finishing, gypsum ceilings, partitioning, painting and full space transformations.
              </p>
              
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-center text-xs sm:text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-2.5 shrink-0"></span>Commercial Office Fit-Outs</li>
                <li className="flex items-center text-xs sm:text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-2.5 shrink-0"></span>Residential Space Renovation</li>
                <li className="flex items-center text-xs sm:text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-2.5 shrink-0"></span>Gypsum Ceilings & Partitioning</li>
                <li className="flex items-center text-xs sm:text-sm font-semibold text-nand-navy"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-2.5 shrink-0"></span>Premium Painting & Decoration</li>
              </ul>
              
              <Link to="/renovation-fitout" className="inline-flex items-center text-xs sm:text-sm text-teal-600 font-bold group-hover:text-nand-navy transition-colors mt-auto w-fit">
                Explore Renovation
                <FiArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessDivisions;
