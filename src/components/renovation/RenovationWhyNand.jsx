import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const RenovationWhyNand = () => {
  const features = [
    'Integrated service capability',
    'Civil and finishing coordination',
    'Client-focused execution',
    'Practical solutions',
    'Quality-oriented workmanship',
    'Professional coordination',
    'Flexible service scope',
    'Qatar-focused operations'
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT: Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 min-h-[350px] md:min-h-[450px]">
            <img 
              src="/NAND_Website_Image_Collection/services/painting-decoration-worker-02.png" 
              alt="Why Choose Nand for Renovation" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Decorative block */}
            <div className="absolute top-0 left-0 bg-nand-navy/80 p-6 md:p-8 w-1/2 rounded-br-2xl backdrop-blur-sm">
              <span className="text-white font-bold text-xl block border-b border-white/20 pb-2 mb-2">100%</span>
              <p className="text-blue-100 text-sm font-medium">
                Committed to Client Satisfaction
              </p>
            </div>
          </div>

          {/* RIGHT: Checklist */}
          <div className="flex flex-col justify-center">
            <div>
              <span className="badge-premium mb-4">
                <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-current opacity-80"></span>
                Why NAND
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-nand-navy mb-8">
                One Partner for Multiple <br className="hidden sm:block"/> Renovation Requirements
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <BsCheckCircleFill className="w-5 h-5 text-nand-blue mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RenovationWhyNand;
