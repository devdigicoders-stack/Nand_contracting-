import React from 'react';
import { HiOutlineBuildingOffice2, HiOutlineWrenchScrewdriver, HiOutlineHomeModern } from 'react-icons/hi2';
import { FaHelmetSafety } from 'react-icons/fa6';
import { MdOutlineDesignServices, MdFormatPaint, MdOutlineArchitecture } from 'react-icons/md';
import { FiAlertCircle, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CapabilityShowcase = () => {
  const capabilities = [
    { num: '01', title: 'Facility & Building Maintenance', icon: <HiOutlineBuildingOffice2 className="w-8 h-8" />, link: '/services' },
    { num: '02', title: 'Civil & Construction Works', icon: <FaHelmetSafety className="w-8 h-8" />, link: '/services' },
    { num: '03', title: 'Technical Maintenance', icon: <HiOutlineWrenchScrewdriver className="w-8 h-8" />, link: '/services' },
    { num: '04', title: 'Renovation & Fit-Out', icon: <MdOutlineDesignServices className="w-8 h-8" />, link: '/renovation-fitout' },
    { num: '05', title: 'Painting & Decoration', icon: <MdFormatPaint className="w-8 h-8" />, link: '/renovation-fitout' },
    { num: '06', title: 'Gypsum & False Ceiling', icon: <MdOutlineArchitecture className="w-8 h-8" />, link: '/renovation-fitout' },
    { num: '07', title: 'Emergency Maintenance', icon: <FiAlertCircle className="w-8 h-8" />, link: '/services' },
    { num: '08', title: 'Property Support', icon: <HiOutlineHomeModern className="w-8 h-8" />, link: '/manpower-hospitality' }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
            Our Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nand-navy">
            Multiple Services. <br className="hidden sm:block"/> One Coordinated Partner.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => (
            <div key={index} className="bg-white border border-slate-200 p-6 rounded-xl group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-lg bg-blue-50 text-nand-blue flex items-center justify-center group-hover:bg-nand-blue group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <span className="text-2xl font-mono font-bold text-slate-200 group-hover:text-nand-orange/30 transition-colors">
                  {item.num}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-nand-navy mb-4 flex-grow pr-4">
                {item.title}
              </h3>
              
              <Link to={item.link} className="flex items-center text-sm font-semibold text-nand-orange mt-auto">
                Explore Service <FiArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CapabilityShowcase;
