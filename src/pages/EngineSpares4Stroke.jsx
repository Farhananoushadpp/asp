/**
 * ASP Global Marine Trading LLC - Engine Spares 4-Stroke Page
 *
 * Comprehensive 4-Stroke engine spare parts and components
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";
import { useState } from "react";
import { MessageCircle, Mail } from "lucide-react";

const EngineSpares4Stroke = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const engineProducts = [
    {
      id: 1,
      name: "4-Stroke Piston Assemblies",
      image: "/products/enginestores/Asset 9.webp",
      category: "Piston System",
      description:
        "Complete piston assemblies for 4-stroke engines including crowns, rings, pins, and connecting rods.",
      whatsappMessage:
        "Hi, I'm interested in 4-Stroke Piston Assemblies. Please provide more information and pricing.",
    },
    {
      id: 2,
      name: "4-Stroke Cylinder Head Components",
      image: "/products/enginestores/Asset 10.webp",
      category: "Cylinder Head",
      description:
        "Cylinder heads, gaskets, valve seats, and guides for 4-stroke marine engines.",
      whatsappMessage:
        "Hi, I'm interested in 4-Stroke Cylinder Head Components. Please provide more information and pricing.",
    },
    {
      id: 3,
      name: "4-Stroke Fuel System Parts",
      image: "/products/enginestores/Asset 11.webp",
      category: "Fuel System",
      description:
        "Fuel injection components, pumps, and filters for 4-stroke engines.",
      whatsappMessage:
        "Hi, I'm interested in 4-Stroke Fuel System Parts. Please provide more information and pricing.",
    },
    {
      id: 4,
      name: "4-Stroke Cooling System",
      image: "/products/enginestores/Asset 12.webp",
      category: "Cooling System",
      description:
        "Heat exchangers, cooling jackets, and water pumps for 4-stroke engine cooling.",
      whatsappMessage:
        "Hi, I'm interested in 4-Stroke Cooling System. Please provide more information and pricing.",
    },
    {
      id: 5,
      name: "4-Stroke Lubrication Components",
      image: "/products/enginestores/Asset 13.webp",
      category: "Lubrication",
      description:
        "Oil pumps, filters, and lubrication system components for 4-stroke engines.",
      whatsappMessage:
        "Hi, I'm interested in 4-Stroke Lubrication Components. Please provide more information and pricing.",
    },
    {
      id: 6,
      name: "4-Stroke Valve Train Parts",
      image: "/products/enginestores/Asset 14.webp",
      category: "Valve Train",
      description:
        "Valves, springs, retainers, and camshaft components for 4-stroke engines.",
      whatsappMessage:
        "Hi, I'm interested in 4-Stroke Valve Train Parts. Please provide more information and pricing.",
    },
    {
      id: 7,
      name: "4-Stroke Bearing Sets",
      image: "/products/enginestores/Asset 15.webp",
      category: "Bearings",
      description:
        "Main bearings, rod bearings, and thrust washers for 4-stroke marine engines.",
      whatsappMessage:
        "Hi, I'm interested in 4-Stroke Bearing Sets. Please provide more information and pricing.",
    },
    {
      id: 8,
      name: "4-Stroke Gasket Kits",
      image: "/products/enginestores/Asset 16.webp",
      category: "Gaskets",
      description:
        "Complete gasket sets including head gaskets, manifold gaskets, and seal kits.",
      whatsappMessage:
        "Hi, I'm interested in 4-Stroke Gasket Kits. Please provide more information and pricing.",
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
          <h1 className="page-title">Engine Spares - 4-Stroke</h1>
          <p className="page-subtitle">
            Comprehensive 4-Stroke Marine Engine Spare Parts Solutions
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
          <h2>Featured 4-Stroke Engine Products</h2>
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

export default EngineSpares4Stroke;
