/**
 * ASP Global Marine Trading LLC - Ocean Wave Hero Section
 *
 * Modern hero design with ocean wave SVG background
 * Floating ship/anchor animations
 * ASP Ocean Blue Theme
 */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Ship, Anchor, ChevronDown } from "lucide-react";
import "../styles/components/Hero.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Use Font Loading API for better font loading detection
    const loadFont = async () => {
      try {
        const font = new FontFace(
          "Amsterdam Signature",
          "url(./amsterdam-signature.otf)",
        );
        await font.load();
        document.fonts.add(font);

        // Add font-loaded class to headline
        const headline = document.querySelector(".hero-headline");
        if (headline) {
          headline.classList.add("font-loaded");
        }
      } catch (error) {
        console.log("Font loading failed, using fallback");
        const headline = document.querySelector(".hero-headline");
        if (headline) {
          headline.classList.add("font-loaded");
        }
      }
    };

    loadFont();
  }, []);

  return (
    <section className="hero">
      {/* Ocean Wave SVG Background */}
      <div className="ocean-wave-background">
        <svg className="wave wave1" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#1b5f9c" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="wave wave2" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#2b6fa6" fillOpacity="0.4" d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,176C672,192,768,192,864,176C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="wave wave3" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#3b7eb7" fillOpacity="0.5" d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,240C672,256,768,256,864,240C960,224,1056,192,1152,192C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Floating Ship Animation */}
      <div className="floating-element ship-element">
        <Ship size={48} color="#ffffff" opacity={0.6} />
      </div>
      <div className="floating-element anchor-element">
        <Anchor size={36} color="#ffffff" opacity={0.5} />
      </div>

      {/* Video Background */}
      <div className="hero-video-background">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/homebanner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Video Overlay for content readability */}
        <div className="video-overlay"></div>
      </div>

      {/* Modern Hero Content */}
      <div className="hero-container">
        <div className={`hero-content ${isVisible ? "visible" : ""}`}>
          {/* Company Group - Top Position */}
          <div className="scrolling-text-banner">
            <div className="scrolling-text-content">
              <span className="scrolling-text">
                Part of Ocean Serenity Group
              </span>
            </div>
          </div>

          {/* Modern Subtitle with accent lines */}
          <div className="hero-subtitle-wrapper">
            <span className="accent-line"></span>
            <p className="hero-subtitle">Global Marine Solutions Provider</p>
            <span className="accent-line"></span>
          </div>

          {/* Tagline - Preserved as requested */}
          <h1 className="hero-headline">
            &quot;Driven by Quality. Propelled by Trust.&quot;
          </h1>

          {/* Modern Description Card */}
          <div className="hero-description-card">
            <p className="hero-description">
              Premium marine equipment, genuine spare parts, and comprehensive
              logistics solutions for the global maritime industry.
            </p>
          </div>

          {/* Modern Call to Action with Icons */}
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary btn-glow">
              <svg
                className="btn-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span>View Products</span>
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-outline">
              <svg
                className="btn-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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

          {/* Scroll Down Indicator */}
          <div className="scroll-indicator">
            <ChevronDown size={32} color="#ffffff" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
