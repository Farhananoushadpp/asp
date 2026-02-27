/**
 * ASP Global Marine Trading LLC - Deck Stores & General Marine Stores Page
 *
 * Comprehensive deck equipment and general marine supplies solutions
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";
import { useState } from "react";
import { MessageCircle, Mail } from "lucide-react";

const DeckStoresGeneral = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const deckProducts = [
    {
      id: 1,
      name: "Navigation Light",
      image: "/products/deck/Asset 49.webp",
      category: "Navigation Light",
      description:
        "High-quality navigation lights for vessel operations. Professional grade materials ensuring maximum safety and durability in harsh marine environments.",
      whatsappMessage:
        "Hi, I'm interested in Navigation Light. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Navigation Light\n\nDear ASP Global Marine Trading,\n\nI'm interested in Navigation Light. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 2,
      name: "Water Proof Flash Light",
      image: "/products/deck/Asset 50.webp",
      category: "Water Proof Flash Light",
      description:
        "Waterproof flashlights for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Water Proof Flash Light. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Water Proof Flash Light\n\nDear ASP Global Marine Trading,\n\nI'm interested in Water Proof Flash Light. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 3,
      name: "PP Rope",
      image: "/products/deck/Asset 51.webp",
      category: "PP Rope",
      description:
        "Comprehensive safety equipment for crew protection. SOLAS compliant safety gear meeting international maritime safety standards.",
      whatsappMessage:
        "Hi, I'm interested in Marine Safety Equipment. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Marine Safety Equipment\n\nDear ASP Global Marine Trading,\n\nI'm interested in Marine Safety Equipment. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 4,
      name: "Husbandary Items",
      image: "/products/deck/Asset 52.webp",
      category: "Husbandary Items",
      description:
        "Professional husbandary items for vessel protection. Advanced anti-fouling and corrosion protection solutions for extended vessel life.",
      whatsappMessage:
        "Hi, I'm interested in Husbandary Items. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Husbandary Items\n\nDear ASP Global Marine Trading,\n\nI'm interested in Husbandary Items. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 5,
      name: "Stationary",
      image: "/products/deck/Asset 53.webp",
      category: "Stationary",
      description:
        "Navigation and Stationary for deck operations. State-of-the-art navigation aids ensuring vessel safety and compliance.",
      whatsappMessage:
        "Hi, I'm interested in Stationary. Please provide more information and pricing.",
      emailMessage:
        "Subject: Inquiry about Stationary\n\nDear ASP Global Marine Trading,\n\nI'm interested in Stationary. Please provide more information and pricing.\n\nThank you.",
    },
    {
      id: 6,
      name: "Bosun / Diving Knife",
      image: "/products/deck/Asset 54.webp",
      category: "Bosun / Diving Knife",
      description:
        "Bosun / Diving Knife for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Bosun / Diving Knife. Please provide more information and pricing.",
    },
    {
      id: 7,
      name: "Printer & Cartridges",
      image: "/products/deck/Asset 55.webp",
      category: "Printer & Cartridges",
      description:
        "Printer & Cartridges for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Printer & Cartridges. Please provide more information and pricing.",
    },
    {
      id: 8,
      name: "Rust Remover",
      image: "/products/deck/Asset 56.webp",
      category: "Rust Remover",
      description:
        "Comprehensive Rust Remover for secure positioning. Heavy-duty Rust Remover for various vessel types and conditions.",
      whatsappMessage:
        "Hi, I'm interested in Rust Remover. Please provide more information and pricing.",
    },
    {
      id: 9,
      name: "Cotton Rags",
      image: "/products/deck/Asset 58.webp",
      category: "Cotton Rags",
      description:
        "Cotton Rags for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Cotton Rags. Please provide more information and pricing.",
    },
    {
      id: 10,
      name: "Angle & Paint Brushes",
      image: "/products/deck/Asset 59.webp",
      category: "Angle & Paint Brushes",
      description:
        "Angle & Paint Brushes for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Angle & Paint Brushes. Please provide more information and pricing.",
    },
    {
      id: 11,
      name: "Needle Gun",
      image: "/products/deck/Asset 61.webp",
      category: "Needle Gun",
      description:
        "Needle Gun for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Needle Gun. Please provide more information and pricing.",
    },
    {
      id: 12,
      name: "Chipping Hammer",
      image: "/products/deck/Asset 62.webp",
      category: "Chipping Hammer",
      description:
        "Chipping Hammer for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Chipping Hammer. Please provide more information and pricing.",
    },
    {
      id: 13,
      name: "Ventilation Fan",
      image: "/products/deck/Asset 63.webp",
      category: "Ventilation Fan",
      description:
        "Ventilation Fan for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Ventilation Fan. Please provide more information and pricing.",
    },
    {
      id: 14,
      name: "Wire Cup Brush",
      image: "/products/deck/Asset 64.webp",
      category: "Wire Cup Brush",
      description:
        "Wire Cup Brush for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Wire Cup Brush. Please provide more information and pricing.",
    },
    {
      id: 15,
      name: "High Pressure Washing Machine",
      image: "/products/deck/Asset 65.webp",
      category: "High Pressure Washing Machine ",
      description:
        "High Pressure Washing Machine for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in High Pressure Washing Machine. Please provide more information and pricing.",
    },
    {
      id: 16,
      name: "Walkie Talkie",
      image: "/products/deck/Asset 66.webp",
      category: "Walkie Talkie",
      description:
        "Walkie Talkie for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Walkie Talkie. Please provide more information and pricing.",
    },
    {
      id: 17,
      name: "Search Light",
      image: "/products/deck/Asset 67.webp",
      category: "Search Light",
      description:
        "Search Light for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Search Light. Please provide more information and pricing.",
    },
    {
      id: 18,
      name: "Grease Tape",
      image: "/products/deck/Asset 68.webp",
      category: "Grease Tape",
      description:
        "Grease Tape for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Grease Tape. Please provide more information and pricing.",
    },
    {
      id: 19,
      name: "Hoses",
      image: "/products/deck/Asset 69.webp",
      category: "Hoses",
      description:
        "Hoses for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Hoses. Please provide more information and pricing.",
    },
    {
      id: 20,
      name: "Washing Machine",
      image: "/products/deck/Asset 70.webp",
      category: "Washing Machine",
      description:
        "Washing Machine for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Washing Machine. Please provide more information and pricing.",
    },
    {
      id: 21,
      name: "Explosion Proof Mobile",
      image: "/products/deck/Asset 71.webp",
      category: "Explosion Proof Mobile",
      description:
        "Explosion Proof Mobile for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Explosion Proof Mobile. Please provide more information and pricing.",
    },
    {
      id: 22,
      name: "Incinerator",
      image: "/products/deck/Asset 72.webp",
      category: "Incinerator",
      description:
        "Incinerator for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Incinerator. Please provide more information and pricing.",
    },
    {
      id: 23,
      name: "Garbage Bins",
      image: "/products/deck/Asset 73.webp",
      category: "Garbage Bins",
      description:
        "Garbage Bins for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Garbage Bins. Please provide more information and pricing.",
    },
    {
      id: 24,
      name: "Oil/Water Level Paste",
      image: "/products/deck/Asset 75.webp",
      category: "Oil/Water Level Paste",
      description:
        "Oil/Water Level Paste for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Oil/Water Level Paste. Please provide more information and pricing.",
    },
    {
      id: 25,
      name: "First Aid Kit",
      image: "/products/deck/Asset 76.webp",
      category: "First Aid Kit",
      description:
        "First Aid Kit for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in First Aid Kit. Please provide more information and pricing.",
    },
    {
      id: 26,
      name: "Chart & Publication",
      image: "/products/deck/Asset 78.webp",
      category: "Chart & Publication",
      description:
        "Chart & Publication for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Chart & Publication. Please provide more information and pricing.",
    },
    {
      id: 27,
      name: "Paint",
      image: "/products/deck/Asset 79.webp",
      category: "Paint",
      description:
        "Paint for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Paint. Please provide more information and pricing.",
    },
    {
      id: 28,
      name: "Marine Communication Equipment",
      image: "/products/deck/Asset 80.webp",
      category: "Communication",
      description:
        "Marine communication equipment for vessels. Reliable communication systems for maritime operations.",
      whatsappMessage:
        "Hi, I'm interested in Marine Communication Equipment. Please provide more information and pricing.",
    },
    {
      id: 29,
      name: "Wire Rope spelter socket",
      image: "/products/deck/Asset 82.webp",
      category: "Wire Rope",
      description:
        "Wire Rope spelter socket for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Wire Rope spelter socket. Please provide more information and pricing.",
    },
    {
      id: 30,
      name: "Scupper Plug",
      image: "/products/deck/Asset 83.webp",
      category: "Scupper Plug",
      description:
        "Scupper Plug for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Scupper Plug. Please provide more information and pricing.",
    },
    {
      id: 31,
      name: "Anchor",
      image: "/products/deck/Asset 84.webp",
      category: "Anchor",
      description:
        "Anchor for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Anchor. Please provide more information and pricing.",
    },
    {
      id: 32,
      name: "Cotton Gloves",
      image: "/products/deck/Asset 85.webp",
      category: "Gloves",
      description:
        "Cotton Gloves for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Cotton Gloves. Please provide more information and pricing.",
    },
    {
      id: 33,
      name: "Aircraft & Truck Fenders",
      image: "/products/deck/Asset 86.webp",
      category: "Fenders",
      description:
        "Aircraft & Truck Fenders for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Aircraft & Truck Fenders. Please provide more information and pricing.",
    },
    {
      id: 34,
      name: "Fenders",
      image: "/products/deck/Asset 87.webp",
      category: "Fenders",
      description:
        "Fenders for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Fenders. Please provide more information and pricing.",
    },
    {
      id: 35,
      name: "Chain",
      image: "/products/deck/Asset 88.webp",
      category: "Chain",
      description: "Chain",
      whatsappMessage:
        "Hi, I'm interested in Chain. Please provide more information and pricing.",
    },
    {
      id: 36,
      name: "Shackles",
      image: "/products/deck/Asset 89.webp",
      category: "Shackles",
      description: "Shackles.",
      whatsappMessage:
        "Hi, I'm interested in Shackles. Please provide more information and pricing.",
    },
    {
      id: 37,
      name: "Gauging  Tape Water/Oil",
      image: "/products/deck/Asset 90.webp",
      category: "Gauging  Tape Water/Oil",
      description: "Gauging  Tape Water/Oil",
      whatsappMessage:
        "Hi, I'm interested in Gauging  Tape Water/Oil. Please provide more information and pricing.",
    },
    {
      id: 38,
      name: "Tarpaulin",
      image: "/products/deck/Asset 91.webp",
      category: "Tarpaulin",
      description: " Tarpaulin",
      whatsappMessage:
        "Hi, I'm interested in Tarpaulin. Please provide more information and pricing.",
    },
    {
      id: 39,
      name: "Marine Environmental Systems",
      image: "/products/deck/Asset 92.webp",
      category: "Environmental Systems",
      description:
        "Marine environmental protection systems. Eco-friendly solutions for sustainable maritime operations.",
      whatsappMessage:
        "Hi, I'm interested in Marine Environmental Systems. Please provide more information and pricing.",
    },
    {
      id: 40,
      name: "Dusting Mop",
      image: "/products/deck/ILHvHo.webp",
      category: "Dusting Mop",
      description: "Dusting Mop",
      whatsappMessage:
        "Hi, I'm interested in Dusting Mop. Please provide more information and pricing.",
    },
    {
      id: 41,
      name: "Flag",
      image: "/products/deck/WH0O0h.webp",
      category: "Flag",
      description: "Flag",
      whatsappMessage:
        "Hi, I'm interested in Flag. Please provide more information and pricing.",
    },
  ];

  const filteredProducts = deckProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Deck Stores & General Marine Stores</h1>
          <p className="page-subtitle">
            Comprehensive Deck Equipment and General Marine Supplies Solutions
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
          <h2>Featured Deck Products</h2>
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

export default DeckStoresGeneral;
