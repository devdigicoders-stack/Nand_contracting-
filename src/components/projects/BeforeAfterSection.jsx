import React, { useState, useRef, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { projects } from '../../data/projects';

// A single Before/After slider component
const BeforeAfterSlider = ({ beforeImg, afterImg }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', () => setIsDragging(false));
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', () => setIsDragging(false));
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', () => setIsDragging(false));
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', () => setIsDragging(false));
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', () => setIsDragging(false));
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', () => setIsDragging(false));
    };
  }, [isDragging]);

  return (
    <div 
      className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-2xl select-none cursor-ew-resize border border-slate-200 shadow-xl"
      ref={containerRef}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* Background Image (After) */}
      <img 
        src={afterImg} 
        alt="After Transformation" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      
      {/* Foreground Image (Before) with Clip Path */}
      <img 
        src={beforeImg} 
        alt="Before Transformation" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      />
      
      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-[0_0_15px_rgba(0,0,0,0.3)] flex items-center justify-center text-nand-navy">
          <FiArrowLeft className="w-4 h-4 -mr-1" />
          <FiArrowRight className="w-4 h-4 -ml-1" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <span className="bg-slate-900/60 backdrop-blur-sm text-white px-3 py-1 text-sm font-bold tracking-wider uppercase rounded shadow-sm">
          Before
        </span>
      </div>
      <div className="absolute top-4 right-4 pointer-events-none">
        <span className="bg-slate-900/60 backdrop-blur-sm text-white px-3 py-1 text-sm font-bold tracking-wider uppercase rounded shadow-sm">
          After
        </span>
      </div>
    </div>
  );
};

const BeforeAfterSection = () => {
  // Find projects that have both before and after images
  const beforeAfterProjects = projects.filter(p => p.beforeImage && p.afterImage);

  // Don't render section if no data
  if (beforeAfterProjects.length === 0) return null;

  // For this example, we'll just display the first one found
  const project = beforeAfterProjects[0];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
            Transformation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nand-navy mb-6">
            Before & After
          </h2>
          <p className="text-base lg:text-lg leading-7 text-slate-600">
            See how renovation, repair and finishing requirements can transform the functionality and appearance of a property.
          </p>
        </div>

        {/* Slider Component */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="mb-6 text-center">
            <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
            <span className="text-sm text-nand-orange font-semibold uppercase tracking-wider">{project.category}</span>
          </div>
          <BeforeAfterSlider 
            beforeImg={project.beforeImage} 
            afterImg={project.afterImage} 
          />
          <p className="text-center text-sm text-slate-500 mt-4 italic">
            Drag the slider left or right to compare before and after.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BeforeAfterSection;
