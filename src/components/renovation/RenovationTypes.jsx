import React from 'react';
import { HiOutlineBuildingOffice2, HiOutlineBriefcase } from 'react-icons/hi2';
import { HiOutlineBuildingStorefront, HiOutlineHomeModern } from 'react-icons/hi2';
import { FiArrowRight } from 'react-icons/fi';

const RenovationTypes = () => {
  const types = [
    {
      title: 'Villa Renovation',
      desc: 'Support for improving residential spaces through coordinated renovation, repair, finishing and interior improvement requirements.',
      icon: <HiOutlineHomeModern className="w-6 h-6" />,
      image: '/NAND_Website_Image_Collection/renovation/renovation-fitout-site.png'
    },
    {
      title: 'Apartment Renovation',
      desc: 'Practical renovation support focused on improving apartment functionality, appearance and finishing.',
      icon: <HiOutlineBuildingOffice2 className="w-6 h-6" />,
      image: '/NAND_Website_Image_Collection/services/painting-decoration-worker-01.png'
    },
    {
      title: 'Office Renovation',
      desc: 'Renovation and improvement support for office environments requiring better usability, layout and finishing.',
      icon: <HiOutlineBriefcase className="w-6 h-6" />,
      image: '/NAND_Website_Image_Collection/services/technical-maintenance-electrical.jpg'
    },
    {
      title: 'Shop & Commercial Renovation',
      desc: 'Renovation solutions for retail and commercial spaces based on operational and visual requirements.',
      icon: <HiOutlineBuildingStorefront className="w-6 h-6" />,
      image: '/NAND_Website_Image_Collection/hero/doha-skyline.jpg'
    }
  ];

  return (
    <section id="renovation-types" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-premium mb-4">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-current opacity-80"></span>
            Renovation Services
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-nand-navy">
            Solutions for Different <br className="hidden sm:block"/> Property Requirements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-96 flex flex-col justify-end cursor-pointer">
              
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={type.image} 
                  alt={type.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-nand-navy/95 via-nand-navy/60 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col h-full justify-end">
                <div className="w-10 h-10 rounded-full bg-nand-orange/20 text-nand-orange flex items-center justify-center mb-4 border border-nand-orange/30">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-nand-orange transition-colors">
                  {type.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-4 opacity-90">
                  {type.desc}
                </p>
                <div className="flex items-center text-sm font-semibold text-white group-hover:text-nand-orange transition-colors mt-auto">
                  Learn more <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RenovationTypes;
