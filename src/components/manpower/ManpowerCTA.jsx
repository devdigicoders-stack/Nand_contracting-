import React from 'react';
import { HiOutlineUsers } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';

const ManpowerCTA = () => {
  return (
    <section className="relative py-10 md:py-16 bg-nand-navy overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nand-orange/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-nand-blue/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
          Looking for a Reliable <br className="hidden sm:block"/> Workforce Partner in Qatar?
        </h2>
        
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Talk to NAND about hospitality, construction, logistics, facility or outsourced manpower requirements.
        </p>
        
        <div className="flex flex-row flex-wrap justify-center gap-3">
          <button 
            onClick={() => {
              const form = document.getElementById('manpower-requirement');
              if (form) form.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-nand-orange text-white font-bold rounded-md hover:bg-[#e66d00] transition-colors shadow-lg flex-1 sm:flex-none"
          >
            <HiOutlineUsers className="mr-2 w-5 h-5" />
            Request Manpower
          </button>
          <a 
            href="https://wa.me/97431171127" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-[#25D366] text-white font-bold rounded-md hover:bg-[#20bd5a] transition-colors shadow-lg flex-1 sm:flex-none"
          >
            <FaWhatsapp className="mr-2 w-5 h-5" />
            WhatsApp Us
          </a>
          <a 
            href="tel:31175515" 
            className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-white/10 text-white font-bold rounded-md hover:bg-white/20 backdrop-blur-sm transition-colors border border-white/20 flex-1 sm:flex-none"
          >
            <FiPhoneCall className="mr-2 w-5 h-5" />
            Call Our Team
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default ManpowerCTA;
