/**
 * ASP Global Marine Trading LLC - Footer Section
 *
 * Modern footer design with clean layout
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/components/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Top Section - Main Content */}
        <div className="footer-main">
          {/* Company Branding */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src="/asplogo.svg"
                alt="ASP Global Marine Trading LLC"
                className="footer-logo-image"
              />
            </div>
            <p className="footer-description">
              Specialized marine and offshore product solution provider
              delivering high-quality equipment and spare parts worldwide.
            </p>
            <p className="footer-tagline">
              "Driven by Quality. Propelled by Trust."
            </p>
          </div>

          {/* Links Section */}
          <div className="footer-links-section">
            {/* Quick Links */}
            <div className="footer-links-group">
              <h4 className="footer-links-title">Quick Links</h4>
              <nav className="footer-nav">
                <a href="#about" className="footer-link">About Us</a>
                <a href="#products" className="footer-link">Products</a>
                <a href="#contact" className="footer-link">Contact</a>
              </nav>
            </div>

            {/* Product Categories */}
            <div className="footer-links-group">
              <h4 className="footer-links-title">Product Categories</h4>
              <nav className="footer-nav">
                <a href="#products" className="footer-link">Engine Spares</a>
                <a href="#products" className="footer-link">Pumps & Systems</a>
                <a href="#products" className="footer-link">Safety Equipment</a>
                <a href="#products" className="footer-link">Deck Stores</a>
              </nav>
            </div>

            {/* Group Companies */}
            <div className="footer-links-group">
              <h4 className="footer-links-title">Group Companies</h4>
              <div className="footer-companies">
                <span>Ocean Serenity FZ-LLC</span>
                <span>Ocean Infinity Marine Service</span>
                <span>ANC Arabia Contracting</span>
                <span>Warmsol Marine & Industrial</span>
              </div>
            </div>

            {/* Contact */}
            <div className="footer-links-group">
              <h4 className="footer-links-title">Contact</h4>
              <div className="footer-contact-info">
                <address>
                  Xavier Business Center<br />
                  Office Suite A5-18<br />
                  Dubai, UAE
                </address>
                <div className="footer-contact-details">
                  <a href="tel:+97145724542" className="footer-contact-link">
                    +971 4 572 4542
                  </a>
                  <a href="mailto:info@aspglobalmarine.com" className="footer-contact-link">
                    info@aspglobalmarine.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} ASP Global Marine Trading LLC. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#privacy" className="footer-bottom-link">Privacy Policy</a>
              <a href="#terms" className="footer-bottom-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
