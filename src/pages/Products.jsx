/**
 * ASP Global Marine Trading LLC - Products Page
 *
 * React page component with detailed product categories and information
 * Technology: React functional component with JSX
 */

import React, { useState } from "react";
import Products from "../components/Products.jsx";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const productDetails = {
    "engine-spares-2stroke": {
      title: "Engine Spares - 2 Stroke",
      description: "Complete range of 2-stroke engine spare parts for major manufacturers including YANMAR, Wärtsilä, MAN Energy Solutions, Cummins, Mitsubishi Heavy Industries, and Wingd.",
      features: [
        "Supported Models: RT-FLEX Series, RTA Series, X Series",
        "Supported Models: MC/MCC/MEC/MEB Series, UEC Series",
        "Products: Pistons, Piston Crowns, Piston Rings, Cylinder Liners",
        "Products: Cylinder Covers, Fuel Pumps, Injection Nozzles",
        "Products: Camshafts, Oil Pumps, Stuffing Boxes, Sensors",
        "Auxiliary Engine Parts Available"
      ],
      brands: ["YANMAR", "Wärtsilä", "MAN Energy Solutions", "Cummins", "Mitsubishi Heavy Industries", "Wingd"]
    },
    "engine-spares-4stroke": {
      title: "Engine Spares - 4 Stroke",
      description: "Comprehensive 4-stroke engine components for Caterpillar, Cummins, Yanmar, Daihatsu, and Weichai engines with full technical support.",
      features: [
        "Products: Cylinder Covers, Piston Crowns, Cooling Jackets",
        "Products: Air Starting Motors, Fuel Transfer Pumps",
        "Products: Cam Shafts, Inlet & Exhaust Valves",
        "Products: Heat Exchangers, Lube Oil Pumps, Head Gasket Kits",
        "Full Technical Documentation Available",
        "OEM Quality Guaranteed"
      ],
      brands: ["Caterpillar", "Cummins", "Yanmar", "Daihatsu", "Weichai"]
    },
    "turbochargers": {
      title: "Turbochargers & Auxiliary Engine Products",
      description: "High-performance turbocharger units and components from ABB, KBB, and Mitsubishi with complete repair and overhaul capabilities.",
      features: [
        "ABB Series: VTR, VTC Series Available",
        "KBB Turbocharger Units and Spares",
        "Mitsubishi MET Series Support",
        "Products: Turbocharger Units, Bearings, Impeller Wheels",
        "Products: Repair Kits, Seal Plates, Gaskets",
        "24/7 Technical Support"
      ],
      brands: ["ABB (VTR, VTC Series)", "KBB", "Mitsubishi (MET Series)"]
    },
    "hvac": {
      title: "HVAC Compressors & Spares",
      description: "Marine HVAC compressor components from Sabroe, Bitzer, and Daikin for reliable climate control systems on vessels.",
      features: [
        "Sabroe Compressor Spares and Components",
        "Bitzer Marine HVAC Systems Support",
        "Daikin Compressor Parts Available",
        "Products: Bearings, Shafts, Impellers",
        "Products: Mechanical Seals, Couplings, Wear Rings",
        "Energy Efficient Solutions"
      ],
      brands: ["Sabroe", "Bitzer", "Daikin"]
    },
    "pumps": {
      title: "Pumps - Marine & Industrial",
      description: "Complete range of marine and industrial pumps with CE, ISO9001, ISO14001, OHSAS18001 certifications and major class approvals.",
      features: [
        "Pump Types: Twin Screw, Three Screw, Gear Pumps",
        "Pump Types: Centrifugal, Deep Well, Emergency Fire Pumps",
        "Pump Types: Vacuum Pumps, Diaphragm Pumps",
        "Certifications: CE, ISO9001, ISO14001, OHSAS18001",
        "Class Approvals: CCS, BV, KR, ABS, NK, RINA, RMRS",
        "Global Service Network"
      ],
      brands: ["Desmi", "Allweiler", "Grundfos", "Jabsco"]
    },
    "purifiers": {
      title: "Purifiers & Separators",
      description: "Advanced fuel oil purifiers and water separators from Alfa Laval and GEA Westfalia for clean fuel systems.",
      features: [
        "Alfa Laval S-Type and P-Type Separators",
        "GEA Westfalia Separator Systems",
        "PLC Controlled Separator Modules",
        "Disc Separators and Marine Oil Separators",
        "Liquid Solid Centrifuge Systems",
        "Automated Control Systems"
      ],
      brands: ["Alfa Laval", "GEA Westfalia"]
    },
    "boilers": {
      title: "Boilers, Heat Exchangers & Air Compressor Spares",
      description: "Comprehensive boiler and air compressor components from Tanabe, Sauer Compressors, Sperre, and Hatlapa.",
      features: [
        "Tanabe Boiler Systems and Components",
        "Sauer Compressor Spares Available",
        "Sperre Marine Compressor Parts",
        "Hatlapa Pump and Boiler Systems",
        "Products: Boiler Feed Pumps, Burner Nozzles",
        "Products: Safety Valves, Pressure Gauges, LP/HP Valves"
      ],
      brands: ["Tanabe", "Sauer Compressors", "Sperre", "Hatlapa"]
    },
    "lsa-ffa": {
      title: "LSA & FFA (Life Saving & Fire Fighting Equipment)",
      description: "SOLAS approved and IMO compliant life-saving appliances and fire-fighting equipment for maritime safety.",
      features: [
        "Life Saving: Life Rafts, Lifebuoys, Immersion Suits",
        "Fire Fighting: Fire Hoses, Fire Couplings, Fireman Suits",
        "Safety Equipment: EEBD, SCBA, Fire Extinguishers",
        "Additional: HRU, Pyrotechnics, Oil Spill Kits",
        "Navigation: Pilot Ladders, MOB Line Throwing Apparatus",
        "Gas Detection Systems"
      ],
      brands: ["SOLAS Approved", "IMO Compliant"]
    },
    "deck-stores": {
      title: "Deck Stores & Engine Stores",
      description: "Complete range of deck and engine room consumables including ropes, shackles, tools, and safety equipment.",
      features: [
        "Deck Equipment: Ropes, Shackles, Gauging Tapes",
        "Navigation: Anchor Equipment, Navigation Lights",
        "Tools: Hand Tools, Power Tools, Welding Consumables",
        "Engine: Filters, Bearings, Mechanical Seals",
        "Equipment: High Pressure Washers, Explosion Proof Lamps",
        "Safety: Helmets, PPE Kits, First Aid Kits"
      ],
      brands: ["Multiple Brands Available"]
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const selectedDetail = selectedCategory
    ? productDetails[selectedCategory]
    : null;

  return (
    <div className="products-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Our Products</h1>
          <p className="page-subtitle">
            Comprehensive marine and offshore equipment solutions
          </p>
        </div>
      </div>

      <Products onCategorySelect={handleCategorySelect} />

      {selectedDetail && (
        <section className="product-details">
          <div className="container">
            <div className="product-detail-card">
              <h2>{selectedDetail.title}</h2>
              <p className="product-description">
                {selectedDetail.description}
              </p>

              <div className="product-features">
                <h3>Key Features:</h3>
                <ul>
                  {selectedDetail.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              {selectedDetail.brands && (
                <div className="product-brands">
                  <h3>Supported Brands:</h3>
                  <div className="brands-list">
                    {selectedDetail.brands.map((brand, index) => (
                      <span key={index} className="brand-tag">{brand}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="product-actions">
                <button className="btn btn-primary">Request Quote</button>
                <button className="btn btn-outline">Download Catalog</button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedCategory(null)}
                >
                  Back to Categories
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="product-quality">
        <div className="container">
          <div className="quality-content">
            <h2>Quality Assurance</h2>
            <p>
              All our products meet international maritime standards and come
              with proper certification. We work directly with manufacturers and
              authorized distributors to ensure authenticity and quality.
            </p>
            <div className="quality-badges">
              <div className="quality-badge">
                <span className="badge-icon icon-solas"></span>
                <span>SOLAS Compliant</span>
              </div>
              <div className="quality-badge">
                <span className="badge-icon icon-global"></span>
                <span>IMO Certified</span>
              </div>
              <div className="quality-badge">
                <span className="badge-icon icon-cert"></span>
                <span>Classification Approved</span>
              </div>
              <div className="quality-badge">
                <span className="badge-icon icon-oem"></span>
                <span>OEM Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
