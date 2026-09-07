import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineUsers, HiOutlineTruck } from 'react-icons/hi2';
import { HiOutlineDocumentMagnifyingGlass } from 'react-icons/hi2';

const ManpowerOverview = () => {
  const highlights = [
    { icon: <FiSearch className="w-5 h-5 text-nand-blue" />, text: 'Structured Sourcing' },
    { icon: <HiOutlineDocumentMagnifyingGlass className="w-5 h-5 text-nand-blue" />, text: 'Candidate Screening' },
    { icon: <HiOutlineUsers className="w-5 h-5 text-nand-blue" />, text: 'Flexible Workforce' },
    { icon: <HiOutlineTruck className="w-5 h-5 text-nand-blue" />, text: 'Deployment Support' },
  ];

  return (
    <section className="py-10 md:py-12 lg:py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT: Text Content */}
          <div className="order-2 lg:order-1">
            <span className="badge-premium mb-4">
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-current opacity-80"></span>
              Manpower Outsourcing
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-nand-navy mb-6 leading-tight">
              Workforce Solutions Designed <br className="hidden lg:block"/> Around Your Operational Needs
            </h2>
            
            <div className="text-base lg:text-lg leading-7 text-slate-600 mb-8 space-y-5">
              <p>
                Nand Contracting and Hospitality Services provides reliable manpower outsourcing and workforce solutions to businesses across Qatar.
              </p>
              <p>
                We help clients meet workforce requirements by sourcing, screening and providing suitable personnel for hospitality, construction, logistics, warehousing, facility support and general operations.
              </p>
              <p>
                Our approach is designed to reduce the time and effort required to source suitable workers while giving clients greater flexibility to manage changing workforce demands.
              </p>
            </div>

            {/* 4 Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-slate-50 border border-slate-100 rounded-lg">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-md flex items-center justify-center shadow-sm">
                    {highlight.icon}
                  </div>
                  <span className="font-semibold text-slate-700 text-sm">{highlight.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="order-1 lg:order-2 relative rounded-xl overflow-hidden shadow-xl border border-slate-200 min-h-[350px] md:min-h-[450px]">
            <img 
              src="/NAND_Website_Image_Collection/workforce/workergroup_pic.png" 
              alt="Workforce Solutions" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ManpowerOverview;
