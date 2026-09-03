import React from 'react';
import { HiOutlineHome, HiOutlineUsers } from 'react-icons/hi2';
import { FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ManpowerHero = () => {
  return (
    <section className="relative h-auto min-h-[450px] lg:h-[70vh] flex flex-col justify-center overflow-hidden bg-nand-navy">
      {/* Background with professional workforce image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/NAND_Website_Image_Collection/hero/construction-workforce-sunset.jpg" 
          alt="Professional Workforce Team" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark navy/blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B2D]/95 via-[#071B2D]/80 to-[#0798E8]/40 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-0 mt-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-300 mb-8 font-medium">
          <HiOutlineHome className="w-4 h-4" />
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Manpower & Hospitality</span>
        </div>

        <div className="max-w-3xl">
          {/* Eyebrow */}
          <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
            Manpower & Hospitality
          </span>
          
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
            Reliable Workforce. <br className="hidden md:block" />
            <span className="text-white">Professional Support.</span>
          </h1>
          
          {/* Highlight line */}
          <p className="text-xl md:text-2xl text-blue-100 font-medium mb-6">
            Flexible Solutions for Operational Requirements.
          </p>

          {/* Supporting Text */}
          <p className="text-base lg:text-lg leading-7 text-gray-300 mb-10 max-w-2xl">
            NAND provides manpower outsourcing and workforce solutions for hospitality, construction, logistics, warehousing, facility support and general operations across Qatar.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-row flex-wrap gap-3">
            <button 
              onClick={() => {
                const form = document.getElementById('manpower-requirement');
                if (form) form.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-nand-orange text-white font-semibold rounded-md hover:bg-[#e66d00] transition-colors shadow-lg flex-1 sm:flex-none"
            >
              <HiOutlineUsers className="mr-2 w-5 h-5" />
              Request Manpower
            </button>
            <button 
              onClick={() => {
                const services = document.getElementById('workforce-categories');
                if (services) services.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-white/10 text-white font-semibold rounded-md hover:bg-white/20 backdrop-blur-sm transition-colors border border-white/20 flex-1 sm:flex-none"
            >
              <FiArrowDown className="mr-2 w-5 h-5" />
              Explore Workforce Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManpowerHero;
