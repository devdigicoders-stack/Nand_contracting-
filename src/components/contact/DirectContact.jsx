import React from 'react';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { contactInfo } from '../../data/contactInfo';

const DirectContact = () => {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-nand-navy">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 xl:col-span-7">
            <span className="badge-premium mb-3 sm:mb-4 text-[10px] sm:text-xs">
              <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-current opacity-80"></span>
              Prefer Direct Contact?
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-3 sm:mb-4 leading-tight">
              Speak Directly <br className="hidden sm:block"/> with the NAND Team
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base max-w-xl">
              For quick discussions regarding contracting, maintenance, renovation or workforce requirements, reach out to our dedicated support channels in Doha.
            </p>
          </div>

          <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-3.5 w-full">
            {/* 3 stacked cards with uniform height and width */}
            <a 
              href={`tel:${contactInfo.phone}`}
              className="flex items-center p-4 sm:p-4.5 bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 hover:border-nand-orange/50 text-white rounded-xl shadow-md transition-all duration-300 group relative overflow-hidden backdrop-blur-md hover:-translate-y-0.5"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-nand-orange"></div>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-nand-orange/20 to-nand-orange/10 border border-nand-orange/30 text-nand-orange flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-nand-orange group-hover:text-white transition-all flex-shrink-0">
                <FiPhoneCall className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-[11px] uppercase tracking-wider text-slate-300 font-semibold mb-0.5">Call NAND Direct</span>
                <span className="block font-heading font-bold text-base sm:text-lg text-white group-hover:text-nand-orange transition-colors">{contactInfo.phone}</span>
              </div>
            </a>

            <a 
              href={`https://wa.me/974${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 sm:p-4.5 bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 hover:border-[#25D366]/50 text-white rounded-xl shadow-md transition-all duration-300 group relative overflow-hidden backdrop-blur-md hover:-translate-y-0.5"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#25D366]"></div>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#25D366]/20 to-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-white transition-all flex-shrink-0">
                <FaWhatsapp className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-[11px] uppercase tracking-wider text-slate-300 font-semibold mb-0.5">WhatsApp Chat</span>
                <span className="block font-heading font-bold text-base sm:text-lg text-white group-hover:text-[#25D366] transition-colors">{contactInfo.whatsapp}</span>
              </div>
            </a>

            <a 
              href={`mailto:${contactInfo.email}`}
              className="flex items-center p-4 sm:p-4.5 bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 hover:border-nand-blue/50 text-white rounded-xl shadow-md transition-all duration-300 group relative overflow-hidden backdrop-blur-md hover:-translate-y-0.5"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-nand-blue"></div>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-nand-blue/20 to-nand-blue/10 border border-nand-blue/30 text-[#56CCF2] flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-nand-blue group-hover:text-white transition-all flex-shrink-0">
                <FiMail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-[11px] uppercase tracking-wider text-slate-300 font-semibold mb-0.5">Official Email</span>
                <span className="block font-heading font-bold text-base sm:text-lg text-white group-hover:text-[#56CCF2] transition-colors truncate">{contactInfo.email}</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DirectContact;
