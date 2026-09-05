import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineUsers, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { MdOutlineSupportAgent } from 'react-icons/md';

const PurposeSection = () => {
  const purposes = [
    { num: '01', title: 'Understand Requirements', icon: <FiSearch className="w-8 h-8" /> },
    { num: '02', title: 'Coordinate Resources', icon: <HiOutlineUsers className="w-8 h-8" /> },
    { num: '03', title: 'Execute Professionally', icon: <HiOutlineWrenchScrewdriver className="w-8 h-8" /> },
    { num: '04', title: 'Maintain Support', icon: <MdOutlineSupportAgent className="w-8 h-8" /> },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
            Built Around Client Requirements
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-nand-navy mb-6">
            More Than Completing a Task
          </h2>
          <p className="text-base lg:text-lg leading-7 text-slate-600">
            Successful contracting requires more than delivering the physical work. NAND focuses on understanding client requirements, coordinating resources, maintaining clear communication and completing each requirement according to the required standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {purposes.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 text-nand-blue flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <span className="text-nand-orange font-bold text-lg mb-2 font-mono">{item.num}</span>
              <h3 className="text-lg font-bold text-nand-navy">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PurposeSection;
