/**
 * ASP Global Marine Trading LLC - Enhanced About Page
 *
 * Modern about page with company information, mission, vision, and history
 * Technology: React functional component with JSX
 */

import About from "../components/About.jsx";
import Strengths from "../components/Strengths.jsx";
import Certifications from "../components/Certifications.jsx";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-background">
          <div className="about-hero-overlay"></div>
          <div className="about-hero-particles"></div>
        </div>
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-badge">
              <span className="badge-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </span>
              <span className="badge-text">About Us</span>
            </div>
            <h1 className="about-hero-title">
              <span className="title-main">ASP Global Marine Trading LLC</span>
              <span className="title-subtitle">Your Trusted Partner in Marine Excellence</span>
            </h1>
            <p className="about-hero-description">
              Leading supplier of marine and offshore equipment since 2005, serving shipowners, operators, and offshore companies worldwide with unparalleled expertise and reliability.
            </p>
            <div className="about-hero-stats">
              <div className="hero-stat">
                <div className="stat-number">18+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Global Clients</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="about-main">
        <div className="container">
          <div className="about-grid">
            <div className="about-content-left">
              <About />
            </div>
            <div className="about-content-right">
              <div className="about-mission-vision">
                <div className="mv-card">
                  <div className="mv-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3>Our Mission</h3>
                  <p>
                    To deliver accurate, reliable, and compliant marine solutions at the right time, every time. We focus on operational reliability, technical compliance, maritime industry standards, and long-term client partnerships.
                  </p>
                </div>
                
                <div className="mv-card">
                  <div className="mv-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3>Our Vision</h3>
                  <p>
                    To become a globally trusted marine supply partner known for technical excellence and operational reliability. Serving shipowners, ship managers, operators, and offshore companies worldwide with unparalleled expertise.
                  </p>
                </div>
              </div>
              
              <div className="about-values">
                <h3>Our Core Values</h3>
                <div className="values-grid">
                  <div className="value-card">
                    <div className="value-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h4>Reliability</h4>
                    <p>Consistent quality and dependable service delivery</p>
                  </div>
                  
                  <div className="value-card">
                    <div className="value-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                      </svg>
                    </div>
                    <h4>Responsiveness</h4>
                    <p>Rapid response to all customer needs</p>
                  </div>
                  
                  <div className="value-card">
                    <div className="value-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                      </svg>
                    </div>
                    <h4>Compliance</h4>
                    <p>Adherence to all maritime standards</p>
                  </div>
                  
                  <div className="value-card">
                    <div className="value-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h4>Quality</h4>
                    <p>Premium products without compromise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Strengths />
      <Certifications />
      
      {/* Company History */}
      <section className="company-history">
        <div className="container">
          <div className="history-header">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              Two decades of excellence in marine solutions
            </p>
          </div>
          
          <div className="history-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2005</div>
              <div className="timeline-content">
                <h3>Foundation</h3>
                <p>ASP Global Marine Trading LLC was founded in Dubai as part of Ocean Serenity Group, establishing our commitment to quality marine solutions.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2010-2015</div>
              <div className="timeline-content">
                <h3>Growth & Expansion</h3>
                <p>Expanded our sourcing networks across Europe and Asia, building strong partnerships with leading manufacturers and suppliers.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2015-2020</div>
              <div className="timeline-content">
                <h3>Global Recognition</h3>
                <p>Earned trust from shipowners and operators worldwide, becoming a preferred supplier for marine and offshore equipment.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-year">2020-Present</div>
              <div className="timeline-content">
                <h3>Innovation & Excellence</h3>
                <p>Continued investment in technology and expertise, maintaining our position as a leader in marine supply solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Group Companies */}
      <section className="group-companies-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Group</h2>
            <p className="section-subtitle">
              Part of a diversified maritime conglomerate
            </p>
          </div>
          
          <div className="companies-showcase">
            <div className="company-showcase-item">
              <div className="company-logo">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="company-info">
                <h3>Ocean Serenity FZ-LLC</h3>
                <p>Marine services and solutions provider</p>
                <span className="company-type">Holding Company</span>
              </div>
            </div>
            
            <div className="company-showcase-item">
              <div className="company-logo">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="company-info">
                <h3>Ocean Infinity Marine Service LLC</h3>
                <p>Comprehensive marine engineering services</p>
                <span className="company-type">Specialized Services</span>
              </div>
            </div>
            
            <div className="company-showcase-item">
              <div className="company-logo">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="company-info">
                <h3>ANC Arabia Contracting Company</h3>
                <p>Industrial contracting and solutions</p>
                <span className="company-type">Engineering Division</span>
              </div>
            </div>
            
            <div className="company-showcase-item">
              <div className="company-logo">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="company-info">
                <h3>Warmsol Marine & Industrial Company</h3>
                <p>Marine and industrial equipment solutions</p>
                <span className="company-type">Equipment Division</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
