import React from 'react';
import { HiOutlineHome } from 'react-icons/hi2';
import { FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ContactHero = () => {
  return (
    <section className="relative h-auto min-h-[450px] lg:h-[55vh] flex flex-col justify-center overflow-hidden bg-nand-navy">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/NAND_Website_Image_Collection/hero/doha-skyline.jpg" 
          alt="Modern Commercial Property Doha" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark navy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B2D]/95 via-[#071B2D]/80 to-[#0798E8]/40 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-16 md:py-0 mt-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-300 mb-8 font-medium">
          <HiOutlineHome className="w-4 h-4" />
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Contact Us</span>
        </div>

        <div className="max-w-3xl">
          {/* Eyebrow */}
          <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
            Contact NAND
          </span>
          
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
            Let's Discuss <br className="hidden md:block" />
            <span className="text-white">Your Requirement.</span>
          </h1>
          
          {/* Highlight line */}
          <p className="text-xl md:text-2xl text-blue-100 font-medium mb-6">
            Contracting. Maintenance. Workforce. Support.
          </p>

          {/* Supporting Text */}
          <p className="text-base lg:text-lg leading-7 text-gray-300 mb-10 max-w-2xl">
            Contact NAND Contracting & Hospitality Services to discuss your property, project, maintenance, renovation, hospitality or manpower requirements in Qatar.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-row flex-wrap gap-3">
            <button 
              onClick={() => {
                const inquiry = document.getElementById('inquiry-section');
                if (inquiry) inquiry.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-nand-orange text-white font-semibold rounded-md hover:bg-[#e66d00] transition-colors shadow-lg flex-1 sm:flex-none"
            >
              <FiSend className="mr-2 w-5 h-5" />
              Send an Inquiry
            </button>
            <a 
              href="https://wa.me/97431171127" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-[#25D366] text-white font-semibold rounded-md hover:bg-[#20bd5a] transition-colors shadow-lg flex-1 sm:flex-none"
            >
              <FaWhatsapp className="mr-2 w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
