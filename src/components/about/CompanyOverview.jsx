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
    <section className="py-10 sm:py-12 lg:py-14 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT: Image Composition */}
          <div className="relative">
            {/* Main large image */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
              <img 
                src="/NAND_Website_Image_Collection/hero/why-choose-nand-leadership.jpg" 
                alt="NAND Contracting and Operations Team" 
                className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Smaller overlapping image / badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 w-1/2 max-w-[240px] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/NAND_Website_Image_Collection/hospitality/hospitality-property-lobby.png" 
                alt="Hospitality and Corporate Property" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            {/* Floating Trust Chip */}
            <div className="absolute -top-4 left-4 sm:left-6 bg-nand-navy text-white px-3.5 py-1.5 rounded-lg shadow-lg text-xs font-bold font-heading border border-white/15 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Qatar Operations Excellence
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="lg:pl-4 mt-8 lg:mt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nand-orange/10 border border-nand-orange/20 text-nand-orange text-xs font-bold uppercase tracking-wider mb-3">
              Who We Are
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight text-nand-navy mb-5 sm:mb-6 leading-tight">
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
