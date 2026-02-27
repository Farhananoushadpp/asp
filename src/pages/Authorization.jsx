/**
 * ASP Global Marine Trading LLC - Authorization & Associated Partners Page
 *
 * Comprehensive information about our authorized partners and manufacturers
 * Professional marine corporate design with improved layout
 */

import "../styles/pages/Authorization.css";

const Authorization = () => {
  const partners = [
    {
      id: 1,
      name: "Guangzhou HG Marine Co. Ltd.",
      founded: "Founded in 2005",
      image: "/partners/hg-marine.jpg",
      description: "Guangzhou HG Marine develops and manufactures innovative marine steering gear and rim thrusters, backed by over 100 patents in steering and electric propulsion technology.",
      features: [
        "Ring Motor",
        "Propeller",
        "Water Lubricated Bearing",
        "Energy-Saving Duct"
      ],
      note: "The motor directly drives the propeller to generate thrust, and the energy-saving duct further improves thrust force."
    },
    {
      id: 2,
      name: "Hg Machinery Group",
      image: "/partners/hg-machinery.jpg",
      description: "A large professional manufacturer specializing in pumps and industrial valves with comprehensive certifications and marine approvals.",
      products: {
        "Pump Systems": [
          "Twin Screw Pumps",
          "Three Screw Pumps",
          "Gear Pumps",
          "Vacuum Pumps",
          "Centrifugal Pumps",
          "Deep Well Cargo Pumps",
          "Hydraulic Pumps",
          "Electric Pumps"
        ],
        "Industrial Valves": ["Various Industrial Valves"],
        "Certifications": ["CE", "ISO 9001", "ISO 14001", "OHSAS 18001"],
        "Marine Approvals": ["CCS", "BV", "KR", "ABS", "NK", "RINA", "RMRS"]
      }
    },
    {
      id: 3,
      name: "Zhejiang Huayi Ship Equipment Manufacture Co., LTD.",
      image: "/partners/huayi-ship.jpg",
      description: "Specializes in marine oil treatment equipment including separators, oil supply units, and sewage treatment systems.",
      products: [
        "Heavy Fuel Oil Separators",
        "Lubricating Oil Separators",
        "Oil Supply Units",
        "Sewage Treatment Units",
        "Self-Cleaning Oil Filters"
      ],
      series: [
        {
          name: "S-TYPE Separator",
          features: [
            "No gravity ring",
            "Suitable for high-density fuel oils up to 1,100 kg/m³",
            "Viscosities up to 700 cSt at 50°C"
          ]
        },
        {
          name: "S-TYPE Separator Module",
          features: [
            "PLC Controlled",
            "Automatic Operation",
            "Alarm System",
            "Touch Screen Monitoring",
            "Remote Control Room Connectivity"
          ]
        },
        {
          name: "P-TYPE Separator",
          features: [
            "Adjustable gravity ring",
            "Effective oil and water separation"
          ]
        },
        {
          name: "P-TYPE Separator Module",
          features: [
            "Compact PLC Controlled System",
            "Fault Analysis",
            "Data Storage",
            "Remote Monitoring Capability"
          ]
        }
      ]
    },
    {
      id: 4,
      name: "Zhejiang Kintowe Sealing Technology Co.",
      founded: "Founded in 1986",
      image: "/partners/kintowe-sealing.jpg",
      description: "Specializes in sealing systems and marine bearing solutions with advanced composite materials.",
      products: [
        "Hydraulic Seals",
        "Composite Components",
        "Water Lubricated Stern Tube Bearings",
        "Composite Rudder Bearings",
        "Rudder Pintle Bushes"
      ],
      materials: [
        "Composite Material PFC-6",
        "Composite Material PFC-22",
        "Phenolic-Based Composite Water-Lubricated Bearings",
        "Polyurethane Water-Lubricated Bearings"
      ],
      features: [
        "Low Wear",
        "Low Maintenance",
        "Self-Lubricating Properties",
        "Designed for Harsh Marine Conditions"
      ]
    },
    {
      id: 5,
      name: "Beijing Zhonghanghua Safety Valve Sales Co., Ltd.",
      founded: "Established in 1998",
      image: "/partners/zhonghanghua-valve.jpg",
      description: "The official sales entity for safety valves and specialty valves designed and manufactured by Beijing Aerospace Propulsion Institute Pressure Relief Branch.",
      products: [
        "Safety Valves",
        "Pilot Operated Safety Valves",
        "Pressure Relief Valves",
        "Change Over Safety Valves",
        "Pressure Vacuum Valves",
        "Gas Blanket Pressure Vacuum Valves",
        "Emergency Pressure Vacuum Valves",
        "Automatic Recirculation Valves"
      ]
    },
    {
      id: 6,
      name: "Changzhou Qianmai Mechanical Equipment Technology Co., Ltd",
      image: "/partners/qianmai-mechanical.jpg",
      description: "A professional company dedicated to research, development, production, sales, and after-sales of disc separators.",
      industries: [
        "Equipment Manufacturing",
        "Industrial Environmental Protection",
        "Oils & Chemicals",
        "Pharmaceuticals",
        "Food & Beverages",
        "Biopharmaceuticals",
        "Shipbuilding"
      ],
      products: [
        "Coal Tar Oil Centrifuge Disc Separator",
        "Marine Oil Separator",
        "Liquid Solid Separation Centrifuge Separator",
        "Industrial Liquid Solid Separation Equipment"
      ]
    }
  ];

  return (
    <div className="authorization-page">
      {/* Header Section */}
      <header className="auth-header">
        <div className="container">
          <div className="header-content">
            <div className="header-text">
              <h1>Authorization & Associated Partners</h1>
              <p className="header-description">
                ASP Global Marine Trading LLC collaborates with internationally recognized marine equipment manufacturers and specialized industrial solution providers. These strategic associations enable us to deliver genuine OEM and equivalent spare parts, certified marine-grade equipment, and technically compliant solutions to vessels and offshore installations worldwide.
              </p>
            </div>
            <div className="header-visual">
              <div className="certification-badges">
                <div className="badge">
                  <span className="badge-icon">✓</span>
                  <span className="badge-text">ISO 9001</span>
                </div>
                <div className="badge">
                  <span className="badge-icon">✓</span>
                  <span className="badge-text">SOLAS Compliant</span>
                </div>
                <div className="badge">
                  <span className="badge-icon">✓</span>
                  <span className="badge-text">Class Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Partnership Benefits */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Partnerships Ensure</h2>
            <p className="section-subtitle">Strategic advantages for maritime excellence</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🚢</div>
              <h3>Genuine OEM & Equivalent Spare Parts Sourcing</h3>
              <p>Direct access to original manufacturer parts and high-quality alternatives</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3>Rapid Global Logistics Support</h3>
              <p>Worldwide distribution network with expedited shipping capabilities</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📋</div>
              <h3>SOLAS, IMO & Class Compliant Equipment</h3>
              <p>All equipment meets international maritime safety standards</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Competitive Pricing Without Compromise on Quality</h3>
              <p>Cost-effective solutions maintaining highest quality standards</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Strong Supplier Network Across Europe and Asia</h3>
              <p>Established relationships with leading manufacturers globally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="partners-section">
        <div className="container">
          <div className="section-header">
            <h2>Authorized Manufacturing Partners</h2>
            <p className="section-subtitle">Industry-leading manufacturers and technical solution providers</p>
          </div>
          <div className="partners-grid">
            {partners.map((partner) => (
              <div key={partner.id} className="partner-card">
                <div className="partner-header">
                  <div className="partner-image-container">
                    <img 
                      src={partner.image} 
                      alt={partner.name}
                      className="partner-image"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/300x200/0B2F4A/FFFFFF?text=${encodeURIComponent(partner.name.split(' ')[0])}`;
                      }}
                    />
                    <div className="partner-overlay">
                      <span className="partner-id">#{partner.id}</span>
                    </div>
                  </div>
                  <div className="partner-info">
                    <div className="partner-meta">
                      {partner.founded && <span className="founded">{partner.founded}</span>}
                    </div>
                    <h3 className="partner-name">{partner.name}</h3>
                    <p className="partner-description">{partner.description}</p>
                  </div>
                </div>

                <div className="partner-content">
                  {partner.features && (
                    <div className="content-section">
                      <h4>
                        <span className="section-icon">⚙️</span>
                        Key Components
                      </h4>
                      <div className="feature-list">
                        {Array.isArray(partner.features) && partner.features.map((feature, index) => (
                          <div key={index} className="feature-item">
                            <span className="feature-bullet">•</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      {partner.note && <p className="note">{partner.note}</p>}
                    </div>
                  )}

                  {partner.products && (
                    <div className="content-section">
                      <h4>
                        <span className="section-icon">📦</span>
                        Product Range
                      </h4>
                      {typeof partner.products === 'object' && !Array.isArray(partner.products) ? (
                        <div className="product-categories">
                          {Object.entries(partner.products).map(([category, items]) => (
                            <div key={category} className="product-category">
                              <h5>{category}</h5>
                              <div className="product-list">
                                {Array.isArray(items) && items.map((item, index) => (
                                  <span key={index} className="product-tag">{item}</span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="product-list">
                          {Array.isArray(partner.products) && partner.products.map((product, index) => (
                            <span key={index} className="product-tag">{product}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {partner.series && (
                    <div className="content-section">
                      <h4>
                        <span className="section-icon">🔧</span>
                        Product Series
                      </h4>
                      <div className="series-list">
                        {Array.isArray(partner.series) && partner.series.map((series, index) => (
                          <div key={index} className="series-item">
                            <h5>{series.name}</h5>
                            <div className="series-features">
                              {Array.isArray(series.features) && series.features.map((feature, featureIndex) => (
                                <span key={featureIndex} className="feature-tag">{feature}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {partner.materials && (
                    <div className="content-section">
                      <h4>
                        <span className="section-icon">🔬</span>
                        Bearing Materials
                      </h4>
                      <div className="materials-list">
                        {Array.isArray(partner.materials) && partner.materials.map((material, index) => (
                          <div key={index} className="material-item">
                            <span className="material-number">{index + 1}</span>
                            <span className="material-name">{material}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {partner.industries && (
                    <div className="content-section">
                      <h4>
                        <span className="section-icon">🏭</span>
                        Industries Served
                      </h4>
                      <div className="industries-grid">
                        {Array.isArray(partner.industries) && partner.industries.map((industry, index) => (
                          <div key={index} className="industry-item">{industry}</div>
                        ))}
                      </div>
                    </div>
                  )}

                  {partner.features && !partner.series && (
                    <div className="content-section">
                      <h4>
                        <span className="section-icon">✨</span>
                        Key Features
                      </h4>
                      <div className="features-grid">
                        {Array.isArray(partner.features) && partner.features.map((feature, index) => (
                          <div key={index} className="feature-card">{feature}</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Request Authorization Documents</h2>
              <p>
                Get detailed authorization certificates and compliance documentation for our partnered manufacturers and products. Our technical team is ready to assist with your specific requirements.
              </p>
            </div>
            <div className="cta-actions">
              <button 
                className="cta-button primary"
                onClick={() => window.location.href = '/contact'}
              >
                Request Technical Documentation
              </button>
              <button className="cta-button secondary">
                Download Partnership Overview
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Authorization;
