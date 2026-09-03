import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    // Hide scrollbar on body when loading
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'unset';
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-nand-navy/90 backdrop-blur-sm flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="relative flex items-center justify-center w-32 h-32 mb-8">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
        {/* Animated Spinners */}
        <div className="absolute inset-0 border-4 border-transparent border-t-nand-blue border-r-nand-orange rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-transparent border-b-nand-navy border-l-nand-blue rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
        
        {/* Logo inside */}
        <div className="bg-white rounded-full p-2 z-10 w-20 h-20 flex items-center justify-center shadow-sm">
          <img 
            src="/logo.png" 
            alt="NAND Loader" 
            className="w-14 h-auto object-contain animate-pulse" 
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold text-white font-heading tracking-wider mb-3 uppercase">Nand Contracting</h2>
        <div className="flex space-x-2">
          <div className="w-2.5 h-2.5 bg-nand-blue rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2.5 h-2.5 bg-nand-orange rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
