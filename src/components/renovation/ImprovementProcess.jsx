import React from 'react';
import { FiSearch, FiCheckCircle } from 'react-icons/fi';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { MdOutlineEngineering, MdOutlineDesignServices, MdFormatPaint } from 'react-icons/md';

const ImprovementProcess = () => {
  const steps = [
    { num: '01', title: 'Site Requirement', icon: <FiSearch className="w-5 h-5" /> },
    { num: '02', title: 'Planning', icon: <HiOutlineClipboardDocumentList className="w-5 h-5" /> },
    { num: '03', title: 'Civil / Structural Works', icon: <MdOutlineEngineering className="w-5 h-5" /> },
    { num: '04', title: 'Interior & Fit-Out Works', icon: <MdOutlineDesignServices className="w-5 h-5" /> },
    { num: '05', title: 'Finishing', icon: <MdFormatPaint className="w-5 h-5" /> },
    { num: '06', title: 'Final Review', icon: <FiCheckCircle className="w-5 h-5" /> },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
            From Improvement to Completion
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nand-navy mb-6">
            Coordinating Multiple Stages <br className="hidden sm:block"/> Through One Service Approach
          </h2>
          <p className="text-base lg:text-lg leading-7 text-slate-600">
            NAND's renovation and fit-out capability can cover multiple stages of a project, allowing clients to coordinate civil, painting, gypsum, ceiling, flooring and finishing requirements through an integrated service approach.
          </p>
        </div>

        {/* Visual Workflow */}
        <div className="relative mt-20">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-6 left-10 right-10 h-0.5 bg-slate-200"></div>
          
          {/* Connecting Line (Mobile/Tablet) */}
          <div className="lg:hidden absolute top-0 left-6 bottom-0 w-0.5 bg-slate-200"></div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-row lg:flex-col items-center relative group">
                
                {/* Node */}
                <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-300 text-slate-400 flex items-center justify-center flex-shrink-0 z-10 group-hover:border-nand-blue group-hover:text-nand-blue transition-colors duration-300">
                  {step.icon}
                </div>
                
                {/* Content */}
                <div className="ml-6 lg:ml-0 lg:mt-6 lg:text-center w-full">
                  <span className="text-slate-400 font-mono font-bold text-sm mb-1 block group-hover:text-nand-orange transition-colors">
                    {step.num}
                  </span>
                  <h4 className="text-base lg:text-sm xl:text-base font-bold text-nand-navy">
                    {step.title}
                  </h4>
                </div>
                
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ImprovementProcess;
