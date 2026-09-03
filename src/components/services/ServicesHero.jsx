import React from 'react';
import { FiArrowDown } from 'react-icons/fi';

const ServicesHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/NAND_Website_Image_Collection/hero/doha-skyline.jpg" 
          alt="Contracting Services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-nand-navy/80 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block py-1 px-3 rounded-full bg-nand-orange/20 text-nand-orange font-bold text-sm tracking-widest uppercase mb-6 border border-nand-orange/30">
          Core Capabilities
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Integrated Solutions for <br className="hidden md:block" />
          Properties & Projects
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          We combine skilled professionals, quality workmanship, reliable service and workforce support to meet diverse property, project and operational requirements efficiently and professionally.
        </p>
        
        <button onClick={() => window.scrollTo({ top: window.innerHeight * 0.6, behavior: 'smooth' })} className="animate-bounce inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
          <FiArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default ServicesHero;
