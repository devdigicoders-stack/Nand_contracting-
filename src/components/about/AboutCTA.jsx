import React from 'react';
import { FiArrowUpRight, FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AboutCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-nand-navy relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-nand-orange/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-nand-blue/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10 text-center">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
          Looking for a Dependable Service Partner in Qatar?
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Talk to NAND about your contracting, maintenance, renovation, hospitality or workforce requirements.
        </p>
        
        <div className="flex flex-row flex-wrap justify-center gap-3">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-nand-orange text-white font-bold rounded-md hover:bg-[#e66d00] transition-colors shadow-lg flex-1 sm:flex-none"
          >
            Request a Quote
            <FiArrowUpRight className="ml-2 w-5 h-5" />
          </Link>
          <a 
            href="tel:31175515" 
            className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-white/10 text-white font-bold rounded-md hover:bg-white/20 backdrop-blur-sm transition-colors border border-white/20 flex-1 sm:flex-none"
          >
            <FiPhoneCall className="mr-2 w-5 h-5" />
            Contact Us
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default AboutCTA;
