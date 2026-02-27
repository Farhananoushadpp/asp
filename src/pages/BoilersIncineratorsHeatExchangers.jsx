/**
 * ASP Global Marine Trading LLC - Boilers, Incinerators & Heat Exchangers Page
 *
 * Comprehensive marine thermal systems and waste management solutions
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";
import { useState } from "react";
import { MessageCircle, Mail } from "lucide-react";

const BoilersIncineratorsHeatExchangers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const thermalProducts = [
    {
      id: 1,
      name: "Marine Boilers",
      image: "/products/enginestores/Asset 40.webp",
      category: "Boilers",
      description:
        "Complete marine boiler systems for steam generation and heating applications. Auxiliary and exhaust gas boilers available.",
      whatsappMessage:
        "Hi, I'm interested in Marine Boilers. Please provide more information and pricing.",
    },
    {
      id: 2,
      name: "Heat Exchangers",
      image: "/products/enginestores/Asset 41.webp",
      category: "Heat Exchangers",
      description:
        "High-efficiency heat exchangers for marine applications including plate, shell and tube types.",
      whatsappMessage:
        "Hi, I'm interested in Heat Exchangers. Please provide more information and pricing.",
    },
    {
      id: 3,
      name: "Marine Incinerators",
      image: "/products/enginestores/Asset 42.webp",
      category: "Incinerators",
      description:
        "Marine waste incinerators for sludge, oil, and solid waste disposal compliant with MARPOL regulations.",
      whatsappMessage:
        "Hi, I'm interested in Marine Incinerators. Please provide more information and pricing.",
    },
    {
      id: 4,
      name: "Thermal Oil Heaters",
      image: "/products/enginestores/Asset 43.webp",
      category: "Thermal Systems",
      description:
        "Thermal oil heating systems for process heating and thermal fluid applications on vessels.",
      whatsappMessage:
        "Hi, I'm interested in Thermal Oil Heaters. Please provide more information and pricing.",
    },
    {
      id: 5,
      name: "Exhaust Gas Economizers",
      image: "/products/enginestores/Asset 44.webp",
      category: "Economizers",
      description:
        "Waste heat recovery economizers to improve vessel fuel efficiency and reduce emissions.",
      whatsappMessage:
        "Hi, I'm interested in Exhaust Gas Economizers. Please provide more information and pricing.",
    },
    {
      id: 6,
      name: "Boiler Burners",
      image: "/products/enginestores/NeEeih.webp",
      category: "Burners",
      description:
        "Marine boiler burners for oil, gas, and dual-fuel applications with automatic control systems.",
      whatsappMessage:
        "Hi, I'm interested in Boiler Burners. Please provide more information and pricing.",
    },
    {
      id: 7,
      name: "Heat Recovery Systems",
      image: "/products/enginestores/Asset 40.webp",
      category: "Heat Recovery",
      description:
        "Comprehensive heat recovery systems for engine exhaust and process heat utilization.",
      whatsappMessage:
        "Hi, I'm interested in Heat Recovery Systems. Please provide more information and pricing.",
    },
    {
      id: 8,
      name: "Thermal Spare Parts",
      image: "/products/enginestores/Asset 41.webp",
      category: "Spare Parts",
      description:
        "Boiler and heat exchanger spare parts including tubes, plates, seals, and fittings.",
      whatsappMessage:
        "Hi, I'm interested in Thermal Spare Parts. Please provide more information and pricing.",
    },
  ];

  const filteredProducts = thermalProducts.filter(
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
            Boilers, Incinerators & Heat Exchangers
          </h1>
          <p className="page-subtitle">
            Marine Thermal Systems & Waste Management Solutions
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
          <h2>Featured Thermal System Products</h2>
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

export default BoilersIncineratorsHeatExchangers;
