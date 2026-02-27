/**
 * ASP Global Marine Trading LLC - Purifiers & Separators Page
 *
 * Comprehensive marine purifiers and separation systems
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";
import { useState } from "react";
import { MessageCircle, Mail } from "lucide-react";

const Purifiers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const purifierProducts = [
    {
      id: 1,
      name: "Fuel Oil Purifiers",
      image: "/products/enginestores/Asset 42.webp",
      category: "Fuel Purifiers",
      description:
        "High-speed centrifugal purifiers for HFO, MDO, and diesel fuel cleaning. Ensures optimal fuel quality for engines.",
      whatsappMessage:
        "Hi, I'm interested in Fuel Oil Purifiers. Please provide more information and pricing.",
    },
    {
      id: 2,
      name: "Lube Oil Purifiers",
      image: "/products/enginestores/Asset 43.webp",
      category: "Lube Purifiers",
      description:
        "Lubricating oil purifiers for engine and system oil cleaning. Extends oil life and protects machinery.",
      whatsappMessage:
        "Hi, I'm interested in Lube Oil Purifiers. Please provide more information and pricing.",
    },
    {
      id: 3,
      name: "Water Separators",
      image: "/products/enginestores/Asset 44.webp",
      category: "Separators",
      description:
        "Bilge water and wastewater separators compliant with MARPOL regulations. Efficient oil-water separation.",
      whatsappMessage:
        "Hi, I'm interested in Water Separators. Please provide more information and pricing.",
    },
    {
      id: 4,
      name: "Sludge Treatment Systems",
      image: "/products/enginestores/NeEeih.webp",
      category: "Sludge Systems",
      description:
        "Complete sludge treatment and disposal systems for vessel waste management.",
      whatsappMessage:
        "Hi, I'm interested in Sludge Treatment Systems. Please provide more information and pricing.",
    },
    {
      id: 5,
      name: "Purifier Spare Parts",
      image: "/products/enginestores/Asset 42.webp",
      category: "Spare Parts",
      description:
        "Comprehensive purifier spare parts including bowls, discs, seals, and bearings for all major brands.",
      whatsappMessage:
        "Hi, I'm interested in Purifier Spare Parts. Please provide more information and pricing.",
    },
    {
      id: 6,
      name: "Self-Cleaning Separators",
      image: "/products/enginestores/Asset 43.webp",
      category: "Self-Cleaning",
      description:
        "Automatic self-cleaning separators with PLC control for continuous operation without manual intervention.",
      whatsappMessage:
        "Hi, I'm interested in Self-Cleaning Separators. Please provide more information and pricing.",
    },
    {
      id: 7,
      name: "Filter Systems",
      image: "/products/enginestores/Asset 44.webp",
      category: "Filters",
      description:
        "Fuel and oil filter systems including automatic back-flushing filters and coalescers.",
      whatsappMessage:
        "Hi, I'm interested in Filter Systems. Please provide more information and pricing.",
    },
    {
      id: 8,
      name: "Control & Monitoring",
      image: "/products/enginestores/NeEeih.webp",
      category: "Controls",
      description:
        "Advanced control and monitoring systems for purifiers with automatic discharge and alarms.",
      whatsappMessage:
        "Hi, I'm interested in Control & Monitoring. Please provide more information and pricing.",
    },
  ];

  const filteredProducts = purifierProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Purifiers & Separators</h1>
          <p className="page-subtitle">
            Advanced Marine Purification & Separation Solutions
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
          <h2>Featured Purifier & Separator Products</h2>
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

export default Purifiers;
