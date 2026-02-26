/**
 * ASP Global Marine Trading LLC - Engine Spares 2-Stroke Page
 *
 * Comprehensive 2-Stroke engine spare parts and components
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";
import { useState } from "react";

const EngineSpares2Stroke = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const engineProducts = [
    {
      id: 1,
      name: "2-Stroke Piston Components",
      image: "/products/enginestores/Asset 1.webp",
      category: "Piston Components",
      description:
        "Complete piston assembly components for 2-stroke engines including crowns, rings, skirts, and cooling nozzles.",
      whatsappMessage:
        "Hi, I'm interested in 2-Stroke Piston Components. Please provide more information and pricing.",
    },
    {
      id: 2,
      name: "2-Stroke Cylinder System",
      image: "/products/enginestores/Asset 2.webp",
      category: "Cylinder System",
      description:
        "Comprehensive cylinder system components including liners, covers, lubricators, and cooling jackets.",
      whatsappMessage:
        "Hi, I'm interested in 2-Stroke Cylinder System. Please provide more information and pricing.",
    },
    {
      id: 3,
      name: "2-Stroke Fuel Injection",
      image: "/products/enginestores/Asset 3.webp",
      category: "Fuel Injection",
      description:
        "Precision fuel injection systems for 2-stroke engines including pumps, nozzles, and control systems.",
      whatsappMessage:
        "Hi, I'm interested in 2-Stroke Fuel Injection. Please provide more information and pricing.",
    },
    {
      id: 4,
      name: "2-Stroke Turbocharger Parts",
      image: "/products/enginestores/Asset 4.webp",
      category: "Turbocharger",
      description:
        "Turbocharger components and spares for 2-stroke engines including turbines, compressors, and bearings.",
      whatsappMessage:
        "Hi, I'm interested in 2-Stroke Turbocharger Parts. Please provide more information and pricing.",
    },
    {
      id: 5,
      name: "2-Stroke Valve Components",
      image: "/products/enginestores/Asset 5.webp",
      category: "Valve Components",
      description:
        "Complete valve train components for 2-stroke engines including exhaust valves, cages, seats, and rotators.",
      whatsappMessage:
        "Hi, I'm interested in 2-Stroke Valve Components. Please provide more information and pricing.",
    },
    {
      id: 6,
      name: "2-Stroke Bearing Components",
      image: "/products/enginestores/Asset 6.webp",
      category: "Bearings",
      description:
        "High-quality bearing components for 2-stroke engines including main bearings, crosshead bearings, and thrust bearings.",
      whatsappMessage:
        "Hi, I'm interested in 2-Stroke Bearing Components. Please provide more information and pricing.",
    },
    {
      id: 7,
      name: "2-Stroke Camshaft Components",
      image: "/products/enginestores/Asset 7.webp",
      category: "Camshaft System",
      description:
        "Complete camshaft and drive components for 2-stroke engines including cams, followers, and timing gears.",
      whatsappMessage:
        "Hi, I'm interested in 2-Stroke Camshaft Components. Please provide more information and pricing.",
    },
    {
      id: 8,
      name: "2-Stroke Shaft Components",
      image: "/products/enginestores/Asset 8.webp",
      category: "Shaft Components",
      description:
        "Critical shaft components for 2-stroke engine power transmission including crankshafts and couplings.",
      whatsappMessage:
        "Hi, I'm interested in 2-Stroke Shaft Components. Please provide more information and pricing.",
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
          <h1 className="page-title">Engine Spares - 2-Stroke</h1>
          <p className="page-subtitle">
            Comprehensive 2-Stroke Marine Engine Spare Parts Solutions
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
          <h2>Featured 2-Stroke Engine Products</h2>
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

export default EngineSpares2Stroke;
