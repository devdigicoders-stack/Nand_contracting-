import React from 'react';
import { FiSearch, FiCheckCircle } from 'react-icons/fi';
import { HiOutlineClipboardDocumentList, HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import { MdOutlineSupportAgent } from 'react-icons/md';

const ServiceProcess = () => {
  const processes = [
    {
      num: '01',
      title: 'Understand',
      desc: 'Identify client requirements, site conditions, scope and priorities.',
      icon: <FiSearch className="w-6 h-6" />
    },
    {
      num: '02',
      title: 'Plan',
      desc: 'Develop a practical work approach based on service requirements, resources and timeline.',
      icon: <HiOutlineClipboardDocumentList className="w-6 h-6" />
    },
    {
      num: '03',
      title: 'Execute',
      desc: 'Coordinate the required works with attention to workmanship, safety and site requirements.',
      icon: <HiOutlineWrenchScrewdriver className="w-6 h-6" />
    },
    {
      num: '04',
      title: 'Inspect',
      desc: 'Review work against the agreed scope and required finishing standards.',
      icon: <FiCheckCircle className="w-6 h-6" />
    },
    {
      num: '05',
      title: 'Support',
      desc: 'Maintain responsive communication and ongoing service support.',
      icon: <MdOutlineSupportAgent className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-nand-orange font-bold text-sm tracking-widest uppercase mb-3 block">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-nand-navy mb-6">
            A Clear Process from <br className="hidden sm:block" />
            Requirement to Support
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0"></div>

          <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-10 lg:gap-4">
            {processes.map((step, index) => (
              <div key={index} className="flex flex-row lg:flex-col items-start lg:items-center relative group">
                
                {/* Mobile vertical line connecting steps */}
                {index !== processes.length - 1 && (
                  <div className="lg:hidden absolute left-[31px] top-[60px] bottom-[-40px] w-0.5 bg-gray-200 z-0"></div>
                )}
                
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border-2 border-nand-blue text-nand-blue flex items-center justify-center font-bold text-xl relative z-10 group-hover:bg-nand-blue group-hover:text-white transition-colors duration-300 shadow-md">
                  {/* Swap number to icon on hover? Or just keep icon? Let's show icon and number */}
                  <span className="group-hover:hidden">{step.num}</span>
                  <span className="hidden group-hover:block">{step.icon}</span>
                </div>
                
                <div className="ml-6 lg:ml-0 lg:mt-6 lg:text-center max-w-xs">
                  <h3 className="text-xl font-bold font-heading text-nand-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-nand-muted text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ServiceProcess;
