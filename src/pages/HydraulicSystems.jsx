/**
 * ASP Global Marine Trading LLC - Hydraulic Systems & Components Page
 * 
 * Marine hydraulic systems and components
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/pages/Products.css';

const HydraulicSystems = () => {
  const products = [
    {
      name: "Hydraulic Pumps",
      description: "Marine hydraulic pumps for various applications",
      manufacturers: ["Bosch Rexroth", "Parker", "Eaton", "Danfoss", "Kawasaki"]
    },
    {
      name: "Hydraulic Motors",
      description: "Hydraulic motors and actuators for marine use",
      manufacturers: ["Bosch Rexroth", "Parker", "Eaton", "Danfoss", "Kawasaki"]
    },
    {
      name: "Hydraulic Cylinders",
      description: "Marine hydraulic cylinders and actuators",
      manufacturers: ["Parker", "Eaton", "Bosch Rexroth", "Hyva", "Miller"]
    },
    {
      name: "Hydraulic Valves",
      description: "Control valves and directional valves for hydraulic systems",
      manufacturers: ["Bosch Rexroth", "Parker", "Eaton", "Danfoss", "Sun"]
    },
    {
      name: "Hydraulic Power Packs",
      description: "Complete hydraulic power units and systems",
      manufacturers: ["Bosch Rexroth", "Parker", "Eaton", "Danfoss", "Kawasaki"]
    },
    {
      name: "Hydraulic Filters",
      description: "Filtration systems for hydraulic fluids",
      manufacturers: ["Parker", "Eaton", "Bosch Rexroth", "Donaldson", "Hydac"]
    }
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Hydraulic Systems & Components</h1>
          <p className="page-subtitle">
            Comprehensive marine hydraulic systems and components
          </p>
        </div>

        <section className="product-intro">
          <p>
            We supply a complete range of marine hydraulic systems and components from leading 
            manufacturers. Our inventory includes hydraulic pumps, motors, cylinders, valves, and 
            complete power units designed for harsh marine environments and reliable operation of 
            deck machinery and steering systems.
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

        <section className="hydraulic-applications">
          <h2>Hydraulic Applications</h2>
          <div className="applications-grid">
            <div className="application-card">
              <h3>Deck Machinery</h3>
              <p>Winches, cranes and deck equipment hydraulic systems</p>
            </div>
            <div className="application-card">
              <h3>Steering Systems</h3>
              <p>Marine steering gear and hydraulic steering systems</p>
            </div>
            <div className="application-card">
              <h3>Cargo Handling</h3>
              <p>Cargo handling and hatch cover hydraulic systems</p>
            </div>
            <div className="application-card">
              <h3>Thruster Systems</h3>
              <p>Thruster control and hydraulic propulsion systems</p>
            </div>
          </div>
        </section>

        <section className="system-features">
          <h2>System Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Marine Grade</h3>
              <p>All components designed for harsh marine environments</p>
            </div>
            <div className="feature-card">
              <h3>High Reliability</h3>
              <p>Proven reliability for critical marine operations</p>
            </div>
            <div className="feature-card">
              <h3>Easy Maintenance</h3>
              <p>Designed for easy maintenance and service access</p>
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
              <p>Rigorous testing for marine operational conditions</p>
            </div>
            <div className="quality-item">
              <h4>Technical Support</h4>
              <p>Complete technical support and installation services</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HydraulicSystems;
