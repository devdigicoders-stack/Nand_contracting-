import React from 'react';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { contactInfo } from '../../data/contactInfo';

const DirectContact = () => {
  return (
    <section className="py-16 bg-nand-navy">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          
          <div className="lg:max-w-xl">
            <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
              Prefer Direct Contact?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Speak Directly <br className="hidden sm:block"/> with the NAND Team
            </h2>
            <p className="text-blue-100 leading-relaxed text-lg">
              For quick discussions regarding contracting, maintenance, renovation or workforce requirements, contact our team directly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap w-full lg:w-auto gap-4 lg:gap-6 mt-8 lg:mt-0 justify-start lg:justify-end">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="flex items-center p-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl shadow-lg transition-all duration-300 group w-full sm:w-auto lg:min-w-[220px] relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-nand-orange"></div>
              <div className="w-12 h-12 rounded-full bg-nand-orange/20 text-nand-orange flex items-center justify-center mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                <FiPhoneCall className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Call NAND</span>
                <span className="block font-bold text-lg">{contactInfo.phone}</span>
              </div>
            </a>

            <a 
              href={`https://wa.me/974${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl shadow-lg transition-all duration-300 group w-full sm:w-auto lg:min-w-[220px] relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#25D366]"></div>
              <div className="w-12 h-12 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                <FaWhatsapp className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">WhatsApp</span>
                <span className="block font-bold text-lg">{contactInfo.whatsapp}</span>
              </div>
            </a>

            <a 
              href={`mailto:${contactInfo.email}`}
              className="flex items-center p-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl shadow-lg transition-all duration-300 group w-full sm:w-auto lg:min-w-[220px] relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#4AA6FF]"></div>
              <div className="w-12 h-12 rounded-full bg-[#4AA6FF]/20 text-[#4AA6FF] flex items-center justify-center mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                <FiMail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Email</span>
                <span className="block font-bold text-base sm:text-lg truncate max-w-[150px] sm:max-w-[200px]">{contactInfo.email}</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DirectContact;
