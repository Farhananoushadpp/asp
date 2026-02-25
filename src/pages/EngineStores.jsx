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
      name: "Lube Oil",
      image: "/products/enginestores/Asset 1.webp",
      category: "Lube Oil",
      description:
        "Professional marine engine tools for maintenance and repair operations. High-quality precision tools for engine room tasks.",
      whatsappMessage:
        "Hi, I'm interested in Marine Engine Tools. Please provide more information and pricing.",
    },
    {
      id: 2,
      name: "Engine Maintenance Equipment",
      image: "/products/enginestores/Asset 2.webp",
      category: "Maintenance",
      description:
        "Comprehensive engine maintenance equipment for vessel operations. Essential tools for engine upkeep and servicing.",
      whatsappMessage:
        "Hi, I'm interested in Engine Maintenance Equipment. Please provide more information and pricing.",
    },
    {
      id: 3,
      name: "Engine Room Supplies",
      image: "/products/enginestores/Asset 3.webp",
      category: "Engine Supplies",
      description:
        "Complete engine room supplies and consumables. Quality materials for engine room operations and maintenance.",
      whatsappMessage:
        "Hi, I'm interested in Engine Room Supplies. Please provide more information and pricing.",
    },
    {
      id: 4,
      name: "Marine Engine Components",
      image: "/products/enginestores/Asset 4.webp",
      category: "Engine Components",
      description:
        "High-quality marine engine components for various engine types. Reliable parts for optimal engine performance.",
      whatsappMessage:
        "Hi, I'm interested in Marine Engine Components. Please provide more information and pricing.",
    },
    {
      id: 5,
      name: "Engine Filtration Systems",
      image: "/products/enginestores/Asset 5.webp",
      category: "Filtration",
      description:
        "Advanced engine filtration systems for clean operation. High-efficiency filters for fuel, oil, and air systems.",
      whatsappMessage:
        "Hi, I'm interested in Engine Filtration Systems. Please provide more information and pricing.",
    },
    {
      id: 6,
      name: "Engine Lubrication Equipment",
      image: "/products/enginestores/Asset 6.webp",
      category: "Lubrication",
      description:
        "Professional engine lubrication equipment for marine vessels. Complete systems for oil management and distribution.",
      whatsappMessage:
        "Hi, I'm interested in Engine Lubrication Equipment. Please provide more information and pricing.",
    },
    {
      id: 7,
      name: "Engine Cooling Systems",
      image: "/products/enginestores/Asset 7.webp",
      category: "Cooling Systems",
      description:
        "Marine engine cooling systems for temperature management. Efficient heat exchangers and cooling components.",
      whatsappMessage:
        "Hi, I'm interested in Engine Cooling Systems. Please provide more information and pricing.",
    },
    {
      id: 8,
      name: "Engine Fuel Systems",
      image: "/products/enginestores/Asset 8.webp",
      category: "Fuel Systems",
      description:
        "Complete engine fuel systems for marine applications. Fuel injection, pumps, and filtration components.",
      whatsappMessage:
        "Hi, I'm interested in Engine Fuel Systems. Please provide more information and pricing.",
    },
    {
      id: 9,
      name: "Engine Electrical Components",
      image: "/products/enginestores/Asset 9.webp",
      category: "Electrical",
      description:
        "Marine engine electrical components and systems. Alternators, starters, and electrical control systems.",
      whatsappMessage:
        "Hi, I'm interested in Engine Electrical Components. Please provide more information and pricing.",
    },
    {
      id: 10,
      name: "Engine Monitoring Equipment",
      image: "/products/enginestores/Asset 10.webp",
      category: "Monitoring",
      description:
        "Advanced engine monitoring and control equipment. Real-time monitoring systems for engine performance.",
      whatsappMessage:
        "Hi, I'm interested in Engine Monitoring Equipment. Please provide more information and pricing.",
    },
    {
      id: 11,
      name: "Engine Sealing Solutions",
      image: "/products/enginestores/Asset 11.webp",
      category: "Sealing",
      description:
        "High-quality engine sealing solutions and gaskets. Leak-proof sealing solutions for engine compartments.",
      whatsappMessage:
        "Hi, I'm interested in Engine Sealing Solutions. Please provide more information and pricing.",
    },
    {
      id: 12,
      name: "Engine Safety Equipment",
      image: "/products/enginestores/Asset 12.webp",
      category: "Safety Equipment",
      description:
        "Marine engine safety equipment and protection systems. Emergency shutdown and safety monitoring devices.",
      whatsappMessage:
        "Hi, I'm interested in Engine Safety Equipment. Please provide more information and pricing.",
    },
    {
      id: 13,
      name: "Engine Control Systems",
      image: "/products/enginestores/Asset 13.webp",
      category: "Control Systems",
      description:
        "Advanced engine control and automation systems. Digital controls for efficient engine management.",
      whatsappMessage:
        "Hi, I'm interested in Engine Control Systems. Please provide more information and pricing.",
    },
    {
      id: 14,
      name: "Engine Consumables",
      image: "/products/enginestores/Asset 14.webp",
      category: "Consumables",
      description:
        "Engine consumables and supplies for daily operations. Oils, lubricants, and maintenance materials.",
      whatsappMessage:
        "Hi, I'm interested in Engine Consumables. Please provide more information and pricing.",
    },
    {
      id: 15,
      name: "Engine Repair Kits",
      image: "/products/enginestores/Asset 15.webp",
      category: "Repair Kits",
      description:
        "Comprehensive engine repair kits for maintenance tasks. Complete sets for various repair operations.",
      whatsappMessage:
        "Hi, I'm interested in Engine Repair Kits. Please provide more information and pricing.",
    },
    {
      id: 16,
      name: "Engine Testing Equipment",
      image: "/products/enginestores/Asset 16.webp",
      category: "Testing",
      description:
        "Professional engine testing and diagnostic equipment. Tools for performance analysis and troubleshooting.",
      whatsappMessage:
        "Hi, I'm interested in Engine Testing Equipment. Please provide more information and pricing.",
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
                  <span className="product-category">{product.category}</span>
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
