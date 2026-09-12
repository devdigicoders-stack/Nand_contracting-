import React, { useState } from 'react';
import { FiMaximize2, FiX } from 'react-icons/fi';

const RenovationGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const filters = ['All', 'Villa & Living', 'Interior Fit-Out', 'Commercial & Lobby', 'Finishing & Painting'];

  const portfolio = [
    { 
      id: 1, 
      category: 'Villa & Living', 
      title: 'Luxury Villa Living Space Renovation', 
      src: '/NAND_Website_Image_Collection/projects/renovation-after.jpg', 
      alt: 'Luxury Villa Living Space Renovation' 
    },
    { 
      id: 2, 
      category: 'Interior Fit-Out', 
      title: 'Turnkey Commercial & Office Fit-Out', 
      src: '/NAND_Website_Image_Collection/renovation/renovation-fitout-site.png', 
      alt: 'Commercial Fit-Out Site' 
    },
    { 
      id: 3, 
      category: 'Commercial & Lobby', 
      title: 'Executive Hotel & Property Lobby Fit-Out', 
      src: '/NAND_Website_Image_Collection/hospitality/hospitality-property-lobby.png', 
      alt: 'Executive Hotel Lobby Fit-Out' 
    },
    { 
      id: 4, 
      category: 'Finishing & Painting', 
      title: 'High-Precision Wall Finishing & Painting', 
      src: '/NAND_Website_Image_Collection/services/painting-decoration-worker-01.png', 
      alt: 'Wall Finishing & Painting' 
    },
    { 
      id: 5, 
      category: 'Finishing & Painting', 
      title: 'Custom Gypsum & Architectural Coating', 
      src: '/NAND_Website_Image_Collection/services/painting-decoration-worker-02.png', 
      alt: 'Custom Gypsum & Architectural Coating' 
    },
    { 
      id: 6, 
      category: 'Interior Fit-Out', 
      title: 'Facility & Electrical Technical Fit-Out', 
      src: '/NAND_Website_Image_Collection/services/technical-maintenance-electrical.jpg', 
      alt: 'Technical Maintenance & Electrical Fit-Out' 
    }
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
    <section className="py-10 sm:py-12 lg:py-14 bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="badge-premium mb-3 sm:mb-4 text-[10px] sm:text-xs">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-current opacity-80"></span>
            Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-nand-navy mb-3">
            Renovation & Fit-Out Work
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Visual presentation of recent renovation, turnkey fit-out, and architectural finishing delivered across Qatar.
          </p>
        </div>

        {/* Filters (Horizontally scrollable on mobile, flex-wrap on desktop) */}
        <div className="flex overflow-x-auto pb-3 sm:pb-0 sm:flex-wrap justify-start sm:justify-center gap-2 mb-6 sm:mb-8 no-scrollbar">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeFilter === filter 
                  ? 'bg-nand-navy text-white shadow-md' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-nand-blue hover:text-nand-blue shadow-sm'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Full Uncropped Image Presentation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortfolio.map((item) => (
            <div 
              key={item.id} 
              className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-[#071B2D] aspect-[16/11] cursor-pointer border border-slate-200 flex flex-col justify-between" 
              onClick={() => openLightbox(item)}
            >
              {/* Blurred Ambient Image Backdrop */}
              <div 
                className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-30 scale-110 pointer-events-none"
                style={{ backgroundImage: `url(${item.src})` }}
              ></div>

              {/* Full Uncropped Foreground Image */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-3 sm:p-4">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg transition-transform duration-500 group-hover:scale-105 drop-shadow-xl"
                />
              </div>

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3 z-20">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#071B2D]/80 backdrop-blur-md text-white border border-white/20 shadow">
                  {item.category}
                </span>
              </div>

              {/* Hover Expand Icon */}
              <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-nand-orange text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <FiMaximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Caption Bar */}
              <div className="relative z-20 p-3 sm:p-4 bg-gradient-to-t from-[#071B2D]/95 via-[#071B2D]/80 to-transparent">
                <h3 className="text-white text-xs sm:text-sm font-bold font-heading truncate drop-shadow">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxOpen && currentImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full z-50"
              aria-label="Close Fullscreen"
            >
              <FiX className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            
            <div 
              className="max-w-5xl w-full max-h-[90vh] relative flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={currentImage.src} 
                alt={currentImage.alt} 
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-xl shadow-2xl border border-white/10"
              />
              <div className="mt-4 text-center">
                <span className="text-white font-bold tracking-wider text-xs sm:text-sm bg-nand-orange px-4 py-1.5 rounded-full inline-block shadow-lg">
                  {currentImage.category} • {currentImage.title}
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
