import React, { useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa6';
import InquiryTypeSelector from './InquiryTypeSelector';
import ContactForm from './ContactForm';
import { contactInfo } from '../../data/contactInfo';

const InquiryWrapper = () => {
  const [inquiryType, setInquiryType] = useState('general');

  const checklist = [
    'Contracting & Maintenance',
    'Renovation & Fit-Out',
    'Manpower Outsourcing',
    'Hospitality Support',
    'Property Support',
    'Emergency Maintenance'
  ];

  return (
    <section id="inquiry-section" className="py-16 md:py-20 lg:py-24 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* LEFT: Intro */}
          <div className="lg:col-span-4 lg:pr-8">
            <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nand-navy mb-6">
              Tell Us What <br className="hidden lg:block"/> You Need Support With
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Whether you require maintenance support, civil works, renovation, fit-out, technical services, hospitality support or outsourced manpower, share your requirement with NAND and our team can review the scope and next steps.
            </p>
            
            <ul className="space-y-4 mb-10">
              {checklist.map((item, index) => (
                <li key={index} className="flex items-center text-slate-700 font-medium">
                  <BsCheckCircleFill className="w-5 h-5 text-nand-blue mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-blue-50 border border-blue-100 p-5 rounded-xl">
              <h4 className="font-bold text-nand-navy mb-2">Need quick communication?</h4>
              <p className="text-sm text-slate-600 mb-4">Chat directly with our support team.</p>
              <a 
                href={`https://wa.me/974${contactInfo.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#25D366] text-white font-bold rounded hover:bg-[#20bd5a] transition-colors shadow-sm text-sm"
              >
                <FaWhatsapp className="mr-2 w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT: Form Area */}
          <div className="lg:col-span-8 bg-white lg:shadow-[0_0_40px_rgba(0,0,0,0.05)] lg:border lg:border-slate-100 rounded-2xl lg:p-8">
            <InquiryTypeSelector inquiryType={inquiryType} setInquiryType={setInquiryType} />
            <div className="border-t border-slate-100 pt-8 mt-2">
              <ContactForm inquiryType={inquiryType} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InquiryWrapper;
