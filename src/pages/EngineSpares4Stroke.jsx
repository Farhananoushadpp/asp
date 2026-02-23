/**
 * ASP Global Marine Trading LLC - Engine Spares 4-Stroke Page
 * 
 * 4-Stroke engine spare parts and components
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/pages/Products.css';

const EngineSpares4Stroke = () => {
  const products = [
    {
      name: "Piston Assemblies",
      description: "Complete piston kits with rings, pins and bearings",
      manufacturers: ["Caterpillar", "Cummins", "MAN", "Wärtsilä", "Yanmar"]
    },
    {
      name: "Cylinder Heads",
      description: "Complete cylinder heads with valves and components",
      manufacturers: ["Caterpillar", "Cummins", "MAN", "Wärtsilä", "Yanmar"]
    },
    {
      name: "Crankshaft Components",
      description: "Crankshafts, main bearings and connecting rods",
      manufacturers: ["Caterpillar", "Cummins", "MAN", "Wärtsilä", "Yanmar"]
    },
    {
      name: "Fuel System Parts",
      description: "Fuel pumps, injectors and fuel system components",
      manufacturers: ["Caterpillar", "Cummins", "MAN", "Wärtsilä", "Yanmar"]
    },
    {
      name: "Cooling System Parts",
      description: "Water pumps, thermostats and cooling components",
      manufacturers: ["Caterpillar", "Cummins", "MAN", "Wärtsilä", "Yanmar"]
    },
    {
      name: "Lubrication System",
      description: "Oil pumps, filters and lubrication components",
      manufacturers: ["Caterpillar", "Cummins", "MAN", "Wärtsilä", "Yanmar"]
    }
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Engine Spares - 4-Stroke</h1>
          <p className="page-subtitle">
            Genuine and OEM spare parts for 4-stroke marine engines
          </p>
        </div>

        <section className="product-intro">
          <p>
            We offer comprehensive range of genuine and OEM spare parts for 4-stroke marine engines. 
            Our extensive inventory covers Caterpillar, Cummins, MAN, Wärtsilä, Yanmar and other major 
            manufacturers, ensuring optimal performance and reliability for auxiliary and main engines.
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
              <h3>Auxiliary Engines</h3>
              <p>Generator sets and auxiliary power units</p>
            </div>
            <div className="application-card">
              <h3>Main Propulsion</h3>
              <p>Medium-speed main propulsion engines</p>
            </div>
            <div className="application-card">
              <h3>Emergency Generators</h3>
              <p>Emergency power and backup systems</p>
            </div>
          </div>
        </section>

        <section className="quality-assurance">
          <h2>Quality Assurance</h2>
          <div className="quality-points">
            <div className="quality-item">
              <h4>Genuine Parts</h4>
              <p>100% genuine manufacturer parts with full documentation</p>
            </div>
            <div className="quality-item">
              <h4>Class Approved</h4>
              <p>All parts meet classification society requirements</p>
            </div>
            <div className="quality-item">
              <h4>Technical Support</h4>
              <p>Expert guidance on part selection and compatibility</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EngineSpares4Stroke;
