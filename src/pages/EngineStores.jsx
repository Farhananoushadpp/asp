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
      emailMessage:
        "Subject: Inquiry about High Temp. Gaskets\n\nDear ASP Global Marine Trading,\n\nI'm interested in High Temp. Gaskets. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 2,
      name: "Pipe Bender",
      image: "/products/enginestores/Asset 2.webp",
      category: "Pipe Bender",
      description: "Pipe Bender",
      whatsappMessage:
        "Hi, I'm interested in Pipe Bender. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Pipe Bender\n\nDear ASP Global Marine Trading,\n\nI'm interested in Pipe Bender. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 3,
      name: "Cargo Sling Bag",
      image: "/products/enginestores/Asset 3.webp",
      category: "Cargo Sling Bag",
      description: "Cargo Sling Bag",
      whatsappMessage:
        "Hi, I'm interested in Cargo Sling Bag. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Cargo Sling Bag\n\nDear ASP Global Marine Trading,\n\nI'm interested in Cargo Sling Bag. Please provide more information and pricing.\n\nThank you.",
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
      emailMessage:
        "Subject: Inquiry about Submersible Pumps\n\nDear ASP Global Marine Trading,\n\nI'm interested in Submersible Pumps. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 5,
      name: "Red Silicon",
      image: "/products/enginestores/Asset 5.webp",
      category: "Red Silicon",
      description: "Red Silicon",
      whatsappMessage:
        "Hi, I'm interested in Red Silicon. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Red Silicon\n\nDear ASP Global Marine Trading,\n\nI'm interested in Red Silicon. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 6,
      name: "Rust Removers",
      image: "/products/enginestores/Asset 6.webp",
      category: "Rust Removers",
      description: "Rust Removers",
      whatsappMessage:
        "Hi, I'm interested in Rust Removers. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Rust Removers\n\nDear ASP Global Marine Trading,\n\nI'm interested in Rust Removers. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 7,
      name: "Insulation Test Kit",
      image: "/products/enginestores/Asset 7.webp",
      category: "Insulation Test Kit",
      description: "Insulation Test Kit",
      whatsappMessage:
        "Hi, I'm interested in Insulation Test Kit. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Insulation Test Kit\n\nDear ASP Global Marine Trading,\n\nI'm interested in Insulation Test Kit. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 8,
      name: "Clamp Meter",
      image: "/products/enginestores/Asset 8.webp",
      category: "Clamp Meter",
      description: "Clamp Meter",
      whatsappMessage:
        "Hi, I'm interested in Clamp Meter. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Clamp Meter\n\nDear ASP Global Marine Trading,\n\nI'm interested in Clamp Meter. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 9,
      name: "Gas/Smoke Detectors",
      image: "/products/enginestores/Asset 9.webp",
      category: "Gas/Smoke Detectors",
      description: "Gas/Smoke Detectors",
      whatsappMessage:
        "Hi, I'm interested in Gas/Smoke Detectors. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Gas/Smoke Detectors\n\nDear ASP Global Marine Trading,\n\nI'm interested in Gas/Smoke Detectors. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 10,
      name: "Magnetic Drilling Machine",
      image: "/products/enginestores/Asset 10.webp",
      category: "Drilling Machine",
      description: "Magnetic Drilling Machine",
      whatsappMessage:
        "Hi, I'm interested in Magnetic Drilling Machine. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Magnetic Drilling Machine\n\nDear ASP Global Marine Trading,\n\nI'm interested in Magnetic Drilling Machine. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 11,
      name: "Adhesives",
      image: "/products/enginestores/Asset 11.webp",
      category: "Adhesives",
      description: "Adhesives",
      whatsappMessage:
        "Hi, I'm interested in Adhesives. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Adhesives\n\nDear ASP Global Marine Trading,\n\nI'm interested in Adhesives. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 12,
      name: "CRC",
      image: "/products/enginestores/Asset 12.webp",
      category: "CRC",
      description: "CRC",
      whatsappMessage:
        "Hi, I'm interested in CRC. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about CRC\n\nDear ASP Global Marine Trading,\n\nI'm interested in CRC. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 13,
      name: "Explossion Proof Hand Lamp",
      image: "/products/enginestores/Asset 13.webp",
      category: "Explossion Proof Hand Lamp",
      description: "Explossion Proof Hand Lamp",
      whatsappMessage:
        "Hi, I'm interested in Explossion Proof Hand Lamp. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Explossion Proof Hand Lamp\n\nDear ASP Global Marine Trading,\n\nI'm interested in Explossion Proof Hand Lamp. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 14,
      name: "Bearing Puller",
      image: "/products/enginestores/Asset 14.webp",
      category: "Bearing Puller",
      description: "Bearing Puller",
      whatsappMessage:
        "Hi, I'm interested in Bearing Puller. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Bearing Puller\n\nDear ASP Global Marine Trading,\n\nI'm interested in Bearing Puller. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 15,
      name: "Emery Tape",
      image: "/products/enginestores/Asset 15.webp",
      category: "Emery Tape",
      description: "Emery Tape",
      whatsappMessage:
        "Hi, I'm interested in Emery Tape. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Emery Tape\n\nDear ASP Global Marine Trading,\n\nI'm interested in Emery Tape. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 16,
      name: "Diaphragm Pump",
      image: "/products/enginestores/Asset 16.webp",
      category: "Diaphragm Pump",
      description: "Diaphragm Pump",
      whatsappMessage:
        "Hi, I'm interested in Diaphragm Pump. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Diaphragm Pump\n\nDear ASP Global Marine Trading,\n\nI'm interested in Diaphragm Pump. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 17,
      name: "Mechanical Seal",
      image: "/products/enginestores/Asset 17.webp",
      category: "Mechanical Seal",
      description: "Mechanical Seal",
      whatsappMessage:
        "Hi, I'm interested in Mechanical Seal. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Mechanical Seal\n\nDear ASP Global Marine Trading,\n\nI'm interested in Mechanical Seal. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 18,
      name: "O Rings",
      image: "/products/enginestores/Asset 18.webp",
      category: "O Rings",
      description: "O Rings",
      whatsappMessage:
        "Hi, I'm interested in O Rings. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about O Rings\n\nDear ASP Global Marine Trading,\n\nI'm interested in O Rings. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 19,
      name: "Gland Packing",
      image: "/products/enginestores/Asset 19.webp",
      category: "Gland Packing",
      description: "Gland Packing.",
      whatsappMessage:
        "Hi, I'm interested in Gland Packing. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Gland Packing\n\nDear ASP Global Marine Trading,\n\nI'm interested in Gland Packing. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 20,
      name: "Chain Block",
      image: "/products/enginestores/Asset 20.webp",
      category: "Chain Block",
      description: "Chain Block.",
      whatsappMessage:
        "Hi, I'm interested in Chain Block. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Chain Block\n\nDear ASP Global Marine Trading,\n\nI'm interested in Chain Block. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 21,
      name: "Vacuum Pump",
      image: "/products/enginestores/Asset 21.webp",
      category: "Vacuum Pump",
      description: "Vacuum Pump",
      whatsappMessage:
        "Hi, I'm interested in Vacuum Pump. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Vacuum Pump\n\nDear ASP Global Marine Trading,\n\nI'm interested in Vacuum Pump. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 22,
      name: "RHIB-Boat Repair Kit",
      image: "/products/enginestores/Asset 22.webp",
      category: "RHIB-Boat Repair Kit",
      description: "RHIB-Boat Repair Kit",
      whatsappMessage:
        "Hi, I'm interested in RHIB-Boat Repair Kit. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about RHIB-Boat Repair Kit\n\nDear ASP Global Marine Trading,\n\nI'm interested in RHIB-Boat Repair Kit. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 23,
      name: "Bearings",
      image: "/products/enginestores/Asset 23.webp",
      category: "Bearings",
      description:
        "Engine gauges and monitoring instruments. Pressure, temperature, and RPM monitoring devices.",
      whatsappMessage:
        "Hi, I'm interested in Bearings. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Bearings\n\nDear ASP Global Marine Trading,\n\nI'm interested in Bearings. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 24,
      name: "A/C Split & Tower",
      image: "/products/enginestores/Asset 24.webp",
      category: "A/C Split & Tower",
      description: "A/C Split & Tower",
      whatsappMessage:
        "Hi, I'm interested in A/C Split & Tower. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about A/C Split & Tower\n\nDear ASP Global Marine Trading,\n\nI'm interested in A/C Split & Tower. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 25,
      name: "Water Filters",
      image: "/products/enginestores/Asset 25.webp",
      category: "Water Filters",
      description: "Water Filters",
      whatsappMessage:
        "Hi, I'm interested in Water Filters. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Water Filters\n\nDear ASP Global Marine Trading,\n\nI'm interested in Water Filters. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 26,
      name: "Switches",
      image: "/products/enginestores/Asset 26.webp",
      category: "Switches",
      description: "Switches",
      whatsappMessage:
        "Hi, I'm interested in Switches. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Switches\n\nDear ASP Global Marine Trading,\n\nI'm interested in Switches. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 27,
      name: "Thermo Meters",
      image: "/products/enginestores/Asset 27.webp",
      category: "Thermo Meters",
      description: "Thermo Meters",
      whatsappMessage:
        "Hi, I'm interested in Thermo Meters. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Thermo Meters\n\nDear ASP Global Marine Trading,\n\nI'm interested in Thermo Meters. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 28,
      name: "Coolants",
      image: "/products/enginestores/Asset 28.webp",
      category: "Coolants",
      description: "Coolants",
      whatsappMessage:
        "Hi, I'm interested in Coolants. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Coolants\n\nDear ASP Global Marine Trading,\n\nI'm interested in Coolants. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 29,
      name: "Battery/Charger",
      image: "/products/enginestores/Asset 29.webp",
      category: "Battery/Charger",
      description: "Battery/Charger",
      whatsappMessage:
        "Hi, I'm interested in Battery/Charger. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Battery/Charger\n\nDear ASP Global Marine Trading,\n\nI'm interested in Battery/Charger. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 30,
      name: "Transformers",
      image: "/products/enginestores/Asset 30.webp",
      category: "Transformers",
      description: "Transformers",
      whatsappMessage:
        "Hi, I'm interested in Transformers. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Transformers\n\nDear ASP Global Marine Trading,\n\nI'm interested in Transformers. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 31,
      name: "Flood / Tube Lights",
      image: "/products/enginestores/Asset 31.webp",
      category: "Flood / Tube Lights",
      description: "Flood / Tube Lights",
      whatsappMessage:
        "Hi, I'm interested in Flood / Tube Lights. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Flood / Tube Lights\n\nDear ASP Global Marine Trading,\n\nI'm interested in Flood / Tube Lights. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 32,
      name: "Junction Box",
      image: "/products/enginestores/Asset 32.webp",
      category: "Junction Box",
      description: "Junction Box",
      whatsappMessage:
        "Hi, I'm interested in Junction Box. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Junction Box\n\nDear ASP Global Marine Trading,\n\nI'm interested in Junction Box. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 33,
      name: "Carbon Brushes",
      image: "/products/enginestores/NeEeih.webp",
      category: "Carbon Brushes",
      description: "Carbon Brushes",
      whatsappMessage:
        "Hi, I'm interested in Carbon Brushes. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Carbon Brushes\n\nDear ASP Global Marine Trading,\n\nI'm interested in Carbon Brushes. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 34,
      name: "Relays",
      image: "/products/enginestores/Asset 34.webp",
      category: "Relays",
      description: "Relays",
      whatsappMessage:
        "Hi, I'm interested in Relays. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Relays\n\nDear ASP Global Marine Trading,\n\nI'm interested in Relays. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 35,
      name: "Blower",
      image: "/products/enginestores/Asset 35.webp",
      category: "Blower",
      description: "Blower",
      whatsappMessage:
        "Hi, I'm interested in Blower. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Blower\n\nDear ASP Global Marine Trading,\n\nI'm interested in Blower. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 36,
      name: "Engine Log Book",
      image: "/products/enginestores/Asset 36.webp",
      category: "Log Book",
      description:
        "Engine room log book. Record-keeping and documentation for engine operations.",
      whatsappMessage:
        "Hi, I'm interested in Engine Log Book. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Engine Log Book\n\nDear ASP Global Marine Trading,\n\nI'm interested in Engine Log Book. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 37,
      name: "Refregerant",
      image: "/products/enginestores/Asset 37.webp",
      category: "Refregerant",
      description: "Refregerant",
      whatsappMessage:
        "Hi, I'm interested in Refregerant. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Refregerant\n\nDear ASP Global Marine Trading,\n\nI'm interested in Refregerant. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 38,
      name: "Welding Consumables",
      image: "/products/enginestores/Asset 38.webp",
      category: "Welding Consumables",
      description: "Welding Consumables",
      whatsappMessage:
        "Hi, I'm interested in Welding Consumables. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Welding Consumables\n\nDear ASP Global Marine Trading,\n\nI'm interested in Welding Consumables. Please provide more information and pricing.\n\nThank you.",
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
                  <div className="product-buttons">
                    <a
                      href={`https://wa.me/9715478137?text=${encodeURIComponent(product.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-btn"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={`mailto:info@aspglobalmarine.com?subject=${encodeURIComponent(product.emailMessage.split("\n")[0].replace("Subject: ", ""))}&body=${encodeURIComponent(product.emailMessage.split("\n").slice(2).join("\n").trim())}`}
                      className="email-btn"
                    >
                      Email
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

export default EngineStores;
