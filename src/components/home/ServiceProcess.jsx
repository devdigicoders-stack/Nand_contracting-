import React from 'react';
import { FiSearch, FiCheckCircle } from 'react-icons/fi';
import { HiOutlineClipboardDocumentList, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { MdOutlineSupportAgent } from 'react-icons/md';

const ServiceProcess = () => {
  const processes = [
    {
      num: '01',
      title: 'Understand',
      desc: 'Identify client requirements, site conditions, scope and priorities.',
      icon: <FiSearch className="w-6 h-6" />
    },
    {
      num: '02',
      title: 'Plan',
      desc: 'Develop a practical work approach based on service requirements, resources and timeline.',
      icon: <HiOutlineClipboardDocumentList className="w-6 h-6" />
    },
    {
      num: '03',
      title: 'Execute',
      desc: 'Coordinate the required works with attention to workmanship, safety and site requirements.',
      icon: <HiOutlineWrenchScrewdriver className="w-6 h-6" />
    },
    {
      num: '04',
      title: 'Inspect',
      desc: 'Review work against the agreed scope and required finishing standards.',
      icon: <FiCheckCircle className="w-6 h-6" />
    },
    {
      num: '05',
      title: 'Support',
      desc: 'Maintain responsive communication and ongoing service support.',
      icon: <MdOutlineSupportAgent className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-slate-50/70 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-7 sm:mb-9">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nand-orange/10 border border-nand-orange/20 text-nand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-nand-orange animate-pulse"></span>
            How We Work
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-nand-navy mb-3 leading-tight">
            A Clear Process from <span className="text-gradient-gold">Requirement to Support</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Our structured 5-stage project methodology ensures transparent communication, strict quality standards, and dependable delivery on every job in Qatar.
          </p>
        </div>

        {/* 5-Step Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative z-10">
          {processes.map((step, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-nand-orange/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative"
            >
              {/* Step number badge & icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-nand-orange/10 text-nand-orange group-hover:bg-gradient-to-br group-hover:from-nand-orange group-hover:to-[#FFB067] group-hover:text-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-300">
                  {React.cloneElement(step.icon, { className: 'w-5 h-5' })}
                </div>
                <span className="text-2xl font-black font-heading text-slate-200 group-hover:text-nand-orange/40 transition-colors">
                  {step.num}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-base sm:text-lg font-bold font-heading text-nand-navy mb-2 group-hover:text-nand-orange transition-colors">
                {step.title}
              </h3>
              
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* Bottom active bar on hover */}
              <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-nand-orange to-[#FFB067] rounded-full transition-all duration-300 mt-4"></div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ServiceProcess;
