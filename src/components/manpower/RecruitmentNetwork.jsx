import React from 'react';
import { HiOutlineGlobeAlt, HiOutlineDocumentCheck, HiOutlineMapPin } from 'react-icons/hi2';
import { FiSearch } from 'react-icons/fi';

const RecruitmentNetwork = () => {
  const points = [
    { title: 'Trusted Recruitment Network', icon: <HiOutlineGlobeAlt className="w-6 h-6" /> },
    { title: 'Preliminary Screening', icon: <FiSearch className="w-6 h-6" /> },
    { title: 'Skill-Based Shortlisting', icon: <HiOutlineDocumentCheck className="w-6 h-6" /> },
    { title: 'Qatar Requirement Alignment', icon: <HiOutlineMapPin className="w-6 h-6" /> },
  ];

  return (
    <section className="py-10 md:py-12 lg:py-16 bg-slate-50">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Stylized map/global graphic */}
          <div className="order-2 lg:order-1 relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden bg-nand-navy">
            {/* Using a premium global network / map abstract image */}
            <img 
              src="/NAND_Website_Image_Collection/hospitality/hospitality-property-lobby.png" 
              alt="Global Recruitment Network" 
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nand-navy/90 to-transparent flex items-end p-8">
              <p className="text-white font-semibold text-lg max-w-sm leading-relaxed border-l-4 border-nand-orange pl-4">
                Sourcing partnerships based on established relationships with licensed agencies.
              </p>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
              Workforce Sourcing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nand-navy mb-6 leading-tight">
              Connecting <br className="hidden lg:block"/> The Globe
            </h2>
            
            <div className="text-base lg:text-lg leading-7 text-slate-600 mb-8 space-y-5">
              <p>
                Nand Contracting and Hospitality Services maintains an established recruitment network across countries recognized for strong labor pools in construction, hospitality, logistics, warehousing, facility support and general operations. Our sourcing partnerships are built on long-term relationships with licensed agencies, enabling consistent quality control and faster turnaround on client requirements.
              </p>
              <p>
                Each sourcing country is selected based on documented skill availability, trade certifications, cultural adaptability to Qatar's working environment, and workforce requirements. Our overseas recruitment teams conduct preliminary screening before candidates are shortlisted, ensuring only qualified profiles reach the final selection stage.
              </p>
              <p>
                We support clients with manpower outsourcing and workforce solutions, helping them source suitable personnel according to operational requirements, project demands and workforce timelines.
              </p>
            </div>

            <div className="border-l-4 border-nand-blue pl-6 py-2 mb-10">
              <p className="text-lg font-bold italic text-nand-navy">
                "A strong workforce begins long before the worker arrives - it begins with disciplined sourcing."
              </p>
            </div>

            {/* 4 Process Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-nand-blue flex items-center justify-center flex-shrink-0">
                    {point.icon}
                  </div>
                  <span className="font-semibold text-slate-800 leading-snug">
                    {point.title}
                  </span>
                </div>
              ))}
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecruitmentNetwork;
