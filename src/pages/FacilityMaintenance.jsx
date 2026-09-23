import React from 'react';

const FacilityMaintenance = () => {
  const services = [
    {
      title: "Facility & Building Maintenance",
      image: "/NAND_Website_Image_Collection/projects/Facility & Building Maintenance.png",
      imageClass: "object-center",
      items: [
        "Building Maintenance",
        "Villa & Apartment Maintenance",
        "Commercial Property Maintenance",
        "Preventive Maintenance",
        "Corrective Maintenance",
        "Emergency Maintenance",
        "Annual Maintenance Contracts (AMC)",
        "General Property Maintenance"
      ]
    },
    {
      title: "Technical Maintenance",
      image: "/NAND_Website_Image_Collection/projects/Technical Maintenance.png",
      imageClass: "object-center",
      subCategories: [
        {
          title: "HVAC & AC Maintenance",
          items: [
            "Air Conditioning Maintenance",
            "AC Breakdown Support",
            "Preventive HVAC Services"
          ]
        },
        {
          title: "Electrical Maintenance",
          items: [
            "Lighting Maintenance",
            "Electrical Repair Support",
            "Preventive Electrical Services"
          ]
        },
        {
          title: "Plumbing & Water Systems",
          items: [
            "Water System Maintenance",
            "Water Leakage Repairs",
            "General Plumbing Support"
          ]
        }
      ]
    },
    {
      title: "Property Support",
      image: "/NAND_Website_Image_Collection/projects/Property Support.png",
      imageClass: "object-center",
      items: [
        "Common Area Maintenance",
        "Property Inspection",
        "Preventive Property Care",
        "Minor Repair Works",
        "Building Maintenance Support",
        "Facility Support Services"
      ]
    },
    {
      title: "Emergency Support",
      image: "/NAND_Website_Image_Collection/projects/Emergency Support.png",
      imageClass: "object-center",
      items: [
        "24/7 Emergency Maintenance Support",
        "Plumbing Emergencies",
        "Electrical Emergencies",
        "AC/HVAC Breakdowns",
        "Water Leakage Repairs",
        "General Emergency Repairs"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-nand-navy mb-6">Facility & Technical Maintenance</h1>
          <p className="text-lg text-slate-600">
            Comprehensive maintenance solutions for your properties. From preventive care to 24/7 emergency support, we ensure your facilities run smoothly and efficiently.
          </p>
        </div>
        
        {/* Services List with Alternating Layout */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl bg-slate-100">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className={`w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105 ${service.imageClass || 'object-center'}`}
                    />
                    <div className="absolute inset-0 bg-nand-navy/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nand-orange/10 text-nand-orange font-semibold text-sm">
                    <span className="w-2 h-2 rounded-full bg-nand-orange"></span>
                    Service {index + 1}
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-nand-navy">
                    {service.title}
                  </h2>
                  
                  {service.subCategories ? (
                    <div className="space-y-5 mt-8">
                      {service.subCategories.map((sub, subIdx) => (
                        <div key={subIdx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-nand-orange/30 transition-all">
                          <div className="bg-slate-50/80 border-b border-slate-100 px-5 py-3.5">
                            <h3 className="font-bold text-nand-navy text-base">{sub.title}</h3>
                          </div>
                          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                            {sub.items.map((item, itemIdx) => (
                              <div key={itemIdx} className="flex items-start gap-2.5">
                                <svg className="w-5 h-5 text-nand-orange shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-slate-600 text-sm font-medium">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                      {service.items.map((item, itemIdx) => (
                        <div 
                          key={itemIdx} 
                          className="flex items-start gap-3 p-4 rounded-xl shadow-sm border bg-white border-slate-100 hover:border-nand-orange/30 hover:shadow-md transition-all"
                        >
                          <svg className="w-6 h-6 text-nand-orange shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-700 font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FacilityMaintenance;
