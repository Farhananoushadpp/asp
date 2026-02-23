/**
 * ASP Global Marine Trading LLC - Air Compressor Spares Page
 * 
 * Marine air compressors and spare parts
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/pages/Products.css';

const AirCompressorSpares = () => {
  const products = [
    {
      name: "Marine Air Compressors",
      description: "Complete marine air compressor units and systems",
      manufacturers: ["Atlas Copco", "Ingersoll Rand", "Kaeser", "Sullair", "Boge"]
    },
    {
      name: "Compressor Pistons",
      description: "High-quality compressor pistons and piston rings",
      manufacturers: ["Atlas Copco", "Ingersoll Rand", "Kaeser", "Sullair", "Boge"]
    },
    {
      name: "Compressor Valves",
      description: "Suction and discharge valves for air compressors",
      manufacturers: ["Atlas Copco", "Ingersoll Rand", "Kaeser", "Sullair", "Boge"]
    },
    {
      name: "Air Dryers",
      description: "Marine air dryers and moisture separation systems",
      manufacturers: ["Atlas Copco", "Ingersoll Rand", "Kaeser", "Hankison", "Boge"]
    },
    {
      name: "Air Filters",
      description: "Air intake filters and filtration systems",
      manufacturers: ["Atlas Copco", "Ingersoll Rand", "Kaeser", "Donaldson", "Boge"]
    },
    {
      name: "Compressor Oil Systems",
      description: "Lubrication systems and compressor oils",
      manufacturers: ["Atlas Copco", "Ingersoll Rand", "Kaeser", "Shell", "Total"]
    }
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Air Compressor Spares</h1>
          <p className="page-subtitle">
            Marine air compressors and comprehensive spare parts
          </p>
        </div>

        <section className="product-intro">
          <p>
            We supply a complete range of marine air compressors and spare parts from leading manufacturers. 
            Our inventory includes compressor units, critical components, and accessories ensuring reliable 
            compressed air supply for various marine applications including starting air, control air, and 
            service air systems.
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

        <section className="compressor-applications">
          <h2>Compressor Applications</h2>
          <div className="applications-grid">
            <div className="application-card">
              <h3>Starting Air Systems</h3>
              <p>Main engine starting air compressors and systems</p>
            </div>
            <div className="application-card">
              <h3>Control Air Systems</h3>
              <p>Pneumatic control and automation air supply</p>
            </div>
            <div className="application-card">
              <h3>Service Air Systems</h3>
              <p>General service air for tools and equipment</p>
            </div>
            <div className="application-card">
              <h3>Breathing Air Systems</h3>
              <p>High-quality breathing air for safety applications</p>
            </div>
          </div>
        </section>

        <section className="compressor-types">
          <h2>Compressor Types</h2>
          <div className="compressor-types-grid">
            <div className="compressor-type-card">
              <h3>Reciprocating Compressors</h3>
              <p>High-pressure reciprocating air compressors</p>
            </div>
            <div className="compressor-type-card">
              <h3>Screw Compressors</h3>
              <p>Rotary screw compressors for continuous operation</p>
            </div>
            <div className="compressor-type-card">
              <h3>Centrifugal Compressors</h3>
              <p>High-capacity centrifugal air compressors</p>
            </div>
          </div>
        </section>

        <section className="quality-assurance">
          <h2>Quality Assurance</h2>
          <div className="quality-points">
            <div className="quality-item">
              <h4>OEM Quality</h4>
              <p>Genuine OEM parts with manufacturer warranty</p>
            </div>
            <div className="quality-item">
              <h4>Marine Certification</h4>
              <p>All compressors meet SOLAS and class requirements</p>
            </div>
            <div className="quality-item">
              <h4>Technical Support</h4>
              <p>Expert technical support and maintenance services</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AirCompressorSpares;
