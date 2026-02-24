/**
 * ASP Global Marine Trading LLC - Deck Stores & General Marine Stores Page
 *
 * Comprehensive deck equipment and general marine supplies solutions
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";

const DeckStoresGeneral = () => {
  const manufacturers = [
    "Bridon",
    "Lankhorst",
    "Samson",
    "Rope",
    "Van der Giessen",
    "Vicinay",
    "Briare",
    "Mampaey",
    "Trelleborg",
    "Hendrik",
    "Survitec",
    "Viking",
    "Hansen Protection",
    "Mustang",
    "Crewsaver",
    "Jotun",
    "Hempel",
    "International Paint",
    "PPG",
    "Chugoku",
    "Unitor",
    "Drew",
    "Wilhelmsen",
  ];

  const deckCategories = [
    {
      category: "Mooring Equipment",
      icon: "⚓",
      products: [
        "Mooring Ropes",
        "Anchor Chains",
        "Mooring Lines",
        "Synthetic Ropes",
        "Wire Ropes",
        "Mooring Winches",
        "Capstans",
        "Windlasses",
      ],
      description:
        "Complete mooring systems for vessel anchoring and berthing operations",
    },
    {
      category: "Anchoring Systems",
      icon: "🔗",
      products: [
        "Marine Anchors",
        "Anchor Chains",
        "Shackles",
        "Swivels",
        "Connectors",
        "Chain Stoppers",
        "Anchor Windlasses",
        "Anchor Handling Systems",
      ],
      description:
        "Comprehensive anchoring equipment for secure vessel positioning",
    },
    {
      category: "Deck Fittings",
      icon: "🔩",
      products: [
        "Bollards",
        "Fairleads",
        "Chocks",
        "Cleats",
        "Rollers",
        "Guide Rings",
        "Deck Hardware",
        "Fittings",
      ],
      description:
        "Essential deck fittings for rope handling and deck operations",
    },
    {
      category: "Safety Equipment",
      icon: "🛡️",
      products: [
        "Life Jackets",
        "Immersion Suits",
        "Life Rafts",
        "Fire Extinguishers",
        "Safety Harnesses",
        "Personal Protective Equipment",
        "Emergency Equipment",
        "Safety Signs",
      ],
      description:
        "Comprehensive safety equipment for crew protection and emergency response",
    },
    {
      category: "Paints & Coatings",
      icon: "🎨",
      products: [
        "Marine Paints",
        "Anti-Fouling Paints",
        "Primers",
        "Topcoats",
        "Hull Coatings",
        "Deck Coatings",
        "Tank Coatings",
        "Surface Preparation Materials",
      ],
      description:
        "Professional marine paints and coatings for vessel protection and maintenance",
    },
    {
      category: "Cleaning & Maintenance",
      icon: "🧹",
      products: [
        "Marine Cleaners",
        "Degreasers",
        "Solvents",
        "Maintenance Chemicals",
        "Cleaning Equipment",
        "Waste Management Supplies",
        "Lubricants",
        "Corrosion Inhibitors",
      ],
      description:
        "Complete cleaning and maintenance supplies for vessel upkeep",
    },
    {
      category: "General Stores",
      icon: "📦",
      products: [
        "Marine Tools",
        "Electrical Supplies",
        "Plumbing Supplies",
        "Hardware",
        "Fasteners",
        "Sealing Materials",
        "Gaskets",
        "O-Rings",
      ],
      description:
        "Essential general stores and consumables for vessel operations",
    },
    {
      category: "Navigation Equipment",
      icon: "🧭",
      products: [
        "Navigation Lights",
        "Signal Flags",
        "Charts",
        "Compasses",
        "Binoculars",
        "Communication Equipment",
        "Navigation Instruments",
        "Safety Signaling",
      ],
      description:
        "Navigation and signaling equipment for safe vessel operations",
    },
  ];

  const applications = [
    {
      category: "Commercial Vessels",
      icon: "🚢",
      description: "Deck stores solutions for commercial shipping operations",
      vessels: [
        "Cargo Ships",
        "Tankers",
        "Container Ships",
        "Bulk Carriers",
        "General Cargo Vessels",
      ],
      applications: [
        "Cargo Operations",
        "Deck Safety",
        "Mooring Operations",
        "Maintenance",
      ],
    },
    {
      category: "Passenger Vessels",
      icon: "🛳️",
      description: "Deck equipment for passenger and cruise ship operations",
      vessels: ["Cruise Ships", "Ferries", "Passenger Ships", "Ro-Ro Vessels"],
      applications: [
        "Passenger Safety",
        "Deck Operations",
        "Emergency Equipment",
        "Comfort Systems",
      ],
    },
    {
      category: "Offshore Vessels",
      icon: "🏗️",
      description: "Specialized deck stores for offshore operations",
      vessels: [
        "Supply Vessels",
        "Anchor Handlers",
        "Platform Supply Vessels",
        "Offshore Support Vessels",
      ],
      applications: [
        "Offshore Operations",
        "Special Equipment",
        "Safety Systems",
        "Heavy Duty Operations",
      ],
    },
    {
      category: "Special Vessels",
      icon: "⚓",
      description: "Deck equipment for specialized vessel types",
      vessels: [
        "Naval Ships",
        "Research Vessels",
        "Fishing Vessels",
        "Tugboats",
      ],
      applications: [
        "Special Operations",
        "Research Equipment",
        "Fishing Gear",
        "Towing Equipment",
      ],
    },
  ];

  const technicalSpecs = [
    {
      category: "Quality Standards",
      icon: "📊",
      specs: [
        "ISO 9001 Certified Suppliers",
        "Classification Society Approved",
        "SOLAS Compliant Equipment",
        "Marine Grade Materials",
        "International Standards Compliance",
      ],
    },
    {
      category: "Performance Specifications",
      icon: "✅",
      specs: [
        "Load Capacity: 1-500 tons",
        "Breaking Strength: 10-1000 tons",
        "Corrosion Resistance: 10+ years",
        "Temperature Range: -40°C to 80°C",
        "UV Resistance: Marine Grade",
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
          <h1 className="page-title">Deck Stores & General Marine Stores</h1>
          <p className="page-subtitle">
            Comprehensive Deck Equipment and General Marine Supplies Solutions
          </p>
        </div>

        <section className="product-intro">
          <div className="intro-content">
            <h2>Complete Marine Deck Solutions</h2>
            <p>
              ASP Global Marine Trading LLC provides comprehensive deck stores
              and general marine supplies for vessels, offshore platforms, and
              maritime operations. With over 18 years of expertise, we supply
              essential deck equipment, safety gear, paints, and maintenance
              supplies from leading manufacturers worldwide, ensuring reliable
              performance, safety compliance, and operational excellence for all
              deck operations.
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
          <h2>Deck Store Categories</h2>
          <div className="category-grid">
            {deckCategories.map((category, index) => (
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
              <h3>Marine Certification</h3>
              <p>
                All equipment meets SOLAS, IMO, and classification society
                requirements with full certification
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Safety Compliance</h3>
              <p>
                Safety equipment meets international maritime safety standards
                and regulations
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Quality Materials</h3>
              <p>
                Marine-grade materials with corrosion resistance and durability
                for harsh environments
              </p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Technical Expertise</h3>
              <p>
                Expert guidance on equipment selection, installation, and
                maintenance for optimal performance
              </p>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <div className="cta-content">
            <h2>Need Deck Stores & Marine Supplies?</h2>
            <p>
              Contact our technical team for expert assistance with your deck
              stores and general marine supply requirements. We provide
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

export default DeckStoresGeneral;
