/**
 * ASP Global Marine Trading LLC - Turbochargers & Auxiliary Engine Products Page
 * 
 * Turbochargers and auxiliary engine components
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/pages/Products.css';

const TurbochargersAuxiliary = () => {
  const products = [
    {
      name: "Turbocharger Units",
      description: "Complete turbocharger assemblies and units",
      manufacturers: ["ABB", "MAN", "Wärtsilä", "Mitsubishi", "IHI"]
    },
    {
      name: "Turbocharger Rotors",
      description: "Turbocharger rotors and impeller wheels",
      manufacturers: ["ABB", "MAN", "Wärtsilä", "Mitsubishi", "IHI"]
    },
    {
      name: "Turbocharger Bearings",
      description: "Journal bearings, thrust bearings and seals",
      manufacturers: ["ABB", "MAN", "Wärtsilä", "Mitsubishi", "IHI"]
    },
    {
      name: "Turbocharger Nozzles",
      description: "Nozzle rings and guide vanes",
      manufacturers: ["ABB", "MAN", "Wärtsilä", "Mitsubishi", "IHI"]
    },
    {
      name: "Auxiliary Engine Parts",
      description: "Complete range of auxiliary engine components",
      manufacturers: ["Caterpillar", "Cummins", "MAN", "Wärtsilä", "Yanmar"]
    },
    {
      name: "Generator Components",
      description: "Generator sets and power generation components",
      manufacturers: ["Caterpillar", "Cummins", "MAN", "Wärtsilä", "Yanmar"]
    }
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Turbochargers & Auxiliary Engine Products</h1>
          <p className="page-subtitle">
            High-performance turbochargers and auxiliary engine components
          </p>
        </div>

        <section className="product-intro">
          <p>
            We specialize in supplying high-quality turbochargers and auxiliary engine components from 
            leading manufacturers. Our comprehensive range includes complete turbocharger units, spare 
            parts, and auxiliary engine components for reliable power generation and propulsion systems.
          </p>
        </section>

        <section className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-header">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
              </div>
              <div className="product-manufacturers">
                <h4>Available for:</h4>
                <div className="manufacturer-list">
                  {product.manufacturers.map((manufacturer, idx) => (
                    <span key={idx} className="manufacturer-tag">{manufacturer}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="services">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Technical Consultation</h3>
              <p>Expert advice on turbocharger selection and compatibility</p>
            </div>
            <div className="service-card">
              <h3>Overhaul Support</h3>
              <p>Complete support for turbocharger overhaul and maintenance</p>
            </div>
            <div className="service-card">
              <h3>Spare Parts Management</h3>
              <p>Comprehensive spare parts inventory and logistics</p>
            </div>
          </div>
        </section>

        <section className="quality-assurance">
          <h2>Quality Assurance</h2>
          <div className="quality-points">
            <div className="quality-item">
              <h4>Original Equipment</h4>
              <p>100% genuine OEM parts with manufacturer warranty</p>
            </div>
            <div className="quality-item">
              <h4>Performance Testing</h4>
              <p>All parts undergo rigorous performance testing</p>
            </div>
            <div className="quality-item">
              <h4>Technical Documentation</h4>
              <p>Complete technical documentation and certificates</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TurbochargersAuxiliary;
