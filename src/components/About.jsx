
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
            <p>
              With strong sourcing networks across Europe and Asia, we deliver SOLAS, IMO & Class compliant products with rapid global logistics to shipowners, ship managers, operators, and offshore companies globally.
            </p>
            
            <div className="mission-vision">
              <div className="mission">
                <h3>Mission</h3>
                <p>To deliver accurate, reliable, and compliant marine solutions at the right time, every time.</p>
              </div>
              <div className="vision">
                <h3>Vision</h3>
                <p>To become a globally trusted marine supply partner known for technical excellence and operational reliability.</p>
              </div>
            </div>
            
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
              <div className="group-info">
                <h4>Part of Ocean Serenity Group</h4>
                <p>Strong global network with European and Asian sourcing capabilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
