/**
 * ASP Global Marine Trading LLC - Engine Stores Page
 *
 * Comprehensive engine room supplies and equipment solutions
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";

const EngineStores = () => {
  const manufacturers = [
    "Bahco",
    "Stanley",
    "Snap-on",
    "Facom",
    "Beta",
    "Victor Reinz",
    "Elring",
    "Gasket",
    "Corteco",
    "Payen",
    "Bumax",
    "Unbrako",
    "Holo-Krome",
    "Anker",
    "Shell",
    "Total",
    "ExxonMobil",
    "BP",
    "Chevron",
    "Mann+Hummel",
    "Donaldson",
    "Baldwin",
    "Fleetguard",
    "Wix",
    "Siemens",
    "ABB",
    "Schneider",
    "Hager",
    "Legrand",
  ];

  const engineCategories = [
    {
      category: "Engine Room Tools",
      icon: "🔧",
      products: [
        "Socket Sets",
        "Wrenches",
        "Pliers",
        "Screwdrivers",
        "Torque Wrenches",
        "Specialty Tools",
        "Tool Kits",
        "Measuring Tools",
      ],
      description:
        "Specialized tools for engine room maintenance and repair operations",
    },
    {
      category: "Gaskets & Seals",
      icon: "🔩",
      products: [
        "Head Gaskets",
        "Valve Cover Gaskets",
        "Oil Pan Gaskets",
        "Intake Gaskets",
        "Exhaust Gaskets",
        "O-Rings",
        "Seal Kits",
        "Packing Materials",
      ],
      description:
        "Complete range of gaskets and seals for engine sealing applications",
    },
    {
      category: "Fasteners & Hardware",
      icon: "⚙️",
      products: [
        "Marine Grade Bolts",
        "Nuts and Washers",
        "Studs",
        "Threaded Rods",
        "Anchors",
        "Clamps",
        "Brackets",
        "Mounting Hardware",
      ],
      description:
        "Marine-grade fasteners and hardware for engine room applications",
    },
    {
      category: "Lubricants & Fluids",
      icon: "💧",
      products: [
        "Engine Oils",
        "Transmission Fluids",
        "Hydraulic Fluids",
        "Greases",
        "Coolants",
        "Additives",
        "Cleaning Fluids",
        "Degreasers",
      ],
      description: "Comprehensive lubricants and fluids for engine maintenance",
    },
    {
      category: "Filtration Systems",
      icon: "🔍",
      products: [
        "Oil Filters",
        "Fuel Filters",
        "Air Filters",
        "Hydraulic Filters",
        "Water Separators",
        "Breather Filters",
        "Filter Elements",
        "Filter Kits",
      ],
      description: "Complete filtration solutions for engine protection",
    },
    {
      category: "Electrical Components",
      icon: "⚡",
      products: [
        "Wiring and Cables",
        "Connectors",
        "Switches",
        "Circuit Breakers",
        "Fuses",
        "Lighting",
        "Instruments",
        "Control Panels",
      ],
      description:
        "Electrical components for engine room power and control systems",
    },
    {
      category: "Maintenance Supplies",
      icon: "🧹",
      products: [
        "Cleaning Chemicals",
        "Solvents",
        "Rags and Wipes",
        "Safety Equipment",
        "Storage Containers",
        "Labeling Systems",
        "Workshop Supplies",
        "Safety Gear",
      ],
      description: "Essential maintenance supplies for engine room operations",
    },
    {
      category: "Spare Parts",
      icon: "📦",
      products: [
        "Belts and Hoses",
        "Bearings",
        "Bushings",
        "Wear Parts",
        "Electrical Components",
        "Sensors",
        "Actuators",
        "Control Valves",
      ],
      description: "Common spare parts for engine maintenance and repair",
    },
  ];

  const applications = [
    {
      category: "Main Engine Systems",
      icon: "⚙️",
      description: "Engine stores for main propulsion engine maintenance",
      vessels: [
        "Main Engines",
        "Propulsion Systems",
        "Power Transmission",
        "Engine Control",
      ],
      applications: [
        "Engine Maintenance",
        "Performance Optimization",
        "Troubleshooting",
        "Repairs",
      ],
    },
    {
      category: "Auxiliary Engine Systems",
      icon: "🔧",
      description: "Stores for auxiliary engine and generator maintenance",
      vessels: [
        "Generator Sets",
        "Auxiliary Engines",
        "Pump Systems",
        "Compressors",
      ],
      applications: [
        "Routine Maintenance",
        "Emergency Repairs",
        "Overhauls",
        "Upgrades",
      ],
    },
    {
      category: "Engine Room Operations",
      icon: "🏭",
      description: "General engine room operational supplies and equipment",
      vessels: [
        "Engine Room",
        "Control Room",
        "Workshop Areas",
        "Storage Areas",
      ],
      applications: [
        "Daily Operations",
        "Maintenance Planning",
        "Safety Compliance",
        "Efficiency Improvement",
      ],
    },
    {
      category: "Emergency Preparedness",
      icon: "🚨",
      description:
        "Emergency supplies and equipment for engine room operations",
      vessels: [
        "Emergency Equipment",
        "Safety Systems",
        "Backup Systems",
        "Critical Spares",
      ],
      applications: [
        "Emergency Response",
        "Critical Repairs",
        "System Failures",
        "Safety Procedures",
      ],
    },
  ];

  const technicalSpecs = [
    {
      category: "Quality Standards",
      icon: "📊",
      specs: [
        "ISO 9001 Certified Suppliers",
        "Marine Grade Materials",
        "Classification Society Approved",
        "OEM Specifications",
        "International Standards Compliance",
      ],
    },
    {
      category: "Performance Specifications",
      icon: "✅",
      specs: [
        "Temperature Range: -40°C to 200°C",
        "Pressure Rating: Up to 1000 bar",
        "Corrosion Resistance: Marine Grade",
        "Load Capacity: Engine Rated",
        "Service Life: Extended Durability",
      ],
    },
    {
      category: "Service Capabilities",
      icon: "🔧",
      specs: [
        "24/7 Technical Support",
        "Marine Installation",
        "Inspection Services",
        "Maintenance Contracts",
        "Emergency Supply Services",
      ],
    },
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Engine Stores</h1>
          <p className="page-subtitle">
            Comprehensive Engine Room Supplies and Equipment Solutions
          </p>
        </div>

        <section className="product-intro">
          <div className="intro-content">
            <h2>Complete Engine Room Solutions</h2>
            <p>
              ASP Global Marine Trading LLC provides comprehensive engine room
              supplies and equipment for vessels, offshore platforms, and
              industrial facilities. With over 18 years of expertise, we supply
              essential engine room tools, spare parts, lubricants, and
              maintenance supplies from leading manufacturers worldwide,
              ensuring reliable performance and operational excellence for all
              engine room requirements.
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
          <h2>Engine Store Categories</h2>
          <div className="category-grid">
            {engineCategories.map((category, index) => (
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
                All products meet SOLAS, IMO, and classification society
                requirements with full certification
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>OEM Quality</h3>
              <p>
                Original equipment manufacturer quality parts and components for
                reliable performance
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Performance Testing</h3>
              <p>
                Comprehensive testing for durability, performance, and engine
                compatibility
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Technical Expertise</h3>
              <p>
                Expert guidance on product selection, installation, and
                maintenance for optimal engine performance
              </p>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <div className="cta-content">
            <h2>Need Engine Room Supplies?</h2>
            <p>
              Contact our technical team for expert assistance with your engine
              room supply requirements. We provide comprehensive solutions with
              rapid delivery worldwide and 24/7 technical support.
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

export default EngineStores;
