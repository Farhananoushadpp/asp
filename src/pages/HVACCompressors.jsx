/**
 * ASP Global Marine Trading LLC - HVAC Compressors & Spares Page
 *
 * Comprehensive marine HVAC systems, compressors and spare parts
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";
import { useState } from "react";

const HVACCompressors = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const hvacProducts = [
    {
      id: 1,
      name: "Marine HVAC Compressors",
      image: "/products/enginestores/Asset 25.webp",
      category: "HVAC Compressors",
      description:
        "High-quality marine HVAC compressors for vessel climate control systems. Reliable cooling and heating solutions.",
      whatsappMessage:
        "Hi, I'm interested in Marine HVAC Compressors. Please provide more information and pricing.",
    },
    {
      id: 2,
      name: "Refrigeration Compressors",
      image: "/products/enginestores/Asset 26.webp",
      category: "Refrigeration",
      description:
        "Industrial refrigeration compressors for marine cold storage and freezer applications.",
      whatsappMessage:
        "Hi, I'm interested in Refrigeration Compressors. Please provide more information and pricing.",
    },
    {
      id: 3,
      name: "Air Conditioning Units",
      image: "/products/enginestores/Asset 27.webp",
      category: "Air Conditioning",
      description:
        "Complete marine air conditioning units for cabins, control rooms, and cargo areas.",
      whatsappMessage:
        "Hi, I'm interested in Air Conditioning Units. Please provide more information and pricing.",
    },
    {
      id: 4,
      name: "Ventilation Systems",
      image: "/products/enginestores/Asset 28.webp",
      category: "Ventilation",
      description:
        "Marine ventilation systems for engine rooms, cargo holds, and living quarters.",
      whatsappMessage:
        "Hi, I'm interested in Ventilation Systems. Please provide more information and pricing.",
    },
    {
      id: 5,
      name: "Heat Exchangers",
      image: "/products/enginestores/Asset 29.webp",
      category: "Heat Exchangers",
      description:
        "Efficient heat exchangers for HVAC systems, engine cooling, and process heating.",
      whatsappMessage:
        "Hi, I'm interested in Heat Exchangers. Please provide more information and pricing.",
    },
    {
      id: 6,
      name: "Condenser Units",
      image: "/products/enginestores/Asset 30.webp",
      category: "Condensers",
      description:
        "Marine-grade condenser units for air conditioning and refrigeration systems.",
      whatsappMessage:
        "Hi, I'm interested in Condenser Units. Please provide more information and pricing.",
    },
    {
      id: 7,
      name: "Evaporator Coils",
      image: "/products/enginestores/Asset 31.webp",
      category: "Evaporators",
      description:
        "High-efficiency evaporator coils for marine HVAC and refrigeration applications.",
      whatsappMessage:
        "Hi, I'm interested in Evaporator Coils. Please provide more information and pricing.",
    },
    {
      id: 8,
      name: "HVAC Controls & Thermostats",
      image: "/products/enginestores/Asset 32.webp",
      category: "Controls",
      description:
        "Advanced HVAC control systems and thermostats for marine climate management.",
      whatsappMessage:
        "Hi, I'm interested in HVAC Controls & Thermostats. Please provide more information and pricing.",
    },
  ];

  const filteredProducts = hvacProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">HVAC Compressors & Spares</h1>
          <p className="page-subtitle">
            Marine HVAC Solutions & Climate Control Equipment
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
          <h2>Featured HVAC & Compressor Products</h2>
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

export default HVACCompressors;
