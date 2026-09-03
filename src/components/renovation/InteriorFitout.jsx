import React from 'react';
import { MdOutlineDesignServices, MdOutlineRoofing, MdGridView, MdFormatPaint } from 'react-icons/md';
import { LuPanelTop } from 'react-icons/lu';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const InteriorFitout = () => {
  const points = [
    { text: 'Interior Fit-Out', icon: <MdOutlineDesignServices className="w-5 h-5" /> },
    { text: 'Partition Works', icon: <LuPanelTop className="w-5 h-5" /> },
    { text: 'Ceiling Works', icon: <MdOutlineRoofing className="w-5 h-5" /> },
    { text: 'Flooring Works', icon: <MdGridView className="w-5 h-5" /> },
    { text: 'Painting', icon: <MdFormatPaint className="w-5 h-5" /> },
    { text: 'Gypsum', icon: <FiCheckCircle className="w-5 h-5" /> },
    { text: 'Finishing Works', icon: <FiCheckCircle className="w-5 h-5" /> },
  ];

  return (
    <section id="interior-fitout" className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT: Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 min-h-[350px] md:min-h-[450px]">
            <img 
              src="/NAND_Website_Image_Collection/services/painting-decoration-worker-01.png" 
              alt="Interior Fit-Out Active Work" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg border border-white/50 max-w-xs">
              <div className="flex items-center text-nand-navy font-bold">
                <FiCheckCircle className="w-5 h-5 text-nand-orange mr-2" />
                Integrated Service Approach
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="lg:pl-8">
            <span className="badge-premium mb-4">
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-current opacity-80"></span>
              Interior Fit-Out
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-nand-navy mb-6">
              Coordinated Fit-Out Solutions <br className="hidden sm:block"/> from Structure to Finishing
            </h2>
            
            <p className="text-base lg:text-lg leading-7 text-slate-600 mb-8">
              NAND supports interior fit-out requirements as part of its broader renovation and finishing capability, allowing multiple project stages to be coordinated through one service approach.
            </p>

            {/* Mini Service Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
              {points.map((point, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 rounded-full bg-nand-blue/10 text-nand-blue flex items-center justify-center group-hover:bg-nand-blue group-hover:text-white transition-colors">
                    {point.icon}
                  </div>
                  <span className="font-medium text-slate-700">{point.text}</span>
                </div>
              ))}
            </div>

            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-gradient-to-r from-nand-blue to-[#56CCF2] text-white font-semibold rounded-md shadow-lg shadow-nand-blue/30 hover:shadow-xl hover:-translate-y-0.5 transition-all flex-1 sm:flex-none"
            >
              Discuss Your Fit-Out Requirement
              <FiArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteriorFitout;
