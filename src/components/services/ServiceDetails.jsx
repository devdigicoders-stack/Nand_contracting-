import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

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
    <section id="service-catalog" className="py-10 sm:py-12 lg:py-14 bg-slate-50/70 border-t border-slate-100 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nand-orange/10 border border-nand-orange/20 text-nand-orange text-xs font-bold uppercase tracking-wider mb-3">
            NAND Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight text-nand-navy mb-3 leading-tight">
            Comprehensive Capabilities for Qatar Assets
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore our 8 specialized operational divisions across civil contracting, technical facility care, fit-out renovation and certified workforce solutions.
          </p>
        </div>

        {/* Services Rows */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch ${isEven ? '' : 'lg:flex-row-reverse'} p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300`}
              >
                
                {/* Content Side (50%) */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-nand-orange/15 text-nand-orange text-xs font-black font-heading uppercase tracking-wider">
                      Division {service.num}
                    </span>
                    <div className="h-0.5 w-12 bg-nand-orange/30"></div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-nand-navy mb-3 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  {service.subtext && (
                    <p className="text-xs text-slate-500 leading-relaxed italic border-l-2 border-nand-blue pl-3 py-1 bg-blue-50/40 rounded-r-lg">
                      {service.subtext}
                    </p>
                  )}
                </div>

                {/* Scope Card Side (50%) */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-5 sm:p-6 relative overflow-hidden h-full flex flex-col justify-center">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/80">
                      <h4 className="text-xs sm:text-sm font-bold font-heading text-nand-navy uppercase tracking-wider">
                        Work Scope & Deliverables
                      </h4>
                      <span className="text-[11px] font-bold text-nand-orange bg-nand-orange/10 px-2 py-0.5 rounded">
                        {service.list.length} Items
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                      {service.list.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-100 text-slate-700 hover:border-nand-blue/30 transition-colors"
                        >
                          <BsCheckCircleFill className="w-3.5 h-3.5 text-nand-blue shrink-0" />
                          <span className="text-xs font-medium leading-tight truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServiceDetails;
