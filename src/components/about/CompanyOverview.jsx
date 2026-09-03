import React from 'react';
import { HiOutlineSquares2X2, HiOutlineMapPin, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { MdOutlineSupportAgent } from 'react-icons/md';

const CompanyOverview = () => {
  const features = [
    { icon: <HiOutlineSquares2X2 className="w-6 h-6 text-nand-blue" />, text: 'Integrated Service Capability' },
    { icon: <HiOutlineMapPin className="w-6 h-6 text-nand-blue" />, text: 'Qatar-Focused Operations' },
    { icon: <MdOutlineSupportAgent className="w-6 h-6 text-nand-blue" />, text: 'Responsive Communication' },
    { icon: <HiOutlineWrenchScrewdriver className="w-6 h-6 text-nand-blue" />, text: 'Practical Execution' },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Image Composition */}
          <div className="relative">
            {/* Main large image */}
            <div className="rounded-xl overflow-hidden shadow-xl border border-slate-100">
              <img 
                src="/NAND_Website_Image_Collection/hero/doha-skyline.jpg" 
                alt="Construction and Maintenance" 
                className="w-full h-auto object-cover aspect-[4/5] md:aspect-[3/4]"
              />
            </div>
            {/* Smaller overlapping image */}
            <div className="absolute -bottom-10 -right-6 md:-right-10 w-2/3 max-w-[300px] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/NAND_Website_Image_Collection/graphics/mission-growth-graphic.jpg" 
                alt="Doha Skyline" 
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute top-10 -left-6 w-24 h-24 bg-nand-orange/10 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* RIGHT: Content */}
          <div className="lg:pl-8 mt-12 lg:mt-0">
            <span className="uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4 block">
              Who We Are
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-nand-navy mb-8 leading-tight">
              A Reliable Service Partner for Properties, Facilities & Workforce
            </h2>
            
            <div className="text-base lg:text-lg leading-7 text-slate-600 space-y-6 mb-10">
              <p>
                Nand Contracting and Hospitality Services is a Doha-based contracting and integrated services company providing professional solutions across facility maintenance, civil works, technical maintenance, renovation, fit-out, property support, hospitality services and outsourced manpower solutions.
              </p>
              <p>
                We serve residential, commercial, hospitality and property-sector requirements with a practical, service-focused approach designed around quality, reliability, safety and timely execution.
              </p>
              <p>
                Our capabilities support both operational and workforce requirements, helping clients manage their properties, facilities, projects and manpower needs through one dependable service partner.
              </p>
            </div>

            {/* Feature Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 border border-slate-200 rounded-xl bg-slate-50 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    {feature.icon}
                  </div>
                  <span className="font-semibold text-slate-800 text-sm md:text-base leading-snug">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
