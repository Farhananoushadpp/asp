/**
 * ASP Global Marine Trading LLC - Guangzhou HG Marine Co. Ltd. Page
 *
 * Detailed information about Guangzhou HG Marine Co. Ltd.
 * Professional marine corporate design with blue card theme
 */

import {
  Ship,
  Settings,
  Zap,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import "../styles/pages/Authorization.css";

const GuangzhouHGMarine = () => {
  const handleContactClick = () => {
    window.location.href = "/contact";
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi, I'm interested in Guangzhou HG Marine Co. Ltd. products. Please provide more information and pricing."
    );
    window.open(`https://wa.me/971525478137?text=${message}`, "_blank");
  };

  return (
    <div className="authorization-page">
      {/* Header Section */}
      <header className="auth-header">
        <div className="container">
          <div className="header-content">
            <div className="header-text">
              <h1>Guangzhou HG Marine Co. Ltd.</h1>
              <p className="header-description">
                Founded in 2005, Guangzhou HG Marine Co. Ltd. develops and manufactures innovative marine steering gear and rim thrusters, backed by over 100 patents in steering and electric propulsion technology.
              </p>
            </div>
            <div className="header-visual">
              <div className="certification-badges">
                <div className="badge">
                  <CheckCircle className="badge-icon" />
                  <span className="badge-text">100+ Patents</span>
                </div>
                <div className="badge">
                  <CheckCircle className="badge-icon" />
                  <span className="badge-text">ISO 9001</span>
                </div>
                <div className="badge">
                  <CheckCircle className="badge-icon" />
                  <span className="badge-text">Class Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Company Overview</h2>
              <p>
                Guangzhou HG Marine Co. Ltd. is a leading innovator in marine propulsion technology, specializing in advanced steering gear systems and rim thrusters. With nearly two decades of experience, the company has established itself as a pioneer in electric propulsion technology, holding over 100 patents that revolutionize marine vessel maneuverability and efficiency.
              </p>
              <div className="key-highlights">
                <div className="highlight-item">
                  <Award className="highlight-icon" />
                  <div>
                    <h4>Founded 2005</h4>
                    <p>Nearly 20 years of innovation</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <Settings className="highlight-icon" />
                  <div>
                    <h4>100+ Patents</h4>
                    <p>Steering & electric propulsion technology</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <Ship className="highlight-icon" />
                  <div>
                    <h4>Global Presence</h4>
                    <p>International marine market leader</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overview-image">
              <img
                src="/Authorisation/Guangzhou/logo.webp"
                alt="Guangzhou HG Marine Co. Ltd. Logo"
                className="company-logo-large"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="logo-fallback" style={{ display: "none" }}>
                Guangzhou HG Marine
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="main-product-section">
        <div className="container">
          <div className="section-header">
            <h2>Latest Technology Rim Thruster</h2>
            <p className="section-subtitle">
              Revolutionary propulsion system for enhanced vessel performance
            </p>
          </div>
          
          <div className="product-showcase">
            <div className="product-description">
              <h3>Advanced Propulsion Technology</h3>
              <p>
                The Latest Technology Rim Thruster is composed of ring motor, propeller, water lubricated bearing and energy-saving duct. The motor directly drives the propeller to generate thrust, and the energy-saving duct further improves the thrust force.
              </p>
              
              <div className="product-features">
                <h4>Key Features:</h4>
                <ul className="features-list">
                  <li>
                    <Zap className="feature-icon" />
                    <span>No Engagement, Less Noise, No shaft</span>
                  </li>
                  <li>
                    <Zap className="feature-icon" />
                    <span>No Transmission, High Efficiency, No appendage</span>
                  </li>
                  <li>
                    <Zap className="feature-icon" />
                    <span>Less Resistance, Lighter Weight, No seal</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="product-images">
              <div className="image-gallery">
                <img
                  src="/Authorisation/Guangzhou/1.webp"
                  alt="Rim Thruster Product 1"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <img
                  src="/Authorisation/Guangzhou/2.webp"
                  alt="Rim Thruster Product 2"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <img
                  src="/Authorisation/Guangzhou/3.webp"
                  alt="Rim Thruster Product 3"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="technical-specs">
        <div className="container">
          <div className="section-header">
            <h2>Technical Advantages</h2>
            <p className="section-subtitle">
              Superior engineering for optimal marine performance
            </p>
          </div>
          
          <div className="specs-grid">
            <div className="spec-card">
              <div className="spec-icon">
                <Settings />
              </div>
              <h3>Direct Drive Technology</h3>
              <p>
                Motor directly drives the propeller without intermediate transmission, eliminating power loss and mechanical complexity.
              </p>
            </div>
            
            <div className="spec-card">
              <div className="spec-icon">
                <Zap />
              </div>
              <h3>Energy-Saving Design</h3>
              <p>
                Advanced duct design improves thrust efficiency while reducing energy consumption and operational costs.
              </p>
            </div>
            
            <div className="spec-card">
              <div className="spec-icon">
                <Ship />
              </div>
              <h3>Water Lubricated Bearings</h3>
              <p>
                Environmentally friendly water lubrication eliminates oil contamination risks and reduces maintenance requirements.
              </p>
            </div>
            
            <div className="spec-card">
              <div className="spec-icon">
                <Award />
              </div>
              <h3>Compact & Lightweight</h3>
              <p>
                Reduced vessel weight and improved space utilization without compromising on power and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-text">
              <h2>Interested in Guangzhou HG Marine Products?</h2>
              <p>
                Get detailed technical specifications, pricing information, and expert consultation for your marine propulsion requirements. Our team is ready to assist you with the latest technology solutions.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <Phone className="contact-icon" />
                  <div>
                    <h4>Phone</h4>
                    <p>+971 4 572 4542</p>
                  </div>
                </div>
                <div className="contact-method">
                  <Mail className="contact-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>info@aspglobalmarine.com</p>
                  </div>
                </div>
                <div className="contact-method">
                  <MessageCircle className="contact-icon" />
                  <div>
                    <h4>WhatsApp</h4>
                    <p>+971 52 547 8137</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-actions">
              <button className="cta-button primary" onClick={handleContactClick}>
                Request Technical Details
                <ArrowRight className="button-icon" />
              </button>
              <button className="cta-button secondary" onClick={handleWhatsAppClick}>
                <MessageCircle className="button-icon" />
                Contact via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Authorization */}
      <section className="back-navigation">
        <div className="container">
          <button 
            className="back-button"
            onClick={() => window.history.back()}
          >
            <ArrowRight className="back-icon" />
            Back to Authorization Partners
          </button>
        </div>
      </section>
    </div>
  );
};

export default GuangzhouHGMarine;
