/**
 * ASP Global Marine Trading LLC - Products Main Page
 *
 * Marine Industrial Product Catalog Landing Page
 * Professional structured catalog with category navigation
 */

import "../styles/pages/Products.css";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const productCategories = [
    {
      id: "engine-spares-2stroke",
      title: "Engine Spares - 2 Stroke",
      description: "Complete range of 2-stroke engine spare parts for major marine engine manufacturers",
      icon: "⚙️",
      brands: ["YANMAR", "HIMSEN", "WARTSILA", "CUMMINS", "MAN", "SULZER", "WINGD", "MITSUBISHI-UEC"]
    },
    {
      id: "engine-spares-4stroke",
      title: "Engine Spares - 4 Stroke",
      description: "Comprehensive 4-stroke engine components and spare parts for marine applications",
      icon: "🔧",
      brands: ["YANMAR", "WARTSILA", "MAN", "CUMMINS", "CATERPILLAR", "MITSUBISHI"]
    },
    {
      id: "turbochargers-auxiliary",
      title: "Turbochargers & Auxiliary",
      description: "Turbochargers, superchargers, and auxiliary engine systems",
      icon: "🌪️",
      brands: ["ABB", "MAN", "IHI", "MHI", "KBB"]
    },
    {
      id: "pumps-marine-industrial",
      title: "Pumps - Marine & Industrial",
      description: "Complete range of marine and industrial pumping systems",
      icon: "💧",
      brands: ["ALFA LAVAL", "WARTSILA", "SPX FLOW", "KSB", "GRUNDFOS"]
    },
    {
      id: "hvac-compressors",
      title: "HVAC Compressors & Spares",
      description: "Marine HVAC systems, compressors, and climate control solutions",
      icon: "❄️",
      brands: ["CARRIER", "TRANE", "DAIKIN", "MITSUBISHI", "YORK"]
    },
    {
      id: "boilers-incinerators-heat-exchangers",
      title: "Boilers & Heat Exchangers",
      description: "Marine boilers, incinerators, and heat exchange systems",
      icon: "🔥",
      brands: ["ALFA LAVAL", "WARTSILA", "AALBORG", "KAWASAKI"]
    },
    {
      id: "air-compressor-spares",
      title: "Air Compressor Spares",
      description: "Air compressors and spare parts for marine applications",
      icon: "💨",
      brands: ["ATLAS COPCO", "KAESER", "INGERSOLL RAND", "SULLAIR"]
    },
    {
      id: "hydraulic-systems",
      title: "Hydraulic Systems & Components",
      description: "Complete hydraulic systems, components, and spare parts",
      icon: "🛠️",
      brands: ["BOSCH REXROTH", "PARKER", "EATON", "DANFOSS"]
    },
    {
      id: "purifiers",
      title: "Purifiers & Separators",
      description: "Oil purifiers, water separators, and filtration systems",
      icon: "🔄",
      brands: ["ALFA LAVAL", "WARTSILA", "GEA", "SPX FLOW"]
    },
    {
      id: "deck-stores-general",
      title: "Deck Stores & General",
      description: "Complete deck equipment and general marine stores",
      icon: "⚓",
      brands: ["Multiple Marine Equipment Brands"]
    },
    {
      id: "engine-stores",
      title: "Engine Stores",
      description: "Engine room stores, consumables, and maintenance supplies",
      icon: "🔩",
      brands: ["YANMAR", "WARTSILA", "MAN", "CUMMINS", "SULZER"]
    },
    {
      id: "lsa-ffa",
      title: "LSA & FFA Equipment",
      description: "Life-saving appliances and fire-fighting equipment",
      icon: "🚨",
      brands: ["VIKING", "Survitec", "WINSLOW", "MFC"]
    }
  ];

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <h1>Marine Industrial Product Catalog</h1>
          <p>
            Comprehensive range of marine equipment, spare parts, and technical solutions 
            for vessels and offshore installations. Supporting all major manufacturers 
            with genuine OEM and equivalent quality components.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">12+</span>
              <span className="stat-label">Product Categories</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Manufacturer Brands</span>
            </div>
            <div className="stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Spare Parts Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="products-section">
        <div className="container">
          <h2>Product Categories</h2>
          <p className="section-intro">
            Click on any category to view detailed technical specifications, 
            manufacturer compatibility, and available spare parts.
          </p>
          
          <div className="products-grid">
            {productCategories.map((category) => (
              <Link 
                key={category.id} 
                to={`/products/${category.id}`}
                className="product-card"
              >
                <div className="card-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <div className="card-brands">
                  <span className="brands-label">Brands:</span>
                  <div className="brands-list">
                    {category.brands.slice(0, 3).map((brand, index) => (
                      <span key={index} className="brand-tag">{brand}</span>
                    ))}
                    {category.brands.length > 3 && (
                      <span className="brand-more">+{category.brands.length - 3} more</span>
                    )}
                  </div>
                </div>
                <div className="card-action">
                  <span>View Technical Details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="container">
          <h2>Need Technical Assistance?</h2>
          <p>
            Our technical team can help you identify the exact parts and specifications 
            for your marine equipment. Contact us for detailed catalogs and 
            compatibility information.
          </p>
          <Link to="/contact" className="cta-button">
            Request Technical Catalog
          </Link>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="product-quality">
        <div className="container">
          <div className="quality-content">
            <h2>Quality Assurance</h2>
            <p>
              All our products meet international maritime standards and come
              with proper certification. We work directly with manufacturers and
              authorized distributors to ensure authenticity and quality.
            </p>
            <div className="quality-badges">
              <div className="quality-badge">
                <span className="badge-icon icon-solas"></span>
                <span>SOLAS Compliant</span>
              </div>
              <div className="quality-badge">
                <span className="badge-icon icon-global"></span>
                <span>IMO Certified</span>
              </div>
              <div className="quality-badge">
                <span className="badge-icon icon-cert"></span>
                <span>Classification Approved</span>
              </div>
              <div className="quality-badge">
                <span className="badge-icon icon-oem"></span>
                <span>OEM Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
