/**
 * ASP Global Marine Trading LLC - LSA & FFA (Life-Saving & Fire-Fighting Equipment) Page
 *
 * Comprehensive life-saving appliances and fire-fighting equipment solutions
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";

const LSAFFA = () => {
  const manufacturers = [
    "Survitec",
    "Viking",
    "Norsafe",
    "Fassmer",
    "Hatecke",
    "Winslow",
    "Revere",
    "Switlik",
    "Hansen Protection",
    "Mustang",
    "Crewsaver",
    "Kidde",
    "Ansul",
    "Minimax",
    "Siemens",
    "UTC",
    "Honeywell",
    "Johnson Controls",
    "Det-Tronics",
  ];

  const lsaCategories = [
    {
      category: "Lifeboats & Rescue Boats",
      icon: "🚤",
      products: [
        "Lifeboats",
        "Rescue Boats",
        "Fast Rescue Boats",
        "Open Lifeboats",
        "Closed Lifeboats",
        "Free-Fall Lifeboats",
        "Survival Craft",
        "Man-Overboard Boats",
      ],
      description:
        "Complete range of lifeboats and rescue boats for maritime safety operations",
    },
    {
      category: "Life Rafts & Survival Craft",
      icon: "🛟️",
      products: [
        "Inflatable Life Rafts",
        "Rigid Life Rafts",
        "Survival Rafts",
        "Throw-over Rafts",
        "Davit-Launched Rafts",
        "Hydrostatic Release Rafts",
        "Survival Pods",
        "Evacuation Systems",
      ],
      description:
        "Advanced life rafts and survival craft for emergency evacuation",
    },
    {
      category: "Personal Flotation Devices",
      icon: "🦺",
      products: [
        "Life Jackets",
        "Inflatable Life Jackets",
        "Work Vests",
        "Immersion Suits",
        "Anti-Exposure Suits",
        "Survival Suits",
        "Buoyancy Aids",
        "Life Preservers",
      ],
      description:
        "Personal flotation devices and protective suits for crew safety",
    },
    {
      category: "Emergency Equipment",
      icon: "🚨",
      products: [
        "EPIRBs",
        "SARTs",
        "Emergency Position Indicators",
        "Search Lights",
        "Signal Flares",
        "Survival Kits",
        "Emergency Beacons",
        "Communication Equipment",
      ],
      description:
        "Emergency communication and signaling equipment for distress situations",
    },
    {
      category: "Evacuation Systems",
      icon: "🪜",
      products: [
        "Marine Evacuation Systems",
        "Chutes",
        "Slides",
        "Escape Routes",
        "Assembly Stations",
        "Muster Stations",
        "Evacuation Platforms",
        "Rescue Systems",
        "Emergency Exits",
      ],
      description: "Complete evacuation systems for safe vessel abandonment",
    },
    {
      category: "Life-Saving Appliances",
      icon: "🛡️",
      products: [
        "Lifebuoys",
        "Line Throwing Appliances",
        "Pyrotechnics",
        "Signaling Equipment",
        "Navigation Lights",
        "Strobes",
        "Horns",
        "Whistles",
      ],
      description:
        "Essential life-saving appliances for maritime safety compliance",
    },
  ];

  const ffaCategories = [
    {
      category: "Fire Extinguishers",
      icon: "🔥",
      products: [
        "Portable Fire Extinguishers",
        "Fixed Fire Extinguishers",
        "Foam Extinguishers",
        "CO2 Extinguishers",
        "Dry Powder Extinguishers",
        "Water Mist Extinguishers",
        "Clean Agent Extinguishers",
        "Marine Extinguishers",
      ],
      description:
        "Comprehensive fire extinguishers for all types of marine fires",
    },
    {
      category: "Fire Detection Systems",
      icon: "🚨",
      products: [
        "Smoke Detectors",
        "Heat Detectors",
        "Flame Detectors",
        "Gas Detectors",
        "Fire Alarm Systems",
        "Control Panels",
        "Monitoring Systems",
        "Integration Systems",
      ],
      description:
        "Advanced fire detection and alarm systems for early warning",
    },
    {
      category: "Fire Suppression Systems",
      icon: "💧",
      products: [
        "Sprinkler Systems",
        "Water Mist Systems",
        "Foam Systems",
        "CO2 Systems",
        "Clean Agent Systems",
        "Inert Gas Systems",
        "Deluge Systems",
        "Local Application Systems",
      ],
      description:
        "Automatic fire suppression systems for comprehensive protection",
    },
    {
      category: "Fire Fighting Equipment",
      icon: "🚒",
      products: [
        "Fire Hoses",
        "Fire Nozzles",
        "Fire Hydrants",
        "Fire Pumps",
        "Fire Monitors",
        "Fire Blankets",
        "Fire Axes",
        "Fire Hoses Reels",
      ],
      description:
        "Professional fire fighting equipment for manual intervention",
    },
    {
      category: "Fire Safety Equipment",
      icon: "🛡️",
      products: [
        "Firefighter Outfits",
        "Breathing Apparatus",
        "Fire Helmets",
        "Fire Gloves",
        "Fire Boots",
        "Safety Harnesses",
        "Rescue Equipment",
        "Communication Devices",
      ],
      description: "Personal protective equipment for fire fighting operations",
    },
    {
      category: "Fire Control Systems",
      icon: "🎛️",
      products: [
        "Fire Control Panels",
        "Alarm Systems",
        "Emergency Shutdown Systems",
        "Ventilation Control",
        "Fire Dampers",
        "Smoke Extraction",
        "Fire Doors",
        "Fire Barriers",
      ],
      description: "Fire control and management systems for vessel protection",
    },
  ];

  const applications = [
    {
      category: "Commercial Vessels",
      icon: "🚢",
      description: "LSA & FFA solutions for commercial shipping operations",
      vessels: [
        "Cargo Ships",
        "Tankers",
        "Container Ships",
        "Bulk Carriers",
        "General Cargo Vessels",
      ],
      applications: [
        "Crew Safety",
        "Cargo Protection",
        "Emergency Response",
        "Fire Protection",
      ],
    },
    {
      category: "Passenger Vessels",
      icon: "🛳️",
      description: "Life-saving and fire equipment for passenger vessels",
      vessels: ["Cruise Ships", "Ferries", "Passenger Ships", "Ro-Ro Vessels"],
      applications: [
        "Passenger Safety",
        "Evacuation Systems",
        "Fire Detection",
        "Emergency Response",
      ],
    },
    {
      category: "Offshore Platforms",
      icon: "🏗️",
      description: "Specialized safety equipment for offshore operations",
      vessels: [
        "Fixed Platforms",
        "FPSOs",
        "Drilling Rigs",
        "Production Platforms",
      ],
      applications: [
        "Personnel Safety",
        "Emergency Evacuation",
        "Fire Protection",
        "Rescue Operations",
      ],
    },
    {
      category: "Special Vessels",
      icon: "⚓",
      description: "Safety equipment for specialized vessel types",
      vessels: [
        "Naval Ships",
        "Research Vessels",
        "Fishing Vessels",
        "Tugboats",
      ],
      applications: [
        "Military Safety",
        "Research Safety",
        "Fishing Safety",
        "Towing Operations",
      ],
    },
  ];

  const technicalSpecs = [
    {
      category: "Compliance Standards",
      icon: "📊",
      specs: [
        "SOLAS Compliant Equipment",
        "IMO Approved",
        "Classification Society Certified",
        "MED Certified",
        "ISO 9001 Quality Management",
      ],
    },
    {
      category: "Performance Specifications",
      icon: "✅",
      specs: [
        "Capacity: 25-1000 persons",
        "Operating Temperature: -30°C to 65°C",
        "Service Life: 10-30 years",
        "Maintenance Intervals: Annual",
        "Certification: Valid for 3 years",
      ],
    },
    {
      category: "Service Capabilities",
      icon: "🔧",
      specs: [
        "24/7 Technical Support",
        "Installation Services",
        "Inspection & Testing",
        "Maintenance Contracts",
        "Training Services",
      ],
    },
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">
            LSA & FFA (Life-Saving & Fire-Fighting Equipment)
          </h1>
          <p className="page-subtitle">
            Comprehensive Life-Saving Appliances and Fire-Fighting Equipment
            Solutions
          </p>
        </div>

        <section className="product-intro">
          <div className="intro-content">
            <h2>Advanced Maritime Safety Solutions</h2>
            <p>
              ASP Global Marine Trading LLC provides comprehensive life-saving
              appliances and fire-fighting equipment for vessels, offshore
              platforms, and maritime operations. With over 18 years of
              expertise, we supply advanced LSA & FFA equipment from leading
              manufacturers worldwide, ensuring compliance with SOLAS, IMO, and
              classification society requirements for maximum safety and
              operational excellence.
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
          <h2>Life-Saving Appliances (LSA)</h2>
          <div className="category-grid">
            {lsaCategories.map((category, index) => (
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
          <h2>Fire-Fighting Appliances (FFA)</h2>
          <div className="category-grid">
            {ffaCategories.map((category, index) => (
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
              <h3>SOLAS & IMO Compliance</h3>
              <p>
                All equipment meets SOLAS, IMO, and classification society
                requirements with full certification
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Certification Services</h3>
              <p>
                Complete certification, inspection, and testing services for
                regulatory compliance
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Performance Testing</h3>
              <p>
                Comprehensive testing for performance, reliability, and
                emergency readiness
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Technical Expertise</h3>
              <p>
                Expert guidance on equipment selection, installation, and
                maintenance for optimal safety
              </p>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <div className="cta-content">
            <h2>Need LSA & FFA Equipment?</h2>
            <p>
              Contact our technical team for expert assistance with your
              life-saving and fire-fighting equipment requirements. We provide
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

export default LSAFFA;
