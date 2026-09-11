import React from 'react';

const ContractingConstruction = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <h1 className="text-4xl font-bold text-nand-navy mb-8">Contracting & Construction Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-nand-orange mb-4">Residential Building Construction</h2>
            <ul className="list-disc pl-5 space-y-2 text-nand-muted">
              <li>Civil & Construction Works</li>
              <li>Brickwork & Blockwork</li>
              <li>Plastering Works</li>
              <li>Tile Installation</li>
              <li>Construction Finishing Works</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-nand-orange mb-4">Renovation & Fit-Out</h2>
            <ul className="list-disc pl-5 space-y-2 text-nand-muted">
              <li>Villa Renovation</li>
              <li>Apartment Renovation</li>
              <li>Office & Commercial Renovation</li>
              <li>Interior Fit-Out</li>
              <li>Partition Works</li>
              <li>Ceiling & Flooring Works</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-nand-orange mb-4">Painting & Decoration</h2>
            <ul className="list-disc pl-5 space-y-2 text-nand-muted">
              <li>Interior & Exterior Painting</li>
              <li>Decorative Painting</li>
              <li>Texture & Feature Walls</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-nand-orange mb-4">Gypsum & False Ceiling Works</h2>
            <ul className="list-disc pl-5 space-y-2 text-nand-muted">
              <li>Gypsum Board Works</li>
              <li>Gypsum Partitions</li>
              <li>False Ceiling Installation</li>
              <li>Decorative Gypsum Works</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractingConstruction;
