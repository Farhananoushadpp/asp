/**
 * ASP Global Marine Trading LLC - Purifiers & Separators Page
 *
 * Comprehensive marine purifiers and separation systems
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";
import { useState } from "react";

const Purifiers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const purifierProducts = [
    {
      id: 1,
      name: "Fuel Oil Purifiers",
      image: "/products/enginestores/Asset 42.webp",
      category: "Fuel Purifiers",
      description: "High-speed centrifugal purifiers for HFO, MDO, and diesel fuel cleaning. Ensures optimal fuel quality for engines.",
      whatsappMessage: "Hi, I'm interested in Fuel Oil Purifiers. Please provide more information and pricing."
    },
    {
      id: 2,
      name: "Lube Oil Purifiers",
      image: "/products/enginestores/Asset 43.webp",
      category: "Lube Purifiers",
      description: "Lubricating oil purifiers for engine and system oil cleaning. Extends oil life and protects machinery.",
      whatsappMessage: "Hi, I'm interested in Lube Oil Purifiers. Please provide more information and pricing."
    },
    {
      id: 3,
      name: "Water Separators",
      image: "/products/enginestores/Asset 44.webp",
      category: "Separators",
      description: "Bilge water and wastewater separators compliant with MARPOL regulations. Efficient oil-water separation.",
      whatsappMessage: "Hi, I'm interested in Water Separators. Please provide more information and pricing."
    },
    {
      id: 4,
      name: "Sludge Treatment Systems",
      image: "/products/enginestores/NeEeih.webp",
      category: "Sludge Systems",
      description: "Complete sludge treatment and disposal systems for vessel waste management.",
      whatsappMessage: "Hi, I'm interested in Sludge Treatment Systems. Please provide more information and pricing."
    },
    {
      id: 5,
      name: "Purifier Spare Parts",
      image: "/products/enginestores/Asset 42.webp",
      category: "Spare Parts",
      description: "Comprehensive purifier spare parts including bowls, discs, seals, and bearings for all major brands.",
      whatsappMessage: "Hi, I'm interested in Purifier Spare Parts. Please provide more information and pricing."
    },
    {
      id: 6,
      name: "Self-Cleaning Separators",
      image: "/products/enginestores/Asset 43.webp",
      category: "Self-Cleaning",
      description: "Automatic self-cleaning separators with PLC control for continuous operation without manual intervention.",
      whatsappMessage: "Hi, I'm interested in Self-Cleaning Separators. Please provide more information and pricing."
    },
    {
      id: 7,
      name: "Filter Systems",
      image: "/products/enginestores/Asset 44.webp",
      category: "Filters",
      description: "Fuel and oil filter systems including automatic back-flushing filters and coalescers.",
      whatsappMessage: "Hi, I'm interested in Filter Systems. Please provide more information and pricing."
    },
    {
      id: 8,
      name: "Control & Monitoring",
      image: "/products/enginestores/NeEeih.webp",
      category: "Controls",
      description: "Advanced control and monitoring systems for purifiers with automatic discharge and alarms.",
      whatsappMessage: "Hi, I'm interested in Control & Monitoring. Please provide more information and pricing."
    }
  ];

  const filteredProducts = purifierProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Purifiers & Separators</h1>
          <p className="page-subtitle">
            Advanced Marine Purification & Separation Solutions
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
          <h2>Featured Purifier & Separator Products</h2>
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
                    href={`https://wa.me/971505398975?text=${encodeURIComponent(product.whatsappMessage)}`}
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

export default Purifiers;
        "Fresh Water Generators",
        "Ballast Water Treatment Systems",
        "Bilge Water Separators",
        "Potable Water Purifiers",
        "Waste Water Treatment",
        "Grey Water Systems",
        "Black Water Systems",
        "Desalination Units",
      ],
      description:
        "Comprehensive water treatment and purification systems for marine applications",
    },
    {
      category: "Centrifugal Separators",
      icon: "🌀",
      products: [
        "High-Speed Separators",
        "Disc Stack Separators",
        "Decanter Centrifuges",
        "Tubular Bowl Centrifuges",
        "Self-Cleaning Separators",
        "Batch Separators",
        "Continuous Separators",
        "Industrial Separators",
      ],
      description:
        "Advanced centrifugal separation technology for various applications",
    },
    {
      category: "Filtration Systems",
      icon: "🔍",
      products: [
        "Automatic Backwash Filters",
        "Bag Filters",
        "Cartridge Filters",
        "Strainers",
        "Coarse Filters",
        "Fine Filters",
        "Micro Filters",
        "Ultrafiltration Systems",
      ],
      description:
        "Complete filtration solutions for pre-treatment and fine filtration",
    },
    {
      category: "Control & Monitoring",
      icon: "📊",
      products: [
        "Purifier Control Systems",
        "Monitoring Equipment",
        "Automation Systems",
        "Level Sensors",
        "Flow Meters",
        "Pressure Transmitters",
        "Temperature Sensors",
        "Quality Analyzers",
      ],
      description:
        "Advanced control and monitoring systems for optimal purifier performance",
    },
  ];

  const applications = [
    {
      category: "Marine Propulsion Systems",
      icon: "🚢",
      description:
        "Fuel and lubricating oil treatment for main and auxiliary engines",
      systems: [
        "Main Engine Fuel Treatment",
        "Auxiliary Engine Fuel Treatment",
        "Lubricating Oil purification",
        "Cylinder Oil treatment",
      ],
      benefits: [
        "Engine Protection",
        "Fuel Efficiency",
        "Reduced Emissions",
        "Extended Engine Life",
      ],
    },
    {
      category: "Ship Systems",
      icon: "⚓",
      description: "Water treatment and separation for various ship systems",
      systems: [
        "Ballast Water Management",
        "Bilge Water Treatment",
        "Fresh Water Generation",
        "Waste Water Treatment",
      ],
      benefits: [
        "Environmental Compliance",
        "Crew Safety",
        "System Efficiency",
        "Regulatory Compliance",
      ],
    },
    {
      category: "Offshore Platforms",
      icon: "🏗️",
      description: "Comprehensive treatment systems for offshore installations",
      systems: [
        "Process Water Treatment",
        "Fuel Treatment",
        "Produced Water Treatment",
        "Drilling Mud Treatment",
      ],
      benefits: [
        "Operational Efficiency",
        "Environmental Protection",
        "System Reliability",
        "Cost Optimization",
      ],
    },
    {
      category: "Industrial Applications",
      icon: "🏭",
      description: "Industrial separation and purification systems",
      systems: [
        "Process Separation",
        "Product Recovery",
        "Waste Treatment",
        "Water Recycling",
      ],
      benefits: [
        "Product Quality",
        "Process Efficiency",
        "Environmental Compliance",
        "Cost Reduction",
      ],
    },
  ];

  const technicalSpecs = [
    {
      category: "Performance Specifications",
      icon: "⚙️",
      specs: [
        "Throughput: 100-50,000 L/h",
        "Separation Efficiency: Up to 99.9%",
        "Operating Pressure: 1-10 bar",
        "Temperature Range: 0-150°C",
        "Automatic Operation Available",
      ],
    },
    {
      category: "Compliance Standards",
      icon: "✅",
      specs: [
        "IMO MARPOL Compliant",
        "SOLAS Approved",
        "Classification Society Certified",
        "ISO 9001 Quality Management",
        "Environmental Regulations Compliant",
      ],
    },
    {
      category: "Service & Support",
      icon: "🔧",
      specs: [
        "24/7 Technical Support",
        "On-site Installation",
        "Commissioning Services",
        "Maintenance Contracts",
        "Spare Parts Inventory",
      ],
    },
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Purifiers & Separators</h1>
          <p className="page-subtitle">
            Comprehensive Marine Purification and Separation Solutions
          </p>
        </div>

        <section className="product-intro">
          <div className="intro-content">
            <h2>Advanced Purification Technology</h2>
            <p>
              ASP Global Marine Trading LLC provides comprehensive marine
              purification and separation systems for vessels, offshore
              platforms, and industrial applications. With over 18 years of
              expertise, we supply advanced purifiers, separators, and water
              treatment systems from leading manufacturers worldwide, ensuring
              optimal performance, environmental compliance, and exceptional
              technical support for all purification requirements.
            </p>
            <div className="manufacturer-showcase">
              <h3>Leading Manufacturers</h3>
              <div className="manufacturer-grid">
                {manufacturers.map((manufacturer, index) => (
                  <div key={index} className="manufacturer-card">
                    <span className="manufacturer-name">{manufacturer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="product-categories">
          <h2>Purifier Categories</h2>
          <div className="category-grid">
            {purifierCategories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3>{category.category}</h3>
                </div>
                <p className="category-description">{category.description}</p>
                <div className="product-list">
                  <h4>Available Systems:</h4>
                  <div className="product-tags">
                    {category.products.map((product, idx) => (
                      <span key={idx} className="product-tag">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="product-categories">
          <h2>Applications & Solutions</h2>
          <div className="category-grid">
            {applications.map((application, index) => (
              <div key={index} className="category-card">
                <div className="category-header">
                  <div className="category-icon">{application.icon}</div>
                  <h3>{application.category}</h3>
                </div>
                <p className="category-description">
                  {application.description}
                </p>
                <div className="product-list">
                  <h4>Systems:</h4>
                  <div className="product-tags">
                    {application.systems.map((system, idx) => (
                      <span key={idx} className="product-tag">
                        {system}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="product-list">
                  <h4>Benefits:</h4>
                  <div className="product-tags">
                    {application.benefits.map((benefit, idx) => (
                      <span key={idx} className="product-tag">
                        {benefit}
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
              <h3>IMO & MARPOL Compliance</h3>
              <p>
                All systems meet IMO, MARPOL, and international maritime
                environmental regulations
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Classification Society Approved</h3>
              <p>
                Equipment approved by DNV, ABS, Lloyd's Register, and Bureau
                Veritas
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Performance Testing</h3>
              <p>
                Comprehensive testing for separation efficiency and operational
                reliability
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Technical Expertise</h3>
              <p>
                Expert guidance on system selection, installation, and
                optimization
              </p>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <div className="cta-content">
            <h2>Need Purification & Separation Systems?</h2>
            <p>
              Contact our technical team for expert assistance with your
              purification and separation requirements. We provide comprehensive
              solutions with rapid delivery worldwide and 24/7 technical
              support.
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

export default Purifiers;
