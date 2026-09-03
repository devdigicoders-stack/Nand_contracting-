import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const ManpowerWhyNand = () => {
  const features = [
    'Requirement-focused sourcing',
    'Preliminary candidate screening',
    'Structured recruitment process',
    'Workforce flexibility',
    'Professional coordination',
    'Qatar-focused operations',
    'Multiple workforce categories',
    'Ongoing deployment support'
  ];

  return (
    <section className="py-10 md:py-12 lg:py-16 bg-slate-50">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT: Image */}
          <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 min-h-[350px] md:min-h-[450px]">
            <img 
              src="/NAND_Website_Image_Collection/workforce/workergroup_pic.png" 
              alt="Workforce Partner" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-nand-orange/20 rounded-bl-full backdrop-blur-sm pointer-events-none"></div>
          </div>

          {/* RIGHT: Checklist */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div>
              <span className="badge-premium mb-4">
                <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-current opacity-80"></span>
                Why NAND
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-nand-navy mb-8">
                A Workforce Partner Focused <br className="hidden sm:block"/> on Quality & Coordination
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

export default ManpowerWhyNand;
