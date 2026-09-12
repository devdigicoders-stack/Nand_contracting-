import React from 'react';
import { HiOutlineTrophy, HiOutlineSparkles, HiOutlineUserGroup } from 'react-icons/hi2';

const VisionSection = () => {
  const visionPillars = [
    {
      icon: <HiOutlineTrophy className="w-6 h-6 text-nand-orange" />,
      title: 'National Vision Alignment',
      desc: "Active contribution to Qatar's expanding infrastructure, commercial sectors and premium hospitality landscape."
    },
    {
      icon: <HiOutlineSparkles className="w-6 h-6 text-[#56CCF2]" />,
      title: 'Operational Excellence',
      desc: 'Uncompromising adherence to civil engineering standards, rigorous safety protocols and precision finishing.'
    },
    {
      icon: <HiOutlineUserGroup className="w-6 h-6 text-emerald-400" />,
      title: 'Sustainable Partnerships',
      desc: 'Fostering multi-year client alliances built on transparency, responsive accountability and reliable delivery.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#071B2D] via-[#0A2239] to-[#071B2D] text-white relative overflow-hidden">
      {/* Decorative background glow elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-nand-blue/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-nand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-nand-orange text-xs font-bold uppercase tracking-wider mb-4">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-nand-orange"></span>
            Our Vision
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 sm:mb-5 leading-[1.2]">
            Building a Trusted Service <br className="hidden md:block"/>
            <span className="text-gradient-gold">Organization in Qatar</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto font-normal">
            To establish NAND as Qatar's most dependable and professionally recognized partner for contracting, technical maintenance, luxury renovation and specialized manpower solutions.
          </p>
        </div>

        {/* 3 Vision Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {visionPillars.map((pillar, index) => (
            <div 
              key={index}
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300 shadow-lg text-left flex flex-col group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-2 leading-tight">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VisionSection;
