import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const WhyNand = () => {
  const reasons = [
    { title: 'One Service Partner for Multiple Requirements', desc: 'Our integrated service portfolio allows clients to coordinate multiple property, maintenance, construction and hospitality requirements through one professional service provider.' },
    { title: 'Comprehensive Service Capability', desc: 'From civil works and painting to HVAC, electrical, plumbing, gypsum, renovation and property support, our service scope covers a broad range of requirements.' },
    { title: 'Client-Focused Execution', desc: 'We focus on understanding the actual requirement before recommending the appropriate solution.' },
    { title: 'Responsive Support', desc: 'Maintenance issues can affect business operations and property performance. Our approach prioritizes timely communication and responsive service.' },
    { title: 'Quality-Oriented Work', desc: 'We place strong emphasis on workmanship, finishing quality and adherence to the agreed scope.' },
    { title: 'Flexible Service Solutions', desc: 'Our services can be structured for individual assignments, recurring maintenance requirements, renovation projects, subcontracting packages and ongoing property support.' },
    { title: 'Professional Coordination', desc: 'We aim to maintain clear coordination between clients, site requirements, service teams and project activities.' },
    { title: 'Qatar-Focused Operations', desc: 'Based in Doha, our services are designed around the requirements of residential, commercial, hospitality and property-sector clients in Qatar.' }
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* LEFT: Image & Stats (5 cols) */}
          <div className="order-2 lg:order-1 lg:col-span-5 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 lg:sticky lg:top-24 group">
            <img 
              src="/NAND_Website_Image_Collection/services/technical-maintenance-electrical.jpg" 
              alt="Why Choose NAND Technical Maintenance" 
              className="w-full h-full object-cover aspect-[4/3] lg:aspect-[3/4] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nand-navy/90 via-nand-navy/30 to-transparent"></div>
            
            {/* Overlay Banner */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-nand-orange text-white text-[11px] font-black uppercase tracking-wider mb-2 font-heading">
                Operational Excellence
              </div>
              <h4 className="font-heading font-bold text-lg text-gray-200 sm:text-xl leading-snug">
                Built for Reliable, Responsive Service Delivery
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Single-point coordination for residential, commercial & hospitality assets in Qatar.
              </p>
            </div>
          </div>

          {/* RIGHT: Feature Content (7 cols) */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nand-orange/10 border border-nand-orange/20 text-nand-orange text-xs font-bold uppercase tracking-wider mb-3">
              Why NAND
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight text-nand-navy mb-4 leading-tight">
              Why Choose Us as Your Service Partner?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
              We combine multi-disciplinary contracting skills, licensed technicians and responsive customer care into one cohesive operational partner.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {reasons.map((reason, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-100 hover:border-nand-blue/30 transition-all duration-300 group"
                >
                  <BsCheckCircleFill className="w-4 h-4 text-nand-blue group-hover:text-nand-orange transition-colors mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-xs sm:text-sm font-heading font-bold text-nand-navy group-hover:text-nand-blue transition-colors mb-0.5 leading-snug">
                      {reason.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyNand;
