/**
 * ASP Global Marine Trading LLC - About Us Page (Single Page)
 *
 * Comprehensive About Us page with all sections
 * No sub-pages - single scrollable page design
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import { Anchor, Ship, Target, Eye, Award, ShieldCheck, Users, TrendingUp, CheckCircle, Shield, Building2, Settings, Wrench, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import "../styles/pages/About.css";

const About = () => {
  // Card images for the carousel
  const cardImages = [
    { id: 1, src: "/1.webp", title: "Marine Excellence" },
    { id: 2, src: "/2.webp", title: "Global Operations" },
    { id: 3, src: "/3.webp", title: "Quality Equipment" },
    { id: 4, src: "/4.webp", title: "Safety Standards" },
    { id: 5, src: "/5.webp", title: "Technical Support" },
    { id: 6, src: "/products/deck/1.webp", title: "Deck Solutions" },
    { id: 7, src: "/products/enginestores/1.webp", title: "Engine Parts" },
    { id: 8, src: "/products/lsa&ffa/1.webp", title: "Safety Equipment" },
  ];

  const [activeCard, setActiveCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate cards every 3 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cardImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, cardImages.length]);

  const handleCardClick = () => {
    setActiveCard((prev) => (prev + 1) % cardImages.length);
  };
  return (
    <div className="about-page">
      {/* Simple Hero Section */}
      <section className="about-hero-simple">
        <div className="simple-hero-content">
          <h1 className="simple-hero-title">About ASP Global Marine</h1>
          <p className="simple-hero-desc">
            Your trusted partner for marine equipment, spare parts, and offshore solutions. 
            Delivering excellence since 2006 with 500+ clients across 50+ countries.
          </p>
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
            <p>
              Your trusted partner in marine and offshore solutions since 2006
            </p>
          </div>

          <div className="content-with-icon">
            <div className="content-text">
              <p>
                ASP Global Marine is a specialized marine and offshore product
                solution provider delivering high-quality equipment, spare
                parts, and consumables to vessels and offshore installations
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
              {/* Interactive Card Carousel */}
              <div 
                className="card-carousel"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleCardClick}
              >
                <div className="cards-container">
                  {cardImages.map((card, index) => (
                    <div
                      key={card.id}
                      className={`carousel-card ${
                        index === activeCard ? "active" : ""
                      } ${
                        index === (activeCard - 1 + cardImages.length) % cardImages.length
                          ? "exit"
                          : ""
                      }`}
                      style={{
                        zIndex: index === activeCard ? 10 : 1,
                      }}
                    >
                      <div className="card-image-wrapper">
                        <img
                          src={card.src}
                          alt={card.title}
                          className="card-image"
                        />
                      </div>
                      <div className="card-overlay">
                        <h4 className="card-title">{card.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Card indicators */}
                <div className="card-indicators">
                  {cardImages.map((_, index) => (
                    <span
                      key={index}
                      className={`indicator ${
                        index === activeCard ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCard(index);
                      }}
                    />
                  ))}
                </div>
                {/* Touch instruction */}
                <div className="touch-hint">
                  <span>Click or hover to view next</span>
                </div>
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

        {/* Mission & Vision */}
        <section className="std-section" id="mission-vision">
          <div className="std-container">
            <div className="mission-vision-row">
              <div className="mv-card">
                <div className="mv-header">
                  <Target size={28} />
                  <h3>Our Mission</h3>
                </div>
                <p>To deliver accurate, reliable, and compliant marine solutions at the right time, every time. We focus on operational reliability, technical compliance, and long-term client partnerships.</p>
              </div>
              <div className="mv-card">
                <div className="mv-header">
                  <Eye size={28} />
                  <h3>Our Vision</h3>
                </div>
                <p>To become a globally trusted marine supply partner known for technical excellence and operational reliability, serving clients worldwide with unparalleled expertise.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="std-section alt-bg" id="certifications">
          <div className="std-container">
            <div className="section-title-center">
              <Award size={32} />
              <h2>Our Certifications</h2>
            </div>
            <div className="cert-row">
              <div className="cert-badge">
                <div className="cert-icon-std">ISO</div>
                <div className="cert-info">
                  <strong>ISO 9001:2015</strong>
                  <span>Quality Management</span>
                </div>
              </div>
              <div className="cert-badge">
                <div className="cert-icon-std">SOLAS</div>
                <div className="cert-info">
                  <strong>SOLAS</strong>
                  <span>Safety Compliance</span>
                </div>
              </div>
              <div className="cert-badge">
                <div className="cert-icon-std">IMO</div>
                <div className="cert-info">
                  <strong>IMO Certified</strong>
                  <span>Maritime Organization</span>
                </div>
              </div>
              <div className="cert-badge">
                <div className="cert-icon-std">CLS</div>
                <div className="cert-info">
                  <strong>Class Approved</strong>
                  <span>DNV, ABS, Lloyd&apos;s</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Policy */}
        <section className="std-section" id="quality-policy">
          <div className="std-container">
            <div className="section-title-center">
              <ShieldCheck size={32} />
              <h2>Quality Policy</h2>
            </div>
            <div className="quality-main">
              <p className="quality-lead">ASP Global Marine is committed to delivering accurate, reliable, and compliant marine solutions at the right time, every time. Our quality management system ensures all products and services meet the highest standards.</p>
              <div className="quality-grid">
                <div className="q-item">
                  <Users size={24} />
                  <h4>Customer Focus</h4>
                  <p>Exceeding expectations</p>
                </div>
                <div className="q-item">
                  <TrendingUp size={24} />
                  <h4>Continuous Improvement</h4>
                  <p>Enhancing processes</p>
                </div>
                <div className="q-item">
                  <CheckCircle size={24} />
                  <h4>Compliance Excellence</h4>
                  <p>International standards</p>
                </div>
                <div className="q-item">
                  <Shield size={24} />
                  <h4>Reliability Assurance</h4>
                  <p>Performance standards</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="std-section alt-bg" id="clients">
          <div className="std-container">
            <div className="section-title-center">
              <Building2 size={32} />
              <h2>Clients We Serve</h2>
            </div>
            <div className="clients-grid-std">
              <div className="client-box">
                <Ship size={32} />
                <h4>Ship Owners</h4>
                <ul>
                  <li>Bulk Carriers</li>
                  <li>Container Lines</li>
                  <li>Tankers</li>
                  <li>Ro-Ro Vessels</li>
                </ul>
              </div>
              <div className="client-box">
                <Settings size={32} />
                <h4>Ship Managers</h4>
                <ul>
                  <li>Third-Party Managers</li>
                  <li>Fleet Companies</li>
                  <li>Technical Services</li>
                </ul>
              </div>
              <div className="client-box">
                <Wrench size={32} />
                <h4>Marine Services</h4>
                <ul>
                  <li>Engineering Firms</li>
                  <li>Repair & Maintenance</li>
                  <li>Survey & Inspection</li>
                </ul>
              </div>
              <div className="client-box">
                <Anchor size={32} />
                <h4>Offshore Operators</h4>
                <ul>
                  <li>Platform Operators</li>
                  <li>Drilling Companies</li>
                  <li>FPSO Operators</li>
                </ul>
              </div>
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

        {/* Message from Management */}
        <section className="std-section alt-bg" id="message">
          <div className="std-container">
            <div className="section-title-center">
              <MessageSquare size={32} />
              <h2>Message from Management</h2>
            </div>
            <div className="message-card">
              <div className="quote-icon">&ldquo;</div>
              <div className="message-body">
                <p>Welcome to ASP Global Marine Trading LLC. Since our establishment in 2005, we have been committed to excellence in the marine and offshore industry. Our journey has been guided by a simple yet powerful principle: delivering quality products and services that our clients can rely on, every time.</p>
                <p>As part of the Ocean Serenity Group, we benefit from shared expertise, resources, and a collective vision for excellence in maritime services. We look forward to serving you with the same dedication and excellence that has defined ASP Global Marine for nearly two decades.</p>
              </div>
              <div className="message-footer">
                <div className="signature-line"></div>
                <strong>The Management Team</strong>
                <span>ASP Global Marine Trading LLC</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
