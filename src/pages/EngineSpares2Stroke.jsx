/**
 * ASP Global Marine Trading LLC - Engine Spares 2-Stroke Page
 *
 * Product Portfolio with Brand Logos and Technical Table
 */

import "../styles/pages/Products.css";

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
        "N165-LHN",
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
    <div className="product-page">
      <div className="container">
        {/* Page Header */}
        <div className="portfolio-header dark-header">
          <h1 className="portfolio-title">ENGINE SPARES (2 STROKE)</h1>
        </div>

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
