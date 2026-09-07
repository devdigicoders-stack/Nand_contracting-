import React from 'react';
import { FiSearch, FiCheckCircle } from 'react-icons/fi';
import { HiOutlineClipboardDocumentList, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { MdOutlineSupportAgent } from 'react-icons/md';

const RenovationProcess = () => {
  const steps = [
    { num: '01', title: 'Understand', desc: 'Understand space, scope and required improvements.', icon: <FiSearch className="w-8 h-8" /> },
    { num: '02', title: 'Plan', desc: 'Coordinate service requirements, resources and timeline.', icon: <HiOutlineClipboardDocumentList className="w-8 h-8" /> },
    { num: '03', title: 'Execute', desc: 'Carry out the agreed renovation and fit-out works.', icon: <HiOutlineWrenchScrewdriver className="w-8 h-8" /> },
    { num: '04', title: 'Inspect', desc: 'Review finishing and completed scope.', icon: <FiCheckCircle className="w-8 h-8" /> },
    { num: '05', title: 'Support', desc: 'Maintain responsive coordination for ongoing requirements.', icon: <MdOutlineSupportAgent className="w-8 h-8" /> },
  ];

  return (
    <section className="py-10 md:py-12 lg:py-16 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-6 sm:mb-8">
          <span className="badge-premium mb-4">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-current opacity-80"></span>
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-nand-navy">
            A Structured Approach <br className="hidden sm:block"/> to Renovation & Fit-Out
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-slate-50 border border-slate-200 rounded-xl p-6 relative group hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-200 group-hover:bg-nand-blue transition-colors duration-300 rounded-t-xl"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-full bg-white border border-slate-200 text-nand-blue flex items-center justify-center group-hover:border-nand-blue transition-colors">
                  {step.icon}
                </div>
                <span className="text-3xl font-bold text-slate-200 font-mono group-hover:text-nand-orange/20 transition-colors">
                  {step.num}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-nand-navy mb-3">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RenovationProcess;
