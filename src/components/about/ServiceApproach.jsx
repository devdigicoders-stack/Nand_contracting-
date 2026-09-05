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
    <section className="py-16 md:py-20 lg:py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nand-navy">
            A Structured Approach to Every Requirement
          </h2>
        </div>

        <div className="relative">
          {/* Horizontal Line (Desktop) */}
          <div className="hidden lg:block absolute top-8 left-12 right-12 h-0.5 bg-slate-200 -z-0"></div>

          {/* Steps Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col relative group">
                
                {/* Vertical Line (Mobile/Tablet) */}
                <div className="sm:hidden absolute top-16 left-8 bottom-[-2rem] w-0.5 bg-slate-200 -z-0"></div>
                
                <div className="flex flex-row lg:flex-col items-start lg:items-center">
                  {/* Icon & Number Circle */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-nand-blue text-nand-blue flex items-center justify-center mb-6 z-10 group-hover:bg-nand-blue group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-6 lg:ml-0 lg:text-center mt-2 lg:mt-0">
                    <span className="text-nand-orange font-mono font-bold text-lg mb-1 block">
                      {step.num}
                    </span>
                    <h4 className="text-xl font-bold text-nand-navy mb-3">
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceApproach;
