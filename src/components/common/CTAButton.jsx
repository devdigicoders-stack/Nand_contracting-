import React from 'react';
import { Link } from 'react-router-dom';

const CTAButton = ({ to, href, variant = 'primary', children, icon: Icon, className = '' }) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 group shadow-sm hover:shadow-md";
  const sizeClasses = "px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base";
  
  const variants = {
    primary: "bg-nand-orange text-white hover:bg-[#e66d00]",
    secondary: "bg-nand-blue text-white hover:bg-blue-600",
    outline: "bg-transparent border-2 border-nand-navy text-nand-navy hover:bg-nand-navy hover:text-white",
    dark: "bg-nand-navy text-white hover:bg-slate-800",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20bd5a]",
    premium: "bg-gradient-to-r from-nand-orange to-[#FFB067] text-white shadow-lg shadow-nand-orange/30 hover:shadow-xl hover:shadow-nand-orange/40",
    "premium-outline": "bg-white/5 border border-white/10 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/20 shadow-md"
  };

  const buttonClasses = `${baseClasses} ${sizeClasses} ${variants[variant]} ${className}`;
  const iconMarkup = Icon && <Icon className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />;

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
        {iconMarkup}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel={href.startsWith('http') ? 'noopener noreferrer' : ''} className={buttonClasses}>
        {children}
        {iconMarkup}
      </a>
    );
  }

  return (
    <button className={buttonClasses}>
      {children}
      {iconMarkup}
    </button>
  );
};

export default CTAButton;
