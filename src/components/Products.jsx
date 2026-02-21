import React, { useState } from 'react';

const Products = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const productCategories = [
    {
      id: 'engine-spares-2stroke',
      title: "Engine Spares - 2 Stroke",
      subtitle: "YANMAR, Wärtsilä, MAN, Cummins, MHI, Wingd",
      description: "Complete range of 2-stroke engine spare parts for RT-FLEX, RTA, X, MC/MCC/MEC/MEB, and UEC series",
      icon: "icon-engine"
    },
    {
      id: 'engine-spares-4stroke',
      title: "Engine Spares - 4 Stroke",
      subtitle: "Caterpillar, Cummins, Yanmar, Daihatsu, Weichai",
      description: "Comprehensive 4-stroke engine components including cylinder covers, pistons, valves, and cooling systems",
      icon: "icon-engine"
    },
    {
      id: 'turbochargers',
      title: "Turbochargers & Auxiliary",
      subtitle: "ABB (VTR, VTC), KBB, Mitsubishi (MET)",
      description: "Turbocharger units, bearings, impeller wheels, repair kits, seal plates, and gaskets",
      icon: "icon-turbo"
    },
    {
      id: 'hvac',
      title: "HVAC Compressors & Spares",
      subtitle: "Sabroe, Bitzer, Daikin",
      description: "Bearings, shafts, impellers, mechanical seals, couplings, and wear rings for marine HVAC systems",
      icon: "icon-hvac"
    },
    {
      id: 'pumps',
      title: "Pumps - Marine & Industrial",
      subtitle: "Desmi, Allweiler, Grundfos, Jabsco",
      description: "Twin screw, three screw, gear, centrifugal, deep well, fire, vacuum, and diaphragm pumps with CE/ISO certifications",
      icon: "icon-pump"
    },
    {
      id: 'purifiers',
      title: "Purifiers & Separators",
      subtitle: "Alfa Laval, GEA Westfalia",
      description: "S-Type, P-Type separators, PLC controlled modules, disc separators, and liquid solid centrifuge systems",
      icon: "icon-purifier"
    },
    {
      id: 'boilers',
      title: "Boilers, Heat Exchangers & Air Compressors",
      subtitle: "Tanabe, Sauer, Sperre, Hatlapa",
      description: "Boiler feed pumps, burner nozzles, safety valves, compressor spares, and heat exchanger components",
      icon: "icon-boiler"
    },
    {
      id: 'lsa-ffa',
      title: "LSA & FFA Equipment",
      subtitle: "SOLAS Approved, IMO Compliant",
      description: "Life rafts, lifebuoys, fire hoses, fireman suits, immersion suits, EEBD, SCBA, and oil spill kits",
      icon: "icon-safety"
    },
    {
      id: 'deck-stores',
      title: "Deck Stores & Engine Stores",
      subtitle: "Complete Marine Consumables",
      description: "Ropes, shackles, gauging tapes, navigation lights, tools, welding consumables, filters, PPE kits, and safety equipment",
      icon: "icon-storage"
    }
  ];

  const handleLearnMore = (category) => {
    setSelectedCategory(category);
    if (onCategorySelect) {
      onCategorySelect(category.id);
    }
    // In a real application, this would navigate to a detailed product page
    console.log('Learn more about:', category.title);
  };

  return (
    <section id="products" className="products">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <div className="products-grid">
          {productCategories.map((category) => (
            <div key={category.id} className="product-card">
              <div className="product-icon"><span className={category.icon}></span></div>
              <h3>{category.title}</h3>
              {category.subtitle && <h4>{category.subtitle}</h4>}
              <p>{category.description}</p>
              <button 
                className="btn btn-secondary"
                onClick={() => handleLearnMore(category)}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
