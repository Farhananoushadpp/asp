/**
 * ASP Global Marine Trading LLC - Home Page
 *
 * Comprehensive home page with multiple sections
 * Technology: React functional component with JSX
 */

import Hero from "../components/Hero.jsx";
import { Link } from "react-router-dom";
import {
  Ship,
  Shield,
  Globe,
  Award,
  Anchor,
  Package,
  Users,
  CheckCircle,
  Settings,
  Clock,
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
          <div className="who-we-header">
            <span className="section-label">About Us</span>

            <h2 className="section-title">Who We Are</h2>
            <p className="section-subtitle">
              Your trusted partner in marine and offshore solutions since 2005
            </p>
          </div>

          <div className="who-we-content">
            <div className="who-we-text">
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
            <div className="who-we-visual">
              {/* Interactive Card Carousel - DO NOT CHANGE */}
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
                        index ===
                        (activeCard - 1 + cardImages.length) % cardImages.length
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section - Modern 8-Card Grid */}
      <section className="services-section-modern">
        <div className="container">
          <div className="section-header-modern">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title-modern">Our Comprehensive Services</h2>
            <p className="section-subtitle-modern">
              Premium marine solutions tailored to your operational needs
            </p>
          </div>

          <div className="services-grid-8">
            <div className="service-card-modern">
              <div className="service-icon-modern">
                <Ship size={48} />
              </div>
              <h3 className="service-title-modern">Marine Equipment</h3>
              <p className="service-desc-modern">
                High-quality marine equipment and machinery for vessels of all types
              </p>
              <Link to="/products" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card-modern">
              <div className="service-icon-modern">
                <Package size={48} />
              </div>
              <h3 className="service-title-modern">Spare Parts Supply</h3>
              <p className="service-desc-modern">
                Genuine spare parts for engines, deck equipment, and mechanical systems
              </p>
              <Link to="/products" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card-modern">
              <div className="service-icon-modern">
                <Shield size={48} />
              </div>
              <h3 className="service-title-modern">Safety Solutions</h3>
              <p className="service-desc-modern">
                Comprehensive safety equipment meeting international maritime standards
              </p>
              <Link to="/products" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card-modern">
              <div className="service-icon-modern">
                <Anchor size={48} />
              </div>
              <h3 className="service-title-modern">Offshore Support</h3>
              <p className="service-desc-modern">
                Specialized offshore installation support with technical expertise
              </p>
              <Link to="/contact" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card-modern">
              <div className="service-icon-modern">
                <Settings size={48} />
              </div>
              <h3 className="service-title-modern">Technical Support</h3>
              <p className="service-desc-modern">
                Expert technical guidance and consultation for marine systems
              </p>
              <Link to="/contact" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card-modern">
              <div className="service-icon-modern">
                <Globe size={48} />
              </div>
              <h3 className="service-title-modern">Global Network</h3>
              <p className="service-desc-modern">
                Worldwide sourcing and distribution across 50+ countries
              </p>
              <Link to="/about" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card-modern">
              <div className="service-icon-modern">
                <Award size={48} />
              </div>
              <h3 className="service-title-modern">Quality Assurance</h3>
              <p className="service-desc-modern">
                ISO 9001:2015 certified quality management and compliance
              </p>
              <Link to="/about" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card-modern">
              <div className="service-icon-modern">
                <Clock size={48} />
              </div>
              <h3 className="service-title-modern">24/7 Service</h3>
              <p className="service-desc-modern">
                Round-the-clock support for urgent marine equipment needs
              </p>
              <Link to="/contact" className="service-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-header">
            <span className="section-label">Our Advantages</span>
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              Five reasons why marine professionals trust ASP Global Marine
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <Award size={36} />
              </div>
              <h3>Quality Assured</h3>
              <p>
                ISO certified products meeting international maritime standards
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <Globe size={36} />
              </div>
              <h3>Global Network</h3>
              <p>Sourcing from leading manufacturers across 50+ countries</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <Users size={36} />
              </div>
              <h3>Expert Team</h3>
              <p>
                18+ years of maritime industry experience and technical
                knowledge
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <Ship size={36} />
              </div>
              <h3>Fast Delivery</h3>
              <p>Efficient logistics ensuring timely delivery worldwide</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <Anchor size={36} />
              </div>
              <h3>Best Value</h3>
              <p>Competitive pricing without compromising on quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Authorizations Section */}
      <section className="authorizations-section">
        <div className="container">
          <div className="authorizations-header">
            <span className="section-label">Certifications</span>
            <h2 className="section-title">Our Authorizations</h2>
            <p className="section-subtitle">
              Official partnerships and certifications with leading marine
              equipment manufacturers
            </p>
          </div>
          <div className="authorizations-grid">
            <div className="authorization-card">
              <div className="authorization-icon">
                <Shield size={36} />
              </div>
              <h3>Authorized Distributor</h3>
              <p>
                Official distributor for leading marine equipment manufacturers
              </p>
            </div>
            <div className="authorization-card">
              <div className="authorization-icon">
                <Award size={36} />
              </div>
              <h3>Service Partner</h3>
              <p>
                Authorized service provider for marine equipment maintenance
              </p>
            </div>
            <div className="authorization-card">
              <div className="authorization-icon">
                <CheckCircle size={36} />
              </div>
              <h3>Technical Support</h3>
              <p>Authorized technical support and installation partner</p>
            </div>
            {/* <div className="authorization-card">
              <div className="authorization-icon">
                <Globe size={36} />
              </div>
              <h3>Global Reach</h3>
              <p>International network serving maritime clients worldwide</p>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
