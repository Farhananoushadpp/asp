/**
 * ASP Global Marine Trading LLC - Engine Spares 4-Stroke Page
 *
 * Product Portfolio with Brand Logos and Product Cards
 */

import { Settings, CheckCircle, Award } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import "../styles/pages/Products.css";

const EngineSpares4Stroke = () => {
  const manufacturers = [
    {
      name: "YANMAR",
      models: [
        "EY18",
        "EY22",
        "EY26",
        "S165",
        "S185",
        "M2CO",
        "M220",
        "N18",
        "N2",
        "N165",
        "N260",
        "N300",
        "NY16",
        "T220",
        "T240",
        "T260",
      ],
    },
    {
      name: "CAT",
      models: ["C-1B", "C-32", "", "", "", "", "", "", "", ""],
    },
    {
      name: "CUMMINS",
      models: [
        "KTA-19-(D)M",
        "KTA-19M3",
        "KTA-38-(D)M",
        "KTA50-D(M)",
        "LTA A 89-92",
        "NTA 855-G(M)",
        "",
        "",
        "",
        "",
      ],
    },
    {
      name: "DAIHATSU",
      models: [
        "DC-17",
        "DK-20",
        "DK-26",
        "DK-28",
        "DE-18",
        "DE-23",
        "",
        "",
        "",
        "",
      ],
    },
    {
      name: "WEICHAI",
      models: [
        "PROPULSION/AUXILLARY ENGINE",
        "VARIOUS MODELS",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    },
  ];

  return (
    <div className="product-page">
      {/* Hero Section - Using PageHero Component */}
      <PageHero
        title="ENGINE SPARES - 4 STROKE"
        subtitle="Genuine OEM Parts"
        icon={Settings}
        badges={[
          { icon: CheckCircle, text: "OEM Quality" },
          { icon: Award, text: "Class Certified" },
        ]}
      />

      <div className="container-full">
        {/* Supported Brands Section */}
        <div className="brands-section">
          <div className="supported-brands-label">Supported Brands</div>
          <div className="brand-logos">
            <div className="brand-logo-item">
              <img
                src="/brands/yanmar-logo.png"
                alt="YANMAR"
                className="brand-logo-img"
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/cat-logo.png"
                alt="CAT"
                className="brand-logo-img"
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/cummins-logo.png"
                alt="CUMMINS"
                className="brand-logo-img"
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/daihatsu-logo.png"
                alt="DAIHATSU"
                className="brand-logo-img"
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/weichai-logo.png"
                alt="WEICHAI"
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
                <h3>
                  Cylinder Cover
                  <br />
                  Piston crown
                  <br />
                  Cooling Jacket
                </h3>
              </div>
              <div className="product-card-image">
                <img
                  src="/products/engine-spares-4stroke/cylinder-cover.webp"
                  alt="Cylinder Cover, Piston crown, Cooling Jacket"
                />
              </div>
            </div>

            <div className="product-card-item reverse">
              <div className="product-card-image">
                <img
                  src="/products/engine-spares-4stroke/air-starting-motor.webp"
                  alt="Air Starting Motor, Piston Cleaning Ring, Fuel Transfer Pump"
                />
              </div>
              <div className="product-card-content blue-card">
                <h3>
                  Air Starting Motor
                  <br />
                  Piston Cleaning Ring
                  <br />
                  Fuel Transfer Pump
                </h3>
              </div>
            </div>

            <div className="product-card-item">
              <div className="product-card-content blue-card">
                <h3>
                  Cam Shaft
                  <br />
                  Sensors
                  <br />
                  Inlet &amp; Exhaust Valve
                </h3>
              </div>
              <div className="product-card-image">
                <img
                  src="/products/engine-spares-4stroke/cam-shaft.webp"
                  alt="Cam Shaft, Sensors, Inlet & Exhaust Valve"
                />
              </div>
            </div>

            <div className="product-card-item">
              <div className="product-card-content blue-card">
                <h3>
                  Fuel Pump housing
                  <br />
                  Roller Pump
                  <br />
                  Fuel Pump for Roller Guide
                  <br />
                  Filters (Air, Fuel, Lube)
                  <br />
                  Fuel Nozzles
                </h3>
              </div>
              <div className="product-card-image">
                <img
                  src="/products/engine-spares-4stroke/fuel-pump.webp"
                  alt="Fuel Pump housing, Roller Pump, Fuel Pump for Roller Guide, Filters, Fuel Nozzles"
                />
              </div>
            </div>

            <div className="product-card-item">
              <div className="product-card-image">
                <img
                  src="/products/engine-spares-4stroke/main-engine.webp"
                  alt="Main Engine/Generator"
                />
              </div>
              <div className="product-card-content overlay-card">
                <h3>Main Engine/Generator</h3>
              </div>
            </div>

            <div className="product-card-item">
              <div className="product-card-content blue-card">
                <h3>
                  Heat Exchangers
                  <br />
                  Plate coolers
                  <br />
                  Sea Water Pump
                  <br />
                  Lube Oil Pump
                  <br />
                  Head gasket kit
                </h3>
              </div>
              <div className="product-card-image">
                <img
                  src="/products/engine-spares-4stroke/heat-exchangers.webp"
                  alt="Heat Exchangers, Plate coolers, Sea Water Pump, Lube Oil Pump, Head gasket kit"
                />
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

export default EngineSpares4Stroke;
