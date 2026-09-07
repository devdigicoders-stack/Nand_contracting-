import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiCheck, FiAward } from 'react-icons/fi';

const AboutPreview = () => {
  const highlights = [
    'Qatar Licensed & Compliant',
    'Integrated Service Model',
    'Rapid Response & Support',
    'Skilled & Verified Workforce'
  ];

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT: Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background Glow/Accent */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-nand-orange/20 to-nand-blue/15 rounded-3xl blur-lg -z-10"></div>
              
              {/* Main Image */}
              <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-900/10">
                <img 
                  src="/NAND_Website_Image_Collection/services/technical-maintenance-electrical.jpg" 
                  alt="NAND Contracting & Maintenance Services in Qatar" 
                  className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Floating Trust Badge */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 max-w-[220px] sm:max-w-[250px]">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-nand-orange to-[#FFB067] text-white flex items-center justify-center shrink-0 shadow-md">
                  <FiAward className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-extrabold font-heading text-nand-navy leading-tight">
                    100% Verified
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">
                    Quality Execution in Qatar
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nand-orange/10 border border-nand-orange/20 text-nand-orange text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-nand-orange animate-pulse"></span>
              About NAND
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[2.6rem] font-heading font-bold text-nand-navy leading-tight mb-4">
              A Dependable Service Partner for <span className="text-gradient-gold">Properties, Projects & Workforce</span>
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3 max-w-2xl">
              Nand Contracting and Hospitality Services is a Doha-based company delivering professional solutions across facility maintenance, civil works, renovation, interior fit-out, property support and outsourced manpower solutions across Qatar.
            </p>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
              Our service capabilities are designed around safety, quality, and timely coordination, empowering clients to maintain and elevate their assets with a single trusted partner.
            </p>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 mb-7 w-full max-w-xl">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 text-nand-navy text-xs sm:text-sm font-semibold justify-center sm:justify-start">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 shrink-0">
                    <FiCheck className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center px-6 py-2.5 sm:py-3 bg-nand-navy hover:bg-nand-blue text-white text-sm sm:text-base font-bold rounded-lg shadow-md hover:shadow-lg transition-all group"
            >
              Discover Our Company
              <FiArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
