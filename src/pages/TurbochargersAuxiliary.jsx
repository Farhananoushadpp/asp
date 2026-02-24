/**
 * ASP Global Marine Trading LLC - Turbochargers & Auxiliary Engine Products Page
 *
 * Comprehensive turbocharger and auxiliary engine solutions
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";

const TurbochargersAuxiliary = () => {
  const turbochargerManufacturers = [
    "ABB",
    "KBB",
    "Mitsubishi",
    "MAN",
    "Wärtsilä",
    "IHI",
    "Napier",
  ];

  const auxiliaryManufacturers = [
    "Caterpillar",
    "Cummins",
    "Yanmar",
    "Daihatsu",
    "Weichai",
    "John Deere",
    "Volvo Penta",
    "Scania",
  ];

  const turbochargerCategories = [
    {
      category: "Complete Turbocharger Units",
      icon: "🌀",
      products: [
        "VTR Series Turbochargers",
        "VTC Series Turbochargers",
        "MET Series Turbochargers",
        "A Series Turbochargers",
        "H Series Turbochargers",
        "M Series Turbochargers",
        "TCA Series Turbochargers",
        "TCA-B Series Turbochargers",
      ],
      description:
        "Complete turbocharger assemblies for marine and industrial applications",
    },
    {
      category: "Turbocharger Rotors & Wheels",
      icon: "🔄",
      products: [
        "Turbine Wheels",
        "Compressor Wheels",
        "Rotor Assemblies",
        "Blower Wheels",
        "Impeller Wheels",
        "Shaft Assemblies",
        "Balance Shafts",
        "Coupling Shafts",
      ],
      description:
        "High-precision rotating components for optimal turbocharger performance",
    },
    {
      category: "Bearings & Seals",
      icon: "⚙️",
      products: [
        "Journal Bearings",
        "Thrust Bearings",
        "Ball Bearings",
        "Roller Bearings",
        "Labyrinth Seals",
        "Oil Seals",
        "Gas Seals",
        "Seal Plates",
      ],
      description:
        "Critical bearing and sealing components for reliable operation",
    },
    {
      category: "Nozzles & Guide Vanes",
      icon: "🌪️",
      products: [
        "Nozzle Rings",
        "Guide Vanes",
        "Nozzle Carriers",
        "Turbine Nozzles",
        "Compressor Nozzles",
        "Vane Assemblies",
        "Diaphragm Plates",
        "Ring Segments",
      ],
      description: "Precision flow control components for efficient gas flow",
    },
    {
      category: "Repair Kits & Spares",
      icon: "🔧",
      products: [
        "Overhaul Kits",
        "Maintenance Kits",
        "Bearing Kits",
        "Seal Kits",
        "Gasket Sets",
        "Bolt Sets",
        "Washer Sets",
        "O-ring Kits",
      ],
      description:
        "Comprehensive repair and maintenance kits for turbocharger servicing",
    },
  ];

  const auxiliaryCategories = [
    {
      category: "Generator Sets",
      icon: "⚡",
      products: [
        "Marine Generators",
        "Diesel Generators",
        "AC Generators",
        "DC Generators",
        "Stator Assemblies",
        "Rotor Assemblies",
        "Voltage Regulators",
        "Control Panels",
      ],
      description: "Complete power generation solutions for marine vessels",
    },
    {
      category: "Auxiliary Engines",
      icon: "🔥",
      products: [
        "Marine Auxiliary Engines",
        "Generator Engines",
        "Pump Engines",
        "Compressor Engines",
        "Engine Blocks",
        "Cylinder Heads",
        "Crankshafts",
        "Camshafts",
      ],
      description: "Reliable auxiliary engines for various marine applications",
    },
    {
      category: "Engine Components",
      icon: "⚙️",
      products: [
        "Piston Assemblies",
        "Cylinder Liners",
        "Valve Train Components",
        "Fuel Injection Systems",
        "Cooling Systems",
        "Lubrication Systems",
        "Starting Systems",
        "Exhaust Systems",
      ],
      description:
        "Complete range of engine components for maintenance and repair",
    },
    {
      category: "Control Systems",
      icon: "🎛️",
      products: [
        "Engine Control Units",
        "Speed Governors",
        "Safety Systems",
        "Monitoring Systems",
        "Sensors",
        "Actuators",
        "Switches",
        "Indicators",
      ],
      description:
        "Advanced control and monitoring systems for engine management",
    },
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">
            Turbochargers & Auxiliary Engine Products
          </h1>
          <p className="page-subtitle">
            Comprehensive Turbocharger and Auxiliary Engine Solutions for Marine
            Applications
          </p>
        </div>

        <section className="product-intro">
          <div className="intro-content">
            <h2>Advanced Power Solutions</h2>
            <p>
              ASP Global Marine Trading LLC provides comprehensive turbocharger
              and auxiliary engine solutions for the maritime industry. Our
              extensive inventory includes complete turbocharger units,
              precision components, and auxiliary engine systems from leading
              manufacturers worldwide. With over 18 years of expertise, we
              ensure reliable performance, compliance with maritime standards,
              and exceptional technical support.
            </p>
            <div className="manufacturer-showcase">
              <h3>Turbocharger Manufacturers</h3>
              <div className="manufacturer-grid">
                {turbochargerManufacturers.map((manufacturer, index) => (
                  <div key={index} className="manufacturer-card">
                    <span className="manufacturer-name">{manufacturer}</span>
                  </div>
                ))}
              </div>
              <h3>Auxiliary Engine Manufacturers</h3>
              <div className="manufacturer-grid">
                {auxiliaryManufacturers.map((manufacturer, index) => (
                  <div key={index} className="manufacturer-card">
                    <span className="manufacturer-name">{manufacturer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="product-categories">
          <h2>Turbocharger Solutions</h2>
          <div className="category-grid">
            {turbochargerCategories.map((category, index) => (
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
          <h2>Auxiliary Engine Solutions</h2>
          <div className="category-grid">
            {auxiliaryCategories.map((category, index) => (
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
          <h2>Technical Excellence & Services</h2>
          <div className="spec-grid">
            <div className="spec-card">
              <h3>Technical Consultation</h3>
              <ul>
                <li>Turbocharger selection and sizing</li>
                <li>Performance optimization</li>
                <li>System integration support</li>
                <li>Failure analysis and troubleshooting</li>
                <li>Upgrade recommendations</li>
              </ul>
            </div>
            <div className="spec-card">
              <h3>Overhaul & Repair</h3>
              <ul>
                <li>Complete turbocharger overhaul</li>
                <li>Bearing replacement services</li>
                <li>Rotor balancing and repair</li>
                <li>Performance testing</li>
                <li>On-site service support</li>
              </ul>
            </div>
            <div className="spec-card">
              <h3>Quality Assurance</h3>
              <ul>
                <li>OEM specification compliance</li>
                <li>Material certification</li>
                <li>Performance testing</li>
                <li>Classification society approval</li>
                <li>Warranty and guarantee support</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="quality-assurance">
          <h2>Quality & Compliance Standards</h2>
          <div className="quality-grid">
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Original Equipment Quality</h3>
              <p>
                100% genuine OEM parts with manufacturer warranty and full
                traceability
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Performance Testing</h3>
              <p>
                All components undergo rigorous performance testing and quality
                inspection
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Marine Certification</h3>
              <p>
                SOLAS, IMO, and classification society approved components and
                systems
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Technical Documentation</h3>
              <p>
                Complete technical documentation, certificates, and compliance
                records
              </p>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <div className="cta-content">
            <h2>Need Turbocharger or Auxiliary Engine Solutions?</h2>
            <p>
              Contact our technical team for expert assistance with your
              turbocharger and auxiliary engine requirements. We provide
              comprehensive solutions with rapid delivery worldwide and 24/7
              technical support.
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

export default TurbochargersAuxiliary;
