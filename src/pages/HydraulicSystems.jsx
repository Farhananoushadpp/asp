/**
 * ASP Global Marine Trading LLC - Hydraulic Systems & Components Page
 *
 * Comprehensive marine hydraulic systems and components solutions
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";
import { useState } from "react";
import { MessageCircle, Mail } from "lucide-react";

const HydraulicSystems = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const hydraulicProducts = [
    {
      id: 1,
      name: "Hydraulic Pumps & Motors",
      image: "/products/enginestores/Asset 17.webp",
      category: "Pumps & Motors",
      description:
        "High-performance hydraulic pumps and motors for steering gear, deck machinery, and cargo equipment.",
      whatsappMessage:
        "Hi, I'm interested in Hydraulic Pumps & Motors. Please provide more information and pricing.",
    },
    {
      id: 2,
      name: "Hydraulic Cylinders",
      image: "/products/enginestores/Asset 18.webp",
      category: "Cylinders",
      description:
        "Marine-grade hydraulic cylinders for hatches, cranes, ramps, and steering systems.",
      whatsappMessage:
        "Hi, I'm interested in Hydraulic Cylinders. Please provide more information and pricing.",
    },
    {
      id: 3,
      name: "Hydraulic Valves & Controls",
      image: "/products/enginestores/Asset 19.webp",
      category: "Valves & Controls",
      description:
        "Directional control valves, pressure valves, and flow control valves for hydraulic systems.",
      whatsappMessage:
        "Hi, I'm interested in Hydraulic Valves & Controls. Please provide more information and pricing.",
    },
    {
      id: 4,
      name: "Hydraulic Hoses & Fittings",
      image: "/products/enginestores/Asset 20.webp",
      category: "Hoses & Fittings",
      description:
        "High-pressure hydraulic hoses, tubes, and fittings for marine hydraulic applications.",
      whatsappMessage:
        "Hi, I'm interested in Hydraulic Hoses & Fittings. Please provide more information and pricing.",
    },
    {
      id: 5,
      name: "Hydraulic Power Units",
      image: "/products/enginestores/Asset 21.webp",
      category: "Power Units",
      description:
        "Complete hydraulic power units with pumps, motors, reservoirs, and control systems.",
      whatsappMessage:
        "Hi, I'm interested in Hydraulic Power Units. Please provide more information and pricing.",
    },
    {
      id: 6,
      name: "Hydraulic Filters",
      image: "/products/enginestores/Asset 22.webp",
      category: "Filters",
      description:
        "Hydraulic oil filters, suction strainers, and filter elements for system protection.",
      whatsappMessage:
        "Hi, I'm interested in Hydraulic Filters. Please provide more information and pricing.",
    },
    {
      id: 7,
      name: "Hydraulic Accumulators",
      image: "/products/enginestores/Asset 23.webp",
      category: "Accumulators",
      description:
        "Bladder and piston accumulators for energy storage and pressure stabilization.",
      whatsappMessage:
        "Hi, I'm interested in Hydraulic Accumulators. Please provide more information and pricing.",
    },
    {
      id: 8,
      name: "Hydraulic Oil & Fluids",
      image: "/products/enginestores/Asset 24.webp",
      category: "Fluids",
      description:
        "Marine hydraulic oils and fluids with anti-wear and corrosion protection properties.",
      whatsappMessage:
        "Hi, I'm interested in Hydraulic Oil & Fluids. Please provide more information and pricing.",
    },
  ];

  const filteredProducts = hydraulicProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Hydraulic Systems & Components</h1>
          <p className="page-subtitle">
            Marine Hydraulic Solutions & Power Systems
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
          <h2>Featured Hydraulic Products</h2>
          <div className="gallery-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="gallery-item">
                <div className="product-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.description}</p>
                  <div className="product-buttons">
                    <a
                      href={`https://wa.me/971505398975?text=${encodeURIComponent(product.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-btn"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle />
                    </a>
                    <a
                      href={`mailto:info@aspglobalmarine.com?subject=${encodeURIComponent(product.emailMessage ? product.emailMessage.split("\n")[0].replace("Subject: ", "") : "Inquiry about " + product.name)}&body=${encodeURIComponent(product.emailMessage ? product.emailMessage.split("\n").slice(2).join("\n").trim() : "Dear ASP Global Marine Trading,\n\nI'm interested in " + product.name + ". Please provide more information and pricing.\n\nThank you.")}`}
                      className="email-btn"
                      aria-label="Email"
                    >
                      <Mail />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HydraulicSystems;
