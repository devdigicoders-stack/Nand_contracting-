import React from 'react';

const ContractingConstruction = () => {
  const services = [
    {
      title: "Residential Building Construction",
      image: "/NAND_Website_Image_Collection/services/contracting-division.jpg",
      imageClass: "object-center",
      items: [
        "Civil & Construction Works",
        "Brickwork & Blockwork",
        "Plastering Works",
        "Tile Installation",
        "Construction Finishing Works"
      ]
    },
    {
      title: "Renovation & Fit-Out",
      image: "/NAND_Website_Image_Collection/renovation/renovation-fitout-site.png",
      imageClass: "object-center",
      items: [
        "Villa Renovation",
        "Apartment Renovation",
        "Office & Commercial Renovation",
        "Interior Fit-Out",
        "Partition Works",
        "Ceiling & Flooring Works"
      ]
    },
    {
      title: "Painting & Decoration",
      image: "/NAND_Website_Image_Collection/services/painting-decoration-worker-02.png",
      imageClass: "object-top",
      items: [
        "Interior & Exterior Painting",
        "Decorative Painting",
        "Texture & Feature Walls"
      ]
    },
    {
      title: "Gypsum & False Ceiling Works",
      image: "/NAND_Website_Image_Collection/services/Gypsum & False Ceiling Works.png",
      imageClass: "object-center",
      items: [
        "Gypsum Board Works",
        "Gypsum Partitions",
        "False Ceiling Installation",
        "Decorative Gypsum Works"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-nand-navy mb-6">Contracting & Construction Services</h1>
          <p className="text-lg text-slate-600">
            Delivering excellence in every build. From residential construction to intricate gypsum works, we provide top-tier services tailored to your needs.
          </p>
        </div>

        {/* Services List with Alternating Layout */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {service.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm border border-slate-100 hover:border-nand-orange/30 hover:shadow-md transition-all"
                      >
                        <svg className="w-6 h-6 text-nand-orange shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContractingConstruction;
