import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { contactInfo } from '../../data/contactInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nand-navy text-slate-300 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-nand-orange via-[#FFB067] to-transparent opacity-80"></div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8">
          
          {/* COLUMN 01 — COMPANY */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left border-b border-white/5 md:border-none pb-8 md:pb-0">
            <Link to="/" className="inline-block mb-6 hover:opacity-90 transition-opacity">
              <img src="/footer_logo.png" alt="NAND Contracting & Hospitality Services" className="h-16 sm:h-20 w-auto object-contain" />
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400 max-w-sm">
              Integrated contracting, maintenance, renovation, hospitality and manpower solutions for requirements across Qatar.
            </p>
            <div className="bg-nand-orange/10 border border-nand-orange/20 px-4 py-2 rounded-lg inline-block">
              <p className="text-sm font-semibold text-white">
                Building Trust. <span className="text-nand-orange">Maintaining Excellence.</span>
              </p>
            </div>
          </div>

          {/* COLUMN 02 — QUICK LINKS */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-6 md:pt-0 border-t border-white/5 md:border-none">
            <h4 className="text-white font-bold mb-5 tracking-wide uppercase text-xs sm:text-sm flex flex-col items-center sm:items-start">
              Quick Links
              <span className="w-8 h-0.5 bg-nand-orange mt-2 rounded-full"></span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm flex flex-col items-center sm:items-start">
              <li><Link to="/" className="hover:text-nand-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-nand-orange transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-nand-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* COLUMN 03 — SERVICES */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left pt-6 md:pt-0 border-t border-white/5 md:border-none">
            <h4 className="text-white font-bold mb-5 tracking-wide uppercase text-xs sm:text-sm flex flex-col items-center sm:items-start">
              Services
              <span className="w-8 h-0.5 bg-nand-orange mt-2 rounded-full"></span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm flex flex-col items-center sm:items-start">
              <li><Link to="/contracting-construction" className="hover:text-nand-orange transition-colors">Contracting & Construction</Link></li>
              <li><Link to="/facility-maintenance" className="hover:text-nand-orange transition-colors">Facility & Technical Maintenance</Link></li>
              <li><Link to="/hospitality-manpower" className="hover:text-nand-orange transition-colors">Hospitality & Manpower</Link></li>
              <li><Link to="/contact" className="hover:text-nand-orange transition-colors">Emergency Support</Link></li>
            </ul>
          </div>

          {/* COLUMN 04 — CONTACT */}
          <div className="pt-6 md:pt-0 border-t border-white/5 md:border-none flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-white font-bold mb-5 tracking-wide uppercase text-xs sm:text-sm flex flex-col items-center sm:items-start">
              Contact
              <span className="w-8 h-0.5 bg-nand-orange mt-2 rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-sm flex flex-col items-center sm:items-start w-full">
              <li>
                <a href={`tel:${contactInfo.phone}`} className="flex flex-col sm:flex-row items-center sm:items-start hover:text-white transition-colors group text-center sm:text-left">
                  <FiPhone className="w-5 h-5 text-nand-orange mb-1 sm:mb-0 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/974${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row items-center sm:items-start hover:text-white transition-colors group text-center sm:text-left">
                  <FaWhatsapp className="w-5 h-5 text-[#25D366] mb-1 sm:mb-0 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{contactInfo.whatsapp}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex flex-col sm:flex-row items-center sm:items-start hover:text-white transition-colors group text-center sm:text-left">
                  <FiMail className="w-5 h-5 text-nand-orange mb-1 sm:mb-0 sm:mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <div className="flex flex-col sm:flex-row items-center sm:items-start group cursor-default text-center sm:text-left">
                  <HiOutlineMapPin className="w-6 h-6 text-nand-orange mb-2 sm:mb-0 sm:mr-3 flex-shrink-0" />
                  <span className="leading-relaxed">
                    {contactInfo.address.floor}, {contactInfo.address.office},<br className="hidden sm:block" />
                    {contactInfo.address.building}, {contactInfo.address.road},<br className="hidden sm:block" />
                    {contactInfo.address.city} - {contactInfo.address.country}
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="border-t border-slate-800 bg-[#04101A]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center md:text-left">
              <p>© {currentYear} NAND Contracting & Hospitality Services. All Rights Reserved.</p>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-slate-700"></span>
              <p>
                Designed and Developed by <a href="#" target="_blank" rel="noopener noreferrer" className="text-nand-orange hover:text-[#e66d00] transition-colors font-semibold">Worknest Connect</a>
              </p>
            </div>
            <div className="flex space-x-6">
              <span className="cursor-not-allowed hover:text-slate-400 transition-colors">Privacy Policy</span>
              <span className="cursor-not-allowed hover:text-slate-400 transition-colors">Terms & Conditions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
