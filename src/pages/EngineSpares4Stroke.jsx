/**
 * ASP Global Marine Trading LLC - Engine Spares 4-Stroke Page
 *
 * Product Portfolio with Wartsila Brand and Technical Table
 */

import "../styles/pages/Products.css";

const EngineSpares4Stroke = () => {
  const manufacturers = [
    {
      name: "Wartsila",
      models: [
        "4L20",
        "5L20",
        "6L20",
        "8L20",
        "9L20",
        "12V20",
        "16V20",
        "",
        "",
        "",
      ],
    },
    {
      name: "Caterpillar",
      models: ["M25C", "M26C", "M32C", "", "", "", "", "", "", ""],
    },
    {
      name: "Cummins",
      models: ["20V 175", "20V 200", "", "", "", "", "", "", "", ""],
    },
    {
      name: "Yanmar",
      models: ["V175", "V200", "", "", "", "", "", "", "", ""],
    },
    {
      name: "Daihatsu",
      models: ["", "", "", "", "", "", "", "", "", ""],
    },
    {
      name: "Weichai",
      models: ["", "", "", "", "", "", "", "", "", ""],
    },
  ];

  return (
    <div className="product-page">
      <div className="container">
        {/* Page Header */}
        <div className="portfolio-header dark-header">
          <h1 className="portfolio-title">ENGINE SPARES (4 STROKE)</h1>
        </div>

        {/* Supported Brands Section */}
        <div className="brands-section">
          <div className="supported-brands-label">Brands Supported</div>
          <div className="brand-logos">
            <div className="brand-logo-item">
              <img
                src="/brands/wartsila-logo.png"
                alt="Wartsila"
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
      </div>
    </div>
  );
};

export default EngineSpares4Stroke;
