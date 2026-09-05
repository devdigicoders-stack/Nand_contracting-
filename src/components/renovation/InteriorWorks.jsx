import React from 'react';
import { LuPanelTop } from 'react-icons/lu';
import { MdOutlineRoofing, MdGridView } from 'react-icons/md';

const InteriorWorks = () => {
  const works = [
    {
      title: 'Partition Works',
      desc: 'Support for organizing and dividing interior spaces according to project and operational requirements.',
      icon: <LuPanelTop className="w-8 h-8" />
    },
    {
      title: 'Ceiling Works',
      desc: 'Ceiling-related works coordinated as part of renovation, gypsum and fit-out requirements.',
      icon: <MdOutlineRoofing className="w-8 h-8" />
    },
    {
      title: 'Flooring Works',
      desc: 'Flooring works integrated within wider renovation and finishing packages.',
      icon: <MdGridView className="w-8 h-8" />
    }
  ];

  return (
    <section id="interior-works" className="py-16 md:py-20 lg:py-24 bg-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
            Interior Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nand-navy">
            Functional Interior Works <br className="hidden sm:block"/> for Better Space Utilization
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-lg bg-slate-50 text-nand-blue flex items-center justify-center mb-6 border border-slate-100">
                {work.icon}
              </div>
              <h3 className="text-xl font-bold text-nand-navy mb-3">
                {work.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {work.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InteriorWorks;
