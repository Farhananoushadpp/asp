import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ASP Global Marine Trading LLC</h3>
            <p>
              Your trusted partner for marine and offshore equipment solutions. 
              Driven by quality, propelled by trust.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <span className="social-icon icon-email"></span>
              </a>
              <a href="#" className="social-link">
                <span className="social-icon icon-portfolio"></span>
              </a>
              <a href="#" className="social-link">
                <span className="social-icon icon-fast"></span>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <p>LOC: Xavier Business Center, Suite A5-18, Dubai, UAE</p>
              <p>TEL: +971 4 572 4542</p>
              <p>MOB: +971 52 547 8137</p>
              <p>MAIL: info@aspglobalmarine.com</p>
              <p>WEB: www.aspglobalmarine.com</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Business Hours</h4>
            <div className="business-hours">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; 2024 ASP Global Marine Trading LLC. All rights reserved.</p>
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
