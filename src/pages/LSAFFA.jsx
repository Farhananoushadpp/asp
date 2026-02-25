/**
 * ASP Global Marine Trading LLC - LSA & FFA (Life-Saving & Fire-Fighting Equipment) Page
 *
 * Comprehensive life-saving appliances and fire-fighting equipment solutions
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";
import { useState } from "react";

const LSAFFA = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const lsaProducts = [
    {
      id: 1,
      name: "Lifeboats & Rescue Boats",
      image: "/products/lsa&ffa/Asset 45.webp",
      category: "Life-Saving Appliances",
      description:
        "Complete range of lifeboats and rescue boats for maritime safety operations. SOLAS compliant survival craft for emergency evacuation.",
      whatsappMessage:
        "Hi, I'm interested in Lifeboats & Rescue Boats. Please provide more information and pricing.",
    },
    {
      id: 2,
      name: "Life Jackets & Immersion Suits",
      image: "/products/lsa&ffa/Asset 46.webp",
      category: "Personal Safety",
      description:
        "High-quality life jackets and immersion suits for crew protection. Advanced materials for maximum buoyancy and thermal protection.",
      whatsappMessage:
        "Hi, I'm interested in Life Jackets & Immersion Suits. Please provide more information and pricing.",
    },
    {
      id: 3,
      name: "Fire Extinguishers",
      image: "/products/lsa&ffa/Asset 47.webp",
      category: "Fire-Fighting",
      description:
        "Marine-grade fire extinguishers for various fire types. Portable and fixed systems for comprehensive fire protection.",
      whatsappMessage:
        "Hi, I'm interested in Fire Extinguishers. Please provide more information and pricing.",
    },
    {
      id: 4,
      name: "Fire Detection Systems",
      image: "/products/lsa&ffa/Asset 48.webp",
      category: "Fire Detection",
      description:
        "Advanced fire detection and alarm systems. Early warning technology for rapid fire identification and response.",
      whatsappMessage:
        "Hi, I'm interested in Fire Detection Systems. Please provide more information and pricing.",
    },
    {
      id: 5,
      name: "Emergency Escape Breathing Devices",
      image: "/products/lsa&ffa/Asset 49.webp",
      category: "Breathing Protection",
      description:
        "EEBD systems for emergency evacuation. Self-contained breathing apparatus for smoke-filled environments.",
      whatsappMessage:
        "Hi, I'm interested in Emergency Escape Breathing Devices. Please provide more information and pricing.",
    },
    {
      id: 6,
      name: "Fire Hydrant Systems",
      image: "/products/lsa&ffa/Asset 50.webp",
      category: "Fire Suppression",
      description:
        "Marine fire hydrant systems and water mist technology. High-pressure water delivery for effective fire control.",
      whatsappMessage:
        "Hi, I'm interested in Fire Hydrant Systems. Please provide more information and pricing.",
    },
    {
      id: 7,
      name: "Survival Craft Equipment",
      image: "/products/lsa&ffa/Asset 51.webp",
      category: "Life-Saving",
      description:
        "Complete survival craft equipment packages. Emergency rations, water, signaling devices for lifeboats and rafts.",
      whatsappMessage:
        "Hi, I'm interested in Survival Craft Equipment. Please provide more information and pricing.",
    },
    {
      id: 8,
      name: "Firefighter Outfits",
      image: "/products/lsa&ffa/Asset 52.webp",
      category: "Fire-Fighting Gear",
      description:
        "Professional firefighter protective clothing. Heat-resistant suits with comprehensive protection features.",
      whatsappMessage:
        "Hi, I'm interested in Firefighter Outfits. Please provide more information and pricing.",
    },
    {
      id: 9,
      name: "Life Rafts & Inflatable Devices",
      image: "/products/lsa&ffa/Asset 53.webp",
      category: "Life-Saving",
      description:
        "Marine life rafts and inflatable survival devices. Rapid deployment systems for emergency situations.",
      whatsappMessage:
        "Hi, I'm interested in Life Rafts & Inflatable Devices. Please provide more information and pricing.",
    },
    {
      id: 10,
      name: "Fire Pumps & Systems",
      image: "/products/lsa&ffa/Asset 54.webp",
      category: "Fire Suppression",
      description:
        "Marine fire pumps and suppression systems. High-capacity pumping equipment for fire-fighting operations.",
      whatsappMessage:
        "Hi, I'm interested in Fire Pumps & Systems. Please provide more information and pricing.",
    },
    {
      id: 11,
      name: "Emergency Lighting Systems",
      image: "/products/lsa&ffa/Asset 55.webp",
      category: "Safety Equipment",
      description:
        "Marine emergency lighting and evacuation systems. Battery-powered lighting for emergency situations.",
      whatsappMessage:
        "Hi, I'm interested in Emergency Lighting Systems. Please provide more information and pricing.",
    },
    {
      id: 12,
      name: "Fire Blankets & Safety Equipment",
      image: "/products/lsa&ffa/Asset 56.webp",
      category: "Fire Safety",
      description:
        "Fire blankets and safety equipment for small fires. Quick response tools for fire suppression.",
      whatsappMessage:
        "Hi, I'm interested in Fire Blankets & Safety Equipment. Please provide more information and pricing.",
    },
    {
      id: 13,
      name: "Marine Escape Systems",
      image: "/products/lsa&ffa/Asset 58.webp",
      category: "Evacuation",
      description:
        "Advanced marine escape and evacuation systems. Comprehensive solutions for safe vessel abandonment.",
      whatsappMessage:
        "Hi, I'm interested in Marine Escape Systems. Please provide more information and pricing.",
    },
    {
      id: 14,
      name: "Fire Alarm Systems",
      image: "/products/lsa&ffa/Asset 59.webp",
      category: "Fire Detection",
      description:
        "Marine fire alarm and notification systems. Audible and visual alarms for emergency situations.",
      whatsappMessage:
        "Hi, I'm interested in Fire Alarm Systems. Please provide more information and pricing.",
    },
    {
      id: 15,
      name: "Rescue Boat Equipment",
      image: "/products/lsa&ffa/Asset 61.webp",
      category: "Rescue Operations",
      description:
        "Complete rescue boat equipment packages. Navigation, communication, and safety gear for rescue operations.",
      whatsappMessage:
        "Hi, I'm interested in Rescue Boat Equipment. Please provide more information and pricing.",
    },
    {
      id: 16,
      name: "Breathing Apparatus Sets",
      image: "/products/lsa&ffa/Asset 62.webp",
      category: "Breathing Protection",
      description:
        "Self-contained breathing apparatus sets. Professional-grade respiratory protection for hazardous environments.",
      whatsappMessage:
        "Hi, I'm interested in Breathing Apparatus Sets. Please provide more information and pricing.",
    },
    {
      id: 17,
      name: "Fire Hose & Nozzle Systems",
      image: "/products/lsa&ffa/Asset 63.webp",
      category: "Fire-Fighting",
      description:
        "Marine fire hoses and nozzle systems. High-pressure delivery systems for effective fire fighting.",
      whatsappMessage:
        "Hi, I'm interested in Fire Hose & Nozzle Systems. Please provide more information and pricing.",
    },
    {
      id: 18,
      name: "Emergency Signal Devices",
      image: "/products/lsa&ffa/Asset 64.webp",
      category: "Signaling",
      description:
        "Emergency signaling and communication devices. Flares, smoke signals, and EPIRBs for distress signaling.",
      whatsappMessage:
        "Hi, I'm interested in Emergency Signal Devices. Please provide more information and pricing.",
    },
    {
      id: 19,
      name: "Fire Control Panels",
      image: "/products/lsa&ffa/Asset 65.webp",
      category: "Fire Control",
      description:
        "Advanced fire control and monitoring panels. Integrated systems for fire management and control.",
      whatsappMessage:
        "Hi, I'm interested in Fire Control Panels. Please provide more information and pricing.",
    },
    {
      id: 20,
      name: "Survival Equipment Packages",
      image: "/products/lsa&ffa/Asset 66.webp",
      category: "Life-Saving",
      description:
        "Complete survival equipment packages. All-inclusive kits for emergency situations and survival.",
      whatsappMessage:
        "Hi, I'm interested in Survival Equipment Packages. Please provide more information and pricing.",
    },
    {
      id: 21,
      name: "Marine Safety Helmets",
      image: "/products/lsa&ffa/Asset 67.webp",
      category: "Personal Protection",
      description:
        "Marine safety helmets and head protection. Impact-resistant helmets for crew safety.",
      whatsappMessage:
        "Hi, I'm interested in Marine Safety Helmets. Please provide more information and pricing.",
    },
    {
      id: 22,
      name: "Fire Suppression Systems",
      image: "/products/lsa&ffa/Asset 68.webp",
      category: "Fire Suppression",
      description:
        "Advanced fire suppression systems. CO2, foam, and clean agent systems for specialized applications.",
      whatsappMessage:
        "Hi, I'm interested in Fire Suppression Systems. Please provide more information and pricing.",
    },
    {
      id: 23,
      name: "Emergency Evacuation Systems",
      image: "/products/lsa&ffa/Asset 69.webp",
      category: "Evacuation",
      description:
        "Marine emergency evacuation systems. Chutes, slides, and evacuation equipment for rapid deployment.",
      whatsappMessage:
        "Hi, I'm interested in Emergency Evacuation Systems. Please provide more information and pricing.",
    },
    {
      id: 24,
      name: "Fire Safety Equipment",
      image: "/products/lsa&ffa/Asset 70.webp",
      category: "Fire Safety",
      description:
        "Comprehensive fire safety equipment packages. Complete solutions for vessel fire protection.",
      whatsappMessage:
        "Hi, I'm interested in Fire Safety Equipment. Please provide more information and pricing.",
    },
    {
      id: 25,
      name: "Lifeboat Launching Systems",
      image: "/products/lsa&ffa/Asset 71.webp",
      category: "Life-Saving",
      description:
        "Lifeboat launching and recovery systems. Davits and launching mechanisms for safe deployment.",
      whatsappMessage:
        "Hi, I'm interested in Lifeboat Launching Systems. Please provide more information and pricing.",
    },
    {
      id: 26,
      name: "Marine Fire Extinguishers",
      image: "/products/lsa&ffa/Asset 72.webp",
      category: "Fire-Fighting",
      description:
        "Specialized marine fire extinguishers. Type-specific extinguishers for different fire classifications.",
      whatsappMessage:
        "Hi, I'm interested in Marine Fire Extinguishers. Please provide more information and pricing.",
    },
    {
      id: 27,
      name: "Emergency Communication Systems",
      image: "/products/lsa&ffa/Asset 73.webp",
      category: "Communication",
      description:
        "Emergency communication and notification systems. Reliable communication for emergency situations.",
      whatsappMessage:
        "Hi, I'm interested in Emergency Communication Systems. Please provide more information and pricing.",
    },
    {
      id: 28,
      name: "Fire Fighting Equipment",
      image: "/products/lsa&ffa/Asset 75.webp",
      category: "Fire-Fighting",
      description:
        "Professional fire fighting equipment and tools. Comprehensive gear for marine fire fighting teams.",
      whatsappMessage:
        "Hi, I'm interested in Fire Fighting Equipment. Please provide more information and pricing.",
    },
    {
      id: 29,
      name: "Life-Saving Appliances",
      image: "/products/lsa&ffa/Asset 76.webp",
      category: "Life-Saving",
      description:
        "Complete range of life-saving appliances. SOLAS compliant equipment for maritime safety.",
      whatsappMessage:
        "Hi, I'm interested in Life-Saving Appliances. Please provide more information and pricing.",
    },
    {
      id: 30,
      name: "Marine Safety Equipment",
      image: "/products/lsa&ffa/Asset 78.webp",
      category: "Safety Equipment",
      description:
        "Comprehensive marine safety equipment. All essential safety gear for vessel operations.",
      whatsappMessage:
        "Hi, I'm interested in Marine Safety Equipment. Please provide more information and pricing.",
    },
    {
      id: 31,
      name: "Advanced Fire Systems",
      image: "/products/lsa&ffa/Asset 79.webp",
      category: "Fire Systems",
      description:
        "Advanced fire detection and suppression systems. Integrated solutions for comprehensive fire protection.",
      whatsappMessage:
        "Hi, I'm interested in Advanced Fire Systems. Please provide more information and pricing.",
    },
    {
      id: 32,
      name: "Emergency Response Equipment",
      image: "/products/lsa&ffa/Asset 80.webp",
      category: "Emergency Response",
      description:
        "Emergency response and rescue equipment. Professional gear for emergency situations.",
      whatsappMessage:
        "Hi, I'm interested in Emergency Response Equipment. Please provide more information and pricing.",
    },
    {
      id: 33,
      name: "Marine Survival Systems",
      image: "/products/lsa&ffa/Asset 81.webp",
      category: "Survival Systems",
      description:
        "Complete marine survival systems. Integrated solutions for emergency situations.",
      whatsappMessage:
        "Hi, I'm interested in Marine Survival Systems. Please provide more information and pricing.",
    },
    {
      id: 34,
      name: "Fire Detection Equipment",
      image: "/products/lsa&ffa/Asset 82.webp",
      category: "Fire Detection",
      description:
        "Advanced fire detection equipment. Heat, smoke, and flame detectors for early warning.",
      whatsappMessage:
        "Hi, I'm interested in Fire Detection Equipment. Please provide more information and pricing.",
    },
    {
      id: 35,
      name: "Lifeboat Safety Equipment",
      image: "/products/lsa&ffa/Asset 83.webp",
      category: "Life-Saving",
      description:
        "Lifeboat safety and operational equipment. Complete gear for lifeboat operations and maintenance.",
      whatsappMessage:
        "Hi, I'm interested in Lifeboat Safety Equipment. Please provide more information and pricing.",
    },
    {
      id: 36,
      name: "Marine Fire Protection",
      image: "/products/lsa&ffa/Asset 84.webp",
      category: "Fire Protection",
      description:
        "Comprehensive marine fire protection systems. Complete solutions for vessel fire safety.",
      whatsappMessage:
        "Hi, I'm interested in Marine Fire Protection. Please provide more information and pricing.",
    },
    {
      id: 37,
      name: "Emergency Safety Systems",
      image: "/products/lsa&ffa/Asset 85.webp",
      category: "Safety Systems",
      description:
        "Integrated emergency safety systems. Complete solutions for vessel emergency management.",
      whatsappMessage:
        "Hi, I'm interested in Emergency Safety Systems. Please provide more information and pricing.",
    },
    {
      id: 38,
      name: "Fire Safety Systems",
      image: "/products/lsa&ffa/Asset 86.webp",
      category: "Fire Safety",
      description:
        "Advanced fire safety and prevention systems. Comprehensive solutions for fire risk management.",
      whatsappMessage:
        "Hi, I'm interested in Fire Safety Systems. Please provide more information and pricing.",
    },
    {
      id: 39,
      name: "Marine Emergency Equipment",
      image: "/products/lsa&ffa/Asset 87.webp",
      category: "Emergency Equipment",
      description:
        "Complete marine emergency equipment packages. All essential gear for emergency situations.",
      whatsappMessage:
        "Hi, I'm interested in Marine Emergency Equipment. Please provide more information and pricing.",
    },
    {
      id: 40,
      name: "Professional Fire Systems",
      image: "/products/lsa&ffa/Asset 88.webp",
      category: "Fire Systems",
      description:
        "Professional fire protection and suppression systems. Industrial-grade solutions for maritime applications.",
      whatsappMessage:
        "Hi, I'm interested in Professional Fire Systems. Please provide more information and pricing.",
    },
  ];

  const filteredProducts = lsaProducts.filter(
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
            LSA & FFA (Life-Saving & Fire-Fighting Equipment)
          </h1>
          <p className="page-subtitle">
            Comprehensive Life-Saving Appliances and Fire-Fighting Equipment
            Solutions
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
          <h2>Featured LSA & FFA Products</h2>
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

export default LSAFFA;
