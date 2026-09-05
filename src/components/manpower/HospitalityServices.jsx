import React from 'react';
import { MdOutlineHotel, MdOutlineRestaurant, MdOutlineEvent, MdOutlineRoomService } from 'react-icons/md';
import { HiOutlineCog6Tooth, HiOutlineBuildingOffice2 } from 'react-icons/hi2';

const HospitalityServices = () => {
  const services = [
    { title: 'Hotel Support Services', icon: <MdOutlineHotel className="w-6 h-6" /> },
    { title: 'Restaurant Support Services', icon: <MdOutlineRestaurant className="w-6 h-6" /> },
    { title: 'Hospitality Operations Support', icon: <HiOutlineCog6Tooth className="w-6 h-6" /> },
    { title: 'Event Hospitality Support', icon: <MdOutlineEvent className="w-6 h-6" /> },
    { title: 'Guest Service Support', icon: <MdOutlineRoomService className="w-6 h-6" /> },
    { title: 'Hospitality Facility Support', icon: <HiOutlineBuildingOffice2 className="w-6 h-6" /> },
  ];

  return (
    <section className="py-10 md:py-12 lg:py-16 bg-nand-navy relative overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-nand-blue/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-nand-orange/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
            Hospitality Support
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Operational Support for <br className="hidden sm:block"/> Hospitality Environments
          </h2>
          <p className="text-base lg:text-lg leading-7 text-gray-300">
            Hospitality environments require consistency, responsiveness and attention to operational details. NAND provides support services designed for hotels, restaurants, events and hospitality facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 text-nand-orange flex items-center justify-center mr-4 group-hover:bg-nand-orange group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HospitalityServices;
