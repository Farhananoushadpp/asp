/**
 * ASP Global Marine Trading LLC - Home Page
 *
 * Comprehensive home page with multiple sections
 * Technology: React functional component with JSX
 */

import Hero from "../components/Hero.jsx";
import {
  Ship,
  Shield,
  Globe,
  Award,
  Anchor,
  Package,
  Users,
  CheckCircle,
} from "lucide-react";
import "../styles/pages/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />

      {/* Who We Are Section */}
      <section className="who-we-are-section">
        <div className="container">
          <div className="section-header">
            {/* <span className="section-label">COMPANY OVERVIEW</span> */}
            <h2 className="section-title">Who We Are</h2>
            <p className="section-subtitle">
              Your trusted partner in marine and offshore solutions since 2005
            </p>
          </div>

          <div className="content-with-icon">
            <div className="content-text">
              <p>
                ASP Global Marine is a specialized marine and offshore product
                solution provider delivering high-quality equipment, spare
                parts, and consumbales to vessels and offshore installations
                worldwide. With a strong focus on operational reliability and
                compliance requirements of the maritime industry, ASP Global
                offers product solutions for equipment/mechanical systems,
                safety items, deck/engine stores and engine spares.
              </p>
              <p>
                This is backed by extensive sourcing capabilities and technical
                product knowledge, which enables ASP Global marine to serve
                shipowners, ship managers, operators, and marine service
                companies throughout the maritime sector.
              </p>
            </div>
            <div className="content-icon">
              <img
                src="/logo.webp"
                alt="ASP Global Marine Trading LLC"
                className="asp-global-icon"
              />
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
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive marine solutions tailored to your operational needs
            </p>
          </div>

          <div className="services-grid-classic">
            <div className="service-item-classic">
              <div className="service-icon-classic">
                <Ship size={48} />
              </div>
              <h3 className="service-title">Marine Equipment</h3>
              <p className="service-description">
                High-quality marine equipment and machinery for vessels of all
                types, ensuring operational excellence and reliability.
              </p>
            </div>

            <div className="service-item-classic">
              <div className="service-icon-classic">
                <Package size={48} />
              </div>
              <h3 className="service-title">Spare Parts Supply</h3>
              <p className="service-description">
                Genuine spare parts and consumables for marine engines, deck
                equipment, and mechanical systems with fast delivery.
              </p>
            </div>

            <div className="service-item-classic">
              <div className="service-icon-classic">
                <Shield size={48} />
              </div>
              <h3 className="service-title">Safety Solutions</h3>
              <p className="service-description">
                Comprehensive safety equipment and solutions meeting
                international maritime safety standards and regulations.
              </p>
            </div>

            <div className="service-item-classic">
              <div className="service-icon-classic">
                <Anchor size={48} />
              </div>
              <h3 className="service-title">Offshore Support</h3>
              <p className="service-description">
                Specialized offshore installation support with technical
                expertise and logistics solutions for remote operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose ASP Global Marine</h2>
            <p className="section-subtitle">
              Your trusted partner for quality, reliability, and excellence
            </p>
          </div>

          <div className="why-choose-modern">
            <div className="why-choose-visual">
              <div className="why-stats-grid">
                <div className="stat-card">
                  <div className="stat-number">18+</div>
                  <div className="stat-label">Years of Excellence</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Global Clients</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Countries Served</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support Available</div>
                </div>
              </div>
              <div className="why-choose-image-top">
                <img src="/4.webp" alt="ASP Global Marine Operations" />
                <div className="image-overlay">
                  <div className="overlay-text">
                    <h3>Global Operations</h3>
                    <p>Worldwide marine equipment supply chain</p>
                  </div>
                </div>
              </div>
              <div className="why-choose-image-modern">
                <img src="/about.jpg" alt="ASP Global Marine Excellence" />
                <div className="image-overlay">
                  <div className="overlay-text">
                    <h3>Maritime Excellence Since 2006</h3>
                    <p>Delivering quality marine solutions worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-choose-benefits">
              <div className="benefit-item-modern">
                <div className="benefit-icon-wrapper">
                  <div className="benefit-icon">
                    <Award size={28} />
                  </div>
                  <div className="benefit-number">01</div>
                </div>
                <div className="benefit-content">
                  <h4>Quality Assurance</h4>
                  <p>
                    Certified products meeting international maritime standards
                    with full compliance documentation and rigorous testing.
                  </p>
                  <div class="benefit-features">
                    <span class="benefit-tag">ISO Certified</span>
                    <span class="benefit-tag">SOLAS Compliant</span>
                  </div>
                </div>
              </div>

              <div className="benefit-item-modern">
                <div className="benefit-icon-wrapper">
                  <div className="benefit-icon">
                    <Globe size={28} />
                  </div>
                  <div className="benefit-number">02</div>
                </div>
                <div className="benefit-content">
                  <h4>Global Network</h4>
                  <p>
                    Extensive sourcing capabilities and partnerships with
                    leading manufacturers worldwide for comprehensive coverage.
                  </p>
                  <div class="benefit-features">
                    <span class="benefit-tag">Worldwide Sourcing</span>
                    <span class="benefit-tag">Premium Partners</span>
                  </div>
                </div>
              </div>

              <div className="benefit-item-modern">
                <div className="benefit-icon-wrapper">
                  <div className="benefit-icon">
                    <Users size={28} />
                  </div>
                  <div className="benefit-number">03</div>
                </div>
                <div className="benefit-content">
                  <h4>Technical Expertise</h4>
                  <p>
                    Experienced team with deep product knowledge and maritime
                    industry understanding for optimal solutions.
                  </p>
                  <div class="benefit-features">
                    <span class="benefit-tag">Expert Team</span>
                    <span class="benefit-tag">Industry Knowledge</span>
                  </div>
                </div>
              </div>

              <div className="benefit-item-modern">
                <div className="benefit-icon-wrapper">
                  <div className="benefit-icon">
                    <Ship size={28} />
                  </div>
                  <div className="benefit-number">04</div>
                </div>
                <div className="benefit-content">
                  <h4>Fast Delivery</h4>
                  <p>
                    Efficient logistics and supply chain management ensuring
                    timely product delivery to any location worldwide.
                  </p>
                  <div class="benefit-features">
                    <span class="benefit-tag">Quick Dispatch</span>
                    <span class="benefit-tag">Global Logistics</span>
                  </div>
                </div>
              </div>

              <div className="benefit-item-modern">
                <div className="benefit-icon-wrapper">
                  <div className="benefit-icon">
                    <Anchor size={28} />
                  </div>
                  <div className="benefit-number">05</div>
                </div>
                <div className="benefit-content">
                  <h4>Competitive Pricing</h4>
                  <p>
                    Cost-effective solutions without compromising on quality or
                    service excellence for maximum value.
                  </p>
                  <div class="benefit-features">
                    <span class="benefit-tag">Best Value</span>
                    <span class="benefit-tag">Quality Assured</span>
                  </div>
                </div>
              </div>

              {/* <div className="benefit-item-modern">
                <div className="benefit-icon-wrapper">
                  <div className="benefit-icon">
                    <Shield size={28} />
                  </div>
                  <div className="benefit-number">06</div>
                </div>
                <div className="benefit-content">
                  <h4>24/7 Support</h4>
                  <p>
                    Round-the-clock customer support for urgent requirements and
                    technical assistance whenever you need us.
                  </p>
                  <div class="benefit-features">
                    <span class="benefit-tag">Always Available</span>
                    <span class="benefit-tag">Emergency Support</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
