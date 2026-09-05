import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const MissionSection = () => {
  const commitments = [
    'Delivering quality-focused workmanship',
    'Understanding and responding to client requirements',
    'Providing reliable maintenance, technical and workforce support',
    'Maintaining professional communication throughout every assignment',
    'Supporting planned and emergency maintenance requirements',
    'Providing suitable manpower for operational requirements',
    'Promoting safe and responsible work practices',
    'Delivering practical solutions within agreed project requirements',
    'Building long-term professional relationships'
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Mission Content (7 cols) */}
          <div className="lg:col-span-7">
            <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-nand-navy mb-6">
              Delivering Dependable Solutions with Professional Standards
            </h2>
            
            <p className="text-base lg:text-lg leading-7 text-slate-600 mb-10 pb-10 border-b border-slate-200">
              Our mission is to provide dependable contracting, maintenance, hospitality and manpower support services that help our clients maintain safe, functional, efficient and professionally managed properties, facilities and operations.
            </p>

            <div>
              <h3 className="text-xl font-bold text-nand-navy mb-6 uppercase tracking-wider text-sm">
                We are committed to:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {commitments.map((item, index) => {
                  const isBlue = index % 2 === 0;
                  return (
                    <div key={index} className="flex items-start">
                      <BsCheckCircleFill className={`w-5 h-5 mr-3 mt-1 flex-shrink-0 ${isBlue ? 'text-nand-blue' : 'text-nand-orange'}`} />
                      <span className="text-slate-700 text-sm md:text-base leading-snug">{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Image (5 cols) */}
          <div className="lg:col-span-5 relative h-full min-h-[500px] hidden lg:block">
            <div className="absolute inset-0 bg-nand-light rounded-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-nand-orange/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-nand-blue/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
              
              <img 
                src="/NAND_Website_Image_Collection/hero/doha-skyline.jpg" 
                alt="Our Mission" 
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionSection;
