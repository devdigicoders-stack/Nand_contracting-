import React, { useState } from 'react';
import { FiMaximize2, FiX } from 'react-icons/fi';

const RenovationGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const filters = ['All', 'Villa', 'Apartment', 'Office', 'Commercial', 'Interior Fit-Out', 'Finishing'];

  const portfolio = [
    { id: 1, category: 'Villa', src: '/NAND_Website_Image_Collection/renovation/renovation-fitout-site.png', alt: 'Villa Renovation' },
    { id: 2, category: 'Interior Fit-Out', src: '/NAND_Website_Image_Collection/services/painting-decoration-worker-01.png', alt: 'Office Interior Fit-Out' },
    { id: 3, category: 'Finishing', src: '/NAND_Website_Image_Collection/services/painting-decoration-worker-02.png', alt: 'Premium Finishing Works' },
    { id: 4, category: 'Office', src: '/NAND_Website_Image_Collection/services/technical-maintenance-electrical.jpg', alt: 'Modern Office Renovation' },
    { id: 5, category: 'Commercial', src: '/NAND_Website_Image_Collection/hero/hero-construction-engineer.png', alt: 'Retail Shop Fit-Out' },
    { id: 6, category: 'Apartment', src: '/NAND_Website_Image_Collection/services/facility-maintenance-worker.png', alt: 'Apartment Remodeling' },
  ];

  const filteredPortfolio = activeFilter === 'All' 
    ? portfolio 
    : portfolio.filter(item => item.category === activeFilter);

  const openLightbox = (img) => {
    setCurrentImage(img);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-premium mb-4">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-current opacity-80"></span>
            Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-nand-navy mb-4">
            Renovation & Fit-Out Work
          </h2>
          <p className="text-base text-slate-600">
            A visual presentation of renovation, fit-out and finishing work.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter 
                  ? 'bg-nand-navy text-white' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-nand-blue hover:text-nand-blue'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortfolio.map((item) => (
            <div key={item.id} className="relative group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow bg-white h-72 cursor-pointer" onClick={() => openLightbox(item)}>
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-nand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                <div className="w-12 h-12 rounded-full bg-white text-nand-navy flex items-center justify-center mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <FiMaximize2 className="w-5 h-5" />
                </div>
                <span className="text-white font-semibold uppercase tracking-wider text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && currentImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <FiX className="w-8 h-8" />
            </button>
            
            <div className="max-w-5xl w-full max-h-[85vh] relative">
              <img 
                src={currentImage.src} 
                alt={currentImage.alt} 
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-center">
                <span className="text-white font-semibold tracking-wider text-sm bg-nand-orange px-3 py-1 rounded-full inline-block">
                  {currentImage.category}
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default RenovationGallery;
