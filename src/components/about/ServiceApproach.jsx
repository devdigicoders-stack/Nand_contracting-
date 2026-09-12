import React from 'react';
import { FiSearch, FiCheckCircle } from 'react-icons/fi';
import { HiOutlineClipboardDocumentList, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { MdOutlineSupportAgent } from 'react-icons/md';

const ServiceApproach = () => {
  const steps = [
    { num: '01', title: 'Understand', desc: 'Identify requirements, site conditions, scope and priorities.', icon: <FiSearch className="w-6 h-6" /> },
    { num: '02', title: 'Plan', desc: 'Develop a practical approach based on service, resources and timeline.', icon: <HiOutlineClipboardDocumentList className="w-6 h-6" /> },
    { num: '03', title: 'Execute', desc: 'Coordinate works with attention to workmanship, safety and site requirements.', icon: <HiOutlineWrenchScrewdriver className="w-6 h-6" /> },
    { num: '04', title: 'Inspect', desc: 'Review work against the agreed scope and finishing standards.', icon: <FiCheckCircle className="w-6 h-6" /> },
    { num: '05', title: 'Support', desc: 'Remain focused on responsive communication and ongoing service requirements.', icon: <MdOutlineSupportAgent className="w-6 h-6" /> },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nand-orange/10 border border-nand-orange/20 text-nand-orange text-xs font-bold uppercase tracking-wider mb-3">
            How We Work
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight text-nand-navy mb-3 leading-tight">
            A Structured Approach to Every Requirement
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From initial site assessment to final inspection and handover, our 5-phase delivery process ensures predictability, safety and precision.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Track Line (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-slate-200/80 -z-0"></div>

          {/* Steps Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group relative bg-slate-50/60 hover:bg-white border border-slate-200/80 hover:border-nand-orange/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-start lg:items-center lg:text-center"
              >
                {/* Number & Icon Container */}
                <div className="relative mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-nand-navy group-hover:bg-gradient-to-br group-hover:from-nand-orange group-hover:to-[#FFB067] group-hover:text-white group-hover:border-transparent flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 px-1.5 py-0.5 rounded-full text-[10px] font-black bg-nand-orange text-white font-heading shadow-sm">
                    {step.num}
                  </span>
                </div>
                
                <h4 className="text-base sm:text-lg font-heading font-bold text-nand-navy mb-2 group-hover:text-nand-orange transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceApproach;
