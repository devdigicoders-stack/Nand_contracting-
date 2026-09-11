import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { IoCloseOutline } from 'react-icons/io5';
import { navigation } from '../../data/navigation';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-nand-navy/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 py-2' 
            : 'bg-nand-navy/90 backdrop-blur-md border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex justify-between items-center h-12 md:h-14 gap-4 xl:gap-8">
            
            {/* LEFT: Logo */}
            <div className="flex-shrink-0 flex items-center z-[60]">
              <Link to="/" className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 md:p-2 shadow-lg ring-1 ring-white/20 transition-transform duration-300 hover:scale-105" onClick={() => setIsMobileMenuOpen(false)}>
                <img src="/logo.png" alt="NAND Contracting & Hospitality Services" className="h-10 md:h-12 w-auto object-contain" />
              </Link>
            </div>

            {/* CENTER: Navigation (Desktop) */}
            <nav className="hidden 2xl:flex space-x-1">
              {navigation.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className={({ isActive }) =>
                    `whitespace-nowrap px-3 py-2 text-base font-bold rounded-md transition-all duration-200 ${
                      isActive 
                        ? 'text-white bg-white/10 shadow-inner' 
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* RIGHT: CTA & Mobile Toggle */}
            <div className="flex items-center space-x-4">
              <Link 
                to="/contact" 
                className="hidden sm:inline-flex whitespace-nowrap shrink-0 items-center justify-center px-6 py-2.5 bg-gradient-to-r from-nand-orange to-[#FFB067] text-white text-base font-bold rounded-lg shadow-lg shadow-nand-orange/20 hover:shadow-xl hover:shadow-nand-orange/40 hover:-translate-y-0.5 transition-all group"
              >
                Request a Quote
                <FiArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              {/* Mobile menu button */}
              <button
                type="button"
                className="2xl:hidden p-2 -mr-2 rounded-md text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none z-[60] relative transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <IoCloseOutline className="h-7 w-7" />
                ) : (
                  <HiOutlineBars3 className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU - Right side drawer */}
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 z-50 2xl:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-white z-[55] 2xl:hidden flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header spacer to account for the absolute close button in header */}
        <div className="h-20 sm:h-24 border-b border-slate-100"></div>
        
        <div className="flex-1 overflow-y-auto py-6 px-6 custom-scrollbar">
          <nav className="flex flex-col space-y-2">
            {navigation.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3.5 rounded-lg text-base font-bold transition-colors ${
                    isActive 
                      ? 'bg-blue-50 text-nand-blue' 
                      : 'text-nand-navy hover:bg-slate-50 hover:text-nand-blue'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50 mt-auto">
          <Link 
            to="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center w-full px-4 py-3.5 bg-nand-orange text-white text-base font-bold rounded-lg shadow-md active:bg-[#e66d00] transition-colors"
          >
            Request a Quote
            <FiArrowUpRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
