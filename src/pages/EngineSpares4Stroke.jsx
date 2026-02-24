/**
 * ASP Global Marine Trading LLC - Engine Spares 4-Stroke Page
 *
 * Comprehensive 4-Stroke engine spare parts and components
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";

const EngineSpares4Stroke = () => {
  const manufacturers = [
    "Caterpillar",
    "Cummins",
    "MAN Energy Solutions",
    "Wärtsilä",
    "Yanmar",
    "Daihatsu",
    "Weichai",
    "John Deere",
    "Volvo Penta",
    "Scania",
    "Mitsubishi",
    "Niigata",
  ];

  const productCategories = [
    {
      category: "Piston System Components",
      icon: "🔧",
      products: [
        "Piston Assemblies",
        "Piston Rings",
        "Piston Pins",
        "Piston Pin Bushings",
        "Piston Cooling Jets",
        "Piston Crowns",
        "Connecting Rods",
        "Connecting Rod Bearings",
      ],
      description:
        "Complete piston and connecting rod assemblies for optimal engine performance",
    },
    {
      category: "Cylinder Head System",
      icon: "⚙️",
      products: [
        "Cylinder Heads",
        "Cylinder Head Gaskets",
        "Valve Seats",
        "Valve Guides",
        "Valve Springs",
        "Valve Keepers",
        "Injectors",
        "Glow Plugs",
      ],
      description:
        "Complete cylinder head assemblies and valve train components",
    },
    {
      category: "Crankshaft System",
      icon: "🔗",
      products: [
        "Crankshafts",
        "Main Bearings",
        "Thrust Bearings",
        "Crankshaft Pulleys",
        "Vibration Dampers",
        "Flywheel Rings",
        "Timing Gears",
        "Crankshaft Seals",
      ],
      description:
        "Critical crankshaft and bearing components for power transmission",
    },
    {
      category: "Fuel System Components",
      icon: "⛽",
      products: [
        "Fuel Injection Pumps",
        "Fuel Injectors",
        "Fuel Filters",
        "Fuel Heaters",
        "Fuel Lines",
        "Fuel Pressure Regulators",
        "Fuel Transfer Pumps",
        "High Pressure Pumps",
      ],
      description: "Precision fuel injection and delivery system components",
    },
    {
      category: "Cooling System Components",
      icon: "❄️",
      products: [
        "Water Pumps",
        "Thermostats",
        "Radiators",
        "Heat Exchangers",
        "Cooling Fans",
        "Temperature Sensors",
        "Coolant Hoses",
        "Expansion Tanks",
      ],
      description:
        "Complete cooling system components for temperature management",
    },
    {
      category: "Lubrication System",
      icon: "💧",
      products: [
        "Oil Pumps",
        "Oil Filters",
        "Oil Coolers",
        "Oil Pressure Switches",
        "Oil Level Sensors",
        "Lubrication Lines",
        "Oil Pans",
        "Breather Systems",
      ],
      description:
        "Comprehensive lubrication system components for engine protection",
    },
    {
      category: "Air Intake System",
      icon: "🌬️",
      products: [
        "Air Filters",
        "Turbochargers",
        "Intercoolers",
        "Air Intake Manifolds",
        "Mass Air Flow Sensors",
        "Throttle Bodies",
        "EGR Valves",
        "Intake Valves",
      ],
      description:
        "Air intake and turbocharging components for optimal combustion",
    },
    {
      category: "Electrical System",
      icon: "⚡",
      products: [
        "Starter Motors",
        "Alternators",
        "Sensors",
        "Wiring Harnesses",
        "Control Modules",
        "Ignition Coils",
        "Spark Plugs",
        "Voltage Regulators",
      ],
      description: "Complete electrical and electronic system components",
    },
  ];

  const applications = [
    {
      category: "Marine Auxiliary Engines",
      icon: "🚢",
      description: "Generator sets, pump engines, and auxiliary power units",
      engines: [
        "Caterpillar 3300 Series",
        "Cummins Q Series",
        "MAN D Series",
        "Wärtsilä 20 Series",
      ],
    },
    {
      category: "Main Propulsion Engines",
      icon: "⚓",
      description: "Medium-speed main propulsion engines for vessels",
      engines: [
        "MAN 32/44 Series",
        "Wärtsilä 26/38 Series",
        "Niigata 8L27HX",
        "Yanmar 6EY Series",
      ],
    },
    {
      category: "Emergency Power Systems",
      icon: "🔋",
      description: "Emergency generators and backup power systems",
      engines: [
        "Caterpillar C Series",
        "Cummins X Series",
        "Volvo Penta D Series",
        "Scania DI Series",
      ],
    },
    {
      category: "Industrial Applications",
      icon: "🏭",
      description: "Industrial engines for pumps, compressors, and equipment",
      engines: [
        "John Deere PowerTech",
        "Weichai WD Series",
        "Daihatsu DK Series",
        "Mitsubishi S6R Series",
      ],
    },
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Engine Spares - 4-Stroke</h1>
          <p className="page-subtitle">
            Comprehensive 4-Stroke Marine Engine Spare Parts Solutions
          </p>
        </div>

        <section className="product-intro">
          <div className="intro-content">
            <h2>Complete 4-Stroke Engine Solutions</h2>
            <p>
              ASP Global Marine Trading LLC specializes in supplying genuine,
              OEM, and equivalent spare parts for 4-stroke marine engines. With
              over 18 years of experience, we provide comprehensive solutions
              for all major 4-stroke engine manufacturers, ensuring optimal
              performance, reliability, and compliance with maritime standards.
              Our extensive inventory covers auxiliary engines, main propulsion
              systems, and industrial applications.
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

        <section className="product-categories">
          <h2>Applications & Engine Types</h2>
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
                  <h4>Supported Engine Series:</h4>
                  <div className="product-tags">
                    {application.engines.map((engine, idx) => (
                      <span key={idx} className="product-tag">
                        {engine}
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
              <h3>Material Quality</h3>
              <ul>
                <li>Grade A forged steel components</li>
                <li>Heat-treated alloy materials</li>
                <li>Corrosion-resistant coatings</li>
                <li>ISO 9001 certified materials</li>
                <li>Wear-resistant surface treatments</li>
              </ul>
            </div>
            <div className="spec-card">
              <h3>Performance Standards</h3>
              <ul>
                <li>SOLAS compliant components</li>
                <li>IMO certification ready</li>
                <li>Class society approved</li>
                <li>OEM specifications matched</li>
                <li>Performance tested components</li>
              </ul>
            </div>
            <div className="spec-card">
              <h3>Service Support</h3>
              <ul>
                <li>24/7 technical assistance</li>
                <li>Installation guidance</li>
                <li>Maintenance protocols</li>
                <li>Spare parts inventory</li>
                <li>Field service support</li>
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
            <h2>Need 4-Stroke Engine Parts?</h2>
            <p>
              Contact our technical team for expert assistance with your
              4-stroke engine requirements. We provide comprehensive solutions
              with rapid delivery worldwide and 24/7 technical support.
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

export default EngineSpares4Stroke;
