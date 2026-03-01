/**
 * ASP Global Marine Trading LLC - Engine Spares 2-Stroke Page
 *
 * Product Portfolio with Brand Logos and Technical Table
 */

import { Settings, CheckCircle, Award } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import "../styles/pages/Products.css";

const EngineSpares2Stroke = () => {
  const manufacturers = [
    {
      name: "YANMAR",
      models: ["N18", "EY18", "N21", "EY26", "N260", "N280", "M200", "N330", "EY22", "S185L-HN"],
    },
    {
      name: "HIMSEN",
      models: ["H28/17", "H32/25", "H33/25", "H40/32", "", "", "", "", "", ""],
    },
    {
      name: "WARTSILA",
      models: ["L20", "", "", "", "", "", "", "", "", ""],
    },
    {
      name: "CUMMINS",
      models: ["N855DM", "K19-DM", "6BT9.5-D(M)", "6CTA8.3", "", "", "", "", "", ""],
    },
    {
      name: "MAN",
      models: ["L-MC/MCC/MEC/MEB", "", "", "", "", "", "", "", "", ""],
    },
    {
      name: "SULZER&WARTSILA",
      models: ["RTA-T/TB/TD/TE/U", "", "", "", "", "", "", "", "", ""],
    },
    {
      name: "WINGD",
      models: ["X52", "X62", "X72", "X82", "X92", "", "", "", "", ""],
    },
    {
      name: "MITSUBISHI-UEC 33/35LSE",
      models: ["37LA", "45", "50LA/LS/LSE", "52", "60LA/LS", "68LSE", "85LS", "", "", ""],
    },
  ];

  return (
    <div className="product-page">
      {/* Hero Section - Using PageHero Component */}
      <PageHero
        title="ENGINE SPARES - 2 STROKE"
        subtitle="Genuine OEM Parts"
        icon={Settings}
        badges={[
          { icon: CheckCircle, text: "OEM Quality" },
          { icon: Award, text: "Class Certified" }
        ]}
      />

      <div className="container">

        {/* Supported Brands Section */}
        <div className="brands-section">
          <div className="supported-brands-label">Supported Brands</div>
          <div className="brand-logos">
            <div className="brand-logo-item">
              <img
                src="/brands/himsen-logo.png"
                alt="HIMSEN"
                className="brand-logo-img"
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/wartsila-logo.png"
                alt="Wartsila"
                className="brand-logo-img"
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/man-logo.png"
                alt="MAN"
                className="brand-logo-img"
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/sulzer-logo.png"
                alt="SULZER"
                className="brand-logo-img"
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/wingd-logo.png"
                alt="WINGD"
                className="brand-logo-img"
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/mitsubishi-logo.png"
                alt="MITSUBISHI"
                className="brand-logo-img"
              />
            </div>
          </div>
        </div>

        {/* Product Cards Section */}
        <section className="product-cards-section">
          <div className="product-cards-grid">
            <div className="product-card-item">
              <div className="product-card-content blue-card">
                <h3>Pistons, piston crowns & piston rings</h3>
              </div>
              <div className="product-card-image">
                <img src="/products/engine-spares-2stroke/pistons.webp" alt="Pistons, piston crowns & piston rings" />
              </div>
            </div>
            
            <div className="product-card-item reverse">
              <div className="product-card-image">
                <img src="/products/engine-spares-2stroke/cylinder-liners.webp" alt="Cylinder liners & cylinder covers" />
              </div>
              <div className="product-card-content blue-card">
                <h3>Cylinder liners & cylinder covers</h3>
              </div>
            </div>
            
            <div className="product-card-item">
              <div className="product-card-content blue-card">
                <h3>Fuel pumps, injection nozzles & valves</h3>
              </div>
              <div className="product-card-image">
                <img src="/products/engine-spares-2stroke/fuel-pumps.webp" alt="Fuel pumps, injection nozzles & valves" />
              </div>
            </div>
            
            <div className="product-card-item">
              <div className="product-card-content blue-card">
                <h3>Oil pumps, camshafts & stuffing boxes</h3>
              </div>
              <div className="product-card-image">
                <img src="/products/engine-spares-2stroke/oil-pumps.webp" alt="Oil pumps, camshafts & stuffing boxes" />
              </div>
            </div>
            
            <div className="product-card-item">
              <div className="product-card-image">
                <img src="/products/engine-spares-2stroke/sensors.webp" alt="Sensors & auxiliary engine parts" />
              </div>
              <div className="product-card-content overlay-card">
                <h3>Sensors & auxiliary engine parts</h3>
              </div>
            </div>
            
            <div className="product-card-item">
              <div className="product-card-image">
                <img src="/products/engine-spares-2stroke/stuffing-boxes.webp" alt="Oil pumps, camshafts & stuffing boxes" />
              </div>
              <div className="product-card-content overlay-card">
                <h3>Oil pumps, camshafts & stuffing boxes</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturer Table */}
        <section className="manufacturer-table-section">
          <table className="manufacturer-table">
            <thead>
              <tr>
                <th className="col-manufacturer">Manufacturer</th>
                <th className="col-type">Model</th>
                <th className="model-cell"></th>
                <th className="model-cell"></th>
                <th className="model-cell"></th>
                <th className="model-cell"></th>
                <th className="model-cell"></th>
                <th className="model-cell"></th>
                <th className="model-cell"></th>
                <th className="model-cell"></th>
                <th className="model-cell"></th>
              </tr>
            </thead>
            <tbody>
              {manufacturers.map((manufacturer, index) => (
                <tr key={index}>
                  <td className="manufacturer-name">{manufacturer.name}</td>
                  <td className="sub-type">-</td>
                  {manufacturer.models.map((model, idx) => (
                    <td
                      key={idx}
                      className={model ? "model-value" : "empty-model"}
                    >
                      {model}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default EngineSpares2Stroke;
