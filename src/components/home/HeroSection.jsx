import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';
import { HiOutlineBuildingOffice2, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { MdOutlineSupportAgent } from 'react-icons/md';

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[75vh] py-6 sm:py-8 lg:py-10 flex items-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/NAND_Website_Image_Collection/hero/nand_hero_vid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-3xl py-2 sm:py-4 lg:py-6 text-center md:text-left mx-auto md:mx-0 flex flex-col items-center md:items-start">
          {/* Eyebrow */}
          <span className="badge-premium mb-3 sm:mb-4 text-[10px] sm:text-xs whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-current opacity-80 flex-shrink-0"></span>
            NAND Contracting & Hospitality
          </span>
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-heading font-semibold text-white leading-[1.15] mb-3 sm:mb-4 drop-shadow-lg">
            Reliable Solutions.<br />
            <span className="text-gradient-gold">Professional Execution.</span>
          </h1>
          
          {/* Secondary Line */}
          <h2 className="text-lg sm:text-xl md:text-2xl text-white font-medium mb-3 sm:mb-4 drop-shadow-sm">
            Built Around Your Requirements.
          </h2>
          
          {/* Paragraph */}
          <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-7 max-w-2xl leading-relaxed">
            Nand Contracting and Hospitality Services provides integrated contracting, facility maintenance, technical services, renovation, hospitality support and manpower solutions for residential, commercial and hospitality requirements across Qatar.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-row flex-wrap justify-center md:justify-start gap-2.5 sm:gap-3 mb-6 sm:mb-8 w-full sm:w-auto px-2 sm:px-0">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm md:text-base bg-gradient-to-r from-nand-orange to-[#FFB067] text-white font-bold rounded-md shadow-lg shadow-nand-orange/30 hover:shadow-xl hover:shadow-nand-orange/40 hover:-translate-y-0.5 transition-all group"
            >
              Request a Quote
              <FiArrowUpRight className="ml-1 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link 
              to="/contracting-construction"
              className="inline-flex items-center justify-center px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm md:text-base bg-transparent border border-white/40 text-white font-bold rounded-md hover:bg-white/10 hover:border-white shadow-sm transition-all group"
            >
              Explore Services
              <FiArrowRight className="ml-1 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom Highlights: Modern Full-Width Glassmorphic Pillars */}
        <div className="w-full mt-6 sm:mt-8 lg:mt-10 pt-5 sm:pt-6 border-t border-white/15">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full">
            
            {/* Item 01 */}
            <div className="group relative flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 lg:p-5 rounded-2xl bg-white/[0.07] hover:bg-white/[0.13] border border-white/15 hover:border-nand-orange/50 backdrop-blur-md transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:-translate-y-0.5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-nand-orange/25 to-nand-orange/10 border border-nand-orange/40 text-nand-orange flex items-center justify-center shrink-0 shadow-md group-hover:bg-gradient-to-br group-hover:from-nand-orange group-hover:to-[#FFB067] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                <HiOutlineBuildingOffice2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[10px] sm:text-xs font-black bg-nand-orange/20 text-nand-orange border border-nand-orange/30 font-heading">
                    01
                  </span>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white font-heading tracking-tight truncate">
                    Qatar-Focused Operations
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                  Strict alignment with Qatar building codes, Kahramaa standards & municipal safety compliance.
                </p>
              </div>
            </div>

            {/* Item 02 */}
            <div className="group relative flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 lg:p-5 rounded-2xl bg-white/[0.07] hover:bg-white/[0.13] border border-white/15 hover:border-nand-blue/50 backdrop-blur-md transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:-translate-y-0.5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-nand-blue/25 to-nand-blue/10 border border-nand-blue/40 text-[#56CCF2] flex items-center justify-center shrink-0 shadow-md group-hover:bg-gradient-to-br group-hover:from-nand-blue group-hover:to-[#56CCF2] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                <HiOutlineWrenchScrewdriver className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[10px] sm:text-xs font-black bg-nand-blue/20 text-[#56CCF2] border border-nand-blue/30 font-heading">
                    02
                  </span>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white font-heading tracking-tight truncate">
                    Integrated Capabilities
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                  Unified execution across civil contracting, luxury fit-out, MEP facility management & manpower.
                </p>
              </div>
            </div>

            {/* Item 03 */}
            <div className="group relative flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 lg:p-5 rounded-2xl bg-white/[0.07] hover:bg-white/[0.13] border border-white/15 hover:border-emerald-400/50 backdrop-blur-md transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:-translate-y-0.5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500/25 to-teal-500/10 border border-emerald-400/40 text-emerald-400 flex items-center justify-center shrink-0 shadow-md group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-teal-400 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                <MdOutlineSupportAgent className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[10px] sm:text-xs font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-heading">
                    03
                  </span>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white font-heading tracking-tight truncate">
                    Responsive Support
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                  Dedicated service desk, rapid emergency response & round-the-clock technical dispatch across Doha.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
