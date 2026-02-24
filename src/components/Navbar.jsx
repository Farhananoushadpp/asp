import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo-link">
          <img
            src="/asplogo.svg"
            alt="ASP Global Marine Trading LLC"
            className="logo-image"
          />
        </Link>
        {/* <div className="nav-branding">
          <h1 className="nav-company-name">ASP GLOBAL MARINE TRADING LLC</h1>
          <p className="nav-group-name">Part of Ocean Serenity Group</p>
        </div> */}

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link
                to="/"
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                onClick={closeMenu}
              >
                <span className="nav-text">Home</span>
                <span className="nav-indicator"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
                onClick={closeMenu}
              >
                <span className="nav-text">About Us</span>
                <span className="nav-indicator"></span>
              </Link>
            </li>
            <li
              className={`nav-dropdown ${productsDropdownOpen ? "active" : ""}`}
            >
              <button
                className="nav-link dropdown-toggle"
                onClick={toggleProductsDropdown}
              >
                <span className="nav-text">Products</span>
                <span className="nav-indicator"></span>
              </button>
              <div className="dropdown-menu">
                <Link
                  to="/products/engine-stores"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Engine Stores
                </Link>
                <Link
                  to="/products/deck-stores-general"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Deck Stores & General Marine Stores
                </Link>
                <Link
                  to="/products/engine-spares-2stroke"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Engine Spares - 2-Stroke
                </Link>
                <Link
                  to="/products/engine-spares-4stroke"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Engine Spares - 4-Stroke
                </Link>
                <Link
                  to="/products/turbochargers-auxiliary"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Turbochargers & Auxiliary Engine Products
                </Link>
                <Link
                  to="/products/hvac-compressors"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  HVAC Compressors & Spares
                </Link>
                <Link
                  to="/products/pumps-marine-industrial"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Pumps – Marine & Industrial
                </Link>
                <Link
                  to="/products/boilers-incinerators-heat-exchangers"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Boilers, Incinerators & Heat Exchangers
                </Link>
                <Link
                  to="/products/air-compressor-spares"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Air Compressor Spares
                </Link>
                <Link
                  to="/products/purifiers"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Purifiers
                </Link>
                <Link
                  to="/products/hydraulic-systems"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  Hydraulic Systems & Components
                </Link>
                <Link
                  to="/products/lsa-ffa"
                  className="dropdown-item"
                  onClick={closeMenu}
                >
                  LSA & FFA (Life-Saving & Fire-Fighting Equipment)
                </Link>
              </div>
            </li>
            <li>
              <Link
                to="/authorizations"
                className={`nav-link ${isActive("/authorizations") ? "active" : ""}`}
                onClick={closeMenu}
              >
                <span className="nav-text">Authorizations</span>
                <span className="nav-indicator"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                onClick={closeMenu}
              >
                <span className="nav-text">Contact Us</span>
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

        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
