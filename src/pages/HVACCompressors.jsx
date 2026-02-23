/**
 * ASP Global Marine Trading LLC - HVAC Compressors & Spares Page
 * 
 * HVAC systems, compressors and spare parts
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/pages/Products.css';

const HVACCompressors = () => {
  const products = [
    {
      name: "Marine HVAC Systems",
      description: "Complete heating, ventilation and air conditioning systems",
      manufacturers: ["Carrier", "York", "Trane", "Daikin", "Mitsubishi"]
    },
    {
      name: "Marine Compressors",
      description: "Refrigeration and air conditioning compressors",
      manufacturers: ["Bitzer", "Copeland", "Danfoss", "York", "Carrier"]
    },
    {
      name: "HVAC Components",
      description: "Evaporators, condensers and heat exchangers",
      manufacturers: ["Carrier", "York", "Trane", "Daikin", "Mitsubishi"]
    },
    {
      name: "Refrigeration Systems",
      description: "Marine refrigeration systems and components",
      manufacturers: ["Bitzer", "Danfoss", "York", "Carrier", "Trane"]
    },
    {
      name: "Control Systems",
      description: "HVAC control panels and automation systems",
      manufacturers: ["Danfoss", "Siemens", "Honeywell", "Johnson Controls"]
    },
    {
      name: "Ventilation Systems",
      description: "Marine ventilation fans and air handling units",
      manufacturers: ["FläktGroup", "Systemair", "Witt & Sohn", "Howden"]
    }
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">HVAC Compressors & Spares</h1>
          <p className="page-subtitle">
            Marine HVAC systems, compressors and comprehensive spare parts
          </p>
        </div>

        <section className="product-intro">
          <p>
            We provide comprehensive HVAC and refrigeration solutions for marine applications. Our range 
            includes complete HVAC systems, compressors, and all essential spare parts from leading 
            manufacturers, ensuring optimal comfort and performance on board vessels and offshore installations.
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

        <section className="applications">
          <h2>Applications</h2>
          <div className="applications-grid">
            <div className="application-card">
              <h3>Accommodation Areas</h3>
              <p>Crew cabins, mess rooms and recreational areas</p>
            </div>
            <div className="application-card">
              <h3>Bridge & Control Rooms</h3>
              <p>Navigational bridge and control center climate control</p>
            </div>
            <div className="application-card">
              <h3>Engine Room</h3>
              <p>Engine room ventilation and cooling systems</p>
            </div>
            <div className="application-card">
              <h3>Cargo Spaces</h3>
              <p>Refrigerated cargo spaces and cold storage</p>
            </div>
          </div>
        </section>

        <section className="technical-specifications">
          <h2>Technical Specifications</h2>
          <div className="spec-grid">
            <div className="spec-item">
              <h4>Marine Grade</h4>
              <p>All components designed for harsh marine environments</p>
            </div>
            <div className="spec-item">
              <h4>Energy Efficient</h4>
              <p>High-efficiency systems for reduced fuel consumption</p>
            </div>
            <div className="spec-item">
              <h4>Compact Design</h4>
              <p>Space-saving designs optimized for marine vessels</p>
            </div>
          </div>
        </section>

        <section className="quality-assurance">
          <h2>Quality Assurance</h2>
          <div className="quality-points">
            <div className="quality-item">
              <h4>Class Approved</h4>
              <p>All systems meet maritime classification requirements</p>
            </div>
            <div className="quality-item">
              <h4>Performance Testing</h4>
              <p>Rigorous testing for marine environmental conditions</p>
            </div>
            <div className="quality-item">
              <h4>Technical Support</h4>
              <p>Complete technical support and installation guidance</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HVACCompressors;
