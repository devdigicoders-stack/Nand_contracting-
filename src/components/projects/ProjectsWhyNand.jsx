import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const ProjectsWhyNand = () => {
  const strengths = [
    'One Service Partner',
    'Comprehensive Capability',
    'Client-Focused Execution',
    'Responsive Support',
    'Quality-Oriented Work',
    'Professional Coordination'
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-nand-navy overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
              Why NAND
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-8">
              Professional Coordination Across <br className="hidden lg:block"/> Multiple Service Requirements
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-center">
                  <BsCheckCircleFill className="w-5 h-5 text-nand-blue mr-3 flex-shrink-0" />
                  <span className="text-blue-100 font-medium">{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-64 sm:h-80 lg:h-[400px]">
            <img 
              src="/NAND_Website_Image_Collection/hero/doha-skyline.jpg" 
              alt="Professional Construction Coordination" 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-nand-navy/90 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsWhyNand;
