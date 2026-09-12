import React from 'react';
import { FiShield } from 'react-icons/fi';
import { MdOutlineVerified, MdOutlineSpeed } from 'react-icons/md';
import { HiOutlineBriefcase } from 'react-icons/hi2';
import { LuHandshake } from 'react-icons/lu';

const ValuesSection = () => {
  const values = [
    { title: 'Reliability', desc: 'Consistent and responsive service that clients can depend on.', icon: <FiShield className="w-6 h-6" /> },
    { title: 'Quality', desc: 'Professional workmanship and attention to finishing details.', icon: <MdOutlineVerified className="w-6 h-6" /> },
    { title: 'Responsiveness', desc: 'Fast communication and practical solutions for both planned and urgent requirements.', icon: <MdOutlineSpeed className="w-6 h-6" /> },
    { title: 'Professionalism', desc: 'Clear processes, responsible execution and respect for client properties.', icon: <HiOutlineBriefcase className="w-6 h-6" /> },
    { title: 'Long-Term Partnerships', desc: 'Building relationships based on trust, transparency and consistent service delivery.', icon: <LuHandshake className="w-6 h-6" /> },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nand-orange/10 border border-nand-orange/20 text-nand-orange text-xs font-bold uppercase tracking-wider mb-3">
            What Guides Us
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-nand-navy mb-3 leading-tight">
            Values That Shape Every Assignment
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            The guiding principles embedded into our civil works, technical maintenance, fit-outs and manpower services across Qatar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 justify-center">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200/80 hover:border-nand-orange/40 rounded-2xl p-5 sm:p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-nand-orange to-[#FFB067] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 text-nand-navy group-hover:bg-nand-orange/10 group-hover:text-nand-orange group-hover:border-nand-orange/20 flex items-center justify-center mb-5 shadow-sm transition-colors duration-300">
                  {value.icon}
                </div>
                <h4 className="text-base sm:text-lg font-heading font-bold text-nand-navy mb-2 group-hover:text-nand-orange transition-colors">
                  {value.title}
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {value.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-bold text-slate-400 group-hover:text-nand-orange transition-colors">
                <span>Pillar 0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValuesSection;
