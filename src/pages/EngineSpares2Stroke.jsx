/**
 * ASP Global Marine Trading LLC - Engine Spares 2-Stroke Page
 *
 * Marine Industrial Product Subpage with Technical Tables
 * Professional structured catalog with manufacturer data
 */

import "../styles/pages/Products.css";
import { Link } from "react-router-dom";

const EngineSpares2Stroke = () => {
  const manufacturers = [
    {
      name: "YANMAR",
      models: ["N18", "EY18", "N21", "EY26", "N260", "N280", "M200"],
      series: ["N Series", "EY Series", "M Series"]
    },
    {
      name: "HIMSEN",
      models: ["H28/17", "H32/21", "H33/25", "H40/32"],
      series: ["H Series"]
    },
    {
      name: "MAN",
      models: ["K80", "L35", "K90", "K98"],
      series: ["K Series", "L Series"]
    },
    {
      name: "WARTSILA",
      models: ["L42", "L46", "L50", "L60", "L70"],
      series: ["L Series"]
    },
    {
      name: "SULZER",
      models: ["RTA48", "RTA52", "RTA58T", "RTA62"],
      series: ["RTA Series"]
    },
    {
      name: "RT-FLEX",
      models: ["RT-FLEX50", "RT-FLEX58", "RT-FLEX68"],
      series: ["RT-FLEX Series"]
    },
    {
      name: "WINGD",
      models: ["5RT-FLEX50", "6RT-FLEX58", "7RT-FLEX68"],
      series: ["RT-FLEX Series"]
    },
    {
      name: "MITSUBISHI-UEC",
      models: ["UEC-L52", "UEC-L58", "UEC-L60", "UEC-L70"],
      series: ["UEC-L Series"]
    }
  ];

  const spareParts = [
    "Pistons",
    "Piston Crowns",
    "Cylinder Liners",
    "Fuel Pumps",
    "Injection Nozzles",
    "Camshafts",
    "Sensors",
    "Oil Pumps",
    "Stuffing Boxes",
    "Main Bearings",
    "Connecting Rod Bearings",
    "Thrust Bearings",
    "Valve Seats",
    "Valve Guides",
    "Exhaust Valves",
    "Inlet Valves",
    "Fuel Valves",
    "Starting Air Valves",
    "Turbocharger Parts",
    "Gasket Sets"
  ];

  const technicalSpecs = [
    {
      category: "Engine Types",
      specifications: [
        "Bore: 260-960mm",
        "Stroke: 400-2500mm", 
        "Power: 600-20,000 kW per cylinder",
        "Speed: 50-300 rpm"
      ]
    },
    {
      category: "Fuel Systems",
      specifications: [
        "Heavy Fuel Oil (HFO) compatible",
        "Marine Diesel Oil (MDO) compatible",
        "Low Sulphur Fuel Oil (LSFO) compatible",
        "Common Rail Systems"
      ]
    },
    {
      category: "Materials",
      specifications: [
        "Cast Iron Cylinder Blocks",
        "Alloy Steel Pistons",
        "Bronze Bearings",
        "Stainless Steel Valves"
      ]
    }
  ];

  return (
    <div className="product-subpage">
      <div className="container">
        {/* Header */}
        <header className="product-header">
          <Link to="/products" className="back-link">← Back to Products</Link>
          <h1>Engine Spares - 2 Stroke</h1>
          <p className="intro">
            Complete range of 2-stroke marine engine spare parts for major manufacturers. 
            Genuine OEM and equivalent quality components with full technical documentation 
            and classification society approval.
          </p>
        </header>

        {/* Brands Supported */}
        <section className="brands-section">
          <h2>Brands Supported</h2>
          <div className="brands-grid">
            {manufacturers.map((manufacturer, index) => (
              <div key={index} className="brand-item">
                {manufacturer.name}
              </div>
            ))}
          </div>
        </section>

        {/* Manufacturer & Models Table */}
        <section>
          <h2>Manufacturer & Model Compatibility</h2>
          <table className="product-table">
            <thead>
              <tr>
                <th>Manufacturer</th>
                <th>Models Supported</th>
                <th>Series</th>
              </tr>
            </thead>
            <tbody>
              {manufacturers.map((manufacturer, index) => (
                <tr key={index}>
                  <td>
                    <strong>{manufacturer.name}</strong>
                  </td>
                  <td>{manufacturer.models.join(", ")}</td>
                  <td>{manufacturer.series.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Spare Parts Available */}
        <section>
          <h2>Spare Parts Available</h2>
          <table className="product-table">
            <thead>
              <tr>
                <th>Component Category</th>
                <th>Description</th>
                <th>Material/Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Pistons</strong></td>
                <td>Complete piston assemblies with crowns and pins</td>
                <td>Alloy Steel, Cast Iron</td>
              </tr>
              <tr>
                <td><strong>Cylinder Liners</strong></td>
                <td>Wet and dry type liners with precision bore</td>
                <td>Cast Iron, Chrome Plated</td>
              </tr>
              <tr>
                <td><strong>Fuel Pumps</strong></td>
                <td>High-pressure fuel injection pumps</td>
                <td>Steel Alloy</td>
              </tr>
              <tr>
                <td><strong>Injection Nozzles</strong></td>
                <td>Multi-hole and pintle type nozzles</td>
                <td>Tool Steel</td>
              </tr>
              <tr>
                <td><strong>Camshafts</strong></td>
                <td>Complete camshaft assemblies</td>
                <td>Forged Steel</td>
              </tr>
              <tr>
                <td><strong>Main Bearings</strong></td>
                <td>Shell type main bearings</td>
                <td>Bronze, Babbitt</td>
              </tr>
              <tr>
                <td><strong>Connecting Rod Bearings</strong></td>
                <td>Connecting rod bearing shells</td>
                <td>Bronze, Babbitt</td>
              </tr>
              <tr>
                <td><strong>Valves</strong></td>
                <td>Inlet, exhaust, and fuel valves</td>
                <td>Stainless Steel, Tool Steel</td>
              </tr>
              <tr>
                <td><strong>Turbocharger Parts</strong></td>
                <td>Rotors, nozzles, casings, bearings</td>
                <td>High-Speed Steel, Bronze</td>
              </tr>
              <tr>
                <td><strong>Gasket Sets</strong></td>
                <td>Complete engine gasket kits</td>
                <td>Composite, Graphite</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Technical Specifications */}
        <section>
          <h2>Technical Specifications</h2>
          <table className="product-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Specifications</th>
              </tr>
            </thead>
            <tbody>
              {technicalSpecs.map((spec, index) => (
                <tr key={index}>
                  <td><strong>{spec.category}</strong></td>
                  <td>{spec.specifications.join(" | ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Equipment Compatibility */}
        <section>
          <h2>Supported Equipment Types</h2>
          <table className="product-table">
            <thead>
              <tr>
                <th>Equipment Type</th>
                <th>Applications</th>
                <th>Vessel Types</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Main Propulsion Engines</strong></td>
                <td>Primary propulsion for large vessels</td>
                <td>Container Ships, Tankers, Bulk Carriers</td>
              </tr>
              <tr>
                <td><strong>Auxiliary Engines</strong></td>
                <td>Power generation, pump drives</td>
                <td>All vessel types</td>
              </tr>
              <tr>
                <td><strong>Generator Sets</strong></td>
                <td>Electrical power generation</td>
                <td>Commercial vessels, Offshore platforms</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* CTA Section */}
        <section className="product-cta">
          <h2>Request Technical Details</h2>
          <p>
            Need detailed technical specifications, compatibility charts, or pricing information? 
            Our technical team can provide comprehensive documentation and application guidance.
          </p>
          <Link to="/contact" className="cta-button">
            Contact Technical Support
          </Link>
        </section>
      </div>
    </div>
  );
};

export default EngineSpares2Stroke;
