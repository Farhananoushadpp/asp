/**
 * ASP Global Marine Trading LLC - Deck Stores & General Marine Stores Page
 *
 * Comprehensive deck equipment and general marine supplies solutions
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";
import { useState } from "react";

const DeckStoresGeneral = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const deckProducts = [
    {
      id: 1,
      name: "Marine Mooring Equipment",
      image: "/products/deck/Asset 49.webp",
      category: "Mooring Equipment",
      description:
        "High-quality mooring ropes and equipment for vessel operations. Professional grade materials ensuring maximum safety and durability in harsh marine environments.",
      whatsappMessage:
        "Hi, I'm interested in Marine Mooring Equipment. Please provide more information and pricing.",
    },
    {
      id: 2,
      name: "Deck Fittings & Hardware",
      image: "/products/deck/Asset 50.webp",
      category: "Deck Fittings",
      description:
        "Essential deck hardware and fittings for maritime operations. Precision-engineered components for reliable performance under demanding conditions.",
      whatsappMessage:
        "Hi, I'm interested in Deck Fittings & Hardware. Please provide more information and pricing.",
    },
    {
      id: 3,
      name: "Marine Safety Equipment",
      image: "/products/deck/Asset 51.webp",
      category: "Safety Equipment",
      description:
        "Comprehensive safety equipment for crew protection. SOLAS compliant safety gear meeting international maritime safety standards.",
      whatsappMessage:
        "Hi, I'm interested in Marine Safety Equipment. Please provide more information and pricing.",
    },
    {
      id: 4,
      name: "Marine Paints & Coatings",
      image: "/products/deck/Asset 52.webp",
      category: "Paints & Coatings",
      description:
        "Professional marine paints for vessel protection. Advanced anti-fouling and corrosion protection solutions for extended vessel life.",
      whatsappMessage:
        "Hi, I'm interested in Marine Paints & Coatings. Please provide more information and pricing.",
    },
    {
      id: 5,
      name: "Navigation Equipment",
      image: "/products/deck/Asset 53.webp",
      category: "Navigation Equipment",
      description:
        "Navigation and signaling equipment for safe operations. State-of-the-art navigation aids ensuring vessel safety and compliance.",
      whatsappMessage:
        "Hi, I'm interested in Navigation Equipment. Please provide more information and pricing.",
    },
    {
      id: 6,
      name: "Cleaning & Maintenance Supplies",
      image: "/products/deck/Asset 54.webp",
      category: "Cleaning & Maintenance",
      description:
        "Complete cleaning solutions for vessel maintenance. Environmentally friendly cleaning products for effective vessel upkeep.",
      whatsappMessage:
        "Hi, I'm interested in Cleaning & Maintenance Supplies. Please provide more information and pricing.",
    },
    {
      id: 7,
      name: "General Marine Stores",
      image: "/products/deck/Asset 55.webp",
      category: "General Stores",
      description:
        "Essential general stores and consumables. Comprehensive range of daily-use marine supplies for vessel operations.",
      whatsappMessage:
        "Hi, I'm interested in General Marine Stores. Please provide more information and pricing.",
    },
    {
      id: 8,
      name: "Anchoring Systems",
      image: "/products/deck/Asset 56.webp",
      category: "Anchoring Systems",
      description:
        "Comprehensive anchoring equipment for secure positioning. Heavy-duty anchoring systems for various vessel types and conditions.",
      whatsappMessage:
        "Hi, I'm interested in Anchoring Systems. Please provide more information and pricing.",
    },
    {
      id: 9,
      name: "Marine Tools & Equipment",
      image: "/products/deck/Asset 58.webp",
      category: "General Stores",
      description:
        "Professional marine tools and equipment. Specialized tools designed for marine applications and maintenance tasks.",
      whatsappMessage:
        "Hi, I'm interested in Marine Tools & Equipment. Please provide more information and pricing.",
    },
    {
      id: 10,
      name: "Heavy Duty Deck Equipment",
      image: "/products/deck/Asset 59.webp",
      category: "Deck Equipment",
      description:
        "Heavy-duty equipment for demanding operations. Industrial strength deck equipment for commercial and offshore vessels.",
      whatsappMessage:
        "Hi, I'm interested in Heavy Duty Deck Equipment. Please provide more information and pricing.",
    },
    {
      id: 11,
      name: "Marine Electrical Supplies",
      image: "/products/deck/Asset 61.webp",
      category: "Electrical Supplies",
      description:
        "Electrical components and supplies for marine use. Marine-grade electrical equipment ensuring safe and reliable operations.",
      whatsappMessage:
        "Hi, I'm interested in Marine Electrical Supplies. Please provide more information and pricing.",
    },
    {
      id: 12,
      name: "Plumbing & Water Systems",
      image: "/products/deck/Asset 62.webp",
      category: "Plumbing Supplies",
      description:
        "Marine plumbing and water system components. Complete plumbing solutions for fresh water and wastewater systems.",
      whatsappMessage:
        "Hi, I'm interested in Plumbing & Water Systems. Please provide more information and pricing.",
    },
    {
      id: 13,
      name: "Advanced Deck Equipment",
      image: "/products/deck/Asset 63.webp",
      category: "Deck Equipment",
      description:
        "Advanced deck equipment for specialized operations. Cutting-edge technology for modern vessel deck operations.",
      whatsappMessage:
        "Hi, I'm interested in Advanced Deck Equipment. Please provide more information and pricing.",
    },
    {
      id: 14,
      name: "Marine Fasteners & Hardware",
      image: "/products/deck/Asset 64.webp",
      category: "Hardware",
      description:
        "Marine-grade fasteners and hardware solutions. Corrosion-resistant fasteners for marine construction and maintenance.",
      whatsappMessage:
        "Hi, I'm interested in Marine Fasteners & Hardware. Please provide more information and pricing.",
    },
    {
      id: 15,
      name: "Professional Marine Tools",
      image: "/products/deck/Asset 65.webp",
      category: "Tools",
      description:
        "Professional tools for marine applications. High-quality tools designed specifically for marine engineering tasks.",
      whatsappMessage:
        "Hi, I'm interested in Professional Marine Tools. Please provide more information and pricing.",
    },
    {
      id: 16,
      name: "Marine Safety Systems",
      image: "/products/deck/Asset 66.webp",
      category: "Safety Equipment",
      description:
        "Comprehensive marine safety systems. Complete safety solutions including fire suppression and emergency response systems.",
      whatsappMessage:
        "Hi, I'm interested in Marine Safety Systems. Please provide more information and pricing.",
    },
    {
      id: 17,
      name: "Deck Maintenance Equipment",
      image: "/products/deck/Asset 67.webp",
      category: "Maintenance",
      description:
        "Equipment for deck maintenance operations. Specialized maintenance tools for efficient deck upkeep and repair.",
      whatsappMessage:
        "Hi, I'm interested in Deck Maintenance Equipment. Please provide more information and pricing.",
    },
    {
      id: 18,
      name: "Heavy Duty Marine Components",
      image: "/products/deck/Asset 68.webp",
      category: "Heavy Equipment",
      description:
        "Heavy-duty components for demanding marine applications. Industrial-strength components built for extreme conditions.",
      whatsappMessage:
        "Hi, I'm interested in Heavy Duty Marine Components. Please provide more information and pricing.",
    },
    {
      id: 19,
      name: "Specialized Deck Solutions",
      image: "/products/deck/Asset 69.webp",
      category: "Special Equipment",
      description:
        "Specialized solutions for unique deck requirements. Custom equipment solutions for specialized vessel operations.",
      whatsappMessage:
        "Hi, I'm interested in Specialized Deck Solutions. Please provide more information and pricing.",
    },
    {
      id: 20,
      name: "Marine Electrical Systems",
      image: "/products/deck/Asset 70.webp",
      category: "Electrical",
      description:
        "Complete electrical systems for marine vessels. Integrated electrical solutions for power distribution and control.",
      whatsappMessage:
        "Hi, I'm interested in Marine Electrical Systems. Please provide more information and pricing.",
    },
    {
      id: 21,
      name: "Advanced Marine Components",
      image: "/products/deck/Asset 71.webp",
      category: "Components",
      description:
        "Advanced marine components for modern vessels. High-performance components for enhanced vessel functionality.",
      whatsappMessage:
        "Hi, I'm interested in Advanced Marine Components. Please provide more information and pricing.",
    },
    {
      id: 22,
      name: "Professional Deck Solutions",
      image: "/products/deck/Asset 72.webp",
      category: "Deck Solutions",
      description:
        "Professional deck solutions for commercial vessels. Complete deck management systems for efficient operations.",
      whatsappMessage:
        "Hi, I'm interested in Professional Deck Solutions. Please provide more information and pricing.",
    },
    {
      id: 23,
      name: "Industrial Marine Equipment",
      image: "/products/deck/Asset 73.webp",
      category: "Industrial Equipment",
      description:
        "Industrial marine equipment for heavy operations. Robust equipment designed for industrial maritime applications.",
      whatsappMessage:
        "Hi, I'm interested in Industrial Marine Equipment. Please provide more information and pricing.",
    },
    {
      id: 24,
      name: "Premium Marine Systems",
      image: "/products/deck/Asset 75.webp",
      category: "Premium Systems",
      description:
        "Premium marine systems for luxury vessels. High-end systems combining performance with elegant design.",
      whatsappMessage:
        "Hi, I'm interested in Premium Marine Systems. Please provide more information and pricing.",
    },
    {
      id: 25,
      name: "Marine Propulsion Systems",
      image: "/products/deck/Asset 76.webp",
      category: "Propulsion",
      description:
        "Advanced marine propulsion systems. Efficient propulsion solutions for various vessel types and applications.",
      whatsappMessage:
        "Hi, I'm interested in Marine Propulsion Systems. Please provide more information and pricing.",
    },
    {
      id: 26,
      name: "Compact Marine Equipment",
      image: "/products/deck/Asset 78.webp",
      category: "Compact Equipment",
      description:
        "Compact marine equipment for smaller vessels. Space-efficient solutions without compromising on performance.",
      whatsappMessage:
        "Hi, I'm interested in Compact Marine Equipment. Please provide more information and pricing.",
    },
    {
      id: 27,
      name: "Marine Control Systems",
      image: "/products/deck/Asset 79.webp",
      category: "Control Systems",
      description:
        "Advanced marine control systems. Integrated control solutions for automated vessel operations.",
      whatsappMessage:
        "Hi, I'm interested in Marine Control Systems. Please provide more information and pricing.",
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
      name: "Heavy Duty Marine Systems",
      image: "/products/deck/Asset 82.webp",
      category: "Heavy Systems",
      description:
        "Heavy duty marine systems for offshore operations. Robust systems designed for challenging marine environments.",
      whatsappMessage:
        "Hi, I'm interested in Heavy Duty Marine Systems. Please provide more information and pricing.",
    },
    {
      id: 30,
      name: "Marine Hydraulic Systems",
      image: "/products/deck/Asset 83.webp",
      category: "Hydraulic Systems",
      description:
        "Advanced marine hydraulic systems. High-performance hydraulic solutions for vessel machinery and equipment.",
      whatsappMessage:
        "Hi, I'm interested in Marine Hydraulic Systems. Please provide more information and pricing.",
    },
    {
      id: 31,
      name: "Marine Lighting Solutions",
      image: "/products/deck/Asset 84.webp",
      category: "Lighting",
      description:
        "Marine lighting solutions for vessels. Energy-efficient lighting systems for enhanced visibility and safety.",
      whatsappMessage:
        "Hi, I'm interested in Marine Lighting Solutions. Please provide more information and pricing.",
    },
    {
      id: 32,
      name: "Professional Marine Equipment",
      image: "/products/deck/Asset 85.webp",
      category: "Professional Equipment",
      description:
        "Professional marine equipment for commercial operations. Industry-standard equipment for maritime professionals.",
      whatsappMessage:
        "Hi, I'm interested in Professional Marine Equipment. Please provide more information and pricing.",
    },
    {
      id: 33,
      name: "Marine Automation Systems",
      image: "/products/deck/Asset 86.webp",
      category: "Automation",
      description:
        "Marine automation systems for modern vessels. Smart automation solutions for efficient vessel management.",
      whatsappMessage:
        "Hi, I'm interested in Marine Automation Systems. Please provide more information and pricing.",
    },
    {
      id: 34,
      name: "Marine Monitoring Equipment",
      image: "/products/deck/Asset 87.webp",
      category: "Monitoring",
      description:
        "Marine monitoring equipment for vessel operations. Real-time monitoring systems for enhanced safety and efficiency.",
      whatsappMessage:
        "Hi, I'm interested in Marine Monitoring Equipment. Please provide more information and pricing.",
    },
    {
      id: 35,
      name: "Advanced Marine Technology",
      image: "/products/deck/Asset 88.webp",
      category: "Advanced Technology",
      description:
        "Advanced marine technology solutions. Cutting-edge technology for next-generation maritime operations.",
      whatsappMessage:
        "Hi, I'm interested in Advanced Marine Technology. Please provide more information and pricing.",
    },
    {
      id: 36,
      name: "Marine Navigation Systems",
      image: "/products/deck/Asset 89.webp",
      category: "Navigation Systems",
      description:
        "Advanced marine navigation systems. Precision navigation equipment for safe and efficient vessel operations.",
      whatsappMessage:
        "Hi, I'm interested in Marine Navigation Systems. Please provide more information and pricing.",
    },
    {
      id: 37,
      name: "Marine Safety Solutions",
      image: "/products/deck/Asset 90.webp",
      category: "Safety Solutions",
      description:
        "Comprehensive marine safety solutions. Integrated safety systems for complete vessel protection.",
      whatsappMessage:
        "Hi, I'm interested in Marine Safety Solutions. Please provide more information and pricing.",
    },
    {
      id: 38,
      name: "Marine Power Systems",
      image: "/products/deck/Asset 91.webp",
      category: "Power Systems",
      description:
        "Marine power systems for vessel operations. Reliable power generation and distribution systems.",
      whatsappMessage:
        "Hi, I'm interested in Marine Power Systems. Please provide more information and pricing.",
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
      name: "Custom Marine Solutions",
      image: "/products/deck/ILHvHo.webp",
      category: "Custom Solutions",
      description:
        "Custom marine solutions for specific requirements. Tailored equipment solutions for unique vessel needs.",
      whatsappMessage:
        "Hi, I'm interested in Custom Marine Solutions. Please provide more information and pricing.",
    },
    {
      id: 41,
      name: "Specialized Marine Equipment",
      image: "/products/deck/WH0O0h.webp",
      category: "Specialized Equipment",
      description:
        "Specialized marine equipment for unique applications. Custom-built equipment for specialized maritime operations.",
      whatsappMessage:
        "Hi, I'm interested in Specialized Marine Equipment. Please provide more information and pricing.",
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

export default DeckStoresGeneral;
