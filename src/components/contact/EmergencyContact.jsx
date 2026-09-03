import React from 'react';
import { FiPhoneCall, FiAlertCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { contactInfo } from '../../data/contactInfo';

const EmergencyContact = () => {
  return (
    <section className="bg-nand-orange relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-nand-navy/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          <div className="flex items-start lg:items-center max-w-2xl">
            <div className="w-14 h-14 rounded-full bg-white/20 text-white flex items-center justify-center flex-shrink-0 mr-6">
              <FiAlertCircle className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
                Need Urgent Maintenance Support?
              </h2>
              <p className="text-orange-50 font-medium">
                NAND provides emergency maintenance support for plumbing, electrical, HVAC/AC breakdowns, water leakage and general emergency repairs.
              </p>
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-3 flex-shrink-0">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-nand-navy text-white font-bold rounded-md hover:bg-slate-800 transition-colors shadow-lg"
            >
              <FiPhoneCall className="mr-2 w-5 h-5" />
              Call for Support
            </a>
            <a 
              href={`https://wa.me/974${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-white text-nand-navy font-bold rounded-md hover:bg-slate-100 transition-colors shadow-lg"
            >
              <FaWhatsapp className="mr-2 w-5 h-5 text-[#25D366]" />
              WhatsApp Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EmergencyContact;
