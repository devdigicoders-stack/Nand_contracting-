import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { HiOutlineUsers, HiOutlineCheckBadge } from 'react-icons/hi2';
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

  const steps = [
    { num: '01', name: 'Source' },
    { num: '02', name: 'Screen' },
    { num: '03', name: 'Select' },
    { num: '04', name: 'Deploy' }
  ];

  return (
    <section className="relative py-8 sm:py-10 lg:py-12 bg-[#071B2D] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-nand-blue/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-nand-orange/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT: Realistic Team Image Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -inset-3 bg-gradient-to-tr from-nand-orange/20 to-nand-blue/25 rounded-3xl blur-xl -z-10"></div>
              
              <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/15 ring-1 ring-white/10">
                <img 
                  src="/NAND_Website_Image_Collection/workforce/manpower-team-doha.jpg" 
                  alt="NAND Professional Diverse Workforce Team in Doha Qatar" 
                  className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Compliance Badge */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-2xl border border-slate-100 flex items-center gap-3 max-w-[240px]">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-nand-blue to-[#56CCF2] text-white flex items-center justify-center shrink-0 shadow-md">
                  <HiOutlineCheckBadge className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold font-heading text-nand-navy leading-tight">
                    Qatar Compliant
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                    Verified & Screened Labour
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nand-orange/15 border border-nand-orange/30 text-nand-orange text-xs font-bold uppercase tracking-wider mb-3 w-fit">
              <span className="w-2 h-2 rounded-full bg-nand-orange animate-pulse"></span>
              Manpower Outsourcing
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white mb-3 leading-tight">
              The Right Workforce. <br className="hidden sm:inline" />
              <span className="text-gradient-gold">For the Right Requirement.</span>
            </h2>
            
            <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-5 leading-relaxed max-w-xl">
              NAND supports leading enterprises, hotels, and contractors across Qatar by sourcing, screening and deploying trained personnel for hospitality, civil works, logistics, facility management and operations.
            </p>
            
            {/* Tags Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {tags.map((tag, index) => (
                <div key={index} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white">
                  <div className="w-5 h-5 rounded-full bg-nand-orange/20 text-nand-orange flex items-center justify-center shrink-0">
                    <BsCheck2 className="w-3.5 h-3.5 stroke-[1.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">{tag}</span>
                </div>
              ))}
            </div>
            
            {/* Process Preview Strip */}
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-3 sm:p-3.5 mb-6">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Rapid Mobilization Workflow
              </div>
              <div className="flex items-center justify-between">
                {steps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex items-center gap-1.5">
                      <span className="text-nand-orange font-bold text-xs">{step.num}.</span>
                      <span className="text-xs sm:text-sm font-semibold text-white">{step.name}</span>
                    </div>
                    {idx < steps.length - 1 && (
                      <span className="text-slate-600 text-xs">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-row flex-wrap gap-3">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base bg-nand-orange hover:bg-[#e66d00] text-white font-bold rounded-lg shadow-md transition-all group"
              >
                Request Manpower
                <FiArrowUpRight className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link 
                to="/manpower-hospitality"
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base bg-white/10 hover:bg-white/15 text-white font-bold rounded-lg border border-white/20 transition-all group"
              >
                <HiOutlineUsers className="mr-2 w-4 h-4 text-nand-blue" />
                Recruitment Process
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManpowerSection;
