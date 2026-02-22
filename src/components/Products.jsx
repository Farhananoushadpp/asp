const Products = ({ onCategorySelect }) => {
  const productCategories = [
    {
      id: 'engine-spares-2stroke',
      title: "Engine Spares - 2 Stroke",
      subtitle: "YANMAR, Wärtsilä, MAN Energy Solutions, Cummins, MHI, Wingd",
      description: "Complete range of 2-stroke engine spare parts for RT-FLEX, RTA, X, MC/MCC/MEC/MEB, and UEC series. Including pistons, piston crowns, rings, cylinder liners, fuel pumps, injection nozzles, camshafts, oil pumps, and sensors.",
      icon: "icon-engine",
      features: ["Pistons & Piston Crowns", "Cylinder Liners & Covers", "Fuel Pumps & Injection Nozzles", "Camshafts & Oil Pumps", "Sensors & Auxiliary Parts"]
    },
    {
      id: 'engine-spares-4stroke',
      title: "Engine Spares - 4 Stroke",
      subtitle: "Caterpillar, Cummins, Yanmar, Daihatsu, Weichai",
      description: "Comprehensive 4-stroke engine components including cylinder covers, piston crowns, cooling jackets, air starting motors, fuel transfer pumps, cam shafts, valves, heat exchangers, and lube oil pumps.",
      icon: "icon-engine",
      features: ["Cylinder Covers & Pistons", "Cooling Systems", "Air Starting Motors", "Valves & Cam Shafts", "Heat Exchangers & Pumps"]
    },
    {
      id: 'turbochargers',
      title: "Turbochargers & Auxiliary Engine Products",
      subtitle: "ABB (VTR, VTC Series), KBB, Mitsubishi (MET Series)",
      description: "Turbocharger units, bearings, impeller wheels, repair kits, seal plates, and gaskets for marine auxiliary engines and main propulsion systems.",
      icon: "icon-turbo",
      features: ["Turbocharger Units", "Bearings & Impellers", "Repair Kits", "Seal Plates & Gaskets", "Complete Overhaul Solutions"]
    },
    {
      id: 'hvac',
      title: "HVAC Compressors & Spares",
      subtitle: "Sabroe, Bitzer, Daikin",
      description: "Bearings, shafts, impellers, mechanical seals, couplings, and wear rings for marine HVAC and refrigeration systems on vessels and offshore installations.",
      icon: "icon-hvac",
      features: ["Bearings & Shafts", "Impellers & Mechanical Seals", "Couplings & Wear Rings", "Compressor Spares", "HVAC System Components"]
    },
    {
      id: 'pumps',
      title: "Pumps - Marine & Industrial",
      subtitle: "Desmi, Allweiler, Grundfos, Jabsco",
      description: "Twin screw, three screw, gear, centrifugal, deep well, emergency fire, vacuum, and diaphragm pumps. CE, ISO9001, ISO14001, OHSAS18001 certified with CCS, BV, KR, ABS, NK, RINA, RMRS class approvals.",
      icon: "icon-pump",
      features: ["Twin/Three Screw Pumps", "Gear & Centrifugal Pumps", "Fire & Vacuum Pumps", "Class Approved Equipment", "Industrial Pump Solutions"]
    },
    {
      id: 'purifiers',
      title: "Purifiers & Separators",
      subtitle: "Alfa Laval, GEA Westfalia",
      description: "S-Type Separator, P-Type Separator, PLC controlled separator modules, disc separators, marine oil separators, and liquid solid centrifuge systems for efficient fuel and oil treatment.",
      icon: "icon-purifier",
      features: ["S-Type & P-Type Separators", "PLC Controlled Modules", "Disc Separators", "Marine Oil Separators", "Centrifuge Systems"]
    },
    {
      id: 'boilers',
      title: "Boilers, Heat Exchangers & Air Compressor Spares",
      subtitle: "Tanabe, Sauer Compressors, Sperre, Hatlapa",
      description: "Boiler feed pumps, burner nozzles, safety valves, pressure gauges, LP/HP valves, piston rings, cylinder liners, lube oil pumps, and unloader valves for marine boiler and compressor systems.",
      icon: "icon-boiler",
      features: ["Boiler Feed Pumps & Burners", "Safety Valves & Gauges", "Compressor Spares", "Heat Exchanger Components", "Complete Boiler Systems"]
    },
    {
      id: 'safety',
      title: "LSA & FFA (Life Saving & Fire Fighting Equipment)",
      subtitle: "SOLAS Approved & IMO Compliant",
      description: "Complete range of life-saving appliances and fire fighting equipment including life rafts, lifebuoys, fire hoses, fireman suits, immersion suits, EEBD, SCBA, and pyrotechnics.",
      icon: "icon-safety",
      features: ["Life Rafts & Lifebuoys", "Fire Fighting Equipment", "Immersion Suits & EEBD", "SCBA & Gas Detectors", "SOLAS Compliant Equipment"]
    },
    {
      id: 'deck-stores',
      title: "Deck Stores & Engine Stores",
      subtitle: "Complete Marine Consumables",
      description: "Ropes, shackles, gauging tapes, navigation lights, tools, welding consumables, filters, bearings, mechanical seals, high pressure washers, explosion proof lamps, PPE kits, and first aid supplies.",
      icon: "icon-storage",
      features: ["Ropes & Shackles", "Navigation Equipment", "Tools & Welding Supplies", "Safety Equipment & PPE", "Marine Consumables"]
    }
  ];

  const handleLearnMore = (category) => {
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
