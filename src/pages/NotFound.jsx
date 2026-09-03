import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiArrowRight } from 'react-icons/fi';

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | NAND Contracting & Hospitality Services";
  }, []);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4 py-20 text-center">
      
      {/* 404 Graphic */}
      <div className="relative mb-8">
        <h1 className="text-8xl md:text-9xl font-extrabold text-slate-100 tracking-tighter">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="bg-white px-4 py-1 text-nand-orange font-bold uppercase tracking-widest text-sm border-2 border-nand-orange rounded-full transform -rotate-12 shadow-sm">
            Not Found
          </span>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-nand-navy mb-4">
        We couldn't find that page
      </h2>
      
      <p className="text-slate-600 mb-10 max-w-md">
        The page you're looking for may have been moved, deleted, or no longer exists. Let's get you back on track.
      </p>
      
      <div className="flex flex-row flex-wrap gap-3 justify-center w-full max-w-sm sm:max-w-none">
        <Link 
          to="/"
          className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-nand-blue text-white font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-md"
        >
          <FiHome className="mr-2 w-5 h-5" />
          Back to Home
        </Link>
        
        <Link 
          to="/contact"
          className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-white text-nand-navy font-bold rounded-lg border border-slate-300 hover:border-nand-blue hover:text-nand-blue transition-colors"
        >
          Contact NAND
          <FiArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>

    </div>
  );
};

export default NotFound;
