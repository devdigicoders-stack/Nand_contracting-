import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const EmergencyCTA = () => {
  return (
    <section className="relative py-16 md:py-20 bg-nand-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
        <img 
          src="/NAND_Website_Image_Collection/services/emergency-subcontracting-team.png" 
          alt="Emergency Maintenance" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-block py-1 px-3 rounded bg-red-500/20 text-red-400 font-bold text-xs tracking-widest uppercase mb-4 border border-red-500/30">
              Need Urgent Support?
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Responsive Maintenance Support <br className="hidden md:block"/>
              When Your Property Needs It
            </h2>
            <p className="text-gray-300 text-lg">
              NAND provides emergency maintenance support for plumbing, electrical, AC/HVAC breakdowns, water leakage and general emergency repair requirements.
            </p>
          </div>
          
          <div className="flex flex-row flex-wrap gap-3 flex-shrink-0">
            <a 
              href="tel:31175515" 
              className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-white text-nand-navy text-base font-bold rounded-md hover:bg-gray-100 transition-colors shadow-lg"
            >
              <FiPhoneCall className="mr-3 w-5 h-5 text-nand-orange" />
              Call for Support
            </a>
            <a 
              href="https://wa.me/97431171127" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-[#25D366] text-white text-base font-bold rounded-md hover:bg-[#128C7E] transition-colors shadow-lg"
            >
              <FaWhatsapp className="mr-3 w-6 h-6" />
              WhatsApp Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EmergencyCTA;
