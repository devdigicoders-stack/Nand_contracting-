import React, { useState } from 'react';
import { FiArrowUpRight, FiFilter } from 'react-icons/fi';
import { projects } from '../../data/projects';

const ProjectGrid = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    'Civil Works',
    'Facility Maintenance',
    'Technical Services',
    'Renovation',
    'Fit-Out',
    'Painting',
    'Gypsum & Ceiling',
    'Property Support',
    'Hospitality Support'
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="project-gallery" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        
        {/* Gallery Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nand-navy mb-4">
            Explore Our Work
          </h2>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex items-center justify-start md:justify-center mb-4 text-slate-500 font-medium">
            <FiFilter className="mr-2 w-4 h-4" />
            <span className="text-sm uppercase tracking-wider">Filter by Category</span>
          </div>
          
          {/* Scrollable container for mobile */}
          <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap md:justify-center gap-2 custom-scrollbar">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === cat 
                    ? 'bg-nand-blue text-white shadow-md' 
                    : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-blue-50 hover:text-nand-blue hover:border-blue-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer">
                
                {/* Image */}
                <div className="w-full aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle dark overlay on hover */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-nand-navy text-xs font-bold uppercase tracking-wider rounded shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-nand-navy mb-3 group-hover:text-nand-blue transition-colors">
                    {project.title}
                  </h3>
                  
                  {project.description && (
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>
                  )}
                  
                  <div className="flex items-center text-sm font-semibold text-nand-orange mt-auto pt-4 border-t border-slate-100">
                    View Project <FiArrowUpRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-nand-navy mb-3">Project Gallery Coming Soon</h3>
            <p className="text-slate-600 max-w-lg mx-auto mb-8">
              We are currently updating our portfolio with selected project imagery to showcase our contracting and maintenance capabilities in this category.
            </p>
            <button 
              onClick={() => {
                const inquiry = document.getElementById('project-inquiry');
                if (inquiry) inquiry.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-white border border-slate-300 text-nand-navy font-semibold rounded-md hover:border-nand-blue hover:text-nand-blue transition-colors"
            >
              Discuss Your Requirement
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectGrid;
