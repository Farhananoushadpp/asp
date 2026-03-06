/**
 * ASP Global Marine Trading LLC - About Us Page (Single Page)
 *
 * Comprehensive About Us page with all sections
 * No sub-pages - single scrollable page design
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import { Ship, Award, Users, Globe, Anchor } from "lucide-react";
import { useState, useEffect } from "react";
import "../styles/pages/About.css";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 5 background images with headings and descriptions for slideshow
  const backgroundImages = [
    {
      image: "/about.jpg",
      heading: "Marine Excellence Since 2006",
      description:
        "18+ years of delivering quality marine equipment and offshore solutions worldwide with unmatched expertise",
    },
    {
      image: "/Authorisation/Guangzhou/1.webp",
      heading: "Global Maritime Partner",
      description:
        "Serving 500+ clients across 50+ countries with comprehensive marine solutions and regulatory compliance",
    },
    {
      image: "/Authorisation/Beijing/1.webp",
      heading: "Authorized Marine Equipment",
      description:
        "Certified provider of marine equipment with full regulatory compliance and industry standards",
    },
    {
      image: "/Authorisation/Zhejiang/1.webp",
      heading: "Premium Quality Products",
      description:
        "Premium spare parts and equipment for vessels and offshore installations ensuring operational excellence",
    },
    {
      image: "/Authorisation/Hg/1.jpg",
      heading: "Reliable Offshore Support",
      description:
        "Comprehensive safety solutions and operational support for maritime industry worldwide",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="about-page">
      {/* Hero Section with Slideshow Background */}
      <section className="about-hero-slideshow">
        <div className="slideshow-container">
          {backgroundImages.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
              style={{
                backgroundImage: `linear-gradient(rgba(12, 45, 72, 0.7), rgba(12, 45, 72, 0.7)), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Slide Content */}
              <div className="slide-content">
                <h3 className="slide-heading">{slide.heading}</h3>
                <p className="slide-description">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Counter */}
        <div className="slide-counter">
          <span>{currentSlide + 1}</span> / {backgroundImages.length}
        </div>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {backgroundImages.map((_, index) => (
            <div
              key={index}
              className={`slide-indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-icon">
            <Ship size={48} />
          </div>
          <h1 className="hero-title">About ASP Global Marine</h1>
          <h2 className="hero-heading">
            Your Trusted Marine & Offshore Solutions Partner
          </h2>
          <p className="hero-description">
            Leading the maritime industry with comprehensive marine equipment,
            spare parts, and safety solutions since 2006. We serve vessels and
            offshore installations worldwide with unmatched expertise, quality
            products, and reliable service that ensures operational excellence
            and regulatory compliance.
          </p>
          <p className="hero-subtitle">Company Overview</p>

          {/* Badges */}
          <div className="hero-badges">
            <div className="hero-badge">
              <Award size={20} />
              <span>18+ Years Experience</span>
            </div>
            <div className="hero-badge">
              <Users size={20} />
              <span>500+ Global Clients</span>
            </div>
            <div className="hero-badge">
              <Globe size={20} />
              <span>50+ Countries Served</span>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <div
        className="container-full"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* Who We Are Section */}
        <section className="about-section" id="who-we-are">
          <div className="section-header">
            {/* <span className="section-label">Company Overview</span> */}
            <h2>Who We Are</h2>
          </div>
          <div className="section-content">
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
                  This is backed by extensive sourcing capabilities and
                  technical product knowledge, which enables ASP Global marine
                  to serve shipowners, ship managers, operators, and marine
                  service companies throughout the maritime sector.
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
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
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
              <div className="box-icon">
                <Ship size={48} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To deliver accurate, reliable, and compliant marine solutions at
                the right time, every time. We focus on operational reliability,
                technical compliance, maritime industry standards, and long-term
                client partnerships.
              </p>
            </div>
            <div className="vision-box">
              <div className="box-icon">
                <Anchor size={48} />
              </div>
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
            {/* <span className="section-label">Quality & Standards</span> */}
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
            {/* <span className="section-label">Our Commitment</span> */}
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
            {/* <span className="section-label">Our Network</span> */}
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

        {/* Client Logos Slider Section */}
        <section id="client-logos">
          <div className="section-header">
            {/* <span className="section-label">Trusted Partners</span> */}
            <h2>Our Valued Clients</h2>
          </div>
          <div className="client-logos-slider">
            <div className="client-logos-track">
              {/* Generate all numbered client logos dynamically */}
              {Array.from({ length: 47 }, (_, i) => i + 1).map((num) => (
                <div key={num} className="client-logo-item">
                  <img
                    src={`/Client%20Logo/Asset%20${num}.webp`}
                    alt={`Client Logo ${num}`}
                  />
                </div>
              ))}
              {/* Add the special logo */}
              <div className="client-logo-item">
                <img
                  src="/Client%20Logo/TovXkH.webp"
                  alt="Client Logo Special"
                />
              </div>
              {/* Duplicate set for seamless loop */}
              {Array.from({ length: 47 }, (_, i) => i + 1).map((num) => (
                <div key={`duplicate-${num}`} className="client-logo-item">
                  <img
                    src={`/Client%20Logo/Asset%20${num}.webp`}
                    alt={`Client Logo ${num}`}
                  />
                </div>
              ))}
              {/* Duplicate the special logo */}
              <div className="client-logo-item">
                <img
                  src="/Client%20Logo/TovXkH.webp"
                  alt="Client Logo Special"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Message Section */}
        <section className="about-section message-section" id="message">
          <div className="section-header">
            {/* <span className="section-label">Leadership</span> */}
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
