/**
 * ASP Global Marine Trading LLC - Boilers, Incinerators & Heat Exchangers Page
 * 
 * Comprehensive marine thermal systems and waste management solutions
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/pages/Products.css';

const BoilersIncineratorsHeatExchangers = () => {
  const manufacturers = [
    "Alfa Laval", "Aalborg Industries", "Wärtsilä", "Mitsubishi Heavy Industries", 
    "Kangrim", "ATLAS", "Inciner8", "SWEP", "Tranter", "GEA", 
    "Scanship", "Babcock", "John Thompson", "Viessmann", "Bosch"
  ];

  const thermalCategories = [
    {
      category: "Marine Boilers",
      icon: "🔥",
      products: [
        "Auxiliary Boilers",
        "Composite Boilers",
        "Oil-Fired Boilers",
        "Gas-Fired Boilers",
        "Dual-Fuel Boilers",
        "Steam Boilers",
        "Hot Water Boilers",
        "Thermal Oil Boilers"
      ],
      description: "Complete marine boiler systems for steam generation and heating applications"
    },
    {
      category: "Exhaust Gas Boilers",
      icon: "💨",
      products: [
        "Exhaust Gas Economizers",
        "Waste Heat Recovery Boilers",
        "Composite Exhaust Gas Boilers",
        "Smoke Tube Boilers",
        "Water Tube Boilers",
        "Heat Recovery Units",
        "Condensing Boilers",
        "Turbochargers with Boilers"
      ],
      description: "Advanced waste heat recovery systems for improved vessel efficiency"
    },
    {
      category: "Heat Exchangers",
      icon: "🌡️",
      products: [
        "Shell & Tube Heat Exchangers",
        "Plate Heat Exchangers",
        "Air Coolers",
        "Oil Coolers",
        "Fresh Water Coolers",
        "Jacket Water Coolers",
        "Charge Air Coolers",
        "Condensers"
      ],
      description: "Comprehensive heat exchange solutions for marine and industrial applications"
    },
    {
      category: "Marine Incinerators",
      icon: "🔥",
      products: [
        "Marine Waste Incinerators",
        "Sludge Incinerators",
        "Oil Sludge Incinerators",
        "Solid Waste Incinerators",
        "Pyrolysis Systems",
        "Gasification Systems",
        "Combustion Chambers",
        "Ash Handling Systems"
      ],
      description: "Advanced waste management and incineration systems for marine vessels"
    },
    {
      category: "Thermal Systems",
      icon: "⚙️",
      products: [
        "Steam Systems",
        "Hot Water Systems",
        "Thermal Oil Systems",
        "Heat Recovery Systems",
        "Process Heating Systems",
        "District Heating Systems",
        "Solar Thermal Systems",
        "Geothermal Systems"
      ],
      description: "Complete thermal system solutions for various marine and industrial applications"
    }
  ];

  const applications = [
    {
      category: "Marine Vessel Systems",
      icon: "🚢",
      description: "Thermal systems for various vessel types and applications",
      systems: ["Cargo Ships", "Tankers", "Container Ships", "Passenger Vessels", "Offshore Support Vessels"],
      applications: ["Steam Generation", "Heating Systems", "Waste Management", "Heat Recovery"]
    },
    {
      category: "Offshore Platforms",
      icon: "🏗️",
      description: "Thermal solutions for offshore oil and gas operations",
      systems: ["Fixed Platforms", "FPSOs", "Drilling Rigs", "Production Platforms"],
      applications: ["Process Heating", "Steam Injection", "Waste Treatment", "Power Generation"]
    },
    {
      category: "Industrial Applications",
      icon: "🏭",
      description: "Thermal systems for industrial and manufacturing facilities",
      systems: ["Power Plants", "Chemical Plants", "Food Processing", "Textile Industry"],
      applications: ["Process Steam", "Space Heating", "Waste Heat Recovery", "Thermal Processing"]
    },
    {
      category: "District Heating",
      icon: "🏘️",
      description: "Large-scale heating solutions for communities and facilities",
      systems: ["District Heating Networks", "Central Heating Plants", "Combined Heat & Power"],
      applications: ["Residential Heating", "Commercial Heating", "Industrial Heating", "Greenhouses"]
    }
  ];

  const technicalSpecs = [
    {
      category: "Performance Specifications",
      icon: "📊",
      specs: [
        "Boiler Capacity: 100-50,000 kg/h",
        "Pressure Range: 1-100 bar",
        "Temperature Range: 0-350°C",
        "Heat Transfer Area: 10-10,000 m²",
        "Efficiency: Up to 95%"
      ]
    },
    {
      category: "Compliance Standards",
      icon: "✅",
      specs: [
        "IMO SOLAS Compliant",
        "MARPOL Approved",
        "Classification Society Certified",
        "ISO 9001 Quality",
        "Environmental Regulations Compliant"
      ]
    },
    {
      category: "Service Capabilities",
      icon: "🔧",
      specs: [
        "24/7 Technical Support",
        "On-site Installation",
        "Commissioning Services",
        "Maintenance Contracts",
        "Emergency Repair Services"
      ]
    }
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Boilers, Incinerators & Heat Exchangers</h1>
          <p className="page-subtitle">
            Comprehensive Marine Thermal Systems and Waste Management Solutions
          </p>
        </div>

        <section className="product-intro">
          <div className="intro-content">
            <h2>Advanced Thermal Solutions</h2>
            <p>
              ASP Global Marine Trading LLC provides comprehensive marine thermal systems and waste management 
              solutions for vessels, offshore platforms, and industrial facilities. With over 18 years of 
              expertise, we supply advanced boilers, incinerators, and heat exchangers from leading manufacturers 
              worldwide, ensuring optimal performance, energy efficiency, and compliance with maritime standards.
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
          <h2>Thermal System Categories</h2>
          <div className="category-grid">
            {thermalCategories.map((category, index) => (
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
                      <span key={idx} className="product-tag">{product}</span>
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
                <p className="category-description">{application.description}</p>
                <div className="product-list">
                  <h4>System Types:</h4>
                  <div className="product-tags">
                    {application.systems.map((system, idx) => (
                      <span key={idx} className="product-tag">{system}</span>
                    ))}
                  </div>
                </div>
                <div className="product-list">
                  <h4>Applications:</h4>
                  <div className="product-tags">
                    {application.applications.map((app, idx) => (
                      <span key={idx} className="product-tag">{app}</span>
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
              <p>All systems meet SOLAS, IMO, and classification society requirements with full certification</p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Environmental Compliance</h3>
              <p>Equipment meets MARPOL and international environmental regulations for emissions and waste</p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Performance Testing</h3>
              <p>Comprehensive testing for thermal efficiency, safety, and operational reliability</p>
            </div>
            <div className="quality-item">
              <div className="quality-icon">✓</div>
              <h3>Technical Expertise</h3>
              <p>Expert guidance on system selection, installation, and optimization for maximum efficiency</p>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <div className="cta-content">
            <h2>Need Thermal Systems Solutions?</h2>
            <p>
              Contact our technical team for expert assistance with your boiler, incinerator, and heat exchanger 
              requirements. We provide comprehensive solutions with rapid delivery worldwide and 24/7 technical support.
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

export default BoilersIncineratorsHeatExchangers;
