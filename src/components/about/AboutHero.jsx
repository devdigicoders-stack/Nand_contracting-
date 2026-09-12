import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineHome } from 'react-icons/hi';
import { FiArrowUpRight, FiPhone } from 'react-icons/fi';

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
          <div className="lg:col-span-12 xl:col-span-10 text-left flex flex-col items-start w-full max-w-full">
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
            <div className="flex flex-row flex-wrap justify-center md:justify-start gap-3 w-full">
              <Link
                to="/contracting-construction"
                className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-gradient-to-r from-nand-blue to-[#56CCF2] text-white font-semibold rounded-md shadow-lg shadow-nand-blue/30 hover:shadow-xl hover:shadow-nand-blue/40 hover:-translate-y-0.5 transition-all flex-1 sm:flex-none"
              >
                Explore Our Services
                <FiArrowUpRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-transparent text-white font-semibold rounded-md hover:bg-white/10 transition-all border border-white/40 shadow-sm hover:border-white flex-1 sm:flex-none"
              >
                <FiPhone className="mr-2 w-5 h-5" />
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

