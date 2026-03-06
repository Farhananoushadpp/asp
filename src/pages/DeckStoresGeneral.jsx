/**
 * ASP Global Marine Trading LLC - Deck Stores & General Marine Stores Page
 *
 * Comprehensive deck equipment and general marine supplies solutions
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";
import { useState } from "react";
import { Anchor, CheckCircle, Shield } from "lucide-react";
import PageHero from "../components/PageHero.jsx";

const DeckStoresGeneral = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const deckProducts = [
    {
      id: 1,
      name: "Navigation Light",
      image: "/products/deck/Asset%2049.webp",
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
      image: "/products/deck/Asset%2050.webp",
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
      image: "/products/deck/Asset%2051.webp",
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
      image: "/products/deck/Asset%2052.webp",
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
      image: "/products/deck/Asset%2053.webp",
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
      image: "/products/deck/Asset%2054.webp",
      category: "Bosun / Diving Knife",
      description:
        "Bosun / Diving Knife for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Bosun / Diving Knife. Please provide more information and pricing.",
    },
    {
      id: 7,
      name: "Printer & Cartridges",
      image: "/products/deck/Asset%2055.webp",
      category: "Printer & Cartridges",
      description:
        "Printer & Cartridges for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Printer & Cartridges. Please provide more information and pricing.",
    },
    {
      id: 8,
      name: "Rust Remover",
      image: "/products/deck/Asset%2056.webp",
      category: "Rust Remover",
      description:
        "Comprehensive Rust Remover for secure positioning. Heavy-duty Rust Remover for various vessel types and conditions.",
      whatsappMessage:
        "Hi, I'm interested in Rust Remover. Please provide more information and pricing.",
    },
    {
      id: 9,
      name: "Cotton Rags",
      image: "/products/deck/Asset%2058.webp",
      category: "Cotton Rags",
      description:
        "Cotton Rags for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Cotton Rags. Please provide more information and pricing.",
    },
    {
      id: 10,
      name: "Angle & Paint Brushes",
      image: "/products/deck/Asset%2059.webp",
      category: "Angle & Paint Brushes",
      description:
        "Angle & Paint Brushes for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Angle & Paint Brushes. Please provide more information and pricing.",
    },
    {
      id: 11,
      name: "Needle Gun",
      image: "/products/deck/Asset%2061.webp",
      category: "Needle Gun",
      description:
        "Needle Gun for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Needle Gun. Please provide more information and pricing.",
    },
    {
      id: 12,
      name: "Chipping Hammer",
      image: "/products/deck/Asset%2062.webp",
      category: "Chipping Hammer",
      description:
        "Chipping Hammer for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Chipping Hammer. Please provide more information and pricing.",
    },
    {
      id: 13,
      name: "Ventilation Fan",
      image: "/products/deck/Asset%2063.webp",
      category: "Ventilation Fan",
      description:
        "Ventilation Fan for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Ventilation Fan. Please provide more information and pricing.",
    },
    {
      id: 14,
      name: "Wire Cup Brush",
      image: "/products/deck/Asset%2064.webp",
      category: "Wire Cup Brush",
      description:
        "Wire Cup Brush for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Wire Cup Brush. Please provide more information and pricing.",
    },
    {
      id: 15,
      name: "High Pressure Washing Machine",
      image: "/products/deck/Asset%2065.webp",
      category: "High Pressure Washing Machine ",
      description:
        "High Pressure Washing Machine for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in High Pressure Washing Machine. Please provide more information and pricing.",
    },
    {
      id: 16,
      name: "Walkie Talkie",
      image: "/products/deck/Asset%2066.webp",
      category: "Walkie Talkie",
      description:
        "Walkie Talkie for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Walkie Talkie. Please provide more information and pricing.",
    },
    {
      id: 17,
      name: "Search Light",
      image: "/products/deck/Asset%2067.webp",
      category: "Search Light",
      description:
        "Search Light for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Search Light. Please provide more information and pricing.",
    },
    {
      id: 18,
      name: "Grease Tape",
      image: "/products/deck/Asset%2068.webp",
      category: "Grease Tape",
      description:
        "Grease Tape for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Grease Tape. Please provide more information and pricing.",
    },
    {
      id: 19,
      name: "Hoses",
      image: "/products/deck/Asset%2069.webp",
      category: "Hoses",
      description:
        "Hoses for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Hoses. Please provide more information and pricing.",
    },
    {
      id: 20,
      name: "Washing Machine",
      image: "/products/deck/Asset%2070.webp",
      category: "Washing Machine",
      description:
        "Washing Machine for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Washing Machine. Please provide more information and pricing.",
    },
    {
      id: 21,
      name: "Explosion Proof Mobile",
      image: "/products/deck/Asset%2071.webp",
      category: "Explosion Proof Mobile",
      description:
        "Explosion Proof Mobile for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Explosion Proof Mobile. Please provide more information and pricing.",
    },
    {
      id: 22,
      name: "Incinerator",
      image: "/products/deck/Asset%2072.webp",
      category: "Incinerator",
      description:
        "Incinerator for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Incinerator. Please provide more information and pricing.",
    },
    {
      id: 23,
      name: "Garbage Bins",
      image: "/products/deck/Asset%2073.webp",
      category: "Garbage Bins",
      description:
        "Garbage Bins for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Garbage Bins. Please provide more information and pricing.",
    },
    {
      id: 24,
      name: "Oil/Water Level Paste",
      image: "/products/deck/Asset%2075.webp",
      category: "Oil/Water Level Paste",
      description:
        "Oil/Water Level Paste for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Oil/Water Level Paste. Please provide more information and pricing.",
    },
    {
      id: 25,
      name: "First Aid Kit",
      image: "/products/deck/Asset%2076.webp",
      category: "First Aid Kit",
      description:
        "First Aid Kit for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in First Aid Kit. Please provide more information and pricing.",
    },
    {
      id: 26,
      name: "Chart & Publication",
      image: "/products/deck/Asset%2078.webp",
      category: "Chart & Publication",
      description:
        "Chart & Publication for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Chart & Publication. Please provide more information and pricing.",
    },
    {
      id: 27,
      name: "Paint",
      image: "/products/deck/Asset%2079.webp",
      category: "Paint",
      description:
        "Paint for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Paint. Please provide more information and pricing.",
    },
    {
      id: 28,
      name: "Marine Communication Equipment",
      image: "/products/deck/Asset%2080.webp",
      category: "Communication",
      description:
        "Marine communication equipment for vessels. Reliable communication systems for maritime operations.",
      whatsappMessage:
        "Hi, I'm interested in Marine Communication Equipment. Please provide more information and pricing.",
    },
    {
      id: 29,
      name: "Wire Rope spelter socket",
      image: "/products/deck/Asset%2082.webp",
      category: "Wire Rope",
      description:
        "Wire Rope spelter socket for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Wire Rope spelter socket. Please provide more information and pricing.",
    },
    {
      id: 30,
      name: "Scupper Plug",
      image: "/products/deck/Asset%2083.webp",
      category: "Scupper Plug",
      description:
        "Scupper Plug for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Scupper Plug. Please provide more information and pricing.",
    },
    {
      id: 31,
      name: "Anchor",
      image: "/products/deck/Asset%2084.webp",
      category: "Anchor",
      description:
        "Anchor for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Anchor. Please provide more information and pricing.",
    },
    {
      id: 32,
      name: "Cotton Gloves",
      image: "/products/deck/Asset%2085.webp",
      category: "Gloves",
      description:
        "Cotton Gloves for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Cotton Gloves. Please provide more information and pricing.",
    },
    {
      id: 33,
      name: "Aircraft & Truck Fenders",
      image: "/products/deck/Asset%2086.webp",
      category: "Fenders",
      description:
        "Aircraft & Truck Fenders for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Aircraft & Truck Fenders. Please provide more information and pricing.",
    },
    {
      id: 34,
      name: "Fenders",
      image: "/products/deck/Asset%2087.webp",
      category: "Fenders",
      description:
        "Fenders for deck operations. Durable and reliable flashlights designed for maritime environments.",
      whatsappMessage:
        "Hi, I'm interested in Fenders. Please provide more information and pricing.",
    },
    {
      id: 35,
      name: "Chain",
      image: "/products/deck/Asset%2088.webp",
      category: "Chain",
      description: "Chain",
      whatsappMessage:
        "Hi, I'm interested in Chain. Please provide more information and pricing.",
    },
    {
      id: 36,
      name: "Shackles",
      image: "/products/deck/Asset%2089.webp",
      category: "Shackles",
      description: "Shackles.",
      whatsappMessage:
        "Hi, I'm interested in Shackles. Please provide more information and pricing.",
    },
    {
      id: 37,
      name: "Gauging  Tape Water/Oil",
      image: "/products/deck/Asset%2090.webp",
      category: "Gauging  Tape Water/Oil",
      description: "Gauging  Tape Water/Oil",
      whatsappMessage:
        "Hi, I'm interested in Gauging  Tape Water/Oil. Please provide more information and pricing.",
    },
    {
      id: 38,
      name: "Tarpaulin",
      image: "/products/deck/Asset%2091.webp",
      category: "Tarpaulin",
      description: " Tarpaulin",
      whatsappMessage:
        "Hi, I'm interested in Tarpaulin. Please provide more information and pricing.",
    },
    {
      id: 39,
      name: "Marine Environmental Systems",
      image: "/products/deck/Asset%2092.webp",
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

  // Group products into rows of 4
  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const productRows = chunkArray(filteredProducts, 4);

  return (
    <div className="product-page">
      {/* Hero Section - Using PageHero Component */}
      <PageHero
        title="Deck Stores & General Marine Stores"
        subtitle="Comprehensive Deck Equipment & Supplies"
        icon={Anchor}
        badges={[
          { icon: CheckCircle, text: "Marine Grade" },
          { icon: Shield, text: "Quality Assured" },
        ]}
      />

      <div className="container-full">
        {/* Product Grid Layout - 5 Products Per Row */}
        <section className="product-grid-layout-six section-spacing-top section-spacing-bottom">
          <div className="grid-responsive-5">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card-six">
                <div className="product-image-six">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className="product-info-six">
                  <h3 className="product-name-six">{product.name}</h3>
                  <p className="product-category-six">{product.category}</p>
                  <p className="product-description-six">
                    {product.description}
                  </p>
                  <div className="product-actions-six">
                    <a
                      href={`https://wa.me/971505357966?text=${encodeURIComponent(
                        product.whatsappMessage,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-btn"
                      title="Contact on WhatsApp"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </a>
                    <a
                      href={`mailto:info@aspglobalmarine.com?subject=${encodeURIComponent(
                        product.emailMessage
                          ? product.emailMessage
                              .split("\n")[0]
                              .replace("Subject: ", "")
                          : "Inquiry about " + product.name,
                      )}&body=${encodeURIComponent(
                        product.emailMessage
                          ? product.emailMessage
                              .split("\n")
                              .slice(2)
                              .join("\n")
                              .trim()
                          : "Dear ASP Global Marine Trading,\n\nI'm interested in " +
                              product.name +
                              ". Please provide more information and pricing.\n\nThank you.",
                      )}`}
                      className="email-btn"
                      title="Contact via Email"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
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
