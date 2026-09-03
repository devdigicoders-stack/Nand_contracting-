import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiPhone } from 'react-icons/fi';

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-nand-light border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-nand-navy mb-6 leading-tight">
          Looking for a Reliable Contracting, <br className="hidden md:block"/>
          Maintenance or Workforce Partner in Qatar?
        </h2>
        
        <p className="text-nand-muted text-lg mb-10 max-w-2xl mx-auto">
          Let's discuss your property, project or workforce requirements and identify a practical solution for your operations.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link 
            to="/contact" 
            className="flex-1 sm:flex-none inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-nand-orange text-white text-base font-medium rounded-md hover:bg-[#e66d00] transition-colors shadow-sm group"
          >
            Request a Quote
            <FiArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
          <Link 
            to="/contact" 
            className="flex-1 sm:flex-none inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-white border border-gray-200 text-nand-navy text-base font-bold rounded-md hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
          >
            <FiPhone className="mr-2 w-5 h-5 text-nand-blue" />
            Contact NAND
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
