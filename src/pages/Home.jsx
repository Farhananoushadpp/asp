/**
 * ASP Global Marine Trading LLC - Home Page
 *
 * Comprehensive home page with multiple sections
 * Technology: React functional component with JSX
 */

import Hero from "../components/Hero.jsx";
import { Ship, Shield, Globe, Award, Anchor, Package, Users, CheckCircle } from "lucide-react";
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
                src="/logo.svg"
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

          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">
                <Ship size={40} />
              </div>
              <h3 className="service-title">Marine Equipment</h3>
              <p className="service-description">
                High-quality marine equipment and machinery for vessels of all types, ensuring operational excellence and reliability.
              </p>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <Package size={40} />
              </div>
              <h3 className="service-title">Spare Parts Supply</h3>
              <p className="service-description">
                Genuine spare parts and consumables for marine engines, deck equipment, and mechanical systems with fast delivery.
              </p>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <Shield size={40} />
              </div>
              <h3 className="service-title">Safety Solutions</h3>
              <p className="service-description">
                Comprehensive safety equipment and solutions meeting international maritime safety standards and regulations.
              </p>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <Anchor size={40} />
              </div>
              <h3 className="service-title">Offshore Support</h3>
              <p className="service-description">
                Specialized offshore installation support with technical expertise and logistics solutions for remote operations.
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

          <div className="why-choose-content">
            <div className="why-choose-image">
              <img src="/about.jpg" alt="ASP Global Marine Excellence" />
            </div>

            <div className="why-choose-list">
              <div className="why-item">
                <div className="why-icon">
                  <CheckCircle size={24} />
                </div>
                <div className="why-text">
                  <h4>Quality Assurance</h4>
                  <p>Certified products meeting international maritime standards with full compliance documentation.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-icon">
                  <CheckCircle size={24} />
                </div>
                <div className="why-text">
                  <h4>Global Network</h4>
                  <p>Extensive sourcing capabilities and partnerships with leading manufacturers worldwide.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-icon">
                  <CheckCircle size={24} />
                </div>
                <div className="why-text">
                  <h4>Technical Expertise</h4>
                  <p>Experienced team with deep product knowledge and maritime industry understanding.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-icon">
                  <CheckCircle size={24} />
                </div>
                <div className="why-text">
                  <h4>Fast Delivery</h4>
                  <p>Efficient logistics and supply chain management ensuring timely product delivery.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-icon">
                  <CheckCircle size={24} />
                </div>
                <div className="why-text">
                  <h4>Competitive Pricing</h4>
                  <p>Cost-effective solutions without compromising on quality or service excellence.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-icon">
                  <CheckCircle size={24} />
                </div>
                <div className="why-text">
                  <h4>24/7 Support</h4>
                  <p>Round-the-clock customer support for urgent requirements and technical assistance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="global-reach-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Global Reach</h2>
            <p className="section-subtitle">
              Serving the maritime industry across continents and oceans
            </p>
          </div>

          <div className="global-reach-content">
            <div className="reach-stats">
              <div className="reach-stat-item">
                <Globe size={48} />
                <div className="reach-stat-number">50+</div>
                <div className="reach-stat-label">Countries Worldwide</div>
              </div>

              <div className="reach-stat-item">
                <Users size={48} />
                <div className="reach-stat-number">500+</div>
                <div className="reach-stat-label">Satisfied Clients</div>
              </div>

              <div className="reach-stat-item">
                <Award size={48} />
                <div className="reach-stat-number">18+</div>
                <div className="reach-stat-label">Years of Excellence</div>
              </div>
            </div>

            <div className="reach-description">
              <p>
                ASP Global Marine Trading LLC has established a strong presence in the international maritime industry, 
                serving clients across major shipping routes and offshore installations worldwide. Our global network 
                enables us to provide seamless service delivery, regardless of location or time zone.
              </p>
              <p>
                From the Middle East to Asia-Pacific, Europe to the Americas, we ensure that quality marine equipment 
                and spare parts reach our clients efficiently. Our commitment to excellence and customer satisfaction 
                has made us a preferred partner for shipowners, operators, and marine service companies globally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
