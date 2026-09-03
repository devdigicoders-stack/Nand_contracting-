import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';
import { HiOutlineBuildingOffice2, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { MdOutlineSupportAgent } from 'react-icons/md';

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/NAND_Website_Image_Collection/hero/doha-skyline.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-nand-navy/95 via-nand-navy/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="max-w-3xl pb-16 lg:pb-20 pt-8 lg:pt-12">
          {/* Eyebrow */}
          <span className="badge-premium mb-6">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-current opacity-80"></span>
            NAND Contracting & Hospitality Services
          </span>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-heading font-semibold text-white leading-[1.1] mb-5 drop-shadow-lg">
            Reliable Solutions.<br />
            <span className="text-gradient-gold">Professional Execution.</span>
          </h1>
          
          {/* Secondary Line */}
          <h2 className="text-xl md:text-2xl text-white font-medium mb-6 drop-shadow-sm">
            Built Around Your Requirements.
          </h2>
          
          {/* Paragraph */}
          <p className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Nand Contracting and Hospitality Services provides integrated contracting, facility maintenance, technical services, renovation, hospitality support and manpower solutions for residential, commercial and hospitality requirements across Qatar.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-row flex-wrap gap-3 mb-10 lg:mb-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-gradient-to-r from-nand-orange to-[#FFB067] text-white font-bold rounded-md shadow-lg shadow-nand-orange/30 hover:shadow-xl hover:shadow-nand-orange/40 hover:-translate-y-0.5 transition-all group flex-1 sm:flex-none"
            >
              Request a Quote
              <FiArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-transparent border border-white/40 text-white font-bold rounded-md hover:bg-white/10 hover:border-white shadow-sm transition-all group flex-1 sm:flex-none"
            >
              Explore Our Services
              <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Bottom Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <div className="flex items-center text-white">
              <HiOutlineBuildingOffice2 className="w-8 h-8 text-nand-orange mr-4 flex-shrink-0" />
              <div>
                <span className="block text-xl font-bold font-heading">01</span>
                <span className="text-sm text-gray-300 font-medium">Qatar-Focused Operations</span>
              </div>
            </div>
            <div className="flex items-center text-white">
              <HiOutlineWrenchScrewdriver className="w-8 h-8 text-nand-orange mr-4 flex-shrink-0" />
              <div>
                <span className="block text-xl font-bold font-heading">02</span>
                <span className="text-sm text-gray-300 font-medium">Integrated Service Solutions</span>
              </div>
            </div>
            <div className="flex items-center text-white">
              <MdOutlineSupportAgent className="w-8 h-8 text-nand-orange mr-4 flex-shrink-0" />
              <div>
                <span className="block text-xl font-bold font-heading">03</span>
                <span className="text-sm text-gray-300 font-medium">Responsive Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
