import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineHome } from 'react-icons/hi';
import { FiArrowUpRight, FiPhone, FiCheckCircle } from 'react-icons/fi';
import { HiOutlineBuildingOffice2, HiOutlineWrenchScrewdriver, HiOutlineShieldCheck } from 'react-icons/hi2';
import { MdOutlineVerified } from 'react-icons/md';

const AboutHero = () => {
  return (
    <section className="relative min-h-[auto] sm:min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-4.5rem)] py-8 sm:py-8 lg:py-10 flex flex-col justify-between overflow-hidden bg-nand-navy">
      {/* Background with Doha skyline / corporate mood */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/NAND_Website_Image_Collection/hero/doha-skyline.jpg')" }}
      >
        {/* Dark navy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B2D]/95 via-[#071B2D]/85 to-[#071B2D]/60"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex-1 flex flex-col justify-center">
        
        {/* Breadcrumb */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-gray-300 mb-3 sm:mb-4 w-fit max-w-full truncate">
          <HiOutlineHome className="w-3.5 h-3.5 text-nand-orange shrink-0" />
          <Link to="/" className="hover:text-white transition-colors shrink-0">Home</Link>
          <span className="text-white/40 shrink-0">/</span>
          <span className="text-white font-medium truncate">About Us</span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Text */}
          <div className="lg:col-span-7 xl:col-span-8 text-left flex flex-col items-start w-full max-w-full">
            {/* Eyebrow */}
            <div className="badge-premium mb-3 sm:mb-4 text-[10px] sm:text-xs max-w-full tracking-[0.1em] sm:tracking-[0.18em] py-1 px-3 sm:py-1.5 sm:px-4">
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-current opacity-80 flex-shrink-0"></span>
              <span className="truncate">NAND Contracting & Hospitality • Doha</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-heading font-semibold text-white leading-[1.2] sm:leading-[1.15] mb-3 sm:mb-4 drop-shadow-lg break-words w-full">
              Built on Trust.<br className="hidden sm:block" />
              <span className="text-gradient-gold">Driven by Professional Service.</span>
            </h1>

            {/* Subheading */}
            <h2 className="text-base sm:text-xl md:text-2xl text-white font-medium mb-3 sm:mb-4 drop-shadow-sm leading-snug">
              Supporting Properties, Projects & People Across Qatar.
            </h2>

            {/* Paragraph */}
            <p className="text-xs sm:text-base text-gray-300 mb-6 sm:mb-7 max-w-2xl leading-relaxed">
              Nand Contracting and Hospitality Services is a Doha-based integrated services company delivering dependable solutions across civil works, technical facility maintenance, luxury renovation, fit-out, property operations and certified outsourced manpower.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-5 py-3 text-xs sm:text-sm md:text-base bg-gradient-to-r from-nand-orange to-[#FFB067] text-white font-bold rounded-md shadow-lg shadow-nand-orange/30 hover:shadow-xl hover:shadow-nand-orange/40 hover:-translate-y-0.5 transition-all group w-full sm:w-auto text-center"
              >
                Explore Capabilities
                <FiArrowUpRight className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 text-xs sm:text-sm md:text-base bg-white/10 sm:bg-transparent border border-white/40 text-white font-bold rounded-md hover:bg-white/10 hover:border-white shadow-sm transition-all group w-full sm:w-auto text-center"
              >
                <FiPhone className="mr-1.5 sm:mr-2 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Contact Our Team
              </Link>
            </div>
          </div>

          {/* Right Column: Executive Corporate Credential Card (Desktop) */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 justify-end">
            <div className="w-full max-w-sm rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/20 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.35)] relative overflow-hidden group hover:border-nand-orange/40 transition-all duration-300">
              {/* Subtle decorative glow */}
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-nand-orange/20 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="flex items-center gap-3 pb-4 mb-5 border-b border-white/15">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nand-orange to-[#FFB067] text-white flex items-center justify-center shadow-lg">
                  <HiOutlineShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-heading font-bold text-base leading-tight">Certified Excellence</h3>
                  <span className="text-xs text-nand-orange font-semibold">Qatar Operations & Standards</span>
                </div>
              </div>

              {/* Highlights Checklist */}
              <div className="space-y-3 mb-5">
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Licensed contracting, fit-out & facility engineering in Doha</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Full compliance with Qatar Construction Specifications (QCS)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>24/7 round-the-clock technical emergency dispatch</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Vetted & trained hospitality and technical manpower</span>
                </div>
              </div>

              {/* Metric Row */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/15 text-center">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-xl font-black text-white font-heading">100%</div>
                  <div className="text-[10px] text-slate-300 font-medium">Compliance Rate</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-xl font-black text-nand-orange font-heading">3+</div>
                  <div className="text-[10px] text-slate-300 font-medium">Core Divisions</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Highlights: Modern Full-Width Glassmorphic Pillars */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/15">
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
                Built around local Qatar building codes, Kahramaa regulations and municipality standards.
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
                  Integrated Turnkey Scope
                </h3>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                Single-source delivery covering contracting, fit-out renovation, MEP maintenance & manpower.
              </p>
            </div>
          </div>

          {/* Item 03 */}
          <div className="group relative flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 lg:p-5 rounded-2xl bg-white/[0.07] hover:bg-white/[0.13] border border-white/15 hover:border-emerald-400/50 backdrop-blur-md transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:-translate-y-0.5">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500/25 to-teal-500/10 border border-emerald-400/40 text-emerald-400 flex items-center justify-center shrink-0 shadow-md group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-teal-400 group-hover:text-white group-hover:scale-105 transition-all duration-300">
              <MdOutlineVerified className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[10px] sm:text-xs font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-heading">
                  03
                </span>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white font-heading tracking-tight truncate">
                  Verified Quality & Safety
                </h3>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                Strict quality assurance, on-time project execution and dependable customer support.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;

