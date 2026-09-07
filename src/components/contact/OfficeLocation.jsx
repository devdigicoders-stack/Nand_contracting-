import React from 'react';
import { HiOutlineMapPin, HiOutlineClock, HiOutlinePhone } from 'react-icons/hi2';
import { FiNavigation, FiExternalLink } from 'react-icons/fi';
import { contactInfo } from '../../data/contactInfo';

const OfficeLocation = () => {
  const { floor, office, room, building, road, landmark, city, country } = contactInfo.address;
  const fullAddress = `${floor}, ${office}, ${building}, ${road}, ${city} - ${country}`;
  const mapsSearchQuery = encodeURIComponent(`${building}, ${road}, ${city}, ${country}`);
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${mapsSearchQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const mapsDirectUrl = `https://www.google.com/maps/search/?api=1&query=${mapsSearchQuery}`;

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <span className="badge-premium mb-3 sm:mb-4 text-[10px] sm:text-xs">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-current opacity-80"></span>
            Our Office
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-nand-navy mb-3 leading-tight">
            Visit NAND Headquarters in Doha
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Centrally situated on B-Ring Road in Doha, providing rapid accessibility for client consultations, project coordination, and operational dispatch across Qatar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT: Office Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nand-orange/20 to-nand-orange/10 border border-nand-orange/30 text-nand-orange flex items-center justify-center shrink-0 shadow-sm">
                  <HiOutlineMapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-nand-orange">Corporate Office</span>
                  <h3 className="text-lg font-heading font-bold text-nand-navy mt-0.5 mb-2">
                    {building}
                  </h3>
                  <div className="text-slate-700 text-sm leading-relaxed space-y-1">
                    <p className="font-semibold text-slate-900">{floor}, {office} <span className="text-slate-400 font-normal">({room})</span></p>
                    <p>{road}</p>
                    <p className="text-slate-500 text-xs">{landmark}</p>
                    <p className="font-bold text-nand-navy">{city} - {country}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nand-blue/20 to-nand-blue/10 border border-nand-blue/30 text-nand-blue flex items-center justify-center shrink-0 shadow-sm">
                  <HiOutlineClock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-nand-blue">Working Hours</span>
                  <h3 className="text-lg font-heading font-bold text-nand-navy mt-0.5 mb-2">
                    Office Schedule
                  </h3>
                  <div className="text-slate-700 text-sm space-y-1.5">
                    <div className="flex justify-between gap-4">
                      <span className="text-slate-600">Saturday – Thursday:</span>
                      <span className="font-semibold text-slate-900">8:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-slate-600">Friday:</span>
                      <span className="font-semibold text-emerald-600">Emergency On-Call (24/7)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a 
                href={mapsDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 text-sm bg-nand-navy text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-md group flex-1"
              >
                <FiNavigation className="mr-2 w-4 h-4 text-nand-orange group-hover:translate-x-0.5 transition-transform" />
                Get Directions
              </a>
              <a 
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center justify-center px-5 py-3 text-sm bg-white text-nand-navy font-bold rounded-xl border border-slate-300 hover:border-nand-navy hover:bg-slate-50 transition-all shadow-sm flex-1"
              >
                <HiOutlinePhone className="mr-2 w-4 h-4 text-nand-blue" />
                Call Desk
              </a>
            </div>

          </div>

          {/* RIGHT: Embedded Google Map (7 cols) */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-lg border border-slate-300 min-h-[380px] lg:min-h-[440px] bg-slate-200">
            {/* Google Maps iframe embed */}
            <iframe
              title="NAND Contracting Doha Office Map"
              src={mapsEmbedUrl}
              className="w-full h-full min-h-[380px] lg:min-h-[440px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Floating Map Pin Badge */}
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-200 shadow-lg flex items-center gap-3 max-w-[90%]">
              <div className="w-8 h-8 rounded-lg bg-nand-orange text-white flex items-center justify-center shrink-0 shadow">
                <HiOutlineMapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-nand-navy truncate">Central Complex, B-Ring Road</div>
                <div className="text-[11px] text-slate-500 truncate">Office 405, 4th Floor • Doha, Qatar</div>
              </div>
              <a
                href={mapsDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Open in Google Maps"
                className="ml-auto p-1.5 text-slate-400 hover:text-nand-orange transition-colors"
              >
                <FiExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;
