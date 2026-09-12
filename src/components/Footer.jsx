import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <Link to="/" className="footer-logo inline-block mb-4">
            <img 
              src="/logo.png" 
              alt="NAND Contracting & Hospitality" 
              className="h-16 w-auto max-w-[240px] object-contain rounded-lg bg-white p-1" 
            />
          </Link>
          <p className="footer-bio">
            Qatar's trusted partner delivering excellence in contracting, facility maintenance, and premium manpower outsourcing.
          </p>
          <div className="social-links">
            <a href="#"><FaFacebookF size={18} /></a>
            <a href="#"><FaTwitter size={18} /></a>
            <a href="#"><FaInstagram size={18} /></a>
            <a href="#"><FaLinkedinIn size={18} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Our Projects</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Core Services</h4>
          <ul className="footer-links">
            <li><Link to="/contracting">Facility Maintenance</Link></li>
            <li><Link to="/contracting">Civil & Construction</Link></li>
            <li><Link to="/renovation">Renovation & Fit-Out</Link></li>
            <li><Link to="/manpower">Manpower Outsourcing</Link></li>
            <li><Link to="/manpower">Hospitality Support</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact Details</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} className="text-orange" />
              <span>Doha, State of Qatar</span>
            </li>
            <li>
              <Phone size={18} className="text-orange" />
              <span>+974 1234 5678</span>
            </li>
            <li>
              <Mail size={18} className="text-orange" />
              <span>info@nandcontracting.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} NAND Contracting & Hospitality Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
