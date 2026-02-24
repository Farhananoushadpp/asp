/**
 * ASP Global Marine Trading LLC - Hydraulic Systems & Components Page
 *
 * Comprehensive marine hydraulic systems and components solutions
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";

const HydraulicSystems = () => {
  const manufacturers = [
    "Bosch Rexroth",
    "Parker Hannifin",
    "Eaton",
    "Danfoss",
    "Kawasaki",
    "Hyva",
    "Miller",
    "Sun Hydraulics",
    "Donaldson",
    "Hydac",
    "HAWE",
    "Moog",
    "Brevini",
    "Casappa",
    "Staffa",
    "Vickers",
    "Sauer Danfoss",
  ];

  const hydraulicCategories = [
    {
      category: "Hydraulic Pumps",
      icon: "⚙️",
      products: [
        "Gear Pumps",
        "Vane Pumps",
        "Piston Pumps",
        "Axial Piston Pumps",
        "Radial Piston Pumps",
        "Variable Displacement Pumps",
        "Fixed Displacement Pumps",
        "Marine Hydraulic Pumps",
      ],
      description:
        "Complete range of hydraulic pumps for marine and industrial applications",
    },
    {
      category: "Hydraulic Motors",
      icon: "🔧",
      products: [
        "Gear Motors",
        "Vane Motors",
        "Piston Motors",
        "Orbital Motors",
        "Stepper Motors",
        "Low-Speed High-Torque Motors",
        "High-Speed Motors",
        "Marine Hydraulic Motors",
      ],
      description: "Advanced hydraulic motors for precise power transmission",
    },
    {
      category: "Hydraulic Cylinders",
      icon: "📏",
      products: [
        "Single Acting Cylinders",
        "Double Acting Cylinders",
        "Telescopic Cylinders",
        "Marine Cylinders",
        "Stainless Steel Cylinders",
        "Custom Cylinders",
        "Compact Cylinders",
        "Heavy Duty Cylinders",
      ],
      description:
        "Precision hydraulic cylinders for linear motion applications",
    },
    {
      category: "Hydraulic Valves",
      icon: "🎛️",
      products: [
        "Directional Control Valves",
        "Pressure Control Valves",
        "Flow Control Valves",
        "Proportional Valves",
        "Servo Valves",
        "Cartridge Valves",
        "Check Valves",
        "Relief Valves",
      ],
      description: "Comprehensive valve solutions for hydraulic system control",
    },
    {
      category: "Hydraulic Power Units",
      icon: "⚡",
      products: [
        "Hydraulic Power Packs",
        "Compact Power Units",
        "Marine Power Units",
        "Custom Power Units",
        "Stainless Steel Units",
        "Explosion Proof Units",
        "Mobile Power Units",
        "Stationary Power Units",
      ],
      description: "Complete hydraulic power units for various applications",
    },
    {
      category: "Hydraulic Accessories",
      icon: "🔩",
      products: [
        "Hydraulic Filters",
        "Heat Exchangers",
        "Accumulators",
        "Reservoirs",
        "Coolers",
        "Hoses and Fittings",
        "Seals and Gaskets",
        "Instrumentation",
      ],
      description:
        "Essential accessories for complete hydraulic system operation",
    },
  ];

  const applications = [
    {
      category: "Marine Vessel Systems",
      icon: "🚢",
      description:
        "Hydraulic solutions for various vessel types and applications",
      vessels: [
        "Cargo Ships",
        "Tankers",
        "Container Ships",
        "Passenger Vessels",
        "Offshore Support Vessels",
      ],
      applications: [
        "Steering Systems",
        "Winch Systems",
        "Deck Machinery",
        "Cargo Handling",
      ],
    },
    {
      category: "Offshore Platforms",
      icon: "🏗️",
      description: "Hydraulic systems for offshore oil and gas operations",
      vessels: [
        "Fixed Platforms",
        "FPSOs",
        "Drilling Rigs",
        "Production Platforms",
      ],
      applications: [
        "Positioning Systems",
        "Lifting Equipment",
        "Process Control",
        "Safety Systems",
      ],
    },
    {
      category: "Industrial Applications",
      icon: "🏭",
      description:
        "Hydraulic systems for industrial and manufacturing facilities",
      vessels: [
        "Power Plants",
        "Chemical Plants",
        "Food Processing",
        "Heavy Industry",
      ],
      applications: [
        "Process Control",
        "Material Handling",
        "Press Systems",
        "Automation",
      ],
    },
    {
      category: "Mobile Equipment",
      icon: "🚜",
      description: "Hydraulic systems for mobile and construction equipment",
      vessels: [
        "Construction Equipment",
        "Agricultural Machinery",
        "Mining Equipment",
        "Material Handling",
      ],
      applications: [
        "Mobile Hydraulics",
        "Vehicle Systems",
        "Attachment Control",
        "Power Transmission",
      ],
    },
  ];

  const technicalSpecs = [
    {
      category: "Performance Specifications",
      icon: "📊",
      specs: [
        "Pressure Range: 70-700 bar",
        "Flow Rate: 1-1000 L/min",
        "Power Range: 1-500 kW",
        "Temperature Range: -20°C to 80°C",
        "Efficiency: Up to 95%",
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
          <h1 className="page-title">Hydraulic Systems & Components</h1>
          <p className="page-subtitle">
            Comprehensive Marine Hydraulic Systems and Components Solutions
          </p>
        </div>

        <section className="product-intro">
          <div className="intro-content">
            <h2>Advanced Hydraulic Solutions</h2>
            <p>
              ASP Global Marine Trading LLC provides comprehensive hydraulic
              systems and components for vessels, offshore platforms, and
              industrial facilities. With over 18 years of expertise, we supply
              advanced hydraulic equipment from leading manufacturers worldwide,
              ensuring reliable performance, precision control, and compliance
              with maritime standards for all hydraulic power transmission
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
          <h2>Hydraulic System Categories</h2>
          <div className="category-grid">
            {hydraulicCategories.map((category, index) => (
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
                Comprehensive testing for pressure, flow, and operational
                reliability
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Precision Engineering</h3>
              <p>
                High-precision components for accurate and reliable hydraulic
                performance
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Technical Expertise</h3>
              <p>
                Expert guidance on system design, installation, and optimization
                for maximum efficiency
              </p>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <div className="cta-content">
            <h2>Need Hydraulic Systems Solutions?</h2>
            <p>
              Contact our technical team for expert assistance with your
              hydraulic system requirements. We provide comprehensive solutions
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

export default HydraulicSystems;
