/**
 * ASP Global Marine Trading LLC - Engine Spares 2-Stroke Page
 *
 * Product Portfolio Design with Blue Header and Technical Tables
 * Exact replica of the provided design
 */

import { Link } from "react-router-dom";
import "../styles/pages/EngineSpares2Stroke.css";

const EngineSpares2Stroke = () => {
  const manufacturers = [
    {
      name: "YANMAR",
      models: [
        "N18",
        "EY18",
        "N21",
        "EY26",
        "N260",
        "N280",
        "M200",
        "N330",
        "EY22",
        "SI65L-HN",
      ],
    },
    {
      name: "HIMSEN",
      models: ["H28/17", "H32/21", "H33/25", "H40/32", "", "", "", "", "", ""],
    },
    {
      name: "WARTSILA",
      models: ["L20", "", "", "", "", "", "", "", "", ""],
    },
    {
      name: "CUMMINS",
      models: [
        "N855DM",
        "K19-DM",
        "6BT-5-D(M)",
        "6CTA8.3",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
    },
    {
      name: "MAN",
      hasSubRows: true,
      subRows: [
        {
          type: "L-MC/MCC/MEC/MEB",
          models: ["k80", "K90", "K98", "", "", "", "", "", "", ""],
        },
        {
          type: "L-MC/MCC/MEC/MEB",
          models: ["L35", "L42", "L46", "L50", "L60", "L70", "", "", "", ""],
        },
        {
          type: "S-MC/MCC/MEC/MEB",
          models: [
            "S26",
            "S35",
            "S42",
            "S46",
            "S50",
            "S60",
            "S70",
            "S80",
            "S90",
            "",
          ],
        },
        {
          type: "G-MC/MCC/MEC/MEB",
          models: ["G45", "G50", "G60", "G70", "G80", "G95", "", "", "", ""],
        },
      ],
    },
    {
      name: "SULZER&WARTSILA",
      hasSubRows: true,
      subRows: [
        {
          type: "RTA-T/TB/TD/TE/U",
          models: [
            "RTA48",
            "RTA52",
            "RTA58T",
            "RTA62",
            "RTA72",
            "RTA82",
            "RTA84",
            "RTA96C",
            "",
            "",
          ],
        },
        {
          type: "RT-FLEX-B/D/TB/TD/TE",
          models: [
            "RT-FLEX50",
            "",
            "RT-FLEX58",
            "",
            "RT-FLEX68",
            "",
            "RT-FLEX82",
            "",
            "RT-FLEX96C",
            "",
          ],
        },
      ],
    },
    {
      name: "WINGD",
      models: ["X52", "X62", "X72", "X82", "X92", "", "", "", "", ""],
    },
    {
      name: "MITSUBISHI-UEC 33/35LSE",
      models: [
        "37LA",
        "45",
        "50LA/LS/LSE",
        "52",
        "60LA/LS",
        "68LSE",
        "85LS",
        "",
        "",
        "",
      ],
    },
  ];

  return (
    <div className="engine-spares-page">
      {/* Product Portfolio Header */}
      <section className="portfolio-header">
        <div className="header-bg">
          <div className="ship-container">
            <img
              src="/images/cargo-ship.png"
              alt="Cargo Ship"
              className="ship-image"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
        </div>
        <div className="header-overlay">
          <h1>PRODUCT PORTFOLIO</h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="portfolio-content">
        {/* Section Title with Ship Icon */}
        <div className="section-header-bar">
          <div className="blue-bar">
            <h2>ENGINE SPARES- 2 STROKE</h2>
          </div>
          <div className="ship-icon">
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

        {/* Product Grid Layout */}
        <section className="product-grid-layout">
          {/* Row 1 - Two columns */}
          <div className="grid-row row-2-col">
            <div className="product-item">
              <div className="blue-text-box left">
                <p>Pistons, piston crowns & piston rings</p>
              </div>
              <div className="connector left-connector"></div>
              <div className="image-container">
                <img
                  src="/products/engine-spares/pistons.jpg"
                  alt="Pistons"
                  onError={(e) =>
                    (e.target.parentElement.style.background = "#e0e0e0")
                  }
                />
              </div>
            </div>
            <div className="product-item">
              <div className="image-container">
                <img
                  src="/products/engine-spares/cylinder-liners.jpg"
                  alt="Cylinder Liners"
                  onError={(e) =>
                    (e.target.parentElement.style.background = "#e0e0e0")
                  }
                />
              </div>
              <div className="connector right-connector"></div>
              <div className="blue-text-box right">
                <p>Cylinder liners & cylinder covers</p>
              </div>
            </div>
          </div>

          {/* Row 2 - Three columns with center image */}
          <div className="grid-row row-3-col">
            <div className="product-item">
              <div className="blue-text-box left">
                <p>Oil pumps, camshafts & stuffing boxes</p>
              </div>
              <div className="connector left-connector"></div>
              <div className="image-container">
                <img
                  src="/products/engine-spares/oil-pumps.jpg"
                  alt="Oil Pumps"
                  onError={(e) =>
                    (e.target.parentElement.style.background = "#e0e0e0")
                  }
                />
              </div>
            </div>
            <div className="product-item wide">
              <div className="image-container large">
                <img
                  src="/products/engine-spares/injection-nozzles.jpg"
                  alt="Injection Nozzles"
                  onError={(e) =>
                    (e.target.parentElement.style.background = "#e0e0e0")
                  }
                />
              </div>
              <div className="connector right-connector"></div>
              <div className="blue-text-box right">
                <p>Fuel pumps, injection nozzles & valves</p>
              </div>
            </div>
          </div>

          {/* Row 3 - Three columns */}
          <div className="grid-row row-3-col-alt">
            <div className="product-item">
              <div className="blue-text-box left">
                <p>Oil pumps, camshafts & stuffing boxes</p>
              </div>
              <div className="connector left-connector"></div>
              <div className="image-container">
                <img
                  src="/products/engine-spares/camshafts.jpg"
                  alt="Camshafts"
                  onError={(e) =>
                    (e.target.parentElement.style.background = "#e0e0e0")
                  }
                />
              </div>
            </div>
            <div className="product-item center-item">
              <div className="image-container">
                <img
                  src="/products/engine-spares/sensors.jpg"
                  alt="Sensors"
                  onError={(e) =>
                    (e.target.parentElement.style.background = "#e0e0e0")
                  }
                />
              </div>
              <div className="center-label">
                Sensors & auxiliary engine parts
              </div>
            </div>
            <div className="product-item">
              <div className="blue-text-box right">
                <p>Sensors & auxiliary engine parts</p>
              </div>
              <div className="connector right-connector-short"></div>
              <div className="image-container">
                <img
                  src="/products/engine-spares/stuffing-boxes.jpg"
                  alt="Stuffing Boxes"
                  onError={(e) =>
                    (e.target.parentElement.style.background = "#e0e0e0")
                  }
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
              {manufacturers.map((manufacturer, index) =>
                manufacturer.hasSubRows ? (
                  manufacturer.subRows.map((subRow, subIndex) => (
                    <tr key={`${index}-${subIndex}`} className="sub-row">
                      {subIndex === 0 && (
                        <td
                          rowSpan={manufacturer.subRows.length}
                          className="manufacturer-name"
                        >
                          {manufacturer.name}
                        </td>
                      )}
                      <td className="sub-type">{subRow.type}</td>
                      {subRow.models.map((model, idx) => (
                        <td
                          key={idx}
                          className={model ? "model-value" : "empty-model"}
                        >
                          {model}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
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
                ),
              )}
            </tbody>
          </table>
        </section>

        {/* Back Navigation */}
        <div className="back-navigation">
          <Link to="/products" className="back-button">
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EngineSpares2Stroke;
