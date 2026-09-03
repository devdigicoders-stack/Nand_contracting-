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
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Image */}
          <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 lg:sticky lg:top-24">
            <div className="absolute inset-0 bg-nand-navy/10"></div>
            <img 
              src="/NAND_Website_Image_Collection/hero/doha-skyline.jpg" 
              alt="Why Choose Nand" 
              className="w-full h-full object-cover aspect-[4/3] md:aspect-square"
            />
            
            {/* Decorative block */}
            <div className="absolute bottom-0 right-0 bg-nand-orange p-6 md:p-8 w-2/3 md:w-1/2 rounded-tl-2xl">
              <p className="text-white font-bold text-lg leading-tight">
                Built for Reliable, Responsive Service Delivery
              </p>
            </div>
          </div>

          {/* RIGHT: Feature Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
              Why NAND
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nand-navy mb-8">
              Why Choose Us?
            </h2>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <BsCheckCircleFill className="w-5 h-5 text-nand-blue mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-nand-navy mb-1">{reason.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">{reason.desc}</p>
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
