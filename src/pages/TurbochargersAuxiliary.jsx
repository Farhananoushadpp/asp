/**
 * ASP Global Marine Trading LLC - Turbochargers & Auxiliary Engine Products Page
 *
 * Comprehensive turbocharger and auxiliary engine solutions
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";
import { useState } from "react";

const TurbochargersAuxiliary = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const turboProducts = [
    {
      id: 1,
      name: "ABB Turbocharger VTR Series",
      image: "/products/enginestores/Asset 17.webp",
      category: "Turbocharger Units",
      description:
        "High-performance ABB VTR series turbochargers for marine engines. Complete units with optimized efficiency.",
      whatsappMessage:
        "Hi, I'm interested in ABB Turbocharger VTR Series. Please provide more information and pricing.",
    },
    {
      id: 2,
      name: "Mitsubishi MET Turbocharger",
      image: "/products/enginestores/Asset 18.webp",
      category: "Turbocharger Units",
      description:
        "Mitsubishi MET series turbochargers designed for medium-speed diesel engines with high efficiency.",
      whatsappMessage:
        "Hi, I'm interested in Mitsubishi MET Turbocharger. Please provide more information and pricing.",
    },
    {
      id: 3,
      name: "KBB Turbocharger Components",
      image: "/products/enginestores/Asset 19.webp",
      category: "Turbocharger Parts",
      description:
        "KBB turbocharger spare parts including rotors, bearings, and nozzle rings for maintenance.",
      whatsappMessage:
        "Hi, I'm interested in KBB Turbocharger Components. Please provide more information and pricing.",
    },
    {
      id: 4,
      name: "Turbocharger Repair Kits",
      image: "/products/enginestores/Asset 20.webp",
      category: "Repair Kits",
      description:
        "Complete turbocharger repair kits with all necessary components for overhaul and maintenance.",
      whatsappMessage:
        "Hi, I'm interested in Turbocharger Repair Kits. Please provide more information and pricing.",
    },
    {
      id: 5,
      name: "Auxiliary Engine Parts",
      image: "/products/enginestores/Asset 21.webp",
      category: "Auxiliary Engines",
      description:
        "Spare parts for auxiliary engines including generators and pump engines from major manufacturers.",
      whatsappMessage:
        "Hi, I'm interested in Auxiliary Engine Parts. Please provide more information and pricing.",
    },
    {
      id: 6,
      name: "Turbocharger Bearing Assemblies",
      image: "/products/enginestores/Asset 22.webp",
      category: "Bearings",
      description:
        "High-quality bearing assemblies for turbochargers ensuring reliable high-speed operation.",
      whatsappMessage:
        "Hi, I'm interested in Turbocharger Bearing Assemblies. Please provide more information and pricing.",
    },
    {
      id: 7,
      name: "Charge Air Coolers",
      image: "/products/enginestores/Asset 23.webp",
      category: "Cooling Systems",
      description:
        "Efficient charge air coolers for turbocharged engines to optimize combustion and performance.",
      whatsappMessage:
        "Hi, I'm interested in Charge Air Coolers. Please provide more information and pricing.",
    },
    {
      id: 8,
      name: "Turbocharger Control Systems",
      image: "/products/enginestores/Asset 24.webp",
      category: "Control Systems",
      description:
        "Electronic control systems for turbochargers optimizing performance and fuel efficiency.",
      whatsappMessage:
        "Hi, I'm interested in Turbocharger Control Systems. Please provide more information and pricing.",
    },
  ];

  const filteredProducts = turboProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">
            Turbochargers & Auxiliary Engine Products
          </h1>
          <p className="page-subtitle">
            High-Performance Turbocharging Solutions & Auxiliary Engine
            Components
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
          <h2>Featured Turbocharger & Auxiliary Products</h2>
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

export default TurbochargersAuxiliary;
