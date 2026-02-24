/**
 * ASP Global Marine Trading LLC - Footer Section
 *
 * Dark Deep Ocean Blue background with quick links
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/components/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-block">
            <div className="footer-logo">
              <img
                src="/asplogo.svg"
                alt="ASP Global Marine Trading LLC"
                className="footer-logo-image"
              />
            </div>
            <div className="footer-branding">
              <h2 className="footer-company-name">
                ASP GLOBAL MARINE TRADING LLC
              </h2>
              <p className="footer-group-name">Part of Ocean Serenity Group</p>
            </div>
            <p className="footer-description">
              Specialized marine and offshore product solution provider
              delivering high-quality equipment and spare parts worldwide.
            </p>
            <p className="footer-tagline">
              "Driven by Quality. Propelled by Trust. "
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-block">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="footer-block">
            <h4 className="footer-subtitle">Product Categories</h4>
            <ul className="footer-links">
              <li>
                <a href="#products">Engine Spares</a>
              </li>
              <li>
                <a href="#products">Pumps & Systems</a>
              </li>
              <li>
                <a href="#products">Safety Equipment</a>
              </li>
              <li>
                <a href="#products">Deck Stores</a>
              </li>
            </ul>
          </div>

          {/* Group Companies */}
          <div className="footer-block">
            <h4 className="footer-subtitle">Group Companies</h4>
            <ul className="footer-links">
              <li>Ocean Serenity FZ-LLC</li>
              <li>Ocean Infinity Marine Service</li>
              <li>ANC Arabia Contracting</li>
              <li>Warmsol Marine & Industrial</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-block">
            <h4 className="footer-subtitle">Contact</h4>
            <div className="footer-contact">
              <p>
                Xavier Business Center
                <br />
                Office Suite A5-18
                <br />
                Dubai, UAE
              </p>
              <p>+971 4 572 4542</p>
              <p>info@aspglobalmarine.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            Copyright {currentYear} ASP Global Marine Trading LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
