/**
 * ASP Global Marine Trading LLC - Standard Hero Section
 *
 * Clean, standard hero design following industry best practices
 * Essential elements only for maximum conversion
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Hero.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero">
      {/* Image Background */}
      <div className="hero-video-background">
        <img src="/home.jpg" alt="ASP Global Marine Trading" className="hero-video" />
        {/* Image Overlay for content readability */}
        <div className="video-overlay"></div>
      </div>

      {/* Modern Hero Content */}
      <div className="hero-container">
        <div className={`hero-content ${isVisible ? "visible" : ""}`}>
          {/* Tagline - Preserved as requested */}
          <h1 className="hero-headline">
            "Driven by Quality. Propelled by Trust. "
          </h1>

          {/* Modern Subtitle with accent line */}
          <div className="hero-subtitle-wrapper">
            <span className="accent-line"></span>
            <p className="hero-subtitle">
              Global Marine Solutions Provider
            </p>
            <span className="accent-line"></span>
          </div>

          {/* Modern Description Card */}
          <div className="hero-description-card">
            <p className="hero-description">
              Premium marine equipment, genuine spare parts, and comprehensive logistics solutions for the global maritime industry.
            </p>
          </div>

          {/* Modern Call to Action with Icons */}
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary btn-glow">
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span>View Products</span>
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-outline">
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span>Get Quote</span>
            </Link>
          </div>
          
          {/* Professional Trust Indicators */}
          <div className="hero-trust-indicators">
            <span className="trust-badge">ISO 9001:2015</span>
            <span className="trust-badge">Global Network</span>
            <span className="trust-badge">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
