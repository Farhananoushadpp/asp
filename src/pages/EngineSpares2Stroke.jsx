/**
 * ASP Global Marine Trading LLC - Engine Spares 2-Stroke Page
 *
 * Comprehensive 2-Stroke engine spare parts and components
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";

const EngineSpares2Stroke = () => {
  const manufacturers = [
    "YANMAR",
    "Wärtsilä",
    "MAN Energy Solutions",
    "Cummins",
    "Mitsubishi Heavy Industries",
    "Wingd",
    "SULZER",
    "UEC",
  ];

  const productCategories = [
    {
      category: "Piston Components",
      icon: "🔧",
      products: [
        "Piston Crowns",
        "Piston Rings",
        "Piston Skirts",
        "Piston Cooling Nozzles",
        "Piston Ring Carriers",
        "Crosshead Bearings",
        "Gudgeon Pins",
        "Pin Bushings",
      ],
      description:
        "Complete piston assembly components for optimal engine performance",
    },
    {
      category: "Cylinder System",
      icon: "⚙️",
      products: [
        "Cylinder Liners",
        "Cylinder Covers",
        "Cylinder Lubricators",
        "Scavenging Air Receivers",
        "Cylinder Cooling Jackets",
        "Liner Sealing Rings",
        "Cylinder Relief Valves",
      ],
      description: "High-quality cylinder components for reliable operation",
    },
    {
      category: "Fuel Injection System",
      icon: "⛽",
      products: [
        "Fuel Pumps",
        "Fuel Injection Valves",
        "Fuel Injectors",
        "Fuel Camshafts",
        "Fuel Pump Rollers",
        "Fuel Valve Spindles",
        "Fuel Heaters",
        "Fuel Filters",
      ],
      description:
        "Precision fuel injection components for efficient combustion",
    },
    {
      category: "Turbocharging System",
      icon: "🌪️",
      products: [
        "Turbocharger Units",
        "Turbocharger Rotors",
        "Turbocharger Nozzles",
        "Turbocharger Bearings",
        "Seal Plates",
        "Repair Kits",
        "Labyrinth Seals",
        "Blower Wheels",
      ],
      description:
        "Complete turbocharging solutions for enhanced engine efficiency",
    },
    {
      category: "Valve Train System",
      icon: "🔄",
      products: [
        "Exhaust Valves",
        "Inlet Valves",
        "Valve Cages",
        "Valve Spindles",
        "Valve Seats",
        "Valve Springs",
        "Valve Guides",
        "Valve Rockers",
      ],
      description: "Precision valve train components for optimal timing",
    },
    {
      category: "Shaft & Bearing System",
      icon: "🔗",
      products: [
        "Crankshafts",
        "Camshafts",
        "Main Bearings",
        "Thrust Bearings",
        "Crosshead Bearings",
        "Connecting Rod Bolts",
        "Shaft Seals",
        "Coupling Flanges",
      ],
      description:
        "Critical shaft and bearing components for power transmission",
    },
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Engine Spares - 2-Stroke</h1>
          <p className="page-subtitle">
            Comprehensive 2-Stroke Marine Engine Spare Parts Solutions
          </p>
        </div>

        <section className="product-intro">
          <div className="intro-content">
            <h2>Complete 2-Stroke Engine Solutions</h2>
            <p>
              ASP Global Marine Trading LLC specializes in supplying genuine,
              OEM, and equivalent spare parts for 2-stroke marine engines. With
              over 18 years of experience, we provide comprehensive solutions
              for all major 2-stroke engine manufacturers, ensuring optimal
              performance, reliability, and compliance with maritime standards.
            </p>
            <div className="manufacturer-showcase">
              <h3>Supported Manufacturers</h3>
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
          <h2>Product Categories</h2>
          <div className="category-grid">
            {productCategories.map((category, index) => (
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

        <section className="technical-specifications">
          <h2>Technical Excellence</h2>
          <div className="spec-grid">
            <div className="spec-card">
              <h3>Material Quality</h3>
              <ul>
                <li>Grade A forged steel components</li>
                <li>Heat-treated alloy materials</li>
                <li>Corrosion-resistant coatings</li>
                <li>ISO 9001 certified materials</li>
              </ul>
            </div>
            <div className="spec-card">
              <h3>Performance Standards</h3>
              <ul>
                <li>SOLAS compliant components</li>
                <li>IMO certification ready</li>
                <li>Class society approved</li>
                <li>OEM specifications matched</li>
              </ul>
            </div>
            <div className="spec-card">
              <h3>Service Support</h3>
              <ul>
                <li>24/7 technical assistance</li>
                <li>Installation guidance</li>
                <li>Maintenance protocols</li>
                <li>Spare parts inventory</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="quality-assurance">
          <h2>Quality Assurance & Compliance</h2>
          <div className="quality-grid">
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Genuine Parts Guarantee</h3>
              <p>
                100% genuine manufacturer parts with full traceability and
                documentation
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Classification Society Approved</h3>
              <p>
                All components meet DNV, ABS, Lloyd's Register, and Bureau
                Veritas requirements
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Global Compliance</h3>
              <p>
                Full compliance with international maritime regulations and
                standards
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Technical Expertise</h3>
              <p>
                Expert guidance on part selection, compatibility, and
                installation
              </p>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <div className="cta-content">
            <h2>Need 2-Stroke Engine Parts?</h2>
            <p>
              Contact our technical team for expert assistance with your
              2-stroke engine requirements. We provide comprehensive solutions
              with rapid delivery worldwide.
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

export default EngineSpares2Stroke;
