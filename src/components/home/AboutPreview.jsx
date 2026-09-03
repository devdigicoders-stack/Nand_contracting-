import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiCheck } from 'react-icons/fi';

const AboutPreview = () => {
  const highlights = [
    'Quality Focus',
    'Reliable Support',
    'Clear Communication',
    'Practical Solutions'
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Image Composition */}
          <div className="relative">
            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-nand-light rounded-tl-3xl -z-10"></div>
            
            <img 
              src="/NAND_Website_Image_Collection/hero/doha-skyline.jpg" 
              alt="Engineering Professional" 
              className="w-full rounded-md shadow-lg object-cover h-[400px] md:h-[500px]"
            />
            
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-white rounded-md shadow-xl overflow-hidden hidden md:block">
              <img 
                src="/NAND_Website_Image_Collection/hero/doha-skyline.jpg" 
                alt="Construction Site" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="lg:pl-8">
            <div className="flex items-center mb-4">
              <div className="w-1 h-6 bg-nand-orange mr-3"></div>
              <span className="text-nand-orange font-bold text-sm tracking-widest uppercase">
                About NAND
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-nand-navy mb-6">
              A Dependable Service Partner <br className="hidden md:block" />
              for Properties, Projects & Workforce
            </h2>
            
            <p className="text-nand-muted text-base md:text-lg mb-4 leading-relaxed">
              Nand Contracting and Hospitality Services is a Doha-based contracting and integrated services company providing professional solutions across facility maintenance, civil works, technical maintenance, renovation, fit-out, property support, hospitality services and outsourced manpower solutions.
            </p>
            
            <p className="text-nand-muted text-base md:text-lg mb-8 leading-relaxed">
              Our service capabilities are designed around quality, reliability, safety, timely execution and responsive communication, helping clients manage their properties, projects and workforce requirements through one dependable service partner.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center text-nand-navy font-semibold">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-nand-orange mr-3">
                    <FiCheck className="w-4 h-4" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
            
            <Link 
              to="/about" 
              className="inline-flex items-center text-nand-blue font-bold hover:text-nand-navy transition-colors group text-lg"
            >
              Discover Our Company
              <FiArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
