import React from 'react';
import { BsCheck2 } from 'react-icons/bs';

const ServiceDetails = () => {
  const servicesData = [
    {
      num: '01',
      title: 'Manpower Outsourcing & Staffing',
      desc: 'Skilled workforce and general labor supply tailored to your operational needs. We provide flexible manpower solutions that support a wide range of industries including construction, facility management, logistics, and hospitality.',
      subtext: 'Our objective is to deliver reliable and qualified personnel that integrate seamlessly into your projects and daily operations, ensuring efficiency and operational continuity.',
      list: [
        'Construction Labour Supply', 'Hospitality & Event Staffing', 'Facility Support Personnel', 
        'Drivers & Logistics Staff', 'Warehouse Operatives', 'Temporary & Contract Staff', 
        'Skilled Technicians', 'General Helpers & Cleaners'
      ]
    },
    {
      num: '02',
      title: 'Facility and Building Maintenance',
      desc: 'Effective maintenance protects property value, improves functionality and helps minimize unexpected disruptions. Our facility and building maintenance services are designed to support residential, commercial and property-sector requirements.',
      subtext: 'We can support clients with planned maintenance programs as well as responsive corrective works. Our objective is to identify maintenance requirements early, address issues efficiently and help properties remain functional and well maintained.',
      list: [
        'Building Maintenance', 'Villa & Apartment Maintenance', 'Commercial Property Maintenance', 
        'Preventive Maintenance', 'Corrective Maintenance', 'Emergency Maintenance', 
        'Annual Maintenance Contracts (AMC)', 'General Property Maintenance'
      ]
    },
    {
      num: '03',
      title: 'Civil & Construction Works',
      desc: 'We provide civil and construction support for residential, commercial and property improvement requirements. From structural and masonry-related works to finishing and restoration requirements, we focus on practical execution and professional site coordination.',
      subtext: 'Our services can also support contractors and property stakeholders requiring specialized subcontracting packages.',
      list: [
        'Residential Building Construction', 'Civil Works', 'Brickwork & Blockwork', 
        'Plastering Works', 'Tile Installation', 'Renovation Works', 
        'Repair & Restoration', 'Construction Finishing Works'
      ]
    },
    {
      num: '04',
      title: 'Technical Maintenance Services',
      desc: 'Reliable technical systems are essential to the operation of every modern property. Our technical maintenance services support essential building systems and day-to-day operational requirements.',
      subtext: 'We provide coordinated technical maintenance support designed to help property owners and facility operators maintain operational continuity.',
      list: [
        'HVAC Maintenance', 'Air Conditioning Maintenance', 'AC Breakdown Support', 'Preventive HVAC Services',
        'Electrical Maintenance', 'Lighting Maintenance', 'Electrical Repair Support', 'Preventive Electrical Services',
        'Plumbing Maintenance', 'Water System Maintenance', 'Water Leakage Repairs', 'General Plumbing Support'
      ]
    },
    {
      num: '05',
      title: 'Renovation & Fit-Out Solutions',
      desc: 'Property requirements change over time. Renovation and fit-out works provide an opportunity to improve functionality, appearance and usability. Our renovation and fit-out capability can cover multiple stages of a project, allowing clients to coordinate civil, painting, gypsum, ceiling, flooring and finishing requirements through an integrated service approach.',
      subtext: '',
      list: [
        'Villa Renovation', 'Apartment Renovation', 'Office Renovation', 
        'Shop & Commercial Renovation', 'Interior Fit-Out', 'Partition Works', 
        'Ceiling & Flooring Works', 'Complete Finishing Packages'
      ]
    },
    {
      num: '06',
      title: 'Hospitality & Property Support',
      desc: 'Hospitality environments require consistency, responsiveness and attention to operational details. We provide support services designed for hotels, restaurants, events and hospitality facilities. We also support property owners and operators with ongoing property-care requirements.',
      subtext: 'Our goal is to help clients maintain properties that are functional, presentable and operationally ready.',
      list: [
        'Hotel Support Services', 'Restaurant Support Services', 'Hospitality Operations Support', 'Event Hospitality Support',
        'Guest Service Support', 'Hospitality Facility Support', 'Common Area Maintenance', 'Property Inspection',
        'Preventive Property Care', 'Minor Repair Works', 'Building Maintenance Support', 'Facility Support Services'
      ]
    },
    {
      num: '07',
      title: 'Painting, Decoration & Gypsum',
      desc: 'A professionally finished property creates a stronger visual impression while protecting surfaces and improving the overall environment. We provide gypsum and ceiling solutions for residential, commercial and hospitality environments.',
      subtext: 'Our solutions can be adapted to functional requirements as well as contemporary interior finishing concepts.',
      list: [
        'Interior Painting', 'Exterior Painting', 'Wall Painting', 'Decorative Painting',
        'Texture & Feature Walls', 'Repainting Works', 'Surface Preparation', 'Decorative Finishing',
        'Gypsum Board Works', 'Gypsum Partitions', 'False Ceiling Installation', 'Decorative Gypsum Works',
        'Wall Partitions', 'Ceiling Repair & Renovation', 'Custom Gypsum Designs'
      ]
    },
    {
      num: '08',
      title: 'Emergency & Subcontracting Services',
      desc: 'Property emergencies require a responsive approach and practical coordination. We understand that maintenance emergencies can interrupt business and daily operations. Our focus is to respond efficiently, assess the requirement and coordinate the appropriate repair solution.',
      subtext: 'We also provide contracting and subcontracting support for organizations requiring additional project resources or specialized work packages. Our flexible approach allows services to be structured according to project scope and client requirements.',
      list: [
        '24/7 Emergency Maintenance Support', 'Plumbing Emergencies', 'Electrical Emergencies', 'AC & HVAC Breakdowns',
        'Water Leakage Repairs', 'General Emergency Repairs', 'Construction Subcontracting', 'Finishing Works Subcontracting',
        'Painting & Decoration Packages', 'Civil Works Subcontracting', 'Maintenance Subcontracting', 'Gypsum & Ceiling Packages'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-nand-light">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 space-y-16 lg:space-y-24">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-start ${isEven ? '' : 'lg:flex-row-reverse'}`}>
              
              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center mb-6">
                  <span className="text-nand-blue font-bold text-4xl mr-4 opacity-30 font-heading">SERVICE {service.num}</span>
                  <div className="w-12 h-0.5 bg-nand-orange"></div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-nand-navy mb-6">
                  {service.title}
                </h2>
                
                <div className="prose prose-lg text-nand-muted mb-8">
                  <p className="mb-4">{service.desc}</p>
                  {service.subtext && <p>{service.subtext}</p>}
                </div>
              </div>

              {/* List Card */}
              <div className="w-full lg:w-1/2">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-nand-orange/5 rounded-bl-full -z-0"></div>
                  
                  <h3 className="text-xl font-bold font-heading text-nand-navy mb-6 relative z-10 border-b border-gray-100 pb-4">
                    Our Services Include
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 relative z-10">
                    {service.list.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-nand-blue/10 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                          <BsCheck2 className="w-4 h-4 text-nand-blue" />
                        </div>
                        <span className="text-sm font-medium text-nand-dark leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceDetails;
