import React from 'react';

const ProjectsIntro = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
            Project Showcase
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-nand-navy mb-8">
            A Visual Look at <br className="hidden sm:block"/> Our Service Capabilities
          </h2>
          
          <div className="text-base lg:text-lg leading-7 text-slate-600 space-y-5 max-w-3xl mx-auto">
            <p>
              NAND supports a broad range of residential, commercial, hospitality and property-sector requirements through contracting, maintenance, technical, renovation and workforce capabilities.
            </p>
            <p>
              Our integrated service portfolio allows clients to coordinate multiple property, maintenance, construction and hospitality requirements through one professional service provider.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsIntro;
