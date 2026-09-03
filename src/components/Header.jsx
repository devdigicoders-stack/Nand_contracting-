import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="logo-nand">NAND</span>
          <span className="logo-sub">Contracting & Hospitality</span>
        </Link>
        
        <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/contracting" onClick={() => setIsMobileMenuOpen(false)}>Contracting</Link>
          <Link to="/renovation" onClick={() => setIsMobileMenuOpen(false)}>Renovation & Fit-Out</Link>
          <Link to="/manpower" onClick={() => setIsMobileMenuOpen(false)}>Manpower & Hospitality</Link>
          <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn-orange quote-btn">Request a Quote</Link>
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
