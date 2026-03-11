/**
 * ASP Global Marine Trading LLC - About Us Page (Single Page)
 *
 * Comprehensive About Us page with all sections
 * No sub-pages - single scrollable page design
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import {
  Anchor,
  Ship,
  Target,
  Eye,
  Award,
  ShieldCheck,
  Users,
  TrendingUp,
  CheckCircle,
  Shield,
  Building2,
  Settings,
  Wrench,
  MessageSquare,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/About.css";

const About = () => {
  // Hero slider data - 3 slides with background images
  const heroSlides = [
    {
      id: 1,
      image: "/about1.webp",
      heading: "Global Marine Excellence",
      description:
        "Delivering world-class marine equipment and spare parts to vessels across 50+ countries with unmatched reliability and technical expertise.",
    },
    {
      id: 2,
      image: "/about2.webp",
      heading: "Trusted Industry Partner",
      description:
        "Serving 500+ global clients since 2006 with ISO 9001:2015 certified quality management and SOLAS compliant safety standards.",
    },
    {
      id: 3,
      image: "/about3.webp",
      heading: "Comprehensive Solutions",
      description:
        "From engine spares to safety equipment, we provide 9500+ products ensuring your vessels operate at peak performance worldwide.",
    },
    {
      id: 4,
      image: "/3.webp",
      heading: "Comprehensive Solutions",
      description:
        "From engine spares to safety equipment, we provide 9500+ products ensuring your vessels operate at peak performance worldwide.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate hero slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

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
      {/* Hero Slider Section */}
      <section className="about-hero-slider">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 1 : 0,
            }}
          >
            <div className="hero-slide-overlay"></div>
            <div className="hero-slide-content">
              <h1 className="hero-slide-heading">{slide.heading}</h1>
              <p className="hero-slide-description">{slide.description}</p>
            </div>
          </div>
        ))}

        {/* Slider Navigation Arrows */}
        <button
          className="slider-arrow slider-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          className="slider-arrow slider-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Slider Indicators */}
        <div className="slider-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <div
        className="container-full"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* Who We Are Section - Modern Split Layout */}
      <section className="about-section" id="who-we-are">
        <div className="section-header">
          <span className="section-label">Company Overview</span>
          <h2>Who We Are</h2>
          <p>
            Your trusted partner in marine and offshore solutions since 2006
          </p>
        </div>

        <div className="about-split-layout">
          <div className="about-image-carousel">
            <div className="carousel-container">
              {cardImages.slice(0, 4).map((card, index) => (
                <div
                  key={card.id}
                  className={`about-carousel-slide ${index === activeCard % 4 ? "active" : ""}`}
                >
                  <img src={card.src} alt={card.title} />
                  <div className="slide-overlay">
                    <span className="slide-title">{card.title}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Carousel Indicators */}
            <div className="carousel-dots">
              {cardImages.slice(0, 4).map((_, index) => (
                <span
                  key={index}
                  className={`carousel-dot ${index === activeCard % 4 ? "active" : ""}`}
                  onClick={() => setActiveCard(index)}
                />
              ))}
            </div>
          </div>
          <div className="about-content-text">
            <h3 className="about-subtitle">Marine Excellence Since 2006</h3>
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
            <div className="about-cta">
              <Link to="/products" className="btn btn-primary">
                Explore Our Products
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
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
                <p>
                  To deliver accurate, reliable, and compliant marine solutions
                  at the right time, every time. We focus on operational
                  reliability, technical compliance, and long-term client
                  partnerships.
                </p>
              </div>
              <div className="mv-card">
                <div className="mv-header">
                  <Eye size={28} />
                  <h3>Our Vision</h3>
                </div>
                <p>
                  To become a globally trusted marine supply partner known for
                  technical excellence and operational reliability, serving
                  clients worldwide with unparalleled expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications">
          <div className="std-container">
            <div className="certifications-header">
              <span className="section-label">Standards</span>
              <h2 className="section-title">Our Certifications</h2>
              <p className="section-subtitle">
                Internationally recognized certifications ensuring quality and
                compliance
              </p>
            </div>
            <div className="certifications-grid">
              <div className="certification-card">
                <div className="certification-icon">ISO</div>
                <h3>ISO 9001:2015</h3>
                <p>Quality Management</p>
              </div>
              <div className="certification-card">
                <div className="certification-icon">SOLAS</div>
                <h3>SOLAS</h3>
                <p>Safety Compliance</p>
              </div>
              <div className="certification-card">
                <div className="certification-icon">IMO</div>
                <h3>IMO Certified</h3>
                <p>Maritime Organization</p>
              </div>
              <div className="certification-card">
                <div className="certification-icon">CLS</div>
                <h3>Class Approved</h3>
                <p>DNV, ABS, Lloyd&apos;s</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Policy */}
        <section id="quality-policy">
          <div className="std-container">
            <div className="quality-header">
              <span className="section-label">Commitment</span>
              <h2 className="section-title">Quality Policy</h2>
              <p className="section-subtitle">
                Our dedication to excellence in every aspect of our operations
              </p>
            </div>
            <div className="quality-content">
              <p className="quality-statement">
                ASP Global Marine is committed to delivering accurate, reliable,
                and compliant marine solutions at the right time, every time.
                Our quality management system ensures all products and services
                meet the highest standards.
              </p>
              <div className="quality-grid">
                <div className="quality-card">
                  <div className="quality-icon">
                    <Users size={36} />
                  </div>
                  <h3>Customer Focus</h3>
                  <p>Exceeding expectations through dedicated service</p>
                </div>
                <div className="quality-card">
                  <div className="quality-icon">
                    <CheckCircle size={36} />
                  </div>
                  <h3>Compliance Excellence</h3>
                  <p>Meeting international maritime standards</p>
                </div>
                <div className="quality-card">
                  <div className="quality-icon">
                    <Shield size={36} />
                  </div>
                  <h3>Reliability Assurance</h3>
                  <p>Consistent performance and product quality</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients */}
        {/* Clients We Serve Section */}
        <section id="clients">
          <div className="std-container">
            <div className="clients-header">
              <span className="section-label">Our Network</span>
              <h2 className="section-title">Clients We Serve</h2>
              <p className="section-subtitle">
                Trusted by leading maritime companies worldwide
              </p>
            </div>
            <div className="clients-grid">
              <div className="client-card">
                <div className="client-icon">
                  <Ship size={36} />
                </div>
                <h3>Ship Owners</h3>
                <ul>
                  <li>Bulk Carriers</li>
                  <li>Container Lines</li>
                  <li>Tankers</li>
                  <li>Ro-Ro Vessels</li>
                </ul>
              </div>
              <div className="client-card">
                <div className="client-icon">
                  <Settings size={36} />
                </div>
                <h3>Ship Managers</h3>
                <ul>
                  <li>Third-Party Managers</li>
                  <li>Fleet Companies</li>
                  <li>Technical Services</li>
                </ul>
              </div>
              <div className="client-card">
                <div className="client-icon">
                  <Wrench size={36} />
                </div>
                <h3>Marine Services</h3>
                <ul>
                  <li>Engineering Firms</li>
                  <li>Repair & Maintenance</li>
                  <li>Survey & Inspection</li>
                </ul>
              </div>
              <div className="client-card">
                <div className="client-icon">
                  <Anchor size={36} />
                </div>
                <h3>Offshore Operators</h3>
                <ul>
                  <li>Platform Operators</li>
                  <li>Drilling Companies</li>
                  <li>FPSO Operators</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Valued Clients Section */}
        <section id="client-logos">
          <div className="std-container">
            <div className="clients-showcase-header">
              <span className="section-label">Partners</span>
              <h2 className="section-title">Our Valued Clients</h2>
              <p className="section-subtitle">
                Trusted by leading maritime companies across the globe
              </p>
            </div>
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
        <section id="message">
          <div className="std-container">
            <div className="section-title-center">
              <MessageSquare size={32} />
              <h2>Message from Management</h2>
            </div>
            <div className="message-card">
              <div className="quote-icon">&ldquo;</div>
              <div className="message-body">
                <p>
                  Welcome to ASP Global Marine Trading LLC. Since our
                  establishment in 2005, we have been committed to excellence in
                  the marine and offshore industry. Our journey has been guided
                  by a simple yet powerful principle: delivering quality
                  products and services that our clients can rely on, every
                  time.
                </p>
                <p>
                  As part of the Ocean Serenity Group, we benefit from shared
                  expertise, resources, and a collective vision for excellence
                  in maritime services. We look forward to serving you with the
                  same dedication and excellence that has defined ASP Global
                  Marine for nearly two decades.
                </p>
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
