import React from 'react';
import { HiOutlineHome } from 'react-icons/hi';
import { FiArrowUpRight, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section className="relative min-h-[50vh] pt-24 pb-12 lg:pt-28 lg:pb-16 flex flex-col justify-center overflow-hidden bg-nand-navy">
      {/* Background with Doha skyline / corporate mood */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/NAND_Website_Image_Collection/hero/doha-skyline.jpg" 
          alt="Nand Contracting Corporate" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark navy gradient with slight blue tone */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B2D]/95 via-[#071B2D]/80 to-[#0798E8]/40 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-300 mb-5 font-medium">
          <HiOutlineHome className="w-4 h-4" />
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">About Us</span>
        </div>

        <div className="max-w-3xl">
          {/* Eyebrow */}
          <span className="badge-premium mb-4">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-current opacity-80"></span>
            About NAND
          </span>
          
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white mb-4 leading-[1.2] drop-shadow-lg">
            Built on Trust. <br className="hidden lg:block" />
            <span className="text-gradient-accent">Driven by Professional Service.</span>
          </h1>
          
          {/* Alternative second line / Subheading */}
          <p className="text-xl md:text-2xl text-white font-medium mb-3">
            Supporting Properties, Projects & People Across Qatar.
          </p>

          {/* Supporting Paragraph */}
          <p className="text-base lg:text-lg leading-7 text-gray-300 mb-6 max-w-2xl">
            Nand Contracting and Hospitality Services is a Doha-based contracting and integrated services company delivering professional solutions across facility maintenance, civil works, technical services, renovation, fit-out, hospitality support, property services and outsourced manpower solutions.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-row flex-wrap gap-3">
            <Link 
              to="/services" 
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
    </section>
  );
};

export default AboutHero;
