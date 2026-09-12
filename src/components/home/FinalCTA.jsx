import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiPhone } from 'react-icons/fi';

const FinalCTA = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#071B2D] via-[#0C2A44] to-[#071B2D] p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl border border-slate-800">
          
          {/* Subtle ambient lighting orbs */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-nand-orange/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-nand-blue/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-nand-orange text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-nand-orange animate-pulse"></span>
              Start Your Project With NAND
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white mb-4 leading-tight">
              Looking for a Reliable Contracting, <br className="hidden sm:inline" />
              <span className="text-gradient-gold">Maintenance or Workforce Partner?</span>
            </h2>
            
            <p className="text-slate-300 text-xs sm:text-sm md:text-base mb-8 leading-relaxed max-w-2xl mx-auto">
              Connect with our Doha technical management team today to review your property specifications, project milestones, and commercial requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5 sm:gap-4 mb-8">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm md:text-base bg-gradient-to-r from-nand-orange to-[#FFB067] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-nand-orange/30 transition-all shadow-md group hover:-translate-y-0.5"
              >
                Request a Quote
                <FiArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm md:text-base bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold rounded-xl transition-all shadow-sm hover:-translate-y-0.5"
              >
                <FiPhone className="mr-2 w-4 h-4 text-nand-orange" />
                Contact NAND
              </Link>
            </div>

            {/* Micro trust features */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-400 pt-6 border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <span className="text-nand-orange">✓</span> Fast On-Site Assessment
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-nand-orange">✓</span> Transparent Commercial Pricing
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-nand-orange">✓</span> Qatar Municipality Standards
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
