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
    <div className="relative z-20 -mt-10 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="flex-shrink-0 p-3 bg-blue-50 rounded-md">
                {item.icon}
              </div>
              <h3 className="font-heading font-bold text-nand-navy text-base leading-tight">
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
