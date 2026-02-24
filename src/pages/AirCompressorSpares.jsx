/**
 * ASP Global Marine Trading LLC - Air Compressor Spares Page
 *
 * Comprehensive marine air compressors and spare parts solutions
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";
import { useState } from "react";

const AirCompressorSpares = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const compressorProducts = [
    {
      id: 1,
      name: "Marine Air Compressors",
      image: "/products/enginestores/Asset 40.webp",
      category: "Air Compressors",
      description: "High-quality marine air compressors for starting engines, pneumatic tools, and general ship service.",
      whatsappMessage: "Hi, I'm interested in Marine Air Compressors. Please provide more information and pricing."
    },
    {
      id: 2,
      name: "Compressor Spare Parts",
      image: "/products/enginestores/Asset 41.webp",
      category: "Spare Parts",
      description: "Comprehensive air compressor spare parts including pistons, rings, valves, and gaskets.",
      whatsappMessage: "Hi, I'm interested in Compressor Spare Parts. Please provide more information and pricing."
    },
    {
      id: 3,
      name: "Air Dryer Systems",
      image: "/products/enginestores/Asset 42.webp",
      category: "Air Dryers",
      description: "Refrigerated and desiccant air dryers for moisture-free compressed air systems.",
      whatsappMessage: "Hi, I'm interested in Air Dryer Systems. Please provide more information and pricing."
    },
    {
      id: 4,
      name: "Air Receiver Tanks",
      image: "/products/enginestores/Asset 43.webp",
      category: "Receivers",
      description: "Marine-grade air receiver tanks with certification for compressed air storage.",
      whatsappMessage: "Hi, I'm interested in Air Receiver Tanks. Please provide more information and pricing."
    },
    {
      id: 5,
      name: "Compressor Filters",
      image: "/products/enginestores/Asset 44.webp",
      category: "Filters",
      description: "Air intake filters, oil separators, and line filters for compressor systems.",
      whatsappMessage: "Hi, I'm interested in Compressor Filters. Please provide more information and pricing."
    },
    {
      id: 6,
      name: "Pressure Switches & Controls",
      image: "/products/enginestores/NeEeih.webp",
      category: "Controls",
      description: "Pressure switches, regulators, and control systems for compressor automation.",
      whatsappMessage: "Hi, I'm interested in Pressure Switches & Controls. Please provide more information and pricing."
    },
    {
      id: 7,
      name: "Compressor Lubricants",
      image: "/products/enginestores/Asset 40.webp",
      category: "Lubricants",
      description: "Specialized compressor oils and lubricants for various compressor types.",
      whatsappMessage: "Hi, I'm interested in Compressor Lubricants. Please provide more information and pricing."
    },
    {
      id: 8,
      name: "Pneumatic Tools & Accessories",
      image: "/products/enginestores/Asset 41.webp",
      category: "Tools & Accessories",
      description: "Marine pneumatic tools, hoses, fittings, and accessories for compressed air systems.",
      whatsappMessage: "Hi, I'm interested in Pneumatic Tools & Accessories. Please provide more information and pricing."
    }
  ];

  const filteredProducts = compressorProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Air Compressor Spares</h1>
          <p className="page-subtitle">
            Marine Air Compressor Solutions & Spare Parts
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
          <h2>Featured Air Compressor Products</h2>
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

export default AirCompressorSpares;
        "Screw Air Compressors",
        "Rotary Vane Compressors",
        "Centrifugal Compressors",
        "Portable Compressors",
        "Stationary Compressors",
        "Oil-Free Compressors",
        "Lubricated Compressors",
      ],
      description:
        "Complete marine air compressor systems for various vessel applications",
    },
    {
      category: "Compressor Components",
      icon: "⚙️",
      products: [
        "Compressor Pistons",
        "Piston Rings",
        "Connecting Rods",
        "Crankshafts",
        "Cylinder Liners",
        "Valve Plates",
        "Suction Valves",
        "Discharge Valves",
      ],
      description:
        "Critical compressor components for reliable operation and maintenance",
    },
    {
      category: "Air Treatment Systems",
      icon: "💨",
      products: [
        "Refrigerated Air Dryers",
        "Desiccant Air Dryers",
        "Membrane Dryers",
        "Moisture Separators",
        "Water Separators",
        "Oil Separators",
        "Aftercoolers",
        "Air Receivers",
      ],
      description:
        "Advanced air treatment systems for clean, dry compressed air",
    },
    {
      category: "Filtration Systems",
      icon: "🔍",
      products: [
        "Air Intake Filters",
        "Oil Filters",
        "Air/Oil Separators",
        "Particulate Filters",
        "Coalescing Filters",
        "Activated Carbon Filters",
        "Breather Filters",
        "Filter Elements",
      ],
      description: "Comprehensive filtration solutions for air and oil systems",
    },
    {
      category: "Control Systems",
      icon: "📊",
      products: [
        "Pressure Switches",
        "Temperature Switches",
        "Pressure Regulators",
        "Solenoid Valves",
        "Control Panels",
        "Pressure Gauges",
        "Flow Meters",
        "Safety Valves",
      ],
      description:
        "Advanced control and monitoring systems for optimal compressor performance",
    },
    {
      category: "Lubrication Systems",
      icon: "💧",
      products: [
        "Compressor Oils",
        "Oil Pumps",
        "Oil Coolers",
        "Oil Filters",
        "Oil Separators",
        "Lubricators",
        "Grease Systems",
        "Oil Level Gauges",
      ],
      description:
        "Complete lubrication systems and products for compressor maintenance",
    },
  ];

  const applications = [
    {
      category: "Marine Vessel Systems",
      icon: "🚢",
      description:
        "Air compressor solutions for various vessel types and applications",
      vessels: [
        "Cargo Ships",
        "Tankers",
        "Container Ships",
        "Passenger Vessels",
        "Offshore Support Vessels",
      ],
      applications: [
        "Starting Air Systems",
        "Control Air Systems",
        "Service Air Systems",
        "Deck Operations",
      ],
    },
    {
      category: "Engine Room Applications",
      icon: "⚙️",
      description: "Air compressor systems for engine room operations",
      vessels: [
        "Main Engines",
        "Auxiliary Engines",
        "Generator Sets",
        "Pump Systems",
      ],
      applications: [
        "Engine Starting",
        "Control Systems",
        "Pneumatic Tools",
        "Instrumentation Air",
      ],
    },
    {
      category: "Deck Operations",
      icon: "⚓",
      description: "Air compressor solutions for deck and cargo operations",
      vessels: [
        "Cargo Handling",
        "Deck Machinery",
        "Mooring Systems",
        "Safety Systems",
      ],
      applications: [
        "Pneumatic Tools",
        "Air Horns",
        "Winch Systems",
        "Safety Equipment",
      ],
    },
    {
      category: "Industrial Applications",
      icon: "🏭",
      description:
        "Air compressor systems for industrial and offshore applications",
      vessels: [
        "Offshore Platforms",
        "Industrial Plants",
        "Construction Sites",
        "Mining Operations",
      ],
      applications: [
        "Process Control",
        "Pneumatic Systems",
        "Tool Operation",
        "Maintenance Operations",
      ],
    },
  ];

  const technicalSpecs = [
    {
      category: "Performance Specifications",
      icon: "📊",
      specs: [
        "Air Flow: 50-5000 CFM",
        "Pressure Range: 7-500 bar",
        "Power Range: 5-500 kW",
        "Tank Capacity: 50-5000 liters",
        "Dew Point: -40°C to 3°C",
      ],
    },
    {
      category: "Marine Compliance",
      icon: "✅",
      specs: [
        "IMO SOLAS Compliant",
        "Classification Society Approved",
        "Marine Grade Materials",
        "Corrosion Resistant",
        "Explosion Proof Options",
      ],
    },
    {
      category: "Service Capabilities",
      icon: "🔧",
      specs: [
        "24/7 Technical Support",
        "Marine Installation",
        "Commissioning Services",
        "Maintenance Contracts",
        "Emergency Repair Services",
      ],
    },
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Air Compressor Spares</h1>
          <p className="page-subtitle">
            Comprehensive Marine Air Compressors and Spare Parts Solutions
          </p>
        </div>

        <section className="product-intro">
          <div className="intro-content">
            <h2>Advanced Compressed Air Solutions</h2>
            <p>
              ASP Global Marine Trading LLC provides comprehensive marine air
              compressors and spare parts for vessels, offshore platforms, and
              industrial facilities. With over 18 years of expertise, we supply
              advanced air compression equipment from leading manufacturers
              worldwide, ensuring reliable performance, energy efficiency, and
              compliance with maritime standards for all compressed air
              requirements.
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
          <h2>Compressor System Categories</h2>
          <div className="category-grid">
            {compressorCategories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3>{category.category}</h3>
                </div>
                <p className="category-description">{category.description}</p>
                <div className="product-list">
                  <h4>Available Products:</h4>
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
                  <h4>System Types:</h4>
                  <div className="product-tags">
                    {application.vessels.map((vessel, idx) => (
                      <span key={idx} className="product-tag">
                        {vessel}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="product-list">
                  <h4>Applications:</h4>
                  <div className="product-tags">
                    {application.applications.map((app, idx) => (
                      <span key={idx} className="product-tag">
                        {app}
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
                All systems meet SOLAS, IMO, and classification society
                requirements with full certification
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Performance Testing</h3>
              <p>
                Comprehensive testing for air flow, pressure, and operational
                reliability
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Genuine Parts</h3>
              <p>
                100% genuine manufacturer parts with full traceability and
                warranty
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Technical Expertise</h3>
              <p>
                Expert guidance on system selection, installation, and
                optimization for maximum efficiency
              </p>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <div className="cta-content">
            <h2>Need Air Compressor Solutions?</h2>
            <p>
              Contact our technical team for expert assistance with your air
              compressor and spare parts requirements. We provide comprehensive
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

export default AirCompressorSpares;
