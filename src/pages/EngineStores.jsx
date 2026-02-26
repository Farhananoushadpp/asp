/**
 * ASP Global Marine Trading LLC - Engine Stores Page
 *
 * Comprehensive engine room supplies and equipment solutions
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";
import { useState } from "react";

const EngineStores = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const engineProducts = [
    {
      id: 1,
      name: "High Temp. Gaskets",
      image: "/products/enginestores/Asset 1.webp",
      category: "High Temp. Gaskets",
      description: "High Temp. Gaskets",
      whatsappMessage:
        "Hi, I'm interested in High Temp. Gaskets. Please provide more information and pricing.",
    },
    {
      id: 2,
      name: "Pipe Bender",
      image: "/products/enginestores/Asset 2.webp",
      category: "Pipe Bender",
      description: "Pipe Bender",
      whatsappMessage:
        "Hi, I'm interested in Pipe Bender. Please provide more information and pricing.",
    },
    {
      id: 3,
      name: "Cargo Sling Bag",
      image: "/products/enginestores/Asset 3.webp",
      category: "Cargo Sling Bag",
      description: "Cargo Sling Bag",
      whatsappMessage:
        "Hi, I'm interested in Cargo Sling Bag. Please provide more information and pricing.",
    },
    {
      id: 4,
      name: "Submersible Pumps",
      image: "/products/enginestores/Asset 4.webp",
      category: "Submersible Pumps",
      description:
        "High-quality marine engine components for various engine types. Reliable parts for optimal engine performance.",
      whatsappMessage:
        "Hi, I'm interested in Submersible Pumps. Please provide more information and pricing.",
    },
    {
      id: 5,
      name: "Red Silicon",
      image: "/products/enginestores/Asset 5.webp",
      category: "Red Silicon",
      description: "Red Silicon",
      whatsappMessage:
        "Hi, I'm interested in Red Silicon. Please provide more information and pricing.",
    },
    {
      id: 6,
      name: "Rust Removers",
      image: "/products/enginestores/Asset 6.webp",
      category: "Rust Removers",
      description: "Rust Removers",
      whatsappMessage:
        "Hi, I'm interested in Rust Removers. Please provide more information and pricing.",
    },
    {
      id: 7,
      name: "Insulation Test Kit",
      image: "/products/enginestores/Asset 7.webp",
      category: "Insulation Test Kit",
      description: "Insulation Test Kit",
      whatsappMessage:
        "Hi, I'm interested in Insulation Test Kit. Please provide more information and pricing.",
    },
    {
      id: 8,
      name: "Clamp Meter",
      image: "/products/enginestores/Asset 8.webp",
      category: "Clamp Meter",
      description: "Clamp Meter",
      whatsappMessage:
        "Hi, I'm interested in Clamp Meter. Please provide more information and pricing.",
    },
    {
      id: 9,
      name: "Gas/Smoke Detectors",
      image: "/products/enginestores/Asset 9.webp",
      category: "Gas/Smoke Detectors",
      description: "Gas/Smoke Detectors",
      whatsappMessage:
        "Hi, I'm interested in Gas/Smoke Detectors. Please provide more information and pricing.",
    },
    {
      id: 10,
      name: "Magnetic Drilling Machine",
      image: "/products/enginestores/Asset 10.webp",
      category: "Drilling Machine",
      description: "Magnetic Drilling Machine",
      whatsappMessage:
        "Hi, I'm interested in Magnetic Drilling Machine. Please provide more information and pricing.",
    },
    {
      id: 11,
      name: "Adhesives",
      image: "/products/enginestores/Asset 11.webp",
      category: "Adhesives",
      description: "Adhesives",
      whatsappMessage:
        "Hi, I'm interested in Adhesives. Please provide more information and pricing.",
    },
    {
      id: 12,
      name: "CRC",
      image: "/products/enginestores/Asset 12.webp",
      category: "CRC",
      description: "CRC",
      whatsappMessage:
        "Hi, I'm interested in CRC. Please provide more information and pricing.",
    },
    {
      id: 13,
      name: "Explossion Proof Hand Lamp",
      image: "/products/enginestores/Asset 13.webp",
      category: "Explossion Proof Hand Lamp",
      description: "Explossion Proof Hand Lamp",
      whatsappMessage:
        "Hi, I'm interested in Explossion Proof Hand Lamp. Please provide more information and pricing.",
    },
    {
      id: 14,
      name: "Bearing Puller",
      image: "/products/enginestores/Asset 14.webp",
      category: "Bearing Puller",
      description: "Bearing Puller",
      whatsappMessage:
        "Hi, I'm interested in Bearing Puller. Please provide more information and pricing.",
    },
    {
      id: 15,
      name: "Emery Tape",
      image: "/products/enginestores/Asset 15.webp",
      category: "Emery Tape",
      description: "Emery Tape",
      whatsappMessage:
        "Hi, I'm interested in Emery Tape. Please provide more information and pricing.",
    },
    {
      id: 16,
      name: "Diaphragm Pump",
      image: "/products/enginestores/Asset 16.webp",
      category: "Diaphragm Pump",
      description: "Diaphragm Pump",
      whatsappMessage:
        "Hi, I'm interested in Diaphragm Pump. Please provide more information and pricing.",
    },
    {
      id: 17,
      name: "Engine Mounting Systems",
      image: "/products/enginestores/Asset 17.webp",
      category: "Mounting",
      description:
        "Marine engine mounting and vibration isolation systems. Secure mounting solutions for engine stability.",
      whatsappMessage:
        "Hi, I'm interested in Engine Mounting Systems. Please provide more information and pricing.",
    },
    {
      id: 18,
      name: "Engine Exhaust Systems",
      image: "/products/enginestores/Asset 18.webp",
      category: "Exhaust",
      description:
        "Complete engine exhaust systems for marine vessels. Exhaust manifolds, silencers, and emission control.",
      whatsappMessage:
        "Hi, I'm interested in Engine Exhaust Systems. Please provide more information and pricing.",
    },
    {
      id: 19,
      name: "Engine Air Systems",
      image: "/products/enginestores/Asset 19.webp",
      category: "Air Systems",
      description:
        "Engine air intake and turbocharging systems. High-performance air management for optimal combustion.",
      whatsappMessage:
        "Hi, I'm interested in Engine Air Systems. Please provide more information and pricing.",
    },
    {
      id: 20,
      name: "Engine Piping Systems",
      image: "/products/enginestores/Asset 20.webp",
      category: "Piping",
      description:
        "Marine engine piping systems and fittings. Complete piping solutions for fuel, oil, and cooling systems.",
      whatsappMessage:
        "Hi, I'm interested in Engine Piping Systems. Please provide more information and pricing.",
    },
    {
      id: 21,
      name: "Engine Valves & Fittings",
      image: "/products/enginestores/Asset 21.webp",
      category: "Valves",
      description:
        "Engine valves and fittings for marine applications. High-pressure valves for engine systems.",
      whatsappMessage:
        "Hi, I'm interested in Engine Valves & Fittings. Please provide more information and pricing.",
    },
    {
      id: 22,
      name: "Engine Pumps",
      image: "/products/enginestores/Asset 22.webp",
      category: "Pumps",
      description:
        "Marine engine pumps for various applications. Fuel pumps, oil pumps, and water circulation pumps.",
      whatsappMessage:
        "Hi, I'm interested in Engine Pumps. Please provide more information and pricing.",
    },
    {
      id: 23,
      name: "Engine Gauges & Instruments",
      image: "/products/enginestores/Asset 23.webp",
      category: "Instruments",
      description:
        "Engine gauges and monitoring instruments. Pressure, temperature, and RPM monitoring devices.",
      whatsappMessage:
        "Hi, I'm interested in Engine Gauges & Instruments. Please provide more information and pricing.",
    },
    {
      id: 24,
      name: "Engine Belts & Pulleys",
      image: "/products/enginestores/Asset 24.webp",
      category: "Belts",
      description:
        "Engine belts and pulleys for power transmission. High-strength belts for reliable operation.",
      whatsappMessage:
        "Hi, I'm interested in Engine Belts & Pulleys. Please provide more information and pricing.",
    },
    {
      id: 25,
      name: "Engine Bearings",
      image: "/products/enginestores/Asset 25.webp",
      category: "Bearings",
      description:
        "Marine engine bearings and bushings. High-quality bearings for engine components and assemblies.",
      whatsappMessage:
        "Hi, I'm interested in Engine Bearings. Please provide more information and pricing.",
    },
    {
      id: 26,
      name: "Engine Sensors",
      image: "/products/enginestores/Asset 26.webp",
      category: "Sensors",
      description:
        "Engine sensors and monitoring devices. Temperature, pressure, and position sensors for engines.",
      whatsappMessage:
        "Hi, I'm interested in Engine Sensors. Please provide more information and pricing.",
    },
    {
      id: 27,
      name: "Engine Gaskets",
      image: "/products/enginestores/Asset 27.webp",
      category: "Gaskets",
      description:
        "Complete range of engine gaskets and seals. Leak-proof sealing solutions for engine compartments.",
      whatsappMessage:
        "Hi, I'm interested in Engine Gaskets. Please provide more information and pricing.",
    },
    {
      id: 28,
      name: "Engine Fasteners",
      image: "/products/enginestores/Asset 28.webp",
      category: "Fasteners",
      description:
        "Marine engine fasteners and hardware. High-strength bolts, nuts, and washers for engine assembly.",
      whatsappMessage:
        "Hi, I'm interested in Engine Fasteners. Please provide more information and pricing.",
    },
    {
      id: 29,
      name: "Engine Hoses",
      image: "/products/enginestores/Asset 29.webp",
      category: "Hoses",
      description:
        "Engine hoses and tubing for marine applications. Flexible hoses for fuel, oil, and cooling systems.",
      whatsappMessage:
        "Hi, I'm interested in Engine Hoses. Please provide more information and pricing.",
    },
    {
      id: 30,
      name: "Engine Filters",
      image: "/products/enginestores/Asset 30.webp",
      category: "Filters",
      description:
        "Comprehensive engine filtration products. Oil filters, fuel filters, and air filters for engines.",
      whatsappMessage:
        "Hi, I'm interested in Engine Filters. Please provide more information and pricing.",
    },
    {
      id: 31,
      name: "Engine Lubricants",
      image: "/products/enginestores/Asset 31.webp",
      category: "Lubricants",
      description:
        "Marine engine lubricants and oils. High-performance lubricants for engine protection and efficiency.",
      whatsappMessage:
        "Hi, I'm interested in Engine Lubricants. Please provide more information and pricing.",
    },
    {
      id: 32,
      name: "Engine Cleaning Supplies",
      image: "/products/enginestores/Asset 32.webp",
      category: "Cleaning",
      description:
        "Engine cleaning supplies and degreasers. Professional cleaning products for engine maintenance.",
      whatsappMessage:
        "Hi, I'm interested in Engine Cleaning Supplies. Please provide more information and pricing.",
    },
    {
      id: 33,
      name: "Engine Spare Parts",
      image: "/products/enginestores/NeEeih.webp",
      category: "Spare Parts",
      description:
        "Complete range of engine spare parts. Replacement parts for various engine models and types.",
      whatsappMessage:
        "Hi, I'm interested in Engine Spare Parts. Please provide more information and pricing.",
    },
    {
      id: 34,
      name: "Engine Couplings",
      image: "/products/enginestores/Asset 34.webp",
      category: "Couplings",
      description:
        "Marine engine couplings and flexible connections. Shaft couplings and transmission components.",
      whatsappMessage:
        "Hi, I'm interested in Engine Couplings. Please provide more information and pricing.",
    },
    {
      id: 35,
      name: "Engine Alignment Tools",
      image: "/products/enginestores/Asset 35.webp",
      category: "Alignment",
      description:
        "Professional engine alignment tools and equipment. Precision tools for shaft and coupling alignment.",
      whatsappMessage:
        "Hi, I'm interested in Engine Alignment Tools. Please provide more information and pricing.",
    },
    {
      id: 36,
      name: "Engine Ventilation",
      image: "/products/enginestores/Asset 36.webp",
      category: "Ventilation",
      description:
        "Engine room ventilation systems. Air circulation and cooling systems for engine compartments.",
      whatsappMessage:
        "Hi, I'm interested in Engine Ventilation. Please provide more information and pricing.",
    },
    {
      id: 37,
      name: "Engine Insulation",
      image: "/products/enginestores/Asset 37.webp",
      category: "Insulation",
      description:
        "Engine room insulation and soundproofing materials. Thermal and acoustic insulation solutions.",
      whatsappMessage:
        "Hi, I'm interested in Engine Insulation. Please provide more information and pricing.",
    },
    {
      id: 38,
      name: "Engine Fire Protection",
      image: "/products/enginestores/Asset 38.webp",
      category: "Fire Protection",
      description:
        "Engine room fire protection systems. Automatic fire detection and suppression systems.",
      whatsappMessage:
        "Hi, I'm interested in Engine Fire Protection. Please provide more information and pricing.",
    },
  ];

  const filteredProducts = engineProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Engine Stores</h1>
          <p className="page-subtitle">
            Comprehensive Engine Room Supplies and Equipment Solutions
          </p>
        </div>

        <section className="product-gallery">
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <h2>Featured Engine Store Products</h2>
          <div className="gallery-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="gallery-item">
                <div className="product-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.description}</p>
                  <a
                    href={`https://wa.me/971505398975?text=${encodeURIComponent(product.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn"
                  >
                    Get Product
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EngineStores;
