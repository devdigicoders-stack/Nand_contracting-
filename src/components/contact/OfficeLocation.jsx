import React from 'react';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { FiNavigation } from 'react-icons/fi';
import { contactInfo } from '../../data/contactInfo';

const OfficeLocation = () => {
  const { floor, office, room, building, road, landmark, city, country } = contactInfo.address;
  const fullAddress = `${floor}, ${office}, ${room}, ${building}, ${road}, ${landmark}, ${city} - ${country}`;

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Office Details */}
          <div>
            <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
              Our Office
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nand-navy mb-8">
              Visit NAND in Doha
            </h2>
            
            <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm mb-8 flex items-start">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-nand-blue flex items-center justify-center flex-shrink-0 mr-5">
                <HiOutlineMapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-nand-navy mb-2">Corporate Office</h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {floor}, {office},<br />
                  {room}, {building},<br />
                  {road},<br />
                  {landmark},<br />
                  {city} - {country}
                </p>
              </div>
            </div>

            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-nand-navy text-white font-semibold rounded-md hover:bg-slate-800 transition-colors shadow-md flex-1 sm:flex-none"
            >
              <FiNavigation className="mr-2 w-5 h-5" />
              Get Directions
            </a>
          </div>

          {/* RIGHT: Map Placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-[400px] md:h-[500px] bg-slate-100 flex flex-col items-center justify-center group">
            {/* Background pattern to simulate map texture */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xl max-w-sm">
              <div className="w-16 h-16 rounded-full bg-nand-blue text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                <HiOutlineMapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-nand-navy mb-2">NAND Office</h3>
              <p className="text-slate-500 font-medium mb-6">
                B-Ring Road, Doha
              </p>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-nand-orange text-white text-sm font-bold rounded hover:bg-[#e66d00] transition-colors"
              >
                Open in Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;
