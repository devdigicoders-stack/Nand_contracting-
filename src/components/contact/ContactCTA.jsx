import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { contactInfo } from '../../data/contactInfo';

const ContactCTA = () => {
  return (
    <section className="relative py-10 sm:py-12 lg:py-14 bg-nand-navy overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/NAND_Website_Image_Collection/hero/doha-skyline.jpg" 
          alt="Doha Construction Property" 
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nand-navy via-nand-navy/90 to-transparent"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-nand-blue/10 blur-3xl transform translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
        
        <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
          Let's Work Together
        </span>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
          Ready to Discuss <br className="hidden sm:block"/> Your Next Requirement?
        </h2>
        
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you need property maintenance, contracting, renovation, hospitality support or workforce solutions, contact NAND to discuss the scope and next steps.
        </p>
        
        <div className="flex flex-row flex-wrap justify-center gap-3">
          <button 
            onClick={() => {
              const inquiry = document.getElementById('inquiry-section');
              if (inquiry) inquiry.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-nand-orange text-white font-bold rounded-md hover:bg-[#e66d00] transition-colors shadow-xl flex-1 sm:flex-none"
          >
            Request a Quote
            <FiArrowUpRight className="ml-2 w-5 h-5" />
          </button>
          
          <a 
            href={`https://wa.me/${contactInfo.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-[#25D366] text-white font-bold rounded-md hover:bg-[#20bd5a] transition-colors shadow-xl flex-1 sm:flex-none"
          >
            <FaWhatsapp className="mr-2 w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default ContactCTA;
