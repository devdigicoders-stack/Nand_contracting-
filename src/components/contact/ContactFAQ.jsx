import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const faqs = [
    {
      question: 'What services can I contact NAND for?',
      answer: 'NAND can be contacted for contracting, facility and building maintenance, technical services, civil works, renovation and fit-out, painting and gypsum works, hospitality support, property support, emergency maintenance and manpower outsourcing.'
    },
    {
      question: 'Can I request manpower through the website?',
      answer: 'Yes. Use the Manpower inquiry option and provide the required workforce category, number of workers, location and requirement details.'
    },
    {
      question: 'Can I contact NAND for urgent maintenance?',
      answer: "Yes. NAND's profile includes emergency maintenance support for plumbing, electrical, AC/HVAC breakdowns, water leakage and general emergency repairs."
    },
    {
      question: 'Where is NAND located?',
      answer: 'NAND is located at Central Complex, B-Ring Road, near Doha Municipality Office, Doha, Qatar.'
    },
    {
      question: 'Can businesses discuss multiple services in one inquiry?',
      answer: "Yes. NAND's integrated service capability covers multiple contracting, maintenance, property, hospitality and workforce requirements."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        <div className="text-center mb-5 sm:mb-7">
          <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
            Quick Information
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-nand-navy">
            Before You Contact Us
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-lg transition-colors duration-300 ${isOpen ? 'border-nand-blue bg-blue-50/50' : 'border-slate-200 bg-white hover:border-nand-blue/50'}`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-bold pr-8 ${isOpen ? 'text-nand-blue' : 'text-nand-navy'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-nand-blue text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? <FiMinus className="w-4 h-4" /> : <FiPlus className="w-4 h-4" />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed pt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ContactFAQ;
