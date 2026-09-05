import React from 'react';
import { FiSearch, FiCheckCircle } from 'react-icons/fi';
import { HiOutlineClipboardDocumentList, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { MdOutlineSupportAgent } from 'react-icons/md';

const ProjectProcess = () => {
  const steps = [
    { num: '01', title: 'Understand', desc: 'Review requirements, site conditions, scope and priorities.', icon: <FiSearch className="w-6 h-6" /> },
    { num: '02', title: 'Plan', desc: 'Develop a practical approach based on service requirements, resources and timeline.', icon: <HiOutlineClipboardDocumentList className="w-6 h-6" /> },
    { num: '03', title: 'Execute', desc: 'Coordinate required works with attention to workmanship, safety and site needs.', icon: <HiOutlineWrenchScrewdriver className="w-6 h-6" /> },
    { num: '04', title: 'Inspect', desc: 'Review completed work against scope and finishing requirements.', icon: <FiCheckCircle className="w-6 h-6" /> },
    { num: '05', title: 'Support', desc: 'Maintain communication and support further operational requirements.', icon: <MdOutlineSupportAgent className="w-6 h-6" /> },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nand-navy">
            A Structured Approach <br className="hidden sm:block"/> to Every Requirement
          </h2>
        </div>

        {/* Visual Timeline */}
        <div className="relative mt-12">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-8 left-10 right-10 h-0.5 bg-slate-200"></div>
          
          {/* Connecting Line (Mobile/Tablet) */}
          <div className="lg:hidden absolute top-0 left-8 bottom-0 w-0.5 bg-slate-200"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-row lg:flex-col items-start lg:items-center relative group">
                
                {/* Node */}
                <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 text-nand-blue flex items-center justify-center flex-shrink-0 z-10 group-hover:border-nand-blue group-hover:bg-blue-50 transition-colors duration-300">
                  {step.icon}
                </div>
                
                {/* Content */}
                <div className="ml-6 lg:ml-0 lg:mt-6 lg:text-center w-full">
                  <div className="flex items-center lg:justify-center mb-2">
                    <span className="text-nand-orange font-mono font-bold text-sm mr-2">
                      {step.num}
                    </span>
                    <h4 className="text-lg font-bold text-nand-navy">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-xs lg:mx-auto">
                    {step.desc}
                  </p>
                </div>
                
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectProcess;
