/**
 * ASP Global Marine Trading LLC - Pumps Marine & Industrial Page
 *
 * Comprehensive marine and industrial pumps and pumping systems
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";
import { useState } from "react";

const PumpsMarineIndustrial = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const pumpProducts = [
    {
      id: 1,
      name: "Centrifugal Pumps",
      image: "/products/enginestores/Asset 33.webp",
      category: "Centrifugal Pumps",
      description:
        "High-efficiency centrifugal pumps for marine and industrial applications. Reliable fluid transfer solutions.",
      whatsappMessage:
        "Hi, I'm interested in Centrifugal Pumps. Please provide more information and pricing.",
    },
    {
      id: 2,
      name: "Gear Pumps",
      image: "/products/enginestores/NeEeih.webp",
      category: "Gear Pumps",
      description:
        "Precision gear pumps for oil transfer, fuel delivery, and hydraulic systems.",
      whatsappMessage:
        "Hi, I'm interested in Gear Pumps. Please provide more information and pricing.",
    },
    {
      id: 3,
      name: "Screw Pumps",
      image: "/products/enginestores/Asset 34.webp",
      category: "Screw Pumps",
      description:
        "Twin and triple screw pumps for high-viscosity fluids and oil transfer applications.",
      whatsappMessage:
        "Hi, I'm interested in Screw Pumps. Please provide more information and pricing.",
    },
    {
      id: 4,
      name: "Diaphragm Pumps",
      image: "/products/enginestores/Asset 35.webp",
      category: "Diaphragm Pumps",
      description:
        "Chemical-resistant diaphragm pumps for aggressive fluids and chemical transfer.",
      whatsappMessage:
        "Hi, I'm interested in Diaphragm Pumps. Please provide more information and pricing.",
    },
    {
      id: 5,
      name: "Submersible Pumps",
      image: "/products/enginestores/Asset 36.webp",
      category: "Submersible Pumps",
      description:
        "Marine-grade submersible pumps for bilge, ballast, and wastewater applications.",
      whatsappMessage:
        "Hi, I'm interested in Submersible Pumps. Please provide more information and pricing.",
    },
    {
      id: 6,
      name: "Fire Fighting Pumps",
      image: "/products/enginestores/Asset 37.webp",
      category: "Fire Pumps",
      description:
        "High-pressure fire fighting pumps compliant with SOLAS and classification society requirements.",
      whatsappMessage:
        "Hi, I'm interested in Fire Fighting Pumps. Please provide more information and pricing.",
    },
    {
      id: 7,
      name: "Hydraulic Pumps",
      image: "/products/enginestores/Asset 38.webp",
      category: "Hydraulic Pumps",
      description:
        "Hydraulic power units and pumps for steering gear, deck machinery, and cranes.",
      whatsappMessage:
        "Hi, I'm interested in Hydraulic Pumps. Please provide more information and pricing.",
    },
    {
      id: 8,
      name: "Pump Spare Parts",
      image: "/products/enginestores/Asset 39.webp",
      category: "Spare Parts",
      description:
        "Comprehensive pump spare parts including impellers, seals, bearings, and casings.",
      whatsappMessage:
        "Hi, I'm interested in Pump Spare Parts. Please provide more information and pricing.",
    },
  ];

  const filteredProducts = pumpProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Pumps - Marine & Industrial</h1>
          <p className="page-subtitle">
            Complete Pump Solutions for Marine & Industrial Applications
          </p>
        </div>

        <section className="product-gallery">
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <h2>Featured Pump Products</h2>
          <div className="gallery-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="gallery-item">
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />
                </div>
                <div className="product-details">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.description}</p>
                  <a
                    href={`https://wa.me/971505398975?text=${encodeURIComponent(
                      product.whatsappMessage,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn"
                  >
                    Get Product
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PumpsMarineIndustrial;
                <div className="product-list">
                  <h4>Compliance Standards:</h4>
                  <div className="product-tags">
                    {application.standards.map((standard, idx) => (
                      <span key={idx} className="product-tag">
                        {standard}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="technical-specifications">
          <h2>Technical Specifications & Services</h2>
          <div className="spec-grid">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="spec-card">
                <div className="category-header">
                  <div className="category-icon">{spec.icon}</div>
                  <h3>{spec.category}</h3>
                </div>
                <ul>
                  {spec.specs.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="quality-assurance">
          <h2>Quality Assurance & Compliance</h2>
          <div className="quality-grid">
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Marine Certification</h3>
              <p>
                All pumps meet SOLAS, IMO, and classification society
                requirements with full certification
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Performance Testing</h3>
              <p>
                Comprehensive testing for marine conditions including vibration,
                noise, and efficiency
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Spare Parts Availability</h3>
              <p>
                Complete range of genuine spare parts and components with rapid
                delivery worldwide
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Technical Expertise</h3>
              <p>
                Expert guidance on pump selection, installation, and maintenance
                for optimal performance
              </p>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <div className="cta-content">
            <h2>Need Marine or Industrial Pumps?</h2>
            <p>
              Contact our technical team for expert assistance with your pumping
              system requirements. We provide comprehensive solutions with rapid
              delivery worldwide and 24/7 technical support.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Request Quote</button>
              <button className="btn btn-secondary">Technical Support</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PumpsMarineIndustrial;
