import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
            </div>
            <div className="logo-text">
              <h2>ASP Global Marine</h2>
              <span>Driven by Quality. Propelled by Trust.</span>
            </div>
          </Link>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li>
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>
                <span className="nav-text">Home</span>
                <span className="nav-indicator"></span>
              </Link>
            </li>
            <li>
              <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={closeMenu}>
                <span className="nav-text">About</span>
                <span className="nav-indicator"></span>
              </Link>
            </li>
            <li>
              <Link to="/products" className={`nav-link ${isActive('/products') ? 'active' : ''}`} onClick={closeMenu}>
                <span className="nav-text">Products</span>
                <span className="nav-indicator"></span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={closeMenu}>
                <span className="nav-text">Contact</span>
                <span className="nav-indicator"></span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-actions">
          <Link to="/contact" className="btn btn-primary btn-sm">
            Request Quote
          </Link>
        </div>

        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
