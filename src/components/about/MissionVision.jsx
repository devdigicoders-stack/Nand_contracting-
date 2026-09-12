import React from 'react';
import { FiTarget, FiEye, FiCheckCircle } from 'react-icons/fi';

const MissionVision = () => {
  const commitments = [
    'Delivering quality-focused workmanship',
    'Understanding and responding to client requirements',
    'Providing reliable maintenance, technical and workforce support',
    'Maintaining professional communication throughout every assignment',
    'Supporting planned and emergency maintenance requirements',
    'Providing suitable manpower for operational requirements',
    'Promoting safe and responsible work practices',
    'Delivering practical solutions within agreed project requirements',
    'Building long-term professional relationships with clients and business partners'
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-nand-light">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          
          {/* Mission */}
          <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-blue-50 text-nand-blue rounded-full flex items-center justify-center mr-5">
                <FiTarget className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-nand-navy font-heading">Our Mission</h3>
            </div>
            <p className="text-nand-muted text-lg leading-relaxed">
              Our mission is to provide dependable contracting, maintenance, hospitality and manpower support services that help our clients maintain safe, functional, efficient and professionally managed properties, facilities and operations.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-nand-navy p-10 rounded-lg shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-white/10 text-nand-orange rounded-full flex items-center justify-center mr-5">
                <FiEye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-white font-heading">Our Vision</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              To establish Nand Contracting and Hospitality Services as a trusted and professionally recognized service partner in Qatar for Manpower Solutions, contracting, property maintenance, technical services, renovation, fit-out and hospitality support.
            </p>
            <div className="border-t border-white/20 pt-6">
              <p className="text-white font-medium italic">
                "Our vision is to create lasting value for every property, project and client we serve."
              </p>
            </div>
          </div>
          
        </div>

        {/* We are committed to */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <span className="text-nand-orange font-bold text-sm tracking-widest uppercase block mb-3">
              Our Standards
            </span>
            <h3 className="text-3xl font-extrabold text-nand-navy">
              We are committed to
            </h3>
          </div>
          
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {commitments.map((item, index) => (
                <div key={index} className="flex items-start">
                  <FiCheckCircle className="w-5 h-5 text-nand-orange mr-3 mt-1 flex-shrink-0" />
                  <span className="text-nand-dark font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Focus Graphic */}
        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden relative shadow-lg">
          <img src="/NAND_Website_Image_Collection/graphics/mission-growth-graphic.jpg" alt="Mission Growth" className="w-full object-cover max-h-[400px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-transparent flex items-center">
            <div className="px-8 md:px-12 max-w-lg">
              <p className="text-white text-xl md:text-2xl font-bold leading-relaxed">
                Our focus is simple: deliver the right solution, with the right level of professionalism, at the right time.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
