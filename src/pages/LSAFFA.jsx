/**
 * ASP Global Marine Trading LLC - LSA & FFA (Life-Saving & Fire-Fighting Equipment) Page
 * 
 * Life-saving appliances and fire-fighting equipment
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/pages/Products.css';

const LSAFFA = () => {
  const products = [
    {
      name: "Lifeboats",
      description: "Marine lifeboats and rescue boats",
      manufacturers: ["Survitec", "Viking", "Norsafe", "Fassmer", "Hatecke"]
    },
    {
      name: "Life Rafts",
      description: "Inflatable life rafts and survival craft",
      manufacturers: ["Survitec", "Viking", "Winslow", "Revere", "Switlik"]
    },
    {
      name: "Life Jackets",
      description: "Personal flotation devices and life jackets",
      manufacturers: ["Survitec", "Viking", "Hansen Protection", "Mustang", "Crewsaver"]
    },
    {
      name: "Fire Extinguishers",
      description: "Marine fire extinguishers and fire fighting equipment",
      manufacturers: ["Kidde", "Ansul", "Minimax", "Siemens", "UTC"]
    },
    {
      name: "Fire Detection Systems",
      description: "Fire detection and alarm systems",
      manufacturers: ["Siemens", "Honeywell", "Johnson Controls", "Kidde", "UTC"]
    },
    {
      name: "Emergency Equipment",
      description: "Emergency escape and evacuation equipment",
      manufacturers: ["Survitec", "Viking", "Hansen Protection", "Mustang", "Crewsaver"]
    }
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">LSA & FFA (Life-Saving & Fire-Fighting Equipment)</h1>
          <p className="page-subtitle">
            Comprehensive life-saving appliances and fire-fighting equipment
          </p>
        </div>

        <section className="product-intro">
          <p>
            We provide a complete range of life-saving appliances (LSA) and fire-fighting equipment 
            (FFA) essential for maritime safety. Our inventory includes lifeboats, life rafts, life 
            jackets, fire extinguishers, detection systems, and emergency equipment from leading 
            manufacturers, ensuring full compliance with SOLAS requirements.
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

        <section className="safety-categories">
          <h2>Safety Equipment Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <h3>Life-Saving Appliances</h3>
              <p>Complete range of LSA equipment</p>
            </div>
            <div className="category-card">
              <h3>Fire-Fighting Equipment</h3>
              <p>Comprehensive fire protection systems</p>
            </div>
            <div className="category-card">
              <h3>Emergency Evacuation</h3>
              <p>Evacuation and emergency escape systems</p>
            </div>
            <div className="category-card">
              <h3>Safety Training</h3>
              <p>Training equipment and safety supplies</p>
            </div>
          </div>
        </section>

        <section className="compliance-standards">
          <h2>Compliance & Standards</h2>
          <div className="standards-grid">
            <div className="standard-card">
              <h3>SOLAS Compliant</h3>
              <p>All equipment meets SOLAS requirements</p>
            </div>
            <div className="standard-card">
              <h3>IMO Approved</h3>
              <p>Equipment approved by International Maritime Organization</p>
            </div>
            <div className="standard-card">
              <h3>Class Certified</h3>
              <p>Classification society certified equipment</p>
            </div>
          </div>
        </section>

        <section className="quality-assurance">
          <h2>Quality Assurance</h2>
          <div className="quality-points">
            <div className="quality-item">
              <h4>Safety Certified</h4>
              <p>All equipment meets international safety standards</p>
            </div>
            <div className="quality-item">
              <h4>Regular Inspection</h4>
              <p>Regular inspection and certification services</p>
            </div>
            <div className="quality-item">
              <h4>Technical Support</h4>
              <p>Expert guidance on safety equipment selection</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LSAFFA;
