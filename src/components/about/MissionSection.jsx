import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { HiOutlineShieldCheck } from 'react-icons/hi2';

const MissionSection = () => {
  const commitments = [
    'Delivering quality-focused workmanship & durable finishes',
    'Understanding and responding rapidly to client requirements',
    'Providing reliable maintenance, MEP & technical support',
    'Maintaining transparent communication throughout every stage',
    'Supporting planned maintenance & 24/7 emergency calls',
    'Providing vetted, skilled manpower for facility operations',
    'Enforcing strict HSE safety and compliance standards',
    'Delivering turnkey solutions within agreed timelines',
    'Building long-term client trust and strategic partnerships'
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT: Mission Content (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nand-orange/10 border border-nand-orange/20 text-nand-orange text-xs font-bold uppercase tracking-wider mb-3">
              Our Mission
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight text-nand-navy mb-4 leading-tight">
              Delivering Dependable Solutions with Professional Standards
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-slate-100">
              Our mission is to provide dependable contracting, technical maintenance, luxury renovation and manpower support services that help clients maintain safe, high-performing and professionally managed properties across Qatar.
            </p>

            <div>
              <h3 className="text-xs sm:text-sm font-bold text-nand-navy uppercase tracking-wider mb-4 font-heading flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-nand-orange"></span>
                We are committed to:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {commitments.map((item, index) => {
                  const isBlue = index % 2 === 0;
                  return (
                    <div 
                      key={index} 
                      className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-100 transition-colors"
                    >
                      <BsCheckCircleFill className={`w-4 h-4 mt-0.5 shrink-0 ${isBlue ? 'text-nand-blue' : 'text-nand-orange'}`} />
                      <span className="text-slate-700 text-xs sm:text-sm leading-snug font-medium">{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Authentic Photo with Glassmorphic Floating Badge (5 cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 group">
              <img 
                src="/NAND_Website_Image_Collection/services/contracting-division.jpg" 
                alt="NAND Contracting and Engineering Inspection" 
                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[4/5] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nand-navy/80 via-transparent to-transparent"></div>

              {/* Floating Quality Assurance Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-nand-orange to-[#FFB067] text-white flex items-center justify-center shrink-0 shadow-md">
                  <HiOutlineShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-nand-navy font-heading leading-tight">ISO & QCS Aligned</h4>
                  <p className="text-[11px] text-slate-500 leading-tight mt-0.5">Strict quality benchmarks for contracting & hospitality across Doha</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionSection;
