/**
 * ASP Global Marine Trading LLC - Pumps Marine & Industrial Page
 *
 * Comprehensive marine and industrial pumps and pumping systems
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";

const PumpsMarineIndustrial = () => {
  const manufacturers = [
    "KSB",
    "Sulzer",
    "Alfa Laval",
    "Grundfos",
    "Wärtsilä",
    "IMO",
    "Bornemann",
    "Allweiler",
    "Roper",
    "Tuthill",
    "Waukesha",
    "Viking",
    "Rosenbauer",
    "Ebara",
    "Flowserve",
    "ITT",
    "Siemens",
    "Yanmar",
    "Caterpillar",
  ];

  const pumpCategories = [
    {
      category: "Centrifugal Pumps",
      icon: "🌀",
      products: [
        "Single Stage Centrifugal Pumps",
        "Multi Stage Centrifugal Pumps",
        "Horizontal Split Case Pumps",
        "Vertical Turbine Pumps",
        "Submersible Centrifugal Pumps",
        "Self-Priming Pumps",
        "End Suction Pumps",
        "Inline Pumps",
      ],
      description:
        "High-efficiency centrifugal pumps for general marine and industrial applications",
    },
    {
      category: "Positive Displacement Pumps",
      icon: "⚙️",
      products: [
        "Gear Pumps",
        "Screw Pumps (Twin & Triple)",
        "Rotary Vane Pumps",
        "Piston Pumps",
        "Diaphragm Pumps",
        "Peristaltic Pumps",
        "Lobe Pumps",
        "Progressive Cavity Pumps",
      ],
      description:
        "Precision positive displacement pumps for high-pressure and metering applications",
    },
    {
      category: "Marine Specialty Pumps",
      icon: "🚢",
      products: [
        "Ballast Pumps",
        "Bilge Pumps",
        "Fire Fighting Pumps",
        "Cargo Pumps",
        "Scavenge Pumps",
        "Sea Water Cooling Pumps",
        "Fresh Water Pumps",
        "Sanitary Pumps",
      ],
      description:
        "Specialized pumps designed for specific marine vessel operations",
    },
    {
      category: "Industrial Process Pumps",
      icon: "🏭",
      products: [
        "Chemical Process Pumps",
        "Slurry Pumps",
        "Metering Pumps",
        "Boiler Feed Pumps",
        "Condensate Pumps",
        "Dosing Pumps",
        "Transfer Pumps",
        "Circulation Pumps",
      ],
      description:
        "Industrial pumps for process manufacturing and plant operations",
    },
    {
      category: "Pump Systems & Accessories",
      icon: "🔧",
      products: [
        "Pump Controllers",
        "Pump Seals",
        "Mechanical Seals",
        "Pump Motors",
        "Pump Couplings",
        "Strainers",
        "Pressure Gauges",
        "Flow Meters",
      ],
      description: "Complete pump systems, controls, and accessory components",
    },
  ];

  const applications = [
    {
      category: "Ballast Water Management",
      icon: "💧",
      description: "Ballast water pumping, treatment, and management systems",
      pumpTypes: [
        "Ballast Pumps",
        "Sea Water Pumps",
        "Treatment Pumps",
        "Discharge Pumps",
      ],
      standards: [
        "IMO Ballast Water Convention",
        "SOLAS",
        "Class Society Requirements",
      ],
    },
    {
      category: "Fire Protection Systems",
      icon: "🔥",
      description: "Fire fighting pumps and emergency response systems",
      pumpTypes: [
        "Fire Fighting Pumps",
        "Booster Pumps",
        "Sprinkler Pumps",
        "Foam Pumps",
      ],
      standards: [
        "SOLAS Fire Safety",
        "IMO FSS Code",
        "NFPA Standards",
        "Class Approval",
      ],
    },
    {
      category: "Cargo Operations",
      icon: "📦",
      description: "Cargo pumping, transfer, and handling systems",
      pumpTypes: [
        "Cargo Pumps",
        "Stripper Pumps",
        "Oil Transfer Pumps",
        "Chemical Pumps",
      ],
      standards: ["MARPOL", "SOLAS", "IMO Codes", "Classification Rules"],
    },
    {
      category: "Machinery Systems",
      icon: "⚙️",
      description: "Engine room and machinery cooling/lubrication systems",
      pumpTypes: [
        "Cooling Pumps",
        "Lubrication Pumps",
        "Fuel Pumps",
        "Scavenge Pumps",
      ],
      standards: [
        "Classification Society",
        "Engine Manufacturer Specs",
        "Marine Standards",
      ],
    },
  ];

  const technicalSpecs = [
    {
      category: "Performance Specifications",
      icon: "📊",
      specs: [
        "Flow Rates: 1-10,000 m³/h",
        "Pressure Heads: Up to 1,000 bar",
        "Temperature Range: -50°C to 350°C",
        "Viscosity Range: 1-10,000 cSt",
        "Materials: Cast Iron, Stainless Steel, Bronze, Duplex",
      ],
    },
    {
      category: "Marine Compliance",
      icon: "✅",
      specs: [
        "SOLAS Compliant",
        "IMO Approved",
        "Classification Society Certified",
        "Marine Environment Certified",
        "Explosion Proof Options Available",
      ],
    },
    {
      category: "Service Capabilities",
      icon: "🔧",
      specs: [
        "24/7 Technical Support",
        "On-site Installation",
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
          <h1 className="page-title">Pumps – Marine & Industrial</h1>
          <p className="page-subtitle">
            Comprehensive Marine and Industrial Pumping Solutions
          </p>
        </div>

        <section className="product-intro">
          <div className="intro-content">
            <h2>Complete Pumping Solutions</h2>
            <p>
              ASP Global Marine Trading LLC provides comprehensive marine and
              industrial pumping solutions for vessels, offshore platforms, and
              industrial facilities. With over 18 years of expertise, we supply
              genuine and OEM pumps from leading manufacturers worldwide,
              ensuring reliable performance, compliance with maritime standards,
              and exceptional technical support for all pumping applications.
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
          <h2>Pump Categories</h2>
          <div className="category-grid">
            {pumpCategories.map((category, index) => (
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
          <h2>Marine Applications</h2>
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
                  <h4>Pump Types:</h4>
                  <div className="product-tags">
                    {application.pumpTypes.map((pump, idx) => (
                      <span key={idx} className="product-tag">
                        {pump}
                      </span>
                    ))}
                  </div>
                </div>
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
