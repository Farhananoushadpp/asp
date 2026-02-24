/**
 * ASP Global Marine Trading LLC - HVAC Compressors & Spares Page
 *
 * Comprehensive marine HVAC systems, compressors and spare parts
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";

const HVACCompressors = () => {
  const manufacturers = [
    "Carrier",
    "York",
    "Trane",
    "Daikin",
    "Mitsubishi Electric",
    "Bitzer",
    "Copeland",
    "Danfoss",
    "Johnson Controls",
    "Honeywell",
    "Siemens",
    "FläktGroup",
    "Systemair",
    "Witt & Sohn",
    "Howden",
    "Alfa Laval",
  ];

  const hvacCategories = [
    {
      category: "Marine HVAC Systems",
      icon: "❄️",
      products: [
        "Marine Air Conditioning Systems",
        "Chiller Systems",
        "Heat Pump Systems",
        "Package Units",
        "Split Systems",
        "VRF Systems",
        "Ducted Systems",
        "Rooftop Units",
      ],
      description:
        "Complete marine HVAC systems for vessel climate control and comfort",
    },
    {
      category: "Refrigeration Compressors",
      icon: "🌀",
      products: [
        "Screw Compressors",
        "Scroll Compressors",
        "Reciprocating Compressors",
        "Centrifugal Compressors",
        "Rotary Vane Compressors",
        "Semi-Hermetic Compressors",
        "Hermetic Compressors",
        "Open Type Compressors",
      ],
      description:
        "Advanced refrigeration compressors for marine and industrial applications",
    },
    {
      category: "Heat Exchangers",
      icon: "🌡️",
      products: [
        "Shell & Tube Heat Exchangers",
        "Plate Heat Exchangers",
        "Air Cooled Condensers",
        "Water Cooled Condensers",
        "Evaporators",
        "Cooling Coils",
        "Heating Coils",
        "Receivers",
      ],
      description:
        "Comprehensive heat exchange solutions for HVAC and refrigeration systems",
    },
    {
      category: "Ventilation Systems",
      icon: "💨",
      products: [
        "Axial Fans",
        "Centrifugal Fans",
        "Supply Air Fans",
        "Exhaust Fans",
        "Jet Fans",
        "Inline Fans",
        "Roof Ventilators",
        "Air Handling Units",
      ],
      description:
        "Complete ventilation and air handling solutions for marine vessels",
    },
    {
      category: "Control Systems",
      icon: "📊",
      products: [
        "HVAC Control Panels",
        "Building Management Systems",
        "Temperature Controllers",
        "Pressure Controllers",
        "Humidity Controllers",
        "Programmable Logic Controllers",
        "Sensors",
        "Actuators",
      ],
      description:
        "Advanced control and automation systems for optimal HVAC performance",
    },
    {
      category: "Refrigeration Components",
      icon: "❄️",
      products: [
        "Expansion Valves",
        "Filter Driers",
        "Sight Glasses",
        "Refrigerant Valves",
        "Service Valves",
        "Pressure Switches",
        "Flow Switches",
        "Thermostatic Valves",
      ],
      description: "Complete range of refrigeration components and accessories",
    },
  ];

  const applications = [
    {
      category: "Marine Vessels",
      icon: "🚢",
      description: "HVAC solutions for various vessel types and applications",
      vessels: [
        "Cargo Ships",
        "Tankers",
        "Container Ships",
        "Passenger Vessels",
        "Offshore Support Vessels",
      ],
      applications: [
        "Bridge Air Conditioning",
        "Cabin HVAC",
        "Engine Room Ventilation",
        "Cargo Space Cooling",
      ],
    },
    {
      category: "Offshore Platforms",
      icon: "🏗️",
      description: "HVAC systems for offshore oil and gas operations",
      vessels: [
        "Fixed Platforms",
        "FPSOs",
        "Drilling Rigs",
        "Production Platforms",
      ],
      applications: [
        "Control Room HVAC",
        "Living Quarters",
        "Equipment Cooling",
        "Process Air Conditioning",
      ],
    },
    {
      category: "Industrial Applications",
      icon: "🏭",
      description: "HVAC solutions for industrial and manufacturing facilities",
      vessels: [
        "Power Plants",
        "Chemical Plants",
        "Food Processing",
        "Pharmaceutical",
      ],
      applications: [
        "Process Cooling",
        "Clean Room HVAC",
        "Industrial Ventilation",
        "Comfort Cooling",
      ],
    },
    {
      category: "Special Applications",
      icon: "⚓",
      description: "Specialized HVAC solutions for unique requirements",
      vessels: [
        "Hospital Ships",
        "Research Vessels",
        "Naval Ships",
        "Luxury Yachts",
      ],
      applications: [
        "Medical HVAC",
        "Laboratory Ventilation",
        "Military HVAC",
        "Luxury Climate Control",
      ],
    },
  ];

  const technicalSpecs = [
    {
      category: "Performance Specifications",
      icon: "📊",
      specs: [
        "Cooling Capacity: 5-5000 kW",
        "Heating Capacity: 10-10000 kW",
        "Air Flow: 1000-100000 m³/h",
        "Temperature Range: -20°C to 45°C",
        "Humidity Control: 30-80% RH",
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
        "Vibration Tested",
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
          <h1 className="page-title">HVAC Compressors & Spares</h1>
          <p className="page-subtitle">
            Comprehensive Marine HVAC Systems, Compressors and Spare Parts
            Solutions
          </p>
        </div>

        <section className="product-intro">
          <div className="intro-content">
            <h2>Advanced Climate Solutions</h2>
            <p>
              ASP Global Marine Trading LLC provides comprehensive marine HVAC
              systems, compressors, and spare parts for vessels, offshore
              platforms, and industrial facilities. With over 18 years of
              expertise, we supply advanced HVAC equipment from leading
              manufacturers worldwide, ensuring optimal performance, energy
              efficiency, and compliance with maritime standards for all climate
              control requirements.
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
          <h2>HVAC System Categories</h2>
          <div className="category-grid">
            {hvacCategories.map((category, index) => (
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
                  <h4>Vessel Types:</h4>
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
              <h3>Environmental Compliance</h3>
              <p>
                Equipment meets environmental regulations for refrigerants and
                energy efficiency
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Performance Testing</h3>
              <p>
                Comprehensive testing for cooling capacity, efficiency, and
                reliability
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
            <h2>Need HVAC & Compressor Solutions?</h2>
            <p>
              Contact our technical team for expert assistance with your HVAC
              and compressor requirements. We provide comprehensive solutions
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

export default HVACCompressors;
