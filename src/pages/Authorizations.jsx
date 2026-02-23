/**
 * ASP Global Marine Trading LLC - Authorizations Page
 * 
 * Company authorizations and certifications
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/pages/About.css';

const Authorizations = () => {
  const authorizations = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System Certification",
      authority: "International Organization for Standardization",
      scope: "Marine equipment supply and technical services"
    },
    {
      name: "SOLAS Compliance",
      description: "Safety of Life at Sea Convention Compliance",
      authority: "International Maritime Organization",
      scope: "Life-saving appliances and safety equipment"
    },
    {
      name: "MARPOL Compliance",
      description: "Marine Pollution Prevention Convention",
      authority: "International Maritime Organization",
      scope: "Environmental protection equipment"
    },
    {
      name: "Classification Society Authorizations",
      description: "Major Classification Society Approvals",
      authority: "DNV, ABS, Lloyd's Register, Bureau Veritas",
      scope: "Marine equipment and components"
    },
    {
      name: "OEM Authorizations",
      description: "Original Equipment Manufacturer Authorizations",
      authority: "Leading Marine Equipment Manufacturers",
      scope: "Authorized distributor and service partner"
    },
    {
      name: "Export Licenses",
      description: "International Trade and Export Authorizations",
      authority: "UAE Ministry of Economy",
      scope: "Global marine equipment export"
    }
  ];

  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Authorizations</h1>
          <p className="page-subtitle">
            Our official authorizations and certifications
          </p>
        </div>

        <section className="auth-intro">
          <p>
            ASP Global Marine Trading LLC maintains comprehensive authorizations and certifications 
            from international bodies, classification societies, and leading manufacturers. These 
            authorizations demonstrate our commitment to quality, compliance, and excellence in the 
            maritime industry.
          </p>
        </section>

        <section className="authorizations-grid">
          {authorizations.map((auth, index) => (
            <div key={index} className="auth-card">
              <div className="auth-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <h3>{auth.name}</h3>
              <p className="auth-description">{auth.description}</p>
              <p className="auth-authority">Authority: {auth.authority}</p>
              <p className="auth-scope">Scope: {auth.scope}</p>
            </div>
          ))}
        </section>

        <section className="certification-process">
          <h2>Our Certification Process</h2>
          <div className="process-steps">
            <div className="step-item">
              <div className="step-number">1</div>
              <h3>Rigorous Assessment</h3>
              <p>Comprehensive evaluation of our quality management systems</p>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h3>Regular Audits</h3>
              <p>Periodic audits to maintain certification standards</p>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h3>Continuous Improvement</h3>
              <p>Ongoing enhancement of processes and systems</p>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <h3>Compliance Monitoring</h3>
              <p>Regular monitoring of regulatory compliance</p>
            </div>
          </div>
        </section>

        <section className="partnership-authorizations">
          <h2>Partnership Authorizations</h2>
          <div className="partners-grid">
            <div className="partner-card">
              <h3>Authorized Distributor</h3>
              <p>Official distributor for leading marine equipment manufacturers</p>
            </div>
            <div className="partner-card">
              <h3>Service Partner</h3>
              <p>Authorized service provider for marine equipment maintenance</p>
            </div>
            <div className="partner-card">
              <h3>Technical Support</h3>
              <p>Authorized technical support and installation partner</p>
            </div>
          </div>
        </section>

        <section className="global-compliance">
          <h2>Global Compliance</h2>
          <div className="compliance-grid">
            <div className="compliance-item">
              <h3>International Standards</h3>
              <p>Compliance with international maritime standards and regulations</p>
            </div>
            <div className="compliance-item">
              <h3>Regional Requirements</h3>
              <p>Meeting specific regional and national requirements</p>
            </div>
            <div className="compliance-item">
              <h3>Industry Best Practices</h3>
              <p>Adherence to maritime industry best practices</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Authorizations;
