/**
 * ASP Global Marine Trading LLC - Oil Purifiers & Filters Page
 *
 * Product Portfolio with Alfa Laval Brand and Product Sections
 */

import "../styles/pages/Products.css";

const Purifiers = () => {
  const manufacturers = [
    {
      name: "ALFA LAVAL",
      models: [
        "P150",
        "P190",
        "P210",
        "P260",
        "P300",
        "P350",
        "P400",
        "P500",
        "P600",
        "P615",
      ],
    },
  ];

  return (
    <div className="product-page">
      <div className="container">
        {/* Page Header */}
        <div className="portfolio-header">
          <h1 className="portfolio-title">OIL PURIFIERS & FILTERS</h1>
        </div>

        {/* Supported Brands Section */}
        <div className="brands-section">
          <div className="supported-brands-label">Supported Brands</div>
          <div className="brand-logos">
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

        {/* Product Display Grid */}
        <section className="product-display-grid">
          <div className="product-display-row">
            {/* Left Product - Centrifugal Purifier Spares */}
            <div className="product-display-item">
              <div className="blue-text-box">
                <ul>
                  <li>Centrifugal Purifier Spares</li>
                  <li>Spare Parts For</li>
                  <li>Self-jector M/P & A/P</li>
                </ul>
              </div>
              <div className="connector"></div>
              <div className="product-image-container">
                <img
                  src="/products/centrifugal-purifier.webp"
                  alt="Centrifugal Purifier Spares"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Product - Oil Treatment */}
            <div className="product-display-item">
              <div className="blue-text-box">
                <ul>
                  <li>Oil Treatment</li>
                  <li>Duplex Oil Filters</li>
                  <li>Back Flush Oil Filter</li>
                  <li>Complete Oil Filter</li>
                </ul>
              </div>
              <div className="connector"></div>
              <div className="product-image-container">
                <img
                  src="/products/oil-treatment.webp"
                  alt="Oil Treatment, Duplex Oil Filters, Back Flush Oil Filter, Complete Oil Filter"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Purifiers;
