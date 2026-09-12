import React from 'react';
import { HiOutlineSquares2X2, HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { MdOutlineDesignServices, MdOutlineFormatPaint } from 'react-icons/md';

const RenovationOverview = () => {
  const highlights = [
    { icon: <HiOutlineSquares2X2 className="w-5 h-5 text-nand-blue" />, text: 'Integrated Coordination' },
    { icon: <MdOutlineDesignServices className="w-5 h-5 text-nand-blue" />, text: 'Interior Improvements' },
    { icon: <MdOutlineFormatPaint className="w-5 h-5 text-nand-blue" />, text: 'Finishing Works' },
    { icon: <HiOutlineBuildingOffice2 className="w-5 h-5 text-nand-blue" />, text: 'Residential & Commercial Support' },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Text Content */}
          <div className="order-2 lg:order-1">
            <span className="badge-premium mb-4">
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-current opacity-80"></span>
              Our Renovation Capability
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-nand-navy mb-6 leading-tight">
              Practical Renovation Solutions <br className="hidden lg:block"/> for Residential & Commercial Spaces
            </h2>
            
            <div className="text-base lg:text-lg leading-7 text-slate-600 mb-8 space-y-5">
              <p>
                Property requirements change over time. Renovation and fit-out works provide an opportunity to improve functionality, appearance and usability.
              </p>
              <p>
                NAND's renovation and fit-out capability can cover multiple stages of a project, allowing clients to coordinate civil, painting, gypsum, ceiling, flooring and finishing requirements through an integrated service approach.
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

          {/* RIGHT: Large Image */}
          <div className="order-1 lg:order-2 relative rounded-xl overflow-hidden shadow-xl border border-slate-200">
            <img 
              src="/NAND_Website_Image_Collection/hero/doha-skyline.jpg" 
              alt="Practical Renovation Solutions" 
              className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[4/3]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default RenovationOverview;
