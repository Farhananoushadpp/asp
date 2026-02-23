/**
 * ASP Global Marine Trading LLC - Mission & Vision Page
 * 
 * Company mission, vision and values
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/pages/About.css';

const MissionVision = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Mission & Vision</h1>
          <p className="page-subtitle">
            Our guiding principles and future aspirations
          </p>
        </div>

        <section className="mission-vision-grid">
          <div className="mission-box">
            <div className="box-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 2Z"/>
              </svg>
            </div>
            <h2>Our Mission</h2>
            <p>
              To deliver accurate, reliable, and compliant marine solutions at the right time, every time.
            </p>
            <p>
              We focus on operational reliability, technical compliance, maritime industry standards, and long-term client partnerships.
            </p>
          </div>
          
          <div className="vision-box">
            <div className="box-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>
            <h2>Our Vision</h2>
            <p>
              To become a globally trusted marine supply partner known for technical excellence and operational reliability.
            </p>
            <p>
              Serving shipowners, ship managers, operators, and offshore companies worldwide with unparalleled expertise.
            </p>
          </div>
        </section>

        <section className="core-values">
          <h2>Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Excellence</h3>
              <p>Striving for the highest standards in everything we do</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Integrity</h3>
              <p>Building trust through honest and transparent business practices</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
              </div>
              <h3>Reliability</h3>
              <p>Consistently delivering on our promises and commitments</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h3>Partnership</h3>
              <p>Working collaboratively with clients and suppliers for mutual success</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Innovation</h3>
              <p>Embracing new technologies and solutions to serve our clients better</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Quality</h3>
              <p>Delivering products and services that meet the highest standards</p>
            </div>
          </div>
        </section>

        <section className="strategic-focus">
          <h2>Strategic Focus Areas</h2>
          <div className="focus-areas">
            <div className="focus-item">
              <h3>Technical Excellence</h3>
              <p>Maintaining deep technical knowledge and expertise in marine equipment and systems</p>
            </div>
            <div className="focus-item">
              <h3>Global Sourcing</h3>
              <p>Building strong relationships with certified manufacturers and suppliers worldwide</p>
            </div>
            <div className="focus-item">
              <h3>Customer Centricity</h3>
              <p>Putting customer needs at the center of all our decisions and actions</p>
            </div>
            <div className="focus-item">
              <h3>Sustainable Growth</h3>
              <p>Growing our business responsibly while maintaining quality and service standards</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MissionVision;
