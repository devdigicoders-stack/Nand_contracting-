import React from 'react';
import { FiArrowUpRight, FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AboutCTA = () => {
  return (
    <section className="py-10 sm:py-14 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#071B2D] via-[#0C2A44] to-[#071B2D] border border-white/15 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden text-center">
          
          {/* Background decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-nand-orange/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-nand-blue/15 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-nand-orange text-xs font-bold uppercase tracking-wider mb-4">
              Get in Touch Today
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 leading-tight">
              Looking for a Dependable <br className="hidden sm:block"/>
              <span className="text-gradient-gold">Service Partner in Qatar?</span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Connect with NAND today to discuss your contracting, facility maintenance, fit-out renovation, hospitality support or certified manpower requirements.
            </p>
            
            <div className="flex flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 text-xs sm:text-sm md:text-base bg-gradient-to-r from-nand-orange to-[#FFB067] text-white font-bold rounded-xl shadow-lg shadow-nand-orange/30 hover:shadow-xl hover:shadow-nand-orange/40 transition-all hover:-translate-y-0.5 group"
              >
                Request a Consultation
                <FiArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <a 
                href="tel:+97431175515" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 text-xs sm:text-sm md:text-base bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl backdrop-blur-md transition-all border border-white/20 hover:-translate-y-0.5 shadow-sm"
              >
                <FiPhoneCall className="mr-2 w-4 h-4 text-emerald-400" />
                Call +974 3117 5515
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
