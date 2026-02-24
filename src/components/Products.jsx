/**
 * ASP Global Marine Trading LLC - Product Solutions Section
 *
 * Expandable accordion structure for 9 product categories
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import { useState } from "react";
import "../styles/components/Products.css";

const Products = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const productCategories = [
    {
      id: "engine-2stroke",
      number: "01",
      title: "Engine Spares – 2 Stroke",
      manufacturers: [
        "YANMAR",
        "WARTSILA",
        "MAN",
        "CUMMINS",
        "SULZER",
        "WINGD",
        "MITSUBISHI UEC",
      ],
      products: [
        "Pistons",
        "Cylinder Liners",
        "Fuel Pumps",
        "Injection Nozzles",
        "Camshafts",
        "Oil Pumps",
        "Sensors",
        "Valves",
      ],
    },
    {
      id: "engine-4stroke",
      number: "02",
      title: "Engine Spares – 4 Stroke",
      manufacturers: [],
      products: [
        "Cylinder Cover",
        "Piston Crown",
        "Cooling Jacket",
        "Fuel Pump Housing",
        "Air Starting Motor",
        "Heat Exchangers",
        "Plate Coolers",
        "Sea Water Pump",
      ],
    },
    {
      id: "turbo-hvac",
      number: "03",
      title: "Turbochargers & HVAC",
      manufacturers: ["ABB", "KBB", "Mitsubishi", "Sabroe", "Bitzer", "Daikin"],
      products: [
        "Bearings",
        "Impellers",
        "Seal Plates",
        "Repair Kits",
        "Shafts",
        "Gaskets",
      ],
    },
    {
      id: "pumps",
      number: "04",
      title: "Pumps – Marine & Industrial",
      manufacturers: ["Desmi", "Allweiler", "Grundfos", "Jabsco"],
      products: [
        "Deep Well Pump",
        "Twin Screw Pump",
        "Centrifugal Pump",
        "Vacuum Pump",
        "Emergency Fire Pump",
      ],
    },
    {
      id: "boilers",
      number: "05",
      title: "Boilers & Air Compressors",
      manufacturers: ["Tanabe", "JP Sauer & Sohn", "Sperre", "Hatlapa"],
      products: [
        "Piston Rings",
        "Cylinder Liners",
        "LP/HP Valves",
        "Burner Nozzles",
        "Control PCB",
        "Temperature Sensors",
      ],
    },
    {
      id: "hydraulic",
      number: "06",
      title: "Hydraulic Systems",
      manufacturers: [],
      products: [
        "Hatch Cover Systems",
        "Steering Gear Pumps",
        "Hydraulic Motors",
        "Control Blocks",
        "Gearboxes",
        "Power Packs",
      ],
    },
    {
      id: "purifiers",
      number: "07",
      title: "Purifiers & Separators",
      manufacturers: ["GEA Westfalia", "Alfa Laval"],
      products: [
        "Oil Separators",
        "Disc Separators",
        "Separator Modules",
        "Gravity Ring Systems",
      ],
    },
    {
      id: "deck-stores",
      number: "08",
      title: "Deck Stores & Engine Stores",
      manufacturers: [],
      products: [
        "Ropes",
        "Shackles",
        "Fenders",
        "Navigation Lights",
        "Flags",
        "Tarpaulin",
        "Gaskets",
        "Bearings",
        "Hoses",
        "Relays",
        "Transformers",
        "Carbon Brushes",
      ],
    },
    {
      id: "safety",
      number: "09",
      title: "LSA & FFA Equipment",
      manufacturers: [],
      products: [
        "Life Rafts",
        "Fire Hoses",
        "SCBA",
        "EEBD",
        "Immersion Suits",
        "Fire Extinguishers",
        "Gas Detectors",
      ],
      note: "All safety equipment supplied in compliance with international maritime regulations.",
    },
  ];

  return (
    <section id="products" className="products">
      <div className="container">
        <span className="section-label">PRODUCT PORTFOLIO</span>
        <h2 className="products-headline">Product Solutions Overview</h2>
        <p className="products-subtext">
          Comprehensive range of marine equipment and spare parts for all vessel
          types
        </p>

        <div className="accordion">
          {productCategories.map((category, index) => (
            <div
              key={category.id}
              className={`accordion-item ${activeAccordion === index ? "active" : ""}`}
            >
              <button
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeAccordion === index}
              >
                <span className="accordion-number">{category.number}</span>
                <span className="accordion-title">{category.title}</span>
                <span className="accordion-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </span>
              </button>

              <div className="accordion-content">
                <div className="accordion-inner">
                  {category.manufacturers.length > 0 && (
                    <div className="manufacturers">
                      <span className="label">Supported Manufacturers:</span>
                      <div className="tags">
                        {category.manufacturers.map((mfg, i) => (
                          <span key={i} className="tag">
                            {mfg}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="products-list">
                    <span className="label">Products:</span>
                    <div className="product-tags">
                      {category.products.map((product, i) => (
                        <span key={i} className="product-tag">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  {category.note && <p className="note">{category.note}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
