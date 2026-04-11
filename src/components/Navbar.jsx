import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setProductsDropdownOpen(false);
    document.body.style.overflow = "unset";
  };

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
  };

  // Handle escape key to close menu
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  };

  // Close menu when clicking outside
  const handleOutsideClick = (e) => {
    if (
      isMenuOpen &&
      !e.target.closest(".nav-menu") &&
      !e.target.closest(".hamburger")
    ) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const isActive = (path) => {
    if (path === "/products") {
      return (
        location.pathname === "/products" ||
        location.pathname.startsWith("/products/")
      );
    }
    return location.pathname === path;
  };

  return (
    <>
      {/* Overlay backdrop for mobile menu */}
      <div
        className={`nav-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="nav-container">
          <div className="logo-container">
            <Link
              to="/"
              className="logo-link"
              aria-label="ASP Global Marine Trading LLC Home"
            >
              <img
                src="/logo.webp"
                alt="ASP Global Marine Trading LLC"
                className="logo-image logo-first"
              />
            </Link>
            <Link
              to="/"
              className="logo-link"
              aria-label="ASP Global Marine Trading LLC Home"
            >
              <img
                src="/asp.webp"
                alt="ASP Global Marine Trading LLC"
                className="logo-image logo-second"
              />
            </Link>
          </div>
          {/* <img src="/asplogo.svg" alt="ASP Global Marine Trading LLC" /> */}
          {/* <div className="nav-branding">
          <h1 className="nav-company-name">ASP GLOBAL MARINE TRADING LLC</h1>
          <p className="nav-group-name">Part of Ocean Serenity Group</p>
        </div> */}

          <div
            id="navigation-menu"
            className={`nav-menu ${isMenuOpen ? "active" : ""}`}
            role="menubar"
          >
            <ul className="nav-list" role="none">
              <li role="none">
                <Link
                  to="/"
                  className={`nav-link ${isActive("/") ? "active" : ""}`}
                  onClick={closeMenu}
                  role="menuitem"
                  aria-current={isActive("/") ? "page" : undefined}
                >
                  <span className="nav-text">Home</span>
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/about"
                  className={`nav-link ${isActive("/about") ? "active" : ""}`}
                  onClick={closeMenu}
                  role="menuitem"
                  aria-current={isActive("/about") ? "page" : undefined}
                >
                  <span className="nav-text">About Us</span>
                </Link>
              </li>
              <li
                className={`nav-dropdown ${productsDropdownOpen ? "active" : ""}`}
                role="none"
              >
                <button
                  className={`nav-link dropdown-toggle ${isActive("/products") ? "active" : ""}`}
                  onClick={toggleProductsDropdown}
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={productsDropdownOpen}
                  aria-current={isActive("/products") ? "page" : undefined}
                >
                  <span className="nav-text">Products</span>
                </button>
                <div className="dropdown-menu" role="menu">
                  <Link
                    to="/products"
                    className="dropdown-item dropdown-main"
                    onClick={closeMenu}
                    role="menuitem"
                  >
                    View All Products
                  </Link>
                  <div className="dropdown-divider" role="separator"></div>
                  <Link
                    to="/products/engine-stores"
                    className="dropdown-item"
                    onClick={closeMenu}
                    role="menuitem"
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
                    to="/products/purifiers"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    Purifiers & Separators & Spares
                  </Link>
                  <Link
                    to="/products/air-compressor-spares"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    Air Compressor Spares
                  </Link>
                  <Link
                    to="/products/hydraulic-systems"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    Hydraulic Systems & Components
                  </Link>
                  <Link
                    to="/products/boilers-incinerators-heat-exchangers"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    Boilers, Incinerators & Heat Exchangers
                  </Link>
                  <Link
                    to="/products/pumps-marine-industrial"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    Pumps – Marine & Industrial
                  </Link>
                  <Link
                    to="/products/hvac-compressors"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    HVAC Compressors & Spares
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
              <li role="none">
                <Link
                  to="/authorizations"
                  className={`nav-link ${isActive("/authorizations") ? "active" : ""}`}
                  onClick={closeMenu}
                  role="menuitem"
                  aria-current={
                    isActive("/authorizations") ? "page" : undefined
                  }
                >
                  <span className="nav-text">Authorizations</span>
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/certifications"
                  className={`nav-link ${isActive("/certifications") ? "active" : ""}`}
                  onClick={closeMenu}
                  role="menuitem"
                  aria-current={
                    isActive("/certifications") ? "page" : undefined
                  }
                >
                  <span className="nav-text">Certifications</span>
                </Link>
              </li>
              <li role="none">
                <Link
                  to="/contact"
                  className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                  onClick={closeMenu}
                  role="menuitem"
                  aria-current={isActive("/contact") ? "page" : undefined}
                >
                  <span className="nav-text">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="nav-actions">
          <a href="mailto:info@aspglobalmarine.com" className="btn-contact">
            Get Quote
          </a>
        </div> */}

          <button
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="navigation-menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
