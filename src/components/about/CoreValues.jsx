import React from 'react';
import { FiShield, FiStar, FiClock, FiBriefcase, FiUsers } from 'react-icons/fi';

const CoreValues = () => {
  const values = [
    {
      title: 'Reliability',
      desc: 'Consistent and responsive service that clients can depend on.',
      icon: <FiShield className="w-8 h-8" />,
      color: 'blue'
    },
    {
      title: 'Quality',
      desc: 'Professional workmanship and attention to finishing details.',
      icon: <FiStar className="w-8 h-8" />,
      color: 'orange'
    },
    {
      title: 'Responsiveness',
      desc: 'Fast communication and practical solutions for both planned and urgent requirements.',
      icon: <FiClock className="w-8 h-8" />,
      color: 'blue'
    },
    {
      title: 'Professionalism',
      desc: 'Clear processes, responsible execution and respect for client properties.',
      icon: <FiBriefcase className="w-8 h-8" />,
      color: 'orange'
    },
    {
      title: 'Long-Term Partnerships',
      desc: 'Building relationships based on trust, transparency and consistent service delivery.',
      icon: <FiUsers className="w-8 h-8" />,
      color: 'blue'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 text-center">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-nand-navy mb-4">
          We aspire to build a service <br className="hidden md:block"/> organization known for:
        </h2>
        
        <p className="text-nand-orange font-bold text-lg max-w-2xl mx-auto mb-16">
          Our focus is simple: deliver the right solution, with the right level of professionalism, at the right time.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {values.map((value, index) => {
            const isBlue = value.color === 'blue';
            return (
              <div 
                key={index} 
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(20%-1.5rem)] flex flex-col items-center group"
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:-translate-y-2 shadow-sm ${
                  isBlue ? 'bg-blue-50 text-nand-blue group-hover:bg-nand-blue group-hover:text-white group-hover:shadow-nand-blue/30' 
                         : 'bg-orange-50 text-nand-orange group-hover:bg-nand-orange group-hover:text-white group-hover:shadow-nand-orange/30'
                }`}>
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold font-heading text-nand-navy mb-3">
                  {value.title}
                </h4>
                <p className="text-nand-muted text-sm leading-relaxed max-w-xs">
                  {value.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
