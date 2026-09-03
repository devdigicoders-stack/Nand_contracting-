import React from 'react';
import { HiOutlineHome } from 'react-icons/hi2';
import { FiArrowUpRight, FiImage } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProjectsHero = () => {
  return (
    <section className="relative h-auto min-h-[450px] lg:h-[65vh] flex flex-col justify-center overflow-hidden bg-nand-navy">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/NAND_Website_Image_Collection/hero/doha-skyline.jpg" 
          alt="NAND Contracting Projects" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark navy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B2D]/95 via-[#071B2D]/80 to-transparent mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-0 mt-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-300 mb-8 font-medium">
          <HiOutlineHome className="w-4 h-4" />
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Projects & Gallery</span>
        </div>

        <div className="max-w-3xl">
          {/* Eyebrow */}
          <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
            Our Work
          </span>
          
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
            Our Capabilities. <br className="hidden md:block" />
            <span className="text-white">Delivered on Site.</span>
          </h1>
          
          {/* Alternative second line / Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 font-medium mb-6">
            Work Across Property, Maintenance & Fit-Out Requirements.
          </p>

          {/* Supporting Text */}
          <p className="text-base lg:text-lg leading-7 text-gray-300 mb-10 max-w-2xl">
            Explore visual examples across the service areas supported by NAND Contracting & Hospitality Services, including maintenance, civil works, renovation, fit-out, technical services, finishing and property support.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-row flex-wrap gap-3">
            <button 
              onClick={() => {
                const inquiry = document.getElementById('project-inquiry');
                if (inquiry) inquiry.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-nand-orange text-white font-semibold rounded-md hover:bg-[#e66d00] transition-colors shadow-lg flex-1 sm:flex-none"
            >
              Start Your Project
              <FiArrowUpRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => {
                const gallery = document.getElementById('project-gallery');
                if (gallery) gallery.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-white/10 text-white font-semibold rounded-md hover:bg-white/20 backdrop-blur-sm transition-colors border border-white/20 flex-1 sm:flex-none"
            >
              <FiImage className="mr-2 w-5 h-5" />
              Explore Gallery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
