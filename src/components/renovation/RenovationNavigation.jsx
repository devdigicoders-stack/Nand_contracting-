import React from 'react';

const RenovationNavigation = () => {
  const links = [
    { name: 'Villa Renovation', id: 'renovation-types' },
    { name: 'Apartment Renovation', id: 'renovation-types' },
    { name: 'Office Renovation', id: 'renovation-types' },
    { name: 'Commercial Renovation', id: 'renovation-types' },
    { name: 'Interior Fit-Out', id: 'interior-fitout' },
    { name: 'Partitions', id: 'interior-works' },
    { name: 'Ceiling & Flooring', id: 'interior-works' },
    { name: 'Finishing Packages', id: 'finishing-packages' }
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header if exists
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div id="renovation-nav" className="bg-slate-50 border-y border-slate-200 sticky top-16 z-40 hidden md:block shadow-sm overflow-hidden">
      <div className="max-w-[1536px] mx-auto overflow-hidden relative">
        <div className="animate-marquee hover:pause flex items-center py-4">
          {[...links, ...links].map((link, index) => (
            <button
              key={index}
              onClick={() => handleScroll(link.id)}
              className="whitespace-nowrap text-sm font-semibold text-slate-600 hover:text-nand-blue transition-colors uppercase tracking-wider mx-8"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RenovationNavigation;
