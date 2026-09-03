import React from 'react';

const SectionHeading = ({ eyebrow, title, description, align = 'left', theme = 'light' }) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  const isDark = theme === 'dark';

  return (
    <div className={`mb-12 md:mb-16 ${alignClasses[align]} max-w-3xl`}>
      {eyebrow && (
        <span className={`inline-block uppercase tracking-[0.18em] text-sm font-semibold mb-4 ${isDark ? 'text-nand-orange' : 'text-nand-orange'}`}>
          {eyebrow}
        </span>
      )}
      
      {title && (
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight ${isDark ? 'text-white' : 'text-nand-navy'}`}>
          {title}
        </h2>
      )}
      
      {description && (
        <p className={`text-lg leading-relaxed ${isDark ? 'text-blue-100' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
