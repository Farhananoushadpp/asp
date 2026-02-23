/**
 * ASP Global Marine Trading LLC - Pumps Marine & Industrial Page
 * 
 * Marine and industrial pumps and pumping systems
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/pages/Products.css';

const PumpsMarineIndustrial = () => {
  const products = [
    {
      name: "Centrifugal Pumps",
      description: "Marine centrifugal pumps for various applications",
      manufacturers: ["KSB", "Sulzer", "Alfa Laval", "Grundfos", "Wärtsilä"]
    },
    {
      name: "Gear Pumps",
      description: "Marine gear pumps for lubrication and fuel systems",
      manufacturers: ["Roper", "Viking", "Tuthill", "Waukesha", "IMO"]
    },
    {
      name: "Screw Pumps",
      description: "Three-screw and twin-screw pumps for marine applications",
      manufacturers: ["IMO", "Bornemann", "Allweiler", "Roper", "Tuthill"]
    },
    {
      name: "Ballast Pumps",
      description: "Ballast water management and pumping systems",
      manufacturers: ["KSB", "Sulzer", "Alfa Laval", "Grundfos", "Wärtsilä"]
    },
    {
      name: "Fire Fighting Pumps",
      description: "Marine fire fighting and emergency pumps",
      manufacturers: ["KSB", "Sulzer", "Grundfos", "Wärtsilä", "Rosenbauer"]
    },
    {
      name: "Bilge Pumps",
      description: "Bilge pumping systems and components",
      manufacturers: ["KSB", "Sulzer", "Alfa Laval", "Grundfos", "Wärtsilä"]
    }
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Pumps – Marine & Industrial</h1>
          <p className="page-subtitle">
            Comprehensive range of marine and industrial pumping solutions
          </p>
        </div>

        <section className="product-intro">
          <p>
            We supply a comprehensive range of marine and industrial pumps for various applications 
            including ballast water management, fire fighting, bilge pumping, and general marine 
            operations. Our pumps are sourced from leading manufacturers and meet all maritime 
            classification requirements.
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

        <section className="pump-applications">
          <h2>Pump Applications</h2>
          <div className="applications-grid">
            <div className="application-card">
              <h3>Ballast Water Management</h3>
              <p>Ballast pumping and treatment systems</p>
            </div>
            <div className="application-card">
              <h3>Fire Protection</h3>
              <p>Fire fighting and emergency pumping systems</p>
            </div>
            <div className="application-card">
              <h3>Cargo Operations</h3>
              <p>Cargo pumping and transfer systems</p>
            </div>
            <div className="application-card">
              <h3>Machinery Systems</h3>
              <p>Lubrication, cooling and fuel pumping</p>
            </div>
          </div>
        </section>

        <section className="pump-types">
          <h2>Pump Types & Specifications</h2>
          <div className="pump-types-grid">
            <div className="pump-type-card">
              <h3>Centrifugal Pumps</h3>
              <p>High-flow applications, general marine pumping</p>
            </div>
            <div className="pump-type-card">
              <h3>Positive Displacement</h3>
              <p>High-pressure applications, precise flow control</p>
            </div>
            <div className="pump-type-card">
              <h3>Submersible Pumps</h3>
              <p>Bilge and ballast pumping applications</p>
            </div>
          </div>
        </section>

        <section className="quality-assurance">
          <h2>Quality Assurance</h2>
          <div className="quality-points">
            <div className="quality-item">
              <h4>Marine Certification</h4>
              <p>All pumps meet SOLAS and classification requirements</p>
            </div>
            <div className="quality-item">
              <h4>Performance Testing</h4>
              <p>Comprehensive testing for marine conditions</p>
            </div>
            <div className="quality-item">
              <h4>Spare Parts Availability</h4>
              <p>Complete range of spare parts and components</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PumpsMarineIndustrial;
