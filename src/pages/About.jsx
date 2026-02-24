/**
 * ASP Global Marine Trading LLC - About Us Page (Single Page)
 *
 * Comprehensive About Us page with all sections
 * No sub-pages - single scrollable page design
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        {/* Moving Ship */}
        <div className="moving-ship-container">
          <img 
            src="/ship.svg" 
            alt="Marine Vessel" 
            className="moving-ship"
          />
          {/* Wake Trail */}
          <div className="ship-wake">
            <div className="wake-line wake-1"></div>
            <div className="wake-line wake-2"></div>
            <div className="wake-line wake-3"></div>
          </div>
        </div>

        <div className="about-hero-content">
          <h1 className="about-hero-title">About ASP Global Marine</h1>
          <p className="about-hero-subtitle">
            Your trusted partner in marine and offshore solutions since 2005
          </p>
        </div>
      </section>

      <div className="container">
        {/* Who We Are Section */}
        <section className="about-section" id="who-we-are">
          <div className="section-header">
            <span className="section-label">Company Overview</span>
            <h2>Who We Are</h2>
          </div>
          <div className="section-content">
            <div className="content-with-icon">
              <div className="content-text">
                <p>
                  Founded in 2005 and part of Ocean Serenity Group, ASP Global
                  Marine Trading LLC has established itself as a leading supplier of
                  marine and offshore equipment. With strong sourcing networks
                  across Europe and Asia, we understand the critical importance of
                  quality, reliability, and timely delivery.
                </p>
                <p>
                  Our commitment to excellence has earned us the trust of ship
                  owners, operators, and offshore installations worldwide. We pride
                  ourselves on our technical expertise, competitive pricing, and
                  unwavering dedication to customer satisfaction.
                </p>
              </div>
              <div className="content-icon">
                <img 
                  src="/asplogo.svg" 
                  alt="ASP Global Marine Trading LLC" 
                  className="asp-global-icon"
                />
              </div>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">18+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Global Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">9500+</div>
              <div className="stat-label">Products</div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section
          className="about-section mission-vision-section"
          id="mission-vision"
        >
          <div className="mission-vision-grid">
            <div className="mission-box">
              <div className="box-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To deliver accurate, reliable, and compliant marine solutions at
                the right time, every time. We focus on operational reliability,
                technical compliance, maritime industry standards, and long-term
                client partnerships.
              </p>
            </div>
            <div className="vision-box">
              <div className="box-icon">🌟</div>
              <h3>Our Vision</h3>
              <p>
                To become a globally trusted marine supply partner known for
                technical excellence and operational reliability. Serving
                shipowners, ship managers, operators, and offshore companies
                worldwide with unparalleled expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="about-section" id="certifications">
          <div className="section-header">
            <span className="section-label">Quality & Standards</span>
            <h2>Our Certifications</h2>
          </div>
          <div className="certifications-grid">
            <div className="cert-card">
              <div className="cert-icon">✓</div>
              <h4>ISO 9001:2015</h4>
              <p>Quality Management System</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">✓</div>
              <h4>SOLAS Compliance</h4>
              <p>Safety of Life at Sea Convention</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">✓</div>
              <h4>IMO Certified</h4>
              <p>International Maritime Organization</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">✓</div>
              <h4>Class Approved</h4>
              <p>DNV, ABS, Lloyd&apos;s Register</p>
            </div>
          </div>
        </section>

        {/* Quality Policy Section */}
        <section className="about-section" id="quality-policy">
          <div className="section-header">
            <span className="section-label">Our Commitment</span>
            <h2>Quality Policy</h2>
          </div>
          <div className="quality-content">
            <p className="quality-statement">
              ASP Global Marine Trading LLC is committed to delivering accurate,
              reliable, and compliant marine solutions at the right time, every
              time. Our quality management system ensures all products and
              services meet the highest standards of safety, reliability, and
              performance.
            </p>
            <div className="quality-principles">
              <div className="principle-item">
                <h4>Customer Focus</h4>
                <p>Understanding and exceeding customer expectations</p>
              </div>
              <div className="principle-item">
                <h4>Continuous Improvement</h4>
                <p>Regular review and enhancement of processes</p>
              </div>
              <div className="principle-item">
                <h4>Compliance Excellence</h4>
                <p>Strict adherence to international maritime standards</p>
              </div>
              <div className="principle-item">
                <h4>Reliability Assurance</h4>
                <p>Delivering products that meet performance standards</p>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="about-section" id="clients">
          <div className="section-header">
            <span className="section-label">Our Network</span>
            <h2>Clients We Serve</h2>
          </div>
          <div className="clients-grid">
            <div className="client-category">
              <h4>Ship Owners</h4>
              <ul>
                <li>Bulk Carrier Operators</li>
                <li>Container Shipping Lines</li>
                <li>Tanker Operators</li>
                <li>Ro-Ro Vessel Owners</li>
              </ul>
            </div>
            <div className="client-category">
              <h4>Ship Managers</h4>
              <ul>
                <li>Third-Party Ship Managers</li>
                <li>Fleet Management Companies</li>
                <li>Technical Service Providers</li>
              </ul>
            </div>
            <div className="client-category">
              <h4>Marine Services</h4>
              <ul>
                <li>Marine Engineering Firms</li>
                <li>Repair & Maintenance</li>
                <li>Survey & Inspection</li>
              </ul>
            </div>
            <div className="client-category">
              <h4>Offshore Operators</h4>
              <ul>
                <li>Platform Operators</li>
                <li>Drilling Companies</li>
                <li>FPSO Operators</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Message Section */}
        <section className="about-section message-section" id="message">
          <div className="section-header">
            <span className="section-label">Leadership</span>
            <h2>Message from Management</h2>
          </div>
          <div className="message-content">
            <p className="message-text">
              &ldquo;Welcome to ASP Global Marine Trading LLC. Since our
              establishment in 2005, we have been committed to excellence in the
              marine and offshore industry. Our journey has been guided by a
              simple yet powerful principle: delivering quality products and
              services that our clients can rely on, every time.&rdquo;
            </p>
            <p className="message-text">
              &ldquo;As part of the Ocean Serenity Group, we benefit from shared
              expertise, resources, and a collective vision for excellence in
              maritime services. We look forward to serving you with the same
              dedication and excellence that has defined ASP Global Marine for
              nearly two decades.&rdquo;
            </p>
            <div className="message-signature">
              <p className="signature-name">The Management Team</p>
              <p className="signature-title">ASP Global Marine Trading LLC</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
