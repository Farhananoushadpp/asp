/**
 * ASP Global Marine Trading LLC - LSA & FFA (Life-Saving & Fire-Fighting Equipment) Page
 *
 * Comprehensive life-saving appliances and fire-fighting equipment solutions
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import "../styles/pages/Products.css";
import { useState } from "react";
import { MessageCircle, Mail, Phone } from "lucide-react";

const LSAFFA = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const lsaProducts = [
    {
      id: 1,
      name: "Sea Sickness Tablet",
      image: "/products/lsa&ffa/Asset 45.webp",
      category: "Sea Sickness Tablet",
      description: "Sea Sickness Tablet",
      whatsappMessage:
        "Hi, I'm interested in Sea Sickness Tablet. Please provide more information and pricing.",
    },
    {
      id: 2,
      name: "Ration",
      image: "/products/lsa&ffa/Asset 46.webp",
      category: "Ration",
      description: "Ration",
      whatsappMessage:
        "Hi, I'm interested in Ration. Please provide more information and pricing.",
    },
    {
      id: 3,
      name: "Fire Coupling Seal",
      image: "/products/lsa&ffa/Asset 47.webp",
      category: "Fire Coupling Seal",
      description: "Fire Coupling Seal",
      whatsappMessage:
        "Hi, I'm interested in Fire Coupling Seal. Please provide more information and pricing.",
    },
    {
      id: 4,
      name: "Oil Absorbent Boom",
      image: "/products/lsa&ffa/Asset 48.webp",
      category: "Oil Absorbent Boom",
      description: "Oil Absorbent Boom",
      whatsappMessage:
        "Hi, I'm interested in Oil Absorbent Boom. Please provide more information and pricing.",
    },
    {
      id: 5,
      name: "Oil Absorbent Spill Kit",
      image: "/products/lsa&ffa/Asset 49.webp",
      category: "Oil Absorbent Spill Kit",
      description: "Oil Absorbent Spill Kit",
      whatsappMessage:
        "Hi, I'm interested in Oil Absorbent Spill Kit. Please provide more information and pricing.",
    },
    {
      id: 6,
      name: "Line Throwing Apparatus",
      image: "/products/lsa&ffa/Asset 50.webp",
      category: "Line Throwing Apparatus",
      description: "Line Throwing Apparatus",
      whatsappMessage:
        "Hi, I'm interested in Line Throwing Apparatus.information and pricing.",
    },
    {
      id: 7,
      name: "MOB",
      image: "/products/lsa&ffa/Asset 51.webp",
      category: "MOB",
      description: "MOB",
      whatsappMessage:
        "Hi, I'm interested in MOB.Please provide more information and pricing.",
    },
    {
      id: 8,
      name: "Scramble Net",
      image: "/products/lsa&ffa/Asset 52.webp",
      category: "Scramble Net",
      description: "Scramble Net",
      whatsappMessage:
        "Hi, I'm interested in Scramble Net.Please provide more information and pricing.",
    },
    {
      id: 9,
      name: "Aluminum Gangway",
      image: "/products/lsa&ffa/Asset 53.webp",
      category: "Aluminum Gangway",
      description: "Aluminum Gangway.",
      whatsappMessage:
        "Hi, I'm interested in Aluminum Gangway. Please provide more information and pricing.",
    },
    {
      id: 10,
      name: "Pilot Ladder",
      image: "/products/lsa&ffa/Asset 54.webp",
      category: "Pilot Ladder",
      description: "Pilot Ladder",
      whatsappMessage:
        "Hi, I'm interested in Pilot Ladder. Please provide more information and pricing.",
    },
    {
      id: 11,
      name: "Breathing Apparatus",
      image: "/products/lsa&ffa/Asset 55.webp",
      category: "Safety Equipment",
      description: "Breathing Apparatus",
      whatsappMessage:
        "Hi, I'm interested in Breathing Apparatus. Please provide more information and pricing.",
    },
    {
      id: 12,
      name: "Oxygen Resuscitator",
      image: "/products/lsa&ffa/Asset 56.webp",
      category: "Fire Safety",
      description: "Oxygen Resuscitator.",
      whatsappMessage:
        "Hi, I'm interested in Oxygen Resuscitator. Please provide more information and pricing.",
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

        {/* Product Grid Layout - 4 Products Per Row */}
        <section className="product-grid-layout-four">
          {productRows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid-row-four">
              {row.map((product) => (
                <div key={product.id} className="product-card-four">
                  <div className="product-image-four">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.style.background =
                          "linear-gradient(135deg, #f0f9ff, #e6f7f4)";
                        e.target.parentElement.innerHTML =
                          '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--primary-color); font-weight: 600; text-align: center; padding: 20px;">' +
                          product.name +
                          "</div>";
                      }}
                    />
                  </div>
                  <div className="product-info-four">
                    <h3 className="product-name-four">{product.name}</h3>
                    <p className="product-category-four">{product.category}</p>
                    <p className="product-description-four">
                      {product.description}
                    </p>
                    <div className="product-actions-four">
                      <a
                        href={`https://wa.me/971525478137?text=${encodeURIComponent(product.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-btn-four whatsapp-btn-four"
                        aria-label="WhatsApp"
                      >
                        <span className="contact-icon-four">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.709-.508-.173-.006-.371-.006-.57-.006-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.24 3.076c.173.198 2.445 3.732 5.927 5.236.828.357 1.476.57 1.979.73.828.262 1.582.225 2.178.136.664-.099 2.04-1.33 2.329-2.618.288-1.288.148-2.388.074-2.618-.074-.23-.27-.347-.567-.496z" />
                            <path
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                              opacity=".3"
                            />
                          </svg>
                        </span>
                        WhatsApp
                      </a>
                      <a
                        href={`mailto:info@aspglobalmarine.com?subject=${encodeURIComponent(product.emailMessage ? product.emailMessage.split("\n")[0].replace("Subject: ", "") : "Inquiry about " + product.name)}&body=${encodeURIComponent(product.emailMessage ? product.emailMessage.split("\n").slice(2).join("\n").trim() : "Dear ASP Global Marine Trading,\n\nI'm interested in " + product.name + ". Please provide more information and pricing.\n\nThank you.")}`}
                        className="contact-btn-four email-btn-four"
                        aria-label="Email"
                      >
                        <span className="contact-icon-four">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                        </span>
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default LSAFFA;
