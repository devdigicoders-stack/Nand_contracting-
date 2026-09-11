import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';
import { HiOutlineBuildingOffice2, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { MdOutlineSupportAgent } from 'react-icons/md';

const HeroSection = () => {
  return (
    <section className="relative h-auto min-h-[100svh] lg:min-h-[92vh] py-6 lg:py-24 flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/NAND_Website_Image_Collection/hero/doha-skyline.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-nand-navy/95 via-nand-navy/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-3xl pb-8 lg:pb-20 pt-2 lg:pt-12 text-center md:text-left mx-auto md:mx-0 flex flex-col items-center md:items-start">
          {/* Eyebrow */}
          <span className="badge-premium mb-6 text-[10px] sm:text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-current opacity-80 flex-shrink-0"></span>
            NAND Contracting & Hospitality
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
          <div className="flex flex-row flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mb-10 lg:mb-12 w-full sm:w-auto px-2 sm:px-0">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-3 py-2 sm:px-5 sm:py-3 text-[11px] sm:text-sm md:text-base bg-gradient-to-r from-nand-orange to-[#FFB067] text-white font-bold rounded-md shadow-lg shadow-nand-orange/30 hover:shadow-xl hover:shadow-nand-orange/40 hover:-translate-y-0.5 transition-all group"
            >
              Request a Quote
              <FiArrowUpRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link 
              to="/contracting-construction"
              className="inline-flex items-center justify-center px-3 py-2 sm:px-5 sm:py-3 text-[11px] sm:text-sm md:text-base bg-transparent border border-white/40 text-white font-bold rounded-md hover:bg-white/10 hover:border-white shadow-sm transition-all group"
            >
              Explore Services
              <FiArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Bottom Highlights */}
          <div className="grid grid-cols-3 gap-2 sm:gap-8 pt-6 sm:pt-8 w-full border-t border-white/10 md:border-transparent">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left text-white">
              <HiOutlineBuildingOffice2 className="w-5 h-5 sm:w-8 sm:h-8 text-nand-orange mb-1 sm:mb-0 sm:mr-4 flex-shrink-0" />
              <div>
                <span className="block text-sm sm:text-xl font-bold font-heading leading-tight">01</span>
                <span className="text-[9px] sm:text-sm text-gray-300 font-medium leading-tight block mt-1">Qatar-Focused</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left text-white">
              <HiOutlineWrenchScrewdriver className="w-5 h-5 sm:w-8 sm:h-8 text-nand-orange mb-1 sm:mb-0 sm:mr-4 flex-shrink-0" />
              <div>
                <span className="block text-sm sm:text-xl font-bold font-heading leading-tight">02</span>
                <span className="text-[9px] sm:text-sm text-gray-300 font-medium leading-tight block mt-1">Integrated Services</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left text-white">
              <MdOutlineSupportAgent className="w-5 h-5 sm:w-8 sm:h-8 text-nand-orange mb-1 sm:mb-0 sm:mr-4 flex-shrink-0" />
              <div>
                <span className="block text-sm sm:text-xl font-bold font-heading leading-tight">03</span>
                <span className="text-[9px] sm:text-sm text-gray-300 font-medium leading-tight block mt-1">Responsive Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
