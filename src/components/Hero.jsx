import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
  };

  const navigateToProducts = () => {
    navigate('/products');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
        <div className="hero-gradient"></div>
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-announcement">
            <div className="announcement-badge">
              <span className="badge-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </span>
              <span className="badge-text">Trusted by 500+ Marine Companies Worldwide</span>
            </div>
            <div className="announcement-tagline">
              Driven by Quality. Propelled by Trust.
            </div>
          </div>
          
          <div className="hero-headline">
            <h1 className="hero-title">
              <span className="title-main">Marine & Offshore Solutions</span>
              <span className="title-subtitle">Engineered for Reliability</span>
            </h1>
            <p className="hero-description">
              Supplying Genuine, OEM & Equivalent Marine Spare Parts, Equipment & Safety Solutions Worldwide.
            </p>
          </div>
          
          <div className="hero-features">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="feature-content">
                <div className="feature-number">9500+</div>
                <div className="feature-label">Products</div>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div className="feature-content">
                <div className="feature-number">50+</div>
                <div className="feature-label">Countries</div>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
              </div>
              <div className="feature-content">
                <div className="feature-number">2005</div>
                <div className="feature-label">Established</div>
              </div>
            </div>
          </div>
          
          <div className="hero-actions">
            <button 
              className="btn btn-primary btn-large hero-cta"
              onClick={navigateToContact}
            >
              <span>Get a Quote</span>
              <span className="btn-arrow">→</span>
            </button>
            <button 
              className="btn btn-secondary btn-large hero-secondary"
              onClick={navigateToProducts}
            >
              <span>View Products</span>
              <span className="btn-arrow">→</span>
            </button>
          </div>
          
          <div className="hero-trust">
            <div className="trust-indicators">
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span>SOLAS Compliant</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span>IMO Certified</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span>Class Approved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
