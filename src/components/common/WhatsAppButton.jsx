import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { contactInfo } from '../../data/contactInfo';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={`https://wa.me/974${contactInfo.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with NAND on WhatsApp"
        className="group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 relative"
      >
        {/* Tooltip for desktop */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
          Need Help? Chat with us!
        </span>
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none"></span>
        
        <FaWhatsapp className="w-8 h-8 relative z-10" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
