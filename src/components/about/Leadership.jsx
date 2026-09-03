import React from 'react';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

const Leadership = () => {
  return (
    <section className="py-16 md:py-24 bg-nand-navy overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-nand-orange font-bold text-sm tracking-widest uppercase mb-3 block">
            Our Leadership
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
            Message from Our Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Sumaya Akter - CEO */}
          <div className="relative bg-white/5 border border-white/10 p-8 md:p-10 rounded-xl hover:bg-white/10 transition-colors">
            <BiSolidQuoteAltLeft className="absolute top-8 right-8 w-12 h-12 text-white/10" />
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10 italic">
              "Founding Nand Contracting and Hospitality Services was driven by a simple belief — that clients deserve a service partner who listens first and delivers without excuses. Every property we maintain, every project we complete, and every workforce solution we provide carries our name, and that is a responsibility we take seriously."
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 relative z-10 italic">
              "We have built this company around people, process and accountability. As we grow across Doha and Qatar, our commitment to quality, transparency and service remains unchanged. Whether it is contracting, maintenance, hospitality support or outsourced manpower, our focus is to provide dependable solutions that make our clients' operations easier and more efficient. I am proud of the team we have built, and I look forward to strengthening our long-term partnerships and creating greater value for our clients."
            </p>
            
            <div className="flex items-center">
              <img src="/NAND_Website_Image_Collection/team/sumaya-akter-founder-ceo.png" alt="Sumaya Akter" className="w-14 h-14 rounded-full mr-4 shadow-lg object-cover" />
              <div>
                <h4 className="text-white font-bold text-xl font-heading">Sumaya Akter</h4>
                <span className="text-nand-orange font-medium text-sm">Founder & CEO</span>
              </div>
            </div>
          </div>

          {/* Pragya Nand Rai - GM */}
          <div className="relative bg-white/5 border border-white/10 p-8 md:p-10 rounded-xl hover:bg-white/10 transition-colors">
            <BiSolidQuoteAltLeft className="absolute top-8 right-8 w-12 h-12 text-white/10" />
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10 italic">
              "My role is to make sure every service request from a routine maintenance visit to a full renovation project, property support requirement or manpower deployment — is planned properly, executed to standard and followed through to the client's satisfaction."
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 relative z-10 italic">
              "Our teams are trained to work with discipline, safety and respect for every site we enter. I am committed to strengthening our systems, our people and our client relationships so that Nand continues to be a name our clients can rely on, every time. For our manpower and outsourcing services, we focus on understanding the client's workforce requirements."
            </p>
            
            <div className="flex items-center">
              <img src="/NAND_Website_Image_Collection/team/pragya-nand-rai-general-manager.png" alt="Pragya Nand Rai" className="w-14 h-14 rounded-full mr-4 shadow-lg object-cover" />
              <div>
                <h4 className="text-white font-bold text-xl font-heading">Pragya Nand Rai</h4>
                <span className="text-nand-blue font-medium text-sm">General Manager</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Leadership;
