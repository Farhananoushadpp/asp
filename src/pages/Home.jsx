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
import { useState, useEffect } from "react";

const Home = () => {
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

      {/* Why Choose Us Section - Simplified & Unique Design */}
      <section className="why-choose-simple">
        <div className="container">
          <div className="why-header">
            <h2 className="why-title">Why Choose Us</h2>
            <p className="why-subtitle">
              Five reasons why marine professionals trust ASP Global Marine
            </p>
          </div>

          <div className="why-cards-row">
            {/* Card 1 - Quality */}
            <div className="why-card">
              <div className="why-card-icon">
                <Award size={32} />
              </div>
              <h3 className="why-card-title">Quality Assured</h3>
              <p className="why-card-text">
                ISO certified products meeting international maritime standards
              </p>
            </div>

            {/* Card 2 - Global */}
            <div className="why-card">
              <div className="why-card-icon">
                <Globe size={32} />
              </div>
              <h3 className="why-card-title">Global Network</h3>
              <p className="why-card-text">
                Sourcing from leading manufacturers across 50+ countries
              </p>
            </div>

            {/* Card 3 - Expertise */}
            <div className="why-card">
              <div className="why-card-icon">
                <Users size={32} />
              </div>
              <h3 className="why-card-title">Expert Team</h3>
              <p className="why-card-text">
                18+ years of maritime industry experience and technical knowledge
              </p>
            </div>

            {/* Card 4 - Delivery */}
            <div className="why-card">
              <div className="why-card-icon">
                <Ship size={32} />
              </div>
              <h3 className="why-card-title">Fast Delivery</h3>
              <p className="why-card-text">
                Efficient logistics ensuring timely delivery worldwide
              </p>
            </div>

            {/* Card 5 - Value */}
            <div className="why-card">
              <div className="why-card-icon">
                <Anchor size={32} />
              </div>
              <h3 className="why-card-title">Best Value</h3>
              <p className="why-card-text">
                Competitive pricing without compromising on quality
              </p>
            </div>
          </div>

          {/* Simple Stats Bar */}
          <div className="why-stats-bar">
            <div className="why-stat">
              <span className="why-stat-number">18+</span>
              <span className="why-stat-label">Years</span>
            </div>
            <div className="why-stat-divider"></div>
            <div className="why-stat">
              <span className="why-stat-number">500+</span>
              <span className="why-stat-label">Clients</span>
            </div>
            <div className="why-stat-divider"></div>
            <div className="why-stat">
              <span className="why-stat-number">50+</span>
              <span className="why-stat-label">Countries</span>
            </div>
            <div className="why-stat-divider"></div>
            <div className="why-stat">
              <span className="why-stat-number">24/7</span>
              <span className="why-stat-label">Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
