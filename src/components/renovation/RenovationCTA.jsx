import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const RenovationCTA = () => {
  return (
    <section className="relative py-16 md:py-24 bg-nand-navy overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/NAND_Website_Image_Collection/hero/doha-skyline.jpg" 
          alt="Renovation Project CTA" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-nand-navy/90 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 text-center">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
          Planning a Renovation <br className="hidden sm:block"/> or Fit-Out Project?
        </h2>
        
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Discuss your villa, apartment, office or commercial renovation requirements with NAND and let our team understand your scope.
        </p>
        
        <div className="flex flex-row justify-center gap-3 sm:gap-4">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-base bg-nand-orange text-white font-bold rounded-md hover:bg-[#e66d00] transition-colors shadow-lg whitespace-nowrap"
          >
            Request Quote
            <FiArrowUpRight className="ml-1.5 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
          <a 
            href="https://wa.me/97431171127" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-base bg-[#25D366] text-white font-bold rounded-md hover:bg-[#20bd5a] transition-colors shadow-lg whitespace-nowrap"
          >
            <FaWhatsapp className="mr-1.5 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            WhatsApp Us
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default RenovationCTA;
