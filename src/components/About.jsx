import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2>About ASP Global Marine Trading LLC</h2>
            <p>
              Founded in 2005 and part of Ocean Serenity Group, ASP Global Marine Trading LLC is a Dubai-based specialized marine and offshore product solution provider delivering high-quality equipment, genuine/OEM/equivalent spare parts, consumables, safety equipment, and engine components to vessels and offshore installations worldwide.
            </p>
            <div className="core-values">
              <h3>Core Values</h3>
              <ul className="about-features">
                <li>
                  <span className="check-icon">✓</span>
                  <span>Reliability</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Responsiveness</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Technical Accuracy</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Compliance</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>Competitive Pricing without Quality Compromise</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="marine-icon icon-maritime"></div>
              <p>Marine Equipment Solutions Since 2005</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
