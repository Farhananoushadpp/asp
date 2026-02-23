/**
 * ASP Global Marine Trading LLC - Boilers, Incinerators & Heat Exchangers Page
 * 
 * Marine boilers, incinerators and heat exchange systems
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/pages/Products.css';

const BoilersIncineratorsHeatExchangers = () => {
  const products = [
    {
      name: "Marine Boilers",
      description: "Auxiliary and exhaust gas boilers for marine applications",
      manufacturers: ["Alfa Laval", "Aalborg", "Wärtsilä", "Mitsubishi", "Kangrim"]
    },
    {
      name: "Exhaust Gas Boilers",
      description: "Waste heat recovery and exhaust gas boilers",
      manufacturers: ["Alfa Laval", "Aalborg", "Wärtsilä", "Mitsubishi", "Kangrim"]
    },
    {
      name: "Marine Incinerators",
      description: "Marine waste incineration systems and components",
      manufacturers: ["ATLAS", "Inciner8", "Wärtsilä", "Alfa Laval", "Scanship"]
    },
    {
      name: "Heat Exchangers",
      description: "Shell and tube, plate heat exchangers for marine use",
      manufacturers: ["Alfa Laval", "SWEP", "Tranter", "GEA", "Wärtsilä"]
    },
    {
      name: "Boiler Components",
      description: "Complete range of boiler spare parts and components",
      manufacturers: ["Alfa Laval", "Aalborg", "Wärtsilä", "Mitsubishi", "Kangrim"]
    },
    {
      name: "Thermal Oil Systems",
      description: "Thermal oil heating systems and components",
      manufacturers: ["Alfa Laval", "Aalborg", "Wärtsilä", "Mitsubishi", "Kangrim"]
    }
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Boilers, Incinerators & Heat Exchangers</h1>
          <p className="page-subtitle">
            Marine thermal systems and waste management solutions
          </p>
        </div>

        <section className="product-intro">
          <p>
            We provide comprehensive marine thermal systems including boilers, incinerators, and heat 
            exchangers. Our range covers auxiliary boilers, exhaust gas boilers, waste incineration 
            systems, and various heat exchange solutions from leading manufacturers for efficient vessel 
            operations.
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

        <section className="system-applications">
          <h2>System Applications</h2>
          <div className="applications-grid">
            <div className="application-card">
              <h3>Steam Generation</h3>
              <p>Auxiliary steam for heating and process applications</p>
            </div>
            <div className="application-card">
              <h3>Waste Heat Recovery</h3>
              <p>Exhaust gas heat recovery and energy efficiency</p>
            </div>
            <div className="application-card">
              <h3>Waste Management</h3>
              <p>Marine waste incineration and disposal systems</p>
            </div>
            <div className="application-card">
              <h3>Heat Transfer</h3>
              <p>Efficient heat exchange for various marine applications</p>
            </div>
          </div>
        </section>

        <section className="technical-features">
          <h2>Technical Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Energy Efficient</h3>
              <p>High-efficiency systems for reduced fuel consumption</p>
            </div>
            <div className="feature-card">
              <h3>Compact Design</h3>
              <p>Space-saving designs optimized for marine vessels</p>
            </div>
            <div className="feature-card">
              <h3>Automated Control</h3>
              <p>Advanced control systems for optimal operation</p>
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
              <h4>Environmental Compliance</h4>
              <p>MARPOL compliant waste management systems</p>
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

export default BoilersIncineratorsHeatExchangers;
