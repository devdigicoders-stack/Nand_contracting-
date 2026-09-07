import React from 'react';
import { HiOutlineBriefcase } from 'react-icons/hi2';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

const LeadershipSection = () => {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-slate-50 border-y border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nand-orange/10 border border-nand-orange/20 text-nand-orange text-xs font-bold uppercase tracking-wider mb-3">
            Our Leadership
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight text-nand-navy mb-3 leading-tight">
            Leadership Focused on People, Process & Accountability
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Guiding NAND's vision and operations across Qatar with deep industry experience and strict quality governance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Leader 01: Sumaya Akter */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-200/80 overflow-hidden flex flex-col sm:flex-row group transition-all duration-300">
            <div className="w-full sm:w-2/5 relative h-72 sm:h-auto min-h-[260px] bg-slate-100 overflow-hidden">
              <img 
                src="/NAND_Website_Image_Collection/team/Sumaya_Akter_Founder_CEO.jpg" 
                alt="Sumaya Akter - Founder & CEO" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nand-navy/60 via-transparent to-transparent sm:hidden"></div>
            </div>
            <div className="w-full sm:w-3/5 p-6 sm:p-7 flex flex-col justify-center relative">
              <BiSolidQuoteAltLeft className="w-8 h-8 text-nand-orange/25 mb-2" />
              
              <div className="inline-flex items-center gap-1.5 text-nand-orange font-bold text-xs uppercase tracking-wider mb-1">
                <HiOutlineBriefcase className="w-4 h-4" />
                <span>Founder & CEO</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#071B2D] mb-3 leading-tight tracking-tight">
                Sumaya Akter
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic font-normal">
                "NAND was built around people, process and accountability. The company's commitment remains focused on quality, transparency, dependable service and long-term client partnerships."
              </p>
            </div>
          </div>

          {/* Leader 02: Pragya Nand Rai */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-200/80 overflow-hidden flex flex-col sm:flex-row group transition-all duration-300">
            <div className="w-full sm:w-2/5 relative h-72 sm:h-auto min-h-[260px] bg-slate-100 overflow-hidden">
              <img 
                src="/NAND_Website_Image_Collection/team/Pragya_Nand_Rai_General_Manager.png" 
                alt="Pragya Nand Rai - General Manager" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nand-navy/60 via-transparent to-transparent sm:hidden"></div>
            </div>
            <div className="w-full sm:w-3/5 p-6 sm:p-7 flex flex-col justify-center relative">
              <BiSolidQuoteAltLeft className="w-8 h-8 text-nand-blue/25 mb-2" />
              
              <div className="inline-flex items-center gap-1.5 text-nand-blue font-bold text-xs uppercase tracking-wider mb-1">
                <HiOutlineBriefcase className="w-4 h-4" />
                <span>General Manager</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#071B2D] mb-3 leading-tight tracking-tight">
                Pragya Nand Rai
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic font-normal">
                "My focus is ensuring that service requests, maintenance work, renovation requirements, property support and manpower deployments are properly planned, executed to standard and followed through to client satisfaction."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LeadershipSection;
