/**
 * ASP Global Marine Trading LLC - Engine Spares 4-Stroke Page
 *
 * Product Portfolio Design with Blue Header and Technical Tables
 * Exact replica of the provided design
 */

import { Link } from "react-router-dom";
import "../styles/pages/EngineSpares4Stroke.css";

const EngineSpares4Stroke = () => {
  const manufacturers = [
    {
      name: "YANMAR",
      models: [
        "EY18",
        "EY22",
        "EY 26",
        "SI65",
        "SI85",
        "M2CO",
        "M220",
        "NI8",
        "N2",
        "NI65",
      ],
      secondRow: [
        "N260",
        "N300",
        "NY 16",
        "T220",
        "T240",
        "T260",
        "",
        "",
        "",
        "",
      ],
    },
    {
      name: "CAT",
      models: ["C-18", "C-32", "", "", "", "", "", "", "", ""],
      secondRow: null,
    },
    {
      name: "CUMMINS",
      models: [
        "KTA-19-(D)M",
        "KTA - 19 M3",
        "KTA-38-(D)M",
        "KTA50-D(MI)",
        "LTA A 89 - 92",
        "",
        "",
        "",
        "",
        "",
      ],
      secondRow: ["NTA 855-GI(M)", "", "", "", "", "", "", "", "", ""],
    },
    {
      name: "DAIHATSU",
      models: [
        "DC -17",
        "DK 20",
        "DK 26",
        "DK 28",
        "DE-18",
        "DE-23",
        "",
        "",
        "",
        "",
      ],
      secondRow: null,
    },
    {
      name: "WEICHAI",
      models: [
        "PROPULSION/AUXILIARY ENGINE",
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
      secondRow: null,
    },
  ];

  const brandLogos = [
    { name: "YANMAR", logo: "/brands/yanmar-logo.png" },
    { name: "CAT", logo: "/brands/cat-logo.png" },
    { name: "Cummins", logo: "/brands/cummins-logo.png" },
    { name: "DAIHATSU", logo: "/brands/daihatsu-logo.png" },
    { name: "WEICHAI", logo: "/brands/weichai-logo.png" },
  ];

  return (
    <div className="engine-spares-page-four">
      {/* Section Title with Ship Icon */}
      <div className="portfolio-content-four">
        <div className="section-header-bar-four">
          <div className="blue-bar-four">
            <h2>ENGINE- SPARES - 4 STROKE</h2>
          </div>
          <div className="ship-icon-four">
            <svg viewBox="0 0 100 50" className="mini-ship">
              <path
                d="M5,40 L15,40 L20,30 L30,30 L35,25 L65,25 L70,30 L80,30 L85,40 L95,40 L98,45 L2,45 Z"
                fill="#0B2F4A"
              />
              <rect x="40" y="20" width="20" height="8" fill="#0B2F4A" />
              <rect x="45" y="12" width="10" height="8" fill="#0B2F4A" />
              <line
                x1="50"
                y1="12"
                x2="50"
                y2="5"
                stroke="#0B2F4A"
                strokeWidth="3"
              />
              <circle cx="50" cy="5" r="2" fill="#0B2F4A" />
            </svg>
          </div>
        </div>

        {/* Brand Logos */}
        <div className="brand-logos-row-four">
          {brandLogos.map((brand, index) => (
            <div key={index} className="brand-logo-item-four">
              <img
                src={brand.logo}
                alt={brand.name}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="brand-logo-fallback" style={{ display: "none" }}>
                {brand.name}
              </div>
            </div>
          ))}
        </div>

        {/* Product Grid Layout */}
        <section className="product-grid-layout-four">
          {/* Row 1 - Two columns */}
          <div className="grid-row-four row-2-col-four">
            <div className="product-item-four">
              <div className="blue-text-box-four left-four">
                <p>
                  Cylinder Cover
                  <br />
                  Piston crown
                  <br />
                  Cooling Jacket
                </p>
              </div>
              <div className="connector-four left-connector-four"></div>
              <div className="image-container-four">
                <img
                  src="/products/engine-spares/cylinder-cover.jpg"
                  alt="Cylinder Cover Components"
                  onError={(e) =>
                    (e.target.parentElement.style.background = "#e0e0e0")
                  }
                />
              </div>
            </div>
            <div className="product-item-four">
              <div className="image-container-four">
                <img
                  src="/products/engine-spares/air-motor.jpg"
                  alt="Air Starting Motor"
                  onError={(e) =>
                    (e.target.parentElement.style.background = "#e0e0e0")
                  }
                />
              </div>
              <div className="connector-four right-connector-four"></div>
              <div className="blue-text-box-four right-four">
                <p>
                  Air Starting Motor
                  <br />
                  Piston Cleaning Ring
                  <br />
                  Fuel Transfer Pump
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 - Three columns */}
          <div className="grid-row-four row-3-col-four">
            <div className="product-item-four">
              <div className="image-container-four">
                <img
                  src="/products/engine-spares/camshaft.jpg"
                  alt="Cam Shaft"
                  onError={(e) =>
                    (e.target.parentElement.style.background = "#e0e0e0")
                  }
                />
              </div>
              <div className="connector-four top-connector-four"></div>
              <div className="blue-text-box-four bottom-four">
                <p>
                  Cam Shaft
                  <br />
                  Sensors
                  <br />
                  Inlet & Exhaust Valve
                </p>
              </div>
            </div>
            <div className="product-item-four wide-four">
              <div className="blue-text-box-four top-four">
                <p>
                  Fuel Pump housing
                  <br />
                  Roller Pump
                  <br />
                  Bushing For Roller Guide
                  <br />
                  Filters (Air, Fuel, Lube)
                  <br />
                  Fuel Nozzles
                </p>
              </div>
              <div className="connector-four bottom-connector-four"></div>
              <div className="image-container-four large-four">
                <img
                  src="/products/engine-spares/fuel-system.jpg"
                  alt="Fuel System Components"
                  onError={(e) =>
                    (e.target.parentElement.style.background = "#e0e0e0")
                  }
                />
              </div>
            </div>
          </div>

          {/* Row 3 - Main Engine */}
          <div className="grid-row-four row-2-col-four">
            <div className="product-item-four main-engine-item-four">
              <div className="image-container-four main-engine-four">
                <img
                  src="/products/engine-spares/main-engine.jpg"
                  alt="Main Engine Generator"
                  onError={(e) =>
                    (e.target.parentElement.style.background = "#e0e0e0")
                  }
                />
                <div className="main-engine-label-four">
                  Main Engine/Generator
                </div>
              </div>
            </div>
            <div className="product-item-four">
              <div className="blue-text-box-four left-four">
                <p>
                  Heat Exchangers
                  <br />
                  Plate coolers
                  <br />
                  Sea Water Pump
                  <br />
                  Lube Oil Pump
                  <br />
                  Head gasket Kit
                </p>
              </div>
              <div className="connector-four left-connector-four"></div>
              <div className="image-container-four">
                <img
                  src="/products/engine-spares/heat-exchangers.jpg"
                  alt="Heat Exchangers"
                  onError={(e) =>
                    (e.target.parentElement.style.background = "#e0e0e0")
                  }
                />
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturer Table */}
        <section className="manufacturer-table-section-four">
          <table className="manufacturer-table-four">
            <thead>
              <tr>
                <th className="col-manufacturer-four">Manufacturer</th>
                <th className="col-model-four"></th>
                <th className="model-cell-four"></th>
                <th className="model-cell-four"></th>
                <th className="model-cell-four"></th>
                <th className="model-cell-four"></th>
                <th className="model-cell-four"></th>
                <th className="model-cell-four"></th>
                <th className="model-cell-four"></th>
                <th className="model-cell-four"></th>
                <th className="model-cell-four"></th>
              </tr>
            </thead>
            <tbody>
              {manufacturers.map((manufacturer, index) => (
                <>
                  <tr key={`${index}-1`}>
                    <td className="manufacturer-name-four">
                      {manufacturer.name}
                    </td>
                    {manufacturer.models.map((model, idx) => (
                      <td
                        key={idx}
                        className={
                          model ? "model-value-four" : "empty-model-four"
                        }
                      >
                        {model}
                      </td>
                    ))}
                  </tr>
                  {manufacturer.secondRow && (
                    <tr key={`${index}-2`} className="second-row-four">
                      <td className="manufacturer-name-four empty-four"></td>
                      {manufacturer.secondRow.map((model, idx) => (
                        <td
                          key={idx}
                          className={
                            model ? "model-value-four" : "empty-model-four"
                          }
                        >
                          {model}
                        </td>
                      ))}
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </section>

        {/* Back Navigation */}
        <div className="back-navigation-four">
          <Link to="/products" className="back-button-four">
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EngineSpares4Stroke;
