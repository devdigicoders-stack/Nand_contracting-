import React from 'react';
import { FiPhoneCall, FiMail, FiGlobe, FiArrowUpRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { contactInfo } from '../../data/contactInfo';

const ContactCards = () => {
  const cards = [
    {
      title: 'Call Us',
      value: contactInfo.phone,
      icon: <FiPhoneCall className="w-6 h-6" />,
      action: `tel:${contactInfo.phone}`,
      isExternal: false
    },
    {
      title: 'WhatsApp',
      value: contactInfo.whatsapp,
      icon: <FaWhatsapp className="w-6 h-6" />,
      action: `https://wa.me/974${contactInfo.whatsapp}`,
      isExternal: true
    },
    {
      title: 'Email Us',
      value: contactInfo.email,
      icon: <FiMail className="w-6 h-6" />,
      action: `mailto:${contactInfo.email}`,
      isExternal: false
    },
    {
      title: 'Website',
      value: contactInfo.website,
      icon: <FiGlobe className="w-6 h-6" />,
      action: `https://${contactInfo.website}`,
      isExternal: true
    }
  ];

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <a 
              key={index}
              href={card.action}
              target={card.isExternal ? '_blank' : '_self'}
              rel={card.isExternal ? 'noopener noreferrer' : ''}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-nand-blue hover:-translate-y-1 transition-all duration-300 group flex items-start"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 text-nand-blue flex items-center justify-center flex-shrink-0 group-hover:bg-nand-blue group-hover:text-white transition-colors">
                {card.icon}
              </div>
              <div className="ml-4 flex-grow">
                <span className="block text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  {card.title}
                </span>
                <span className="block text-lg font-bold text-nand-navy">
                  {card.value}
                </span>
              </div>
              <FiArrowUpRight className="text-slate-300 group-hover:text-nand-orange transition-colors w-5 h-5 flex-shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
