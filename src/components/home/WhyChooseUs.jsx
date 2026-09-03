import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const WhyChooseUs = () => {
  const points = [
    'One Service Partner for Multiple Requirements',
    'Comprehensive Service Capability',
    'Client-Focused Execution',
    'Responsive Support',
    'Quality-Oriented Work',
    'Flexible Service Solutions',
    'Professional Coordination',
    'Qatar-Focused Operations'
  ];

  return (
    <section className="py-16 md:py-24 bg-nand-navy overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center mb-4">
              <div className="w-1 h-6 bg-nand-orange mr-3"></div>
              <span className="text-nand-orange font-bold text-sm tracking-widest uppercase">
                Why Choose NAND
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-10 leading-tight">
              Professional Support Built Around <br className="hidden lg:block" />
              Your Operational Requirements
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              {points.map((point, index) => {
                const isBlueIcon = index % 2 === 0;
                return (
                  <div key={index} className="flex items-start">
                    <BsCheckCircleFill 
                      className={`w-5 h-5 mr-4 mt-0.5 flex-shrink-0 ${
                        isBlueIcon ? 'text-nand-blue' : 'text-nand-orange'
                      }`} 
                    />
                    <span className="text-gray-300 font-medium leading-snug">
                      {point}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="order-1 lg:order-2 relative">
            {/* Decorative background shape */}
            <div className="absolute top-10 -right-10 w-full h-full border-2 border-nand-blue/30 rounded-lg -z-10 hidden lg:block"></div>
            
            <img 
              src="/NAND_Website_Image_Collection/hero/doha-skyline.jpg" 
              alt="Professional Construction Team" 
              className="w-full h-auto rounded-lg shadow-2xl object-cover lg:h-[600px]"
            />
            
            {/* Floating element */}
            <div className="absolute -bottom-8 -left-8 bg-nand-orange text-white p-6 rounded-lg shadow-xl hidden sm:block">
              <span className="block text-3xl font-heading font-extrabold mb-1">100%</span>
              <span className="block text-sm font-medium">Committed to Quality</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
