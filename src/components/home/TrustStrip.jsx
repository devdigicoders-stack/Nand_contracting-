import React from 'react';
import { FiShield } from 'react-icons/fi';
import { MdOutlineVerified, MdOutlineSupportAgent } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi';

const TrustStrip = () => {
  const items = [
    {
      title: 'Reliable Service',
      icon: <FiShield className="w-8 h-8 text-nand-blue" />
    },
    {
      title: 'Quality Workmanship',
      icon: <MdOutlineVerified className="w-8 h-8 text-nand-blue" />
    },
    {
      title: 'Responsive Support',
      icon: <MdOutlineSupportAgent className="w-8 h-8 text-nand-blue" />
    },
    {
      title: 'Professional Coordination',
      icon: <HiOutlineUserGroup className="w-8 h-8 text-nand-blue" />
    }
  ];

  return (
    <div className="relative z-20 -mt-24 sm:-mt-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
      <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left bg-slate-50 hover:bg-blue-50/50 p-4 sm:p-0 sm:bg-transparent sm:hover:bg-transparent rounded-xl transition-colors">
              <div className="flex-shrink-0 p-3 sm:p-3 bg-white sm:bg-blue-50 rounded-full sm:rounded-md shadow-sm sm:shadow-none border border-slate-100 sm:border-transparent">
                {React.cloneElement(item.icon, { className: 'w-6 h-6 md:w-8 md:h-8 text-nand-blue' })}
              </div>
              <h3 className="font-heading font-bold text-nand-navy text-xs sm:text-sm md:text-base leading-tight">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
