/**
 * ASP Global Marine Trading LLC - Air Compressor Spares Page
 *
 * Comprehensive marine air compressors and spare parts solutions
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";
import { useState } from "react";

const AirCompressorSpares = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const compressorProducts = [
    {
      id: 1,
      name: "Marine Air Compressors",
      image: "/products/enginestores/Asset 40.webp",
      category: "Air Compressors",
      description:
        "High-quality marine air compressors for starting engines, pneumatic tools, and general ship service.",
      whatsappMessage:
        "Hi, I'm interested in Marine Air Compressors. Please provide more information and pricing.",
    },
    {
      id: 2,
      name: "Compressor Spare Parts",
      image: "/products/enginestores/Asset 41.webp",
      category: "Spare Parts",
      description:
        "Comprehensive air compressor spare parts including pistons, rings, valves, and gaskets.",
      whatsappMessage:
        "Hi, I'm interested in Compressor Spare Parts. Please provide more information and pricing.",
    },
    {
      id: 3,
      name: "Air Dryer Systems",
      image: "/products/enginestores/Asset 42.webp",
      category: "Air Dryers",
      description:
        "Refrigerated and desiccant air dryers for moisture-free compressed air systems.",
      whatsappMessage:
        "Hi, I'm interested in Air Dryer Systems. Please provide more information and pricing.",
    },
    {
      id: 4,
      name: "Air Receiver Tanks",
      image: "/products/enginestores/Asset 43.webp",
      category: "Receivers",
      description:
        "Marine-grade air receiver tanks with certification for compressed air storage.",
      whatsappMessage:
        "Hi, I'm interested in Air Receiver Tanks. Please provide more information and pricing.",
    },
    {
      id: 5,
      name: "Compressor Filters",
      image: "/products/enginestores/Asset 44.webp",
      category: "Filters",
      description:
        "Air intake filters, oil separators, and line filters for compressor systems.",
      whatsappMessage:
        "Hi, I'm interested in Compressor Filters. Please provide more information and pricing.",
    },
    {
      id: 6,
      name: "Pressure Switches & Controls",
      image: "/products/enginestores/NeEeih.webp",
      category: "Controls",
      description:
        "Pressure switches, regulators, and control systems for compressor automation.",
      whatsappMessage:
        "Hi, I'm interested in Pressure Switches & Controls. Please provide more information and pricing.",
    },
    {
      id: 7,
      name: "Compressor Lubricants",
      image: "/products/enginestores/Asset 40.webp",
      category: "Lubricants",
      description:
        "Specialized compressor oils and lubricants for various compressor types.",
      whatsappMessage:
        "Hi, I'm interested in Compressor Lubricants. Please provide more information and pricing.",
    },
    {
      id: 8,
      name: "Pneumatic Tools & Accessories",
      image: "/products/enginestores/Asset 41.webp",
      category: "Tools & Accessories",
      description:
        "Marine pneumatic tools, hoses, fittings, and accessories for compressed air systems.",
      whatsappMessage:
        "Hi, I'm interested in Pneumatic Tools & Accessories. Please provide more information and pricing.",
    },
  ];

  const filteredProducts = compressorProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Air Compressor Spares</h1>
          <p className="page-subtitle">
            Marine Air Compressor Solutions & Spare Parts
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
          <h2>Featured Air Compressor Products</h2>
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

export default AirCompressorSpares;
