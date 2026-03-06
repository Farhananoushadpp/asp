/**
 * ASP Global Marine Trading LLC - Oil Purifiers & Filters Page
 *
 * Product Portfolio with GEA and Alfa Laval Brands
 */

import { Settings, CheckCircle, Award } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import "../styles/pages/Products.css";

const Purifiers = () => {
  const manufacturers = [
    {
      name: "GEA WESFALIA",
      models: ["OSE - 5-20 - SERIES", "", "", "", ""],
    },
    {
      name: "ALFA LAVAL",
      models: [
        "PI50 - P615 - SERIES",
        "8815 - S937- SERIES",
        "FOPX - SERIES",
        "MOPX -SERIES",
        "",
      ],
    },
  ];

  return (
    <div className="product-page">
      {/* Hero Section - Using PageHero Component */}
      <PageHero
        title="PURIFIERS"
        subtitle="Oil Purifiers & Filters"
        icon={Settings}
        badges={[
          { icon: CheckCircle, text: "OEM Quality" },
          { icon: Award, text: "Class Certified" },
        ]}
      />

      <div className="container">
        {/* Supported Brands Section */}
        <div className="brands-section">
          <div className="supported-brands-label">Brands Supported</div>
          <div className="brand-logos">
            <div className="brand-logo-item">
              <img
                src="/brands/gea-logo.png"
                alt="GEA"
                className="brand-logo-img"
              />
            </div>
            <div className="brand-logo-item">
              <img
                src="/brands/alfa-laval-logo.png"
                alt="ALFA LAVAL"
                className="brand-logo-img"
              />
            </div>
          </div>
        </div>

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

        {/* Product Cards Section */}
        <section className="product-cards-section">
          <div className="product-cards-grid">
            <div className="product-card-item">
              <div className="product-card-content blue-card">
                <h3>
                  Valve Block
                  <br />
                  Pressure Transmitter
                  <br />
                  Rectangular Ring
                  <br />
                  Valve Plug
                  <br />
                  Vibration Damper
                </h3>
              </div>
              <div className="product-card-image">
                <img
                  src="/products/purifiers/valve-block.webp"
                  alt="Valve Block, Pressure Transmitter, Rectangular Ring, Valve Plug, Vibration Damper"
                />
              </div>
            </div>

            <div className="product-card-item reverse">
              <div className="product-card-image">
                <img
                  src="/products/purifiers/o-ring.webp"
                  alt="O Ring, Covering Washer, Spanner For Bowl, Compression Tool, Quick Coupling-NRV"
                />
              </div>
              <div className="product-card-content blue-card">
                <h3>
                  O Ring
                  <br />
                  Covering Washer
                  <br />
                  Spanner For Bowl
                  <br />
                  Compression Tool
                  <br />
                  Quick Coupling-NRV
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Purifiers;
