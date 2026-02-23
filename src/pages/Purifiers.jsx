/**
 * ASP Global Marine Trading LLC - Purifiers Page
 * 
 * Marine purifiers and separation systems
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/pages/Products.css';

const Purifiers = () => {
  const products = [
    {
      name: "Oil Purifiers",
      description: "Marine oil purification and separation systems",
      manufacturers: ["Alfa Laval", "GEA", "Westfalia", "Mitsubishi", "Wärtsilä"]
    },
    {
      name: "Fuel Purifiers",
      description: "Fuel oil purification and treatment systems",
      manufacturers: ["Alfa Laval", "GEA", "Westfalia", "Mitsubishi", "Wärtsilä"]
    },
    {
      name: "Water Purifiers",
      description: "Fresh water and ballast water purification systems",
      manufacturers: ["Alfa Laval", "GEA", "Westfalia", "Mitsubishi", "Wärtsilä"]
    },
    {
      name: "Separator Bowls",
      description: "Separator bowls and centrifuge components",
      manufacturers: ["Alfa Laval", "GEA", "Westfalia", "Mitsubishi", "Wärtsilä"]
    },
    {
      name: "Purifier Spares",
      description: "Complete range of purifier spare parts and components",
      manufacturers: ["Alfa Laval", "GEA", "Westfalia", "Mitsubishi", "Wärtsilä"]
    },
    {
      name: "Bilge Water Separators",
      description: "Bilge water treatment and separation systems",
      manufacturers: ["Alfa Laval", "GEA", "Westfalia", "Mitsubishi", "Wärtsilä"]
    }
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Purifiers</h1>
          <p className="page-subtitle">
            Marine purification and separation systems
          </p>
        </div>

        <section className="product-intro">
          <p>
            We provide comprehensive marine purification and separation systems including oil purifiers, 
            fuel purifiers, and water treatment systems. Our range covers complete purifier units, 
            critical components, and spare parts from leading manufacturers ensuring optimal fuel and 
            oil quality for marine engines.
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

        <section className="purifier-applications">
          <h2>Purifier Applications</h2>
          <div className="applications-grid">
            <div className="application-card">
              <h3>Heavy Fuel Oil Treatment</h3>
              <p>Purification of heavy fuel oil for main engines</p>
            </div>
            <div className="application-card">
              <h3>Lubricating Oil Treatment</h3>
              <p>Cleaning and treatment of lubricating oils</p>
            </div>
            <div className="application-card">
              <h3>Bilge Water Treatment</h3>
              <p>Bilge water separation and treatment systems</p>
            </div>
            <div className="application-card">
              <h3>Fresh Water Generation</h3>
              <p>Fresh water purification and treatment systems</p>
            </div>
          </div>
        </section>

        <section className="separation-technology">
          <h2>Separation Technology</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <h3>Centrifugal Separation</h3>
              <p>High-speed centrifugal separation for efficient purification</p>
            </div>
            <div className="tech-card">
              <h3>Automatic Operation</h3>
              <p>Fully automatic purifier operation and monitoring</p>
            </div>
            <div className="tech-card">
              <h3>High Efficiency</h3>
              <p>Optimized separation efficiency for various fuel types</p>
            </div>
          </div>
        </section>

        <section className="quality-assurance">
          <h2>Quality Assurance</h2>
          <div className="quality-points">
            <div className="quality-item">
              <h4>IMO Compliance</h4>
              <p>All systems meet IMO and MARPOL requirements</p>
            </div>
            <div className="quality-item">
              <h4>Class Approved</h4>
              <p>Classification society approved equipment</p>
            </div>
            <div className="quality-item">
              <h4>Technical Support</h4>
              <p>Complete technical support and maintenance services</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Purifiers;
