import React from 'react';
import { HiOutlineBriefcase } from 'react-icons/hi2';

const LeadershipSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
            Our Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nand-navy">
            Leadership Focused on <br className="hidden sm:block"/> People, Process & Accountability
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Leader 01: Sumaya Akter */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row group hover:shadow-md transition-shadow">
            <div className="w-full md:w-2/5 relative h-64 md:h-auto">
              {/* Using placeholder as instructed */}
              <img 
                src="/NAND_Website_Image_Collection/team/Sumaya_Akter_Founder_CEO.jpg" 
                alt="Sumaya Akter - Founder & CEO" 
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full md:w-3/5 p-8 flex flex-col justify-center relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-nand-blue"></div>
              
              <h3 className="text-2xl font-bold text-nand-navy mb-1 relative inline-block">
                Sumaya Akter
                {/* Subtle orange underline */}
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-nand-orange"></span>
              </h3>
              
              <div className="flex items-center text-nand-blue font-semibold text-sm mb-6 mt-3">
                <HiOutlineBriefcase className="w-4 h-4 mr-2" />
                Founder & CEO
              </div>
              
              <p className="text-slate-600 leading-relaxed italic">
                "NAND was built around people, process and accountability. The company's commitment remains focused on quality, transparency, dependable service and long-term client partnerships."
              </p>
            </div>
          </div>

          {/* Leader 02: Pragya Nand Rai */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row group hover:shadow-md transition-shadow">
            <div className="w-full md:w-2/5 relative h-64 md:h-auto">
              <img 
                src="/NAND_Website_Image_Collection/team/Pragya_Nand_Rai_General_Manager.png" 
                alt="Pragya Nand Rai - General Manager" 
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full md:w-3/5 p-8 flex flex-col justify-center relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-nand-orange"></div>
              
              <h3 className="text-2xl font-bold text-nand-navy mb-1 relative inline-block">
                Pragya Nand Rai
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-nand-blue"></span>
              </h3>
              
              <div className="flex items-center text-nand-blue font-semibold text-sm mb-6 mt-3">
                <HiOutlineBriefcase className="w-4 h-4 mr-2" />
                General Manager
              </div>
              
              <p className="text-slate-600 leading-relaxed italic">
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
