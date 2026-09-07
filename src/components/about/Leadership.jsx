import React from 'react';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

const Leadership = () => {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-nand-navy overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-nand-orange font-bold text-sm tracking-widest uppercase mb-3 block">
            Our Leadership
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
            Message from Our Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Sumaya Akter - CEO */}
          <div className="relative bg-white/5 border border-white/15 p-8 md:p-10 rounded-2xl hover:bg-white/10 transition-all shadow-xl">
            <BiSolidQuoteAltLeft className="absolute top-8 right-8 w-12 h-12 text-white/10" />
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 relative z-10 italic">
              "Founding Nand Contracting and Hospitality Services was driven by a simple belief — that clients deserve a service partner who listens first and delivers without excuses. Every property we maintain, every project we complete, and every workforce solution we provide carries our name, and that is a responsibility we take seriously."
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 relative z-10 italic">
              "We have built this company around people, process and accountability. As we grow across Doha and Qatar, our commitment to quality, transparency and service remains unchanged. Whether it is contracting, maintenance, hospitality support or outsourced manpower, our focus is to provide dependable solutions that make our clients' operations easier and more efficient."
            </p>
            
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <img 
                src="/NAND_Website_Image_Collection/team/Sumaya_Akter_Founder_CEO.jpg" 
                alt="Sumaya Akter - Founder & CEO" 
                className="w-16 h-16 rounded-full shadow-lg object-cover object-top border-2 border-nand-orange shrink-0" 
              />
              <div>
                <h3 className="text-white font-extrabold text-xl sm:text-2xl font-heading tracking-tight">
                  Sumaya Akter
                </h3>
                <span className="text-nand-orange font-bold text-xs uppercase tracking-wider block mt-0.5">
                  Founder & CEO
                </span>
              </div>
            </div>
          </div>

          {/* Pragya Nand Rai - GM */}
          <div className="relative bg-white/5 border border-white/15 p-8 md:p-10 rounded-2xl hover:bg-white/10 transition-all shadow-xl">
            <BiSolidQuoteAltLeft className="absolute top-8 right-8 w-12 h-12 text-white/10" />
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 relative z-10 italic">
              "My role is to make sure every service request from a routine maintenance visit to a full renovation project, property support requirement or manpower deployment — is planned properly, executed to standard and followed through to the client's satisfaction."
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 relative z-10 italic">
              "Our teams are trained to work with discipline, safety and respect for every site we enter. I am committed to strengthening our systems, our people and our client relationships so that Nand continues to be a name our clients can rely on, every time."
            </p>
            
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <img 
                src="/NAND_Website_Image_Collection/team/Pragya_Nand_Rai_General_Manager.png" 
                alt="Pragya Nand Rai - General Manager" 
                className="w-16 h-16 rounded-full shadow-lg object-cover object-top border-2 border-nand-blue shrink-0" 
              />
              <div>
                <h3 className="text-white font-extrabold text-xl sm:text-2xl font-heading tracking-tight">
                  Pragya Nand Rai
                </h3>
                <span className="text-nand-blue font-bold text-xs uppercase tracking-wider block mt-0.5">
                  General Manager
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Leadership;
