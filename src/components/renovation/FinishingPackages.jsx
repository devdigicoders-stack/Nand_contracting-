import React from 'react';
import { MdOutlineEngineering, MdFormatPaint, MdOutlineArchitecture, MdOutlineRoofing, MdGridView } from 'react-icons/md';
import { BsCheckCircle } from 'react-icons/bs';

const FinishingPackages = () => {
  const items = [
    { title: 'Civil Works', icon: <MdOutlineEngineering className="w-6 h-6" /> },
    { title: 'Painting', icon: <MdFormatPaint className="w-6 h-6" /> },
    { title: 'Gypsum', icon: <MdOutlineArchitecture className="w-6 h-6" /> },
    { title: 'Ceiling', icon: <MdOutlineRoofing className="w-6 h-6" /> },
    { title: 'Flooring', icon: <MdGridView className="w-6 h-6" /> },
    { title: 'Final Finishing', icon: <BsCheckCircle className="w-6 h-6" /> },
  ];

  return (
    <section id="finishing-packages" className="py-16 md:py-20 lg:py-24 bg-nand-navy relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block uppercase tracking-[0.18em] text-sm font-semibold text-nand-orange mb-4">
            Complete Finishing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Multiple Finishing Requirements. <br className="hidden sm:block"/> One Coordinated Solution.
          </h2>
          <p className="text-base lg:text-lg leading-7 text-gray-300">
            NAND's renovation and fit-out scope can combine civil, painting, gypsum, ceiling, flooring and finishing requirements in one integrated approach.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            // Alternate accents for visual interest
            const isOrangeAccent = index % 2 === 0;
            return (
              <div 
                key={index} 
                className="bg-[#0f273d] border border-white/10 rounded-xl p-6 flex items-center hover:bg-white/5 transition-colors relative overflow-hidden group"
              >
                {/* Accent line on hover */}
                <div className={`absolute left-0 top-0 w-1 h-full scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300 ${isOrangeAccent ? 'bg-nand-orange' : 'bg-nand-blue'}`}></div>
                
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-white/5 border border-white/10 ${isOrangeAccent ? 'text-nand-orange' : 'text-nand-blue'}`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FinishingPackages;
