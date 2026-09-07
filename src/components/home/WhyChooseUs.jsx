import React from 'react';
import { FiCheck, FiShield } from 'react-icons/fi';

const WhyChooseUs = () => {
  const points = [
    'One Partner for Multiple Services',
    'Comprehensive Scope of Works',
    'Client-Focused Agile Execution',
    '24/7 Rapid Emergency Response',
    'Quality & Safety Compliance',
    'Flexible Scalable Manpower',
    'Professional Project Coordination',
    'Qatar Licensed Operations'
  ];

  return (
    <section className="relative py-10 sm:py-12 lg:py-14 bg-[#071B2D] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-nand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-nand-blue/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nand-orange/15 border border-nand-orange/30 text-nand-orange text-xs font-bold uppercase tracking-wider mb-4 w-fit">
              <span className="w-2 h-2 rounded-full bg-nand-orange animate-pulse"></span>
              Why Choose NAND
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white mb-4 leading-tight">
              Professional Support Built Around <br className="hidden sm:inline" />
              <span className="text-gradient-gold">Your Operational Requirements</span>
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              From civil contracting and facility maintenance to luxury fit-outs and trained manpower deployment, NAND provides dependable, high-standard execution across Qatar.
            </p>
            
            {/* Interactive Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-8">
              {points.map((point, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-nand-orange/40 transition-all duration-300 group"
                >
                  <div className="w-6 h-6 rounded-lg bg-nand-orange/15 text-nand-orange group-hover:bg-nand-orange group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <FiCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-slate-200 text-xs sm:text-sm font-semibold group-hover:text-white transition-colors">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-xl sm:text-2xl font-black font-heading text-white">100+</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5">Projects Delivered</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-heading text-nand-orange">24/7</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5">Emergency Support</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-heading text-nand-blue">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5">Qatar Compliant</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Image & Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-nand-orange/25 via-nand-blue/20 to-transparent rounded-3xl blur-xl -z-10"></div>
              
              {/* Main Image Frame */}
              <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/15 ring-1 ring-white/10">
                <img 
                  src="/NAND_Website_Image_Collection/hero/why-choose-nand-leadership.jpg" 
                  alt="NAND Leadership & Operations Team on Qatar Project Site" 
                  className="w-full h-[320px] sm:h-[380px] lg:h-[440px] object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Floating Top Right Tag */}
              <div className="absolute top-4 right-4 bg-nand-navy/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 shadow-xl flex items-center gap-2 text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[11px] sm:text-xs font-bold tracking-wide">Doha, Qatar Active</span>
              </div>

              {/* Floating Bottom Left Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-5 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-2xl border border-slate-100 flex items-center gap-3.5 max-w-[240px]">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-nand-orange to-[#FFB067] text-white flex items-center justify-center shrink-0 shadow-md">
                  <FiShield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold font-heading text-nand-navy leading-tight">
                    Verified Quality
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                    Strict Standards & Safety
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
