import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { HiOutlineMapPin } from 'react-icons/hi2';
import { contactInfo } from '../../data/contactInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nand-navy text-slate-300">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* COLUMN 01 — COMPANY */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6  p-3 rounded-lg ">
              <img src="/footer_logo.png" alt="NAND Contracting & Hospitality Services" className="h-18 w-auto object-contain" />
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Integrated contracting, maintenance, renovation, hospitality and manpower solutions for requirements across Qatar.
            </p>
            <p className="text-sm font-semibold text-white">
              Building Trust. <br className="hidden lg:block"/> Maintaining Excellence.
            </p>
          </div>

          {/* COLUMN 02 — QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-nand-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-nand-orange transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-nand-orange transition-colors">Projects & Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-nand-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* COLUMN 03 — SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contracting" className="hover:text-nand-orange transition-colors">Contracting</Link></li>
              <li><Link to="/contracting#facility-maintenance" className="hover:text-nand-orange transition-colors">Facility Maintenance</Link></li>
              <li><Link to="/contracting#technical-maintenance" className="hover:text-nand-orange transition-colors">Technical Maintenance</Link></li>
              <li><Link to="/renovation-fitout" className="hover:text-nand-orange transition-colors">Renovation & Fit-Out</Link></li>
              <li><Link to="/manpower-hospitality" className="hover:text-nand-orange transition-colors">Manpower & Hospitality</Link></li>
              <li><Link to="/contact" className="hover:text-nand-orange transition-colors">Emergency Support</Link></li>
            </ul>
          </div>

          {/* COLUMN 04 — CONTACT */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href={`tel:${contactInfo.phone}`} className="flex items-start hover:text-white transition-colors group">
                  <FiPhone className="w-5 h-5 text-nand-orange mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/974${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-start hover:text-white transition-colors group">
                  <FaWhatsapp className="w-5 h-5 text-[#25D366] mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{contactInfo.whatsapp}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-start hover:text-white transition-colors group">
                  <FiMail className="w-5 h-5 text-nand-orange mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start group cursor-default">
                  <HiOutlineMapPin className="w-6 h-6 text-nand-orange mr-3 flex-shrink-0" />
                  <span className="leading-relaxed">
                    {contactInfo.address.floor}, {contactInfo.address.office},<br />
                    {contactInfo.address.building}, {contactInfo.address.road},<br />
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
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center md:text-left">
              <p>© {currentYear} NAND Contracting & Hospitality Services. All Rights Reserved.</p>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-slate-700"></span>
              <p>
                Crafted by <a href="https://digicoders.in" target="_blank" rel="noopener noreferrer" className="text-nand-orange hover:text-[#e66d00] transition-colors font-semibold">Team DigiCoders</a>
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
