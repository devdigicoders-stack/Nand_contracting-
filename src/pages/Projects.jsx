import React, { useEffect } from 'react';
import ProjectsHero from '../components/projects/ProjectsHero';
import ProjectsIntro from '../components/projects/ProjectsIntro';
import FeaturedProjects from '../components/projects/FeaturedProjects';
import ProjectGrid from '../components/projects/ProjectGrid';
import BeforeAfterSection from '../components/projects/BeforeAfterSection';
import CapabilityShowcase from '../components/projects/CapabilityShowcase';
import ProjectProcess from '../components/projects/ProjectProcess';
import ProjectsWhyNand from '../components/projects/ProjectsWhyNand';
import ProjectsCTA from '../components/projects/ProjectsCTA';

const Projects = () => {
  useEffect(() => {
    document.title = "Projects & Work Gallery | NAND Contracting Qatar";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = "Explore the service capabilities and project gallery of NAND Contracting & Hospitality Services across maintenance, civil works, renovation, fit-out, technical services and property support in Qatar.";
    }
  }, []);

  return (
    <div className="bg-white">
      <ProjectsHero />
      <ProjectsIntro />
      <FeaturedProjects />
      <ProjectGrid />
      <BeforeAfterSection />
      <CapabilityShowcase />
      <ProjectProcess />
      <ProjectsWhyNand />
      <ProjectsCTA />
    </div>
  );
};

export default Projects;
