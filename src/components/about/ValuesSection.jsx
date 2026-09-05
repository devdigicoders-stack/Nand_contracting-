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
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-premium mb-4">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-current opacity-80"></span>
            What Guides Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-nand-navy">
            Values That Shape Every Assignment
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 justify-center">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-xl p-6 lg:p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative overflow-hidden group flex flex-col h-full"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-nand-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-slate-50 border border-slate-100 text-nand-blue flex items-center justify-center mb-5 lg:mb-6 shadow-sm">
                {value.icon}
              </div>
              <h4 className="text-base lg:text-lg font-bold text-nand-navy mb-2">{value.title}</h4>
              <p className="text-xs lg:text-sm text-slate-600 leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ValuesSection;
