import React from 'react';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { contactInfo } from '../../data/contactInfo';

const DirectContact = () => {
  return (
    <section className="py-16 bg-nand-navy">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="flex flex-row flex-wrap gap-3 lg:gap-6 lg:justify-end">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="flex items-center justify-center lg:justify-start px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg transition-all duration-300 group min-w-[200px]"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <FiPhoneCall className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-white/60 font-semibold mb-0.5">Call NAND</span>
                <span className="block font-bold text-lg">{contactInfo.phone}</span>
              </div>
            </a>

            <a 
              href={`https://wa.me/974${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center lg:justify-start px-6 py-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-white rounded-lg transition-all duration-300 group min-w-[200px]"
            >
              <div className="w-10 h-10 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <FaWhatsapp className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-white/60 font-semibold mb-0.5">WhatsApp</span>
                <span className="block font-bold text-lg">{contactInfo.whatsapp}</span>
              </div>
            </a>

            <a 
              href={`mailto:${contactInfo.email}`}
              className="flex items-center justify-center lg:justify-start px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg transition-all duration-300 group min-w-[200px]"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <FiMail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-white/60 font-semibold mb-0.5">Email</span>
                <span className="block font-bold text-base truncate max-w-[150px]">{contactInfo.email}</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DirectContact;
