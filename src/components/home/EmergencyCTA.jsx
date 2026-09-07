import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const EmergencyCTA = () => {
  return (
    <section className="relative py-8 sm:py-10 lg:py-12 bg-[#04101A] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-nand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 font-bold text-xs tracking-wider uppercase mb-3">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                24/7 Rapid Response in Qatar
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white mb-3 leading-tight">
                Immediate Maintenance Support <span className="text-gradient-gold">When Property Needs It</span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-5">
                On-call technicians ready for fast dispatch across Doha for electrical emergencies, AC breakdowns, major plumbing failures, and urgent structural repairs.
              </p>

              {/* Emergency issue tags */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                  ⚡ Electrical Failure
                </span>
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                  ❄️ AC / HVAC Breakdown
                </span>
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                  💧 Major Water Leakage
                </span>
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                  🔧 Plumbing Blockage
                </span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0 justify-center">
              <a 
                href="tel:31175515" 
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs sm:text-sm md:text-base font-bold bg-white hover:bg-slate-100 text-nand-navy rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
              >
                <FiPhoneCall className="mr-2.5 w-4 h-4 text-nand-orange" />
                Call: 31175515
              </a>
              <a 
                href="https://wa.me/97431171127" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs sm:text-sm md:text-base font-bold bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
              >
                <FaWhatsapp className="mr-2.5 w-5 h-5" />
                WhatsApp: 31171127
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCTA;
