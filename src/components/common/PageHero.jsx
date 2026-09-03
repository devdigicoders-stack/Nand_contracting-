import React from 'react';
import { HiOutlineHome } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const PageHero = ({ eyebrow, title, highlight, description, backgroundImage, breadcrumbLabel, primaryCTA, secondaryCTA }) => {
  return (
    <section className="relative h-auto min-h-[400px] lg:h-[50vh] flex flex-col justify-center overflow-hidden bg-nand-navy">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage || "/NAND_Website_Image_Collection/hero/doha-skyline.jpg"} 
          alt={title} 
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-nand-navy/95 via-nand-navy/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-8">
        
        {/* Breadcrumb */}
        {breadcrumbLabel && (
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6 font-medium">
            <HiOutlineHome className="w-4 h-4" />
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">{breadcrumbLabel}</span>
          </div>
        )}

        <div className="max-w-3xl">
          {eyebrow && (
            <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
              {eyebrow}
            </span>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
            {title}
          </h1>
          
          {highlight && (
            <p className="text-xl md:text-2xl text-blue-100 font-medium mb-6">
              {highlight}
            </p>
          )}

          {description && (
            <p className="text-base lg:text-lg leading-relaxed text-slate-300 mb-8 max-w-2xl">
              {description}
            </p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-row flex-wrap gap-3">
              {primaryCTA}
              {secondaryCTA}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
