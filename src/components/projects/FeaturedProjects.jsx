import React from 'react';
import { FiArrowUpRight, FiImage } from 'react-icons/fi';
import { projects } from '../../data/projects';

const FeaturedProjects = () => {
  // Get featured projects (limit to 3 for the asymmetric layout)
  const featured = projects.filter(p => p.featured).slice(0, 3);

  // If no featured projects, don't render section
  if (featured.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-nand-navy mb-4">
              Featured Work Showcase
            </h2>
            <p className="text-slate-600 text-lg">
              Selected visual examples representing NAND's service capability.
            </p>
          </div>
        </div>

        {/* 1 Large, 2 Small Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 lg:h-[600px]">
          
          {/* Large Image (First Featured Project) */}
          {featured[0] && (
            <div className="lg:col-span-2 group relative overflow-hidden rounded-2xl h-[400px] lg:h-full cursor-pointer bg-nand-navy">
              <img 
                src={featured[0].image} 
                alt={featured[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8">
                <span className="inline-block px-3 py-1 bg-nand-orange text-white text-xs font-bold uppercase tracking-wider rounded mb-3">
                  {featured[0].category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                  {featured[0].title}
                </h3>
                <div className="flex items-center text-white/80 font-medium text-sm group-hover:text-white mt-4">
                  <FiImage className="mr-2 w-4 h-4" />
                  View Showcase <FiArrowUpRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          )}

          {/* 2 Small Images Stacked */}
          <div className="lg:col-span-1 flex flex-col gap-4 lg:gap-6 h-full">
            
            {featured[1] && (
              <div className="group relative overflow-hidden rounded-2xl h-[300px] lg:h-[calc(50%-0.75rem)] cursor-pointer bg-nand-navy">
                <img 
                  src={featured[1].image} 
                  alt={featured[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded mb-2">
                    {featured[1].category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors">
                    {featured[1].title}
                  </h3>
                </div>
              </div>
            )}

            {featured[2] && (
              <div className="group relative overflow-hidden rounded-2xl h-[300px] lg:h-[calc(50%-0.75rem)] cursor-pointer bg-nand-navy">
                <img 
                  src={featured[2].image} 
                  alt={featured[2].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded mb-2">
                    {featured[2].category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors">
                    {featured[2].title}
                  </h3>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
