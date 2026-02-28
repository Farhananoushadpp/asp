/**
 * ASP Global Marine Trading LLC - Authorization & Associated Partners Page
 *
 * Comprehensive information about our authorized partners and manufacturers
 * Professional marine corporate design with blue card theme
 */

import {
  Ship,
  Globe,
  FileCheck,
  DollarSign,
  Handshake,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import "../styles/pages/Authorization.css";

const Authorization = () => {
  const partners = [
    {
      id: 1,
      name: "Guangzhou HG Marine Co. Ltd.",
      logo: "/Authorisation/Guangzhou/logo.webp",
      description:
        "Founded in 2005, develops and manufactures innovative marine steering gear and rim thrusters, backed by over 100 patents in steering and electric propulsion technology.",
      mainProduct:
        "Latest Technology Rim Thruster is composed of ring motor, propeller, water lubricated bearing and energy-saving duct. The motor directly drives the propeller to generate thrust, and the energy-saving duct further improves the thrust force.",
      features: [
        "No Engagement, Less Noise, No shaft",
        "No Transmission, High Efficiency, No appendage",
        "Less Resistance, Lighter Weight, No seal",
      ],
      productImages: [
        "/Authorisation/Guangzhou/1.webp",
        "/Authorisation/Guangzhou/2.webp",
        "/Authorisation/Guangzhou/3.webp",
      ],
    },
    {
      id: 2,
      name: "Hg Machinery Group",
      logo: "/Authorisation/Hg/logo.webp",
      description:
        "A large professional manufacturer specializing in twin screw, three screw, gear, vacuum, centrifugal, and deep well cargo pumps, along with hydraulic, electric pumps, and various valves. The group is certified with CE, ISO9001, ISO14001, and OHSAS18001, and its marine products are approved by major classification societies including CCS, BV, KR, ABS, NK, RINA, and RMRS.",
      productsInclude: [
        "Deep Well Pump",
        "Twin Screw Pump",
        "Three Screw Pump",
        "Gear Pump",
        "Centrifugal Pump",
        "Emergency Fire Pump",
        "Diaphragm Pump",
        "Vacuum Pump",
      ],
      productImages: [
        "/Authorisation/Hg/1.webp",
        "/Authorisation/Hg/2.webp",
        "/Authorisation/Hg/3.webp",
      ],
    },
    {
      id: 3,
      name: "Zhejiang Kintowe Sealing Technology Co.",
      logo: "/partners/kintowe-logo.png",
      description:
        "Founded in 1986 and specializes in sealing systems and marine bearing solutions, including hydraulic seals and composite components.",
      categories: [
        {
          title: "Water Lubricated Stern Tube Bearings",
          description:
            "Eco-friendly bearings designed for efficient stern tube and rudder applications.",
        },
        {
          title: "Marine Bearing Series",
          description:
            "Composite Rudder Bearings with self-lubricating properties for long service life.",
        },
        {
          title: "Rudder Pintle Bushes",
          description:
            "Durable composite bushes with smooth performance, built for harsh marine conditions.",
        },
      ],
      materials: [
        "Composite Material PFC-6 and Composite Material PFC-22",
        "Phenolic-Based Composite Water-Lubricated Bearings",
        "Polyurethane Water-Lubricated Bearings",
      ],
      productImages: [
        "/products/partners/kintowe-1.jpg",
        "/products/partners/kintowe-2.jpg",
        "/products/partners/kintowe-3.jpg",
      ],
    },
    {
      id: 4,
      name: "Zhejiang Huayi Ship Equipment Manufacture Co., LTD.",
      logo: "/partners/huayi-logo.png",
      description:
        "Specializes in marine oil treatment equipment, including heavy fuel and lubricating oil separators, oil supply units, sewage treatment units, and self-cleaning oil filters.",
      products: [
        {
          name: "S-TYPE Separator",
          description:
            "A separator without a gravity ring, suitable for high-density fuel oils up to 1,100 kg/m³ and viscosities up to 700 cSt at 50°C.",
        },
        {
          name: "S-TYPE Separator Module",
          description:
            "An integrated, PLC-controlled unit with automatic operation, alarms, monitoring, touch-screen display, and remote control room connectivity.",
        },
        {
          name: "P-TYPE Separator",
          description:
            "A separator that uses an adjustable gravity ring to effectively separate oil and water for oil purification.",
        },
        {
          name: "P-TYPE Separator Module",
          description:
            "A compact, PLC-controlled system with touch-screen monitoring, fault analysis, data storage, and remote monitoring capability.",
        },
      ],
      productImages: [
        "/products/partners/huayi-1.jpg",
        "/products/partners/huayi-2.jpg",
        "/products/partners/huayi-3.jpg",
      ],
    },
    {
      id: 5,
      name: "Beijing Zhonghanghua Safety Valve Sales Co., Ltd.",
      logo: "/partners/zhonghanghua-logo.png",
      description:
        "Established by 1998 which is the sales entity especially for safety valves and specialty valve designed and manufactured by Beijing Aerospace Propulsion Institute Pressure Relief Branch.",
      productsInclude: [
        "Safety Valves",
        "Pilot Operated Safety Valves",
        "Pressure Relief Valves",
        "Change Over Safety Valves",
        "Pressure Vacuum Valves",
        "Gas Blanket Pressure Vacuum Valves",
        "Emergency Pressure Vacuum Valves",
        "Automatic Recirculation Valves",
      ],
      productImages: [
        "/products/partners/zhonghanghua-1.jpg",
        "/products/partners/zhonghanghua-2.jpg",
        "/products/partners/zhonghanghua-3.jpg",
      ],
    },
    {
      id: 6,
      name: "Changzhou Qianmai Mechanical Eqpt. Tech. Co. Ltd",
      logo: "/partners/qianmai-logo.png",
      description:
        "A professional company dedicated to the research and development, production, sales, and after-sales of disc separators. Accurately serving industries such as equipment manufacturing, industrial environmental protection, oils, chemicals, pharmaceuticals, food, beverages, biopharmaceuticals, and shipbuilding.",
      productsInclude: [
        "Coal Tar Oil Centrifuge Disc Separator",
        "Marine Oil Separator",
        "Liquid Solid Separation Centrifuge Separator",
        "Industrial Liquid Solid Separation Equipment",
      ],
      productImages: [
        "/products/partners/qianmai-1.jpg",
        "/products/partners/qianmai-2.jpg",
        "/products/partners/qianmai-3.jpg",
      ],
    },
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
                ASP Global Marine Trading LLC collaborates with internationally
                recognized marine equipment manufacturers and specialized
                industrial solution providers. These strategic associations
                enable us to deliver genuine OEM and equivalent spare parts,
                certified marine-grade equipment, and technically compliant
                solutions to vessels and offshore installations worldwide.
              </p>
            </div>
            <div className="header-visual">
              <div className="certification-badges">
                <div className="badge">
                  <CheckCircle className="badge-icon" />
                  <span className="badge-text">ISO 9001</span>
                </div>
                <div className="badge">
                  <CheckCircle className="badge-icon" />
                  <span className="badge-text">SOLAS Compliant</span>
                </div>
                <div className="badge">
                  <CheckCircle className="badge-icon" />
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
            <p className="section-subtitle">
              Strategic advantages for maritime excellence
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <Ship className="benefit-icon" />
              <h3>Genuine OEM & Equivalent Spare Parts Sourcing</h3>
              <p>
                Direct access to original manufacturer parts and high-quality
                alternatives
              </p>
            </div>
            <div className="benefit-card">
              <Globe className="benefit-icon" />
              <h3>Rapid Global Logistics Support</h3>
              <p>
                Worldwide distribution network with expedited shipping
                capabilities
              </p>
            </div>
            <div className="benefit-card">
              <FileCheck className="benefit-icon" />
              <h3>SOLAS, IMO & Class Compliant Equipment</h3>
              <p>All equipment meets international maritime safety standards</p>
            </div>
            <div className="benefit-card">
              <DollarSign className="benefit-icon" />
              <h3>Competitive Pricing Without Compromise on Quality</h3>
              <p>
                Cost-effective solutions maintaining highest quality standards
              </p>
            </div>
            <div className="benefit-card">
              <Handshake className="benefit-icon" />
              <h3>Strong Supplier Network Across Europe and Asia</h3>
              <p>
                Established relationships with leading manufacturers globally
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid - New Design */}
      <section className="partners-section-new">
        <div className="container">
          <div className="section-header">
            <h2>Our Associated Partner</h2>
            <p className="section-subtitle">
              Industry-leading manufacturers and technical solution providers
            </p>
          </div>
          <div className="partners-grid-new">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className={`partner-card-new ${partner.id === 1 ? "clickable" : ""}`}
                onClick={
                  partner.id === 1
                    ? () => (window.location.href = "/guangzhou-hg-marine")
                    : undefined
                }
              >
                {/* Logo Header */}
                <div className="partner-logo-header">
                  <div className="partner-logo-container">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      className="partner-logo"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div
                      className="partner-logo-fallback"
                      style={{ display: "none" }}
                    >
                      {partner.name.split(" ")[0]}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="partner-content-new">
                  <h3 className="partner-name-new">{partner.name}</h3>
                  <p className="partner-description-new">
                    {partner.description}
                  </p>

                  {/* Main Product */}
                  {partner.mainProduct && (
                    <p className="partner-main-product">
                      {partner.mainProduct}
                    </p>
                  )}

                  {/* Features List */}
                  {partner.features && (
                    <ul className="partner-features-list">
                      {partner.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  )}

                  {/* Products Include */}
                  {partner.productsInclude && (
                    <div className="partner-products-section">
                      <h4>Products Include:</h4>
                      <ul className="partner-products-list">
                        {partner.productsInclude.map((product, index) => (
                          <li key={index}>{product}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Categories */}
                  {partner.categories && (
                    <div className="partner-categories">
                      {partner.categories.map((category, index) => (
                        <div key={index} className="partner-category-item">
                          <h4>{category.title}</h4>
                          <p>{category.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Products with Descriptions */}
                  {partner.products && (
                    <div className="partner-products-detailed">
                      {partner.products.map((product, index) => (
                        <div key={index} className="partner-product-item">
                          <h4>{product.name}</h4>
                          <p>{product.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Materials */}
                  {partner.materials && (
                    <div className="partner-materials">
                      <h4>Bearing Bearing Materials:</h4>
                      <ul className="partner-materials-list">
                        {partner.materials.map((material, index) => (
                          <li key={index}>
                            <span className="material-number">{index + 1}</span>
                            {material}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Product Images */}
                <div className="partner-product-images">
                  {partner.productImages.map((img, index) => (
                    <div key={index} className="product-image-container">
                      <img
                        src={img}
                        alt={`${partner.name} Product ${index + 1}`}
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Learn More Button for Guangzhou HG Marine */}
                {partner.id === 1 && (
                  <div className="partner-learn-more">
                    <button className="learn-more-button">
                      <span>Learn More</span>
                      <ArrowRight className="arrow-icon" />
                    </button>
                  </div>
                )}
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
                Get detailed authorization certificates and compliance
                documentation for our partnered manufacturers and products. Our
                technical team is ready to assist with your specific
                requirements.
              </p>
            </div>
            <div className="cta-actions">
              <button
                className="cta-button primary"
                onClick={() => (window.location.href = "/contact")}
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
