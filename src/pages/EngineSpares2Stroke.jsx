/**
 * ASP Global Marine Trading LLC - Engine Spares 2-Stroke Page
 * 
 * 2-Stroke engine spare parts and components
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/pages/Products.css';

const EngineSpares2Stroke = () => {
  const products = [
    {
      name: "Piston Assemblies",
      description: "Complete piston kits with rings, pins and bearings",
      manufacturers: ["MAN", "Wärtsilä", "Sulzer", "Mitsubishi"]
    },
    {
      name: "Cylinder Liners",
      description: "High-quality cylinder liners for optimal performance",
      manufacturers: ["MAN", "Wärtsilä", "Sulzer", "Mitsubishi"]
    },
    {
      name: "Main Bearings",
      description: "Main and connecting rod bearings for reliable operation",
      manufacturers: ["Wärtsilä", "MAN", "Sulzer", "Mitsubishi"]
    },
    {
      name: "Fuel Injection Systems",
      description: "Fuel pumps, injectors and injection components",
      manufacturers: ["MAN", "Wärtsilä", "Sulzer", "Mitsubishi"]
    },
    {
      name: "Turbocharger Parts",
      description: "Turbocharger rotors, bearings and seals",
      manufacturers: ["ABB", "MAN", "Wärtsilä", "Mitsubishi"]
    },
    {
      name: "Valve Train Components",
      description: "Exhaust and inlet valves, springs and guides",
      manufacturers: ["MAN", "Wärtsilä", "Sulzer", "Mitsubishi"]
    }
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Engine Spares - 2-Stroke</h1>
          <p className="page-subtitle">
            Genuine and OEM spare parts for 2-stroke marine engines
          </p>
        </div>

        <section className="product-intro">
          <p>
            We supply comprehensive range of genuine and OEM spare parts for 2-stroke marine engines. 
            Our inventory covers all major manufacturers including MAN, Wärtsilä, Sulzer, and Mitsubishi, 
            ensuring reliable performance and extended engine life.
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

        <section className="quality-assurance">
          <h2>Quality Assurance</h2>
          <div className="quality-points">
            <div className="quality-item">
              <h4>Genuine Parts</h4>
              <p>100% genuine manufacturer parts with full traceability</p>
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

export default EngineSpares2Stroke;
