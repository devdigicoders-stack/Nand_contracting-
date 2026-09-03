import React from 'react';

const VisionSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-nand-navy text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nand-blue/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-nand-orange/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-center text-center">
        
        <div className="max-w-4xl">
          <span className="badge-premium mx-auto mb-6">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-current opacity-80"></span>
            Our Vision
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-heading font-semibold text-white mb-8 leading-[1.15]">
            Building a Trusted Service <br className="hidden md:block"/> Organization in Qatar
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
            To establish Nand Contracting and Hospitality Services as a trusted and professionally recognized service partner in Qatar for manpower solutions, contracting, property maintenance, technical services, renovation, fit-out and hospitality support.
          </p>
        </div>

      </div>
    </section>
  );
};

export default VisionSection;
