import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUserGroup, HiOutlineBuildingOffice2, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { FaHelmetSafety } from 'react-icons/fa6';
import { MdOutlineDesignServices, MdOutlineRoomService, MdFormatPaint, MdOutlineEmergency } from 'react-icons/md';
import { FiArrowRight } from 'react-icons/fi';

const CoreServices = () => {
  const services = [
    {
      title: 'Manpower Outsourcing & Staffing',
      desc: 'Skilled workforce and general labor supply tailored to your operational needs.',
      icon: <HiOutlineUserGroup className="w-8 h-8" />,
      color: 'blue'
    },
    {
      title: 'Facility & Building Maintenance',
      desc: 'Preventive and corrective maintenance for buildings and commercial properties.',
      icon: <HiOutlineBuildingOffice2 className="w-8 h-8" />,
      color: 'orange'
    },
    {
      title: 'Technical Maintenance Services',
      desc: 'Expert HVAC, electrical, and plumbing systems installation and repair.',
      icon: <HiOutlineWrenchScrewdriver className="w-8 h-8" />,
      color: 'blue'
    },
    {
      title: 'Civil & Construction Works',
      desc: 'High-quality block work, plastering, tiling, and complete finishing works.',
      icon: <FaHelmetSafety className="w-8 h-8" />,
      color: 'orange'
    },
    {
      title: 'Renovation & Fit-Out',
      desc: 'Premium interior fit-outs, partitions, and complete space transformations.',
      icon: <MdOutlineDesignServices className="w-8 h-8" />,
      color: 'blue'
    },
    {
      title: 'Hospitality & Property Support',
      desc: 'Professional staff for hotels, restaurants, events, and guest services.',
      icon: <MdOutlineRoomService className="w-8 h-8" />,
      color: 'orange'
    },
    {
      title: 'Painting, Decoration & Gypsum',
      desc: 'Specialized painting and gypsum ceiling works for flawless interiors.',
      icon: <MdFormatPaint className="w-8 h-8" />,
      color: 'blue'
    },
    {
      title: 'Emergency & Subcontracting',
      desc: 'Rapid response maintenance and reliable subcontracting solutions.',
      icon: <MdOutlineEmergency className="w-8 h-8" />,
      color: 'orange'
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-nand-orange font-bold text-sm tracking-widest uppercase mb-3 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-nand-navy">
            Integrated Services for <br className="hidden sm:block" />
            Property, Projects & Operations
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service, index) => {
            const isBlue = service.color === 'blue';
            return (
              <div 
                key={index} 
                className={`group bg-white border border-gray-100 rounded-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-transparent ${
                  isBlue ? 'hover:shadow-nand-blue/10' : 'hover:shadow-nand-orange/10'
                }`}
              >
                <div className={`w-14 h-14 rounded-md flex items-center justify-center mb-6 transition-colors duration-300 ${
                  isBlue 
                    ? 'bg-blue-50 text-nand-blue group-hover:bg-nand-blue group-hover:text-white' 
                    : 'bg-orange-50 text-nand-orange group-hover:bg-nand-orange group-hover:text-white'
                }`}>
                  {service.icon}
                </div>
                
                <h3 className="text-lg font-bold font-heading text-nand-navy mb-3">
                  {service.title}
                </h3>
                
                <p className="text-nand-muted text-sm leading-relaxed mb-6 line-clamp-2">
                  {service.desc}
                </p>
                
                <Link 
                  to="/services" 
                  className={`inline-flex items-center text-sm font-semibold transition-colors duration-300 ${
                    isBlue ? 'text-nand-blue group-hover:text-nand-navy' : 'text-nand-orange group-hover:text-nand-navy'
                  }`}
                >
                  Read More 
                  <FiArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-nand-navy text-white text-base font-medium rounded-md hover:bg-gray-800 transition-colors shadow-sm group"
          >
            View All Services
            <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CoreServices;
