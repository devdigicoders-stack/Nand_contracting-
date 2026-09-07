import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineUsers, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { MdOutlineSupportAgent } from 'react-icons/md';

const PurposeSection = () => {
  const purposes = [
    { 
      num: '01', 
      title: 'Understand Requirements', 
      desc: 'Deep-dive analysis of client objectives, site conditions and scope specifications before proposal.',
      icon: <FiSearch className="w-6 h-6 sm:w-7 sm:h-7" /> 
    },
    { 
      num: '02', 
      title: 'Coordinate Resources', 
      desc: 'Seamless mobilization of certified technicians, specialized equipment and Qatar-approved materials.',
      icon: <HiOutlineUsers className="w-6 h-6 sm:w-7 sm:h-7" /> 
    },
    { 
      num: '03', 
      title: 'Execute Professionally', 
      desc: 'Strict adherence to QCS standards, safety protocols, clean workmanship and agreed project milestones.',
      icon: <HiOutlineWrenchScrewdriver className="w-6 h-6 sm:w-7 sm:h-7" /> 
    },
    { 
      num: '04', 
      title: 'Maintain Support', 
      desc: 'Proactive post-handover assistance, rapid emergency dispatch and long-term client care.',
      icon: <MdOutlineSupportAgent className="w-6 h-6 sm:w-7 sm:h-7" /> 
    },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nand-orange/10 border border-nand-orange/20 text-nand-orange text-xs font-bold uppercase tracking-wider mb-3">
            Built Around Client Requirements
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight text-nand-navy mb-3 leading-tight">
            More Than Completing a Task
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Successful contracting requires more than delivering physical work. NAND focuses on understanding requirements, coordinating resources, maintaining transparency and delivering according to Qatar's highest standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {purposes.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white border border-slate-200/80 hover:border-nand-orange/50 rounded-2xl p-6 sm:p-7 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col items-start text-left overflow-hidden"
            >
              {/* Subtle top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-nand-orange to-[#FFB067] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex items-center justify-between w-full mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nand-blue/10 to-nand-blue/5 border border-nand-blue/20 text-nand-blue group-hover:bg-gradient-to-br group-hover:from-nand-orange group-hover:to-[#FFB067] group-hover:text-white group-hover:border-transparent flex items-center justify-center shadow-sm group-hover:scale-105 transition-all duration-300">
                  {item.icon}
                </div>
                <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-black bg-slate-100 text-slate-500 font-heading group-hover:bg-nand-orange/15 group-hover:text-nand-orange transition-colors">
                  {item.num}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-heading font-bold text-nand-navy group-hover:text-nand-orange transition-colors mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PurposeSection;
