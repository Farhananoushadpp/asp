/**
 * ASP Global Marine Trading LLC - Products Main Page
 *
 * Modern Product Catalog with Professional Design
 * Enhanced layout with improved visuals and user experience
 */

import { Link } from "react-router-dom";
import {
  Ship,
  Settings,
  Wrench,
  Wind,
  Droplets,
  Snowflake,
  Flame,
  WindIcon,
  Hammer,
  RefreshCw,
  Anchor,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import "../styles/pages/Products.css";

const ProductsPage = () => {
  const productCategories = [
    {
      id: "engine-spares-2stroke",
      title: "Engine Spares - 2 Stroke",
      description:
        "Complete range of 2-stroke engine spare parts for major marine engine manufacturers including pistons, cylinder liners, fuel pumps, and more.",
      icon: Settings,
      image: "/products/categories/engine-2stroke.jpg",
      brands: ["YANMAR", "HIMSEN", "WARTSILA", "MAN", "SULZER", "WINGD"],
      featured: true,
    },
    {
      id: "engine-spares-4stroke",
      title: "Engine Spares - 4 Stroke",
      description:
        "Comprehensive 4-stroke engine components and spare parts for marine applications including valves, bearings, and gasket sets.",
      icon: Wrench,
      image: "/products/categories/engine-4stroke.jpg",
      brands: ["YANMAR", "WARTSILA", "MAN", "CUMMINS", "CATERPILLAR"],
    },
    {
      id: "turbochargers-auxiliary",
      title: "Turbochargers & Auxiliary",
      description:
        "High-performance turbochargers, superchargers, and auxiliary engine systems for enhanced vessel efficiency.",
      icon: Wind,
      image: "/products/categories/turbocharger.jpg",
      brands: ["ABB", "MAN", "IHI", "MHI", "KBB"],
    },
    {
      id: "pumps-marine-industrial",
      title: "Pumps - Marine & Industrial",
      description:
        "Complete range of marine and industrial pumping systems including centrifugal, gear, and screw pumps.",
      icon: Droplets,
      image: "/products/categories/pumps.jpg",
      brands: ["ALFA LAVAL", "WARTSILA", "KSB", "GRUNDFOS"],
    },
    {
      id: "hvac-compressors",
      title: "HVAC Compressors",
      description:
        "Marine HVAC systems, compressors, and climate control solutions for comfortable vessel environments.",
      icon: Snowflake,
      image: "/products/categories/hvac.jpg",
      brands: ["CARRIER", "TRANE", "DAIKIN", "MITSUBISHI"],
    },
    {
      id: "boilers-incinerators-heat-exchangers",
      title: "Boilers & Heat Exchangers",
      description:
        "Marine boilers, incinerators, and heat exchange systems for thermal management and waste handling.",
      icon: Flame,
      image: "/products/categories/boilers.jpg",
      brands: ["ALFA LAVAL", "AALBORG", "KAWASAKI"],
    },
    {
      id: "air-compressor-spares",
      title: "Air Compressor Spares",
      description:
        "Air compressors and spare parts for marine applications including starting air and control air systems.",
      icon: WindIcon,
      image: "/products/categories/air-compressor.jpg",
      brands: ["ATLAS COPCO", "KAESER", "INGERSOLL RAND"],
    },
    {
      id: "hydraulic-systems",
      title: "Hydraulic Systems",
      description:
        "Complete hydraulic systems, components, and spare parts for steering, deck machinery, and cargo handling.",
      icon: Hammer,
      image: "/products/categories/hydraulic.jpg",
      brands: ["BOSCH REXROTH", "PARKER", "EATON", "DANFOSS"],
    },
    {
      id: "purifiers",
      title: "Purifiers & Separators",
      description:
        "Oil purifiers, water separators, and filtration systems for fuel and lubricating oil treatment.",
      icon: RefreshCw,
      image: "/products/categories/purifiers.jpg",
      brands: ["ALFA LAVAL", "WARTSILA", "GEA", "SPX FLOW"],
    },
    {
      id: "deck-stores-general",
      title: "Deck Stores & General",
      description:
        "Complete deck equipment and general marine stores including ropes, wires, and safety equipment.",
      icon: Anchor,
      image: "/products/categories/deck-stores.jpg",
      brands: ["Multiple Marine Brands"],
    },
    {
      id: "engine-stores",
      title: "Engine Stores",
      description:
        "Engine room stores, consumables, and maintenance supplies for daily vessel operations.",
      icon: Settings,
      image: "/products/categories/engine-stores.jpg",
      brands: ["YANMAR", "WARTSILA", "MAN", "CUMMINS"],
    },
    {
      id: "lsa-ffa",
      title: "LSA & FFA Equipment",
      description:
        "Life-saving appliances and fire-fighting equipment with SOLAS compliance and certification.",
      icon: AlertTriangle,
      image: "/products/categories/lsa-ffa.jpg",
      brands: ["VIKING", "Survitec", "WINSLOW", "MFC"],
      featured: true,
    },
  ];

  const stats = [
    { number: "12+", label: "Product Categories" },
    { number: "50+", label: "Manufacturer Brands" },
    { number: "1000+", label: "Spare Parts Available" },
    { number: "24/7", label: "Technical Support" },
  ];

  const certifications = [
    { icon: CheckCircle, text: "SOLAS Compliant" },
    { icon: CheckCircle, text: "IMO Certified" },
    { icon: CheckCircle, text: "Class Approved" },
    { icon: CheckCircle, text: "OEM Quality" },
  ];

  return (
    <div className="products-page-modern">
      {/* Hero Section - Modern Design */}
      <section className="products-hero-modern">
        <div className="hero-bg-pattern"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <Ship className="badge-icon" />
              <span>Marine Industrial Solutions</span>
            </div>
            <h1>Marine Product Catalog</h1>
            <p className="hero-description">
              Comprehensive range of marine equipment, spare parts, and
              technical solutions for vessels and offshore installations
              worldwide.
            </p>
            <div className="hero-stats-modern">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path
              d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured-categories">
        <div className="container">
          <div className="section-header-modern">
            <span className="section-tag">Browse Categories</span>
            <h2>Our Product Range</h2>
            <p>
              Click on any category to explore detailed specifications and
              available spare parts
            </p>
          </div>

          <div className="products-grid-modern">
            {productCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={category.id}
                  to={`/products/${category.id}`}
                  className={`product-card-modern ${category.featured ? "featured" : ""}`}
                >
                  <div className="card-image">
                    <img
                      src={category.image}
                      alt={category.title}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="image-fallback" style={{ display: "none" }}>
                      <IconComponent className="fallback-icon" />
                    </div>
                    <div className="card-overlay">
                      <span className="view-details">View Details</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-header">
                      <div className="card-icon-wrapper">
                        <IconComponent className="card-icon" />
                      </div>
                      <h3>{category.title}</h3>
                    </div>
                    <p className="card-description">{category.description}</p>
                    <div className="card-brands-modern">
                      {category.brands.slice(0, 4).map((brand, index) => (
                        <span key={index} className="brand-tag-modern">
                          {brand}
                        </span>
                      ))}
                    </div>
                    <div className="card-action-modern">
                      <span>Explore Products</span>
                      <ArrowRight className="action-icon" />
                    </div>
                  </div>
                  {category.featured && (
                    <div className="featured-badge">Featured</div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Bar */}
      <section className="certifications-bar">
        <div className="container">
          <div className="certifications-grid">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="cert-item">
                  <IconComponent className="cert-icon" />
                  <span>{cert.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern */}
      <section className="products-cta-modern">
        <div className="container">
          <div className="cta-content-modern">
            <div className="cta-text">
              <h2>Need Technical Assistance?</h2>
              <p>
                Our technical team can help you identify the exact parts and
                specifications for your marine equipment. Get comprehensive
                documentation and application guidance.
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button-primary">
                Request Catalog
                <ArrowRight className="btn-icon" />
              </Link>
              <Link to="/authorizations" className="cta-button-secondary">
                View Authorizations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
