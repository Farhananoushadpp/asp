/**
 * ASP Global Marine Trading LLC - Deck Stores & General Marine Stores Page
 * 
 * Deck stores and general marine supplies
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/pages/Products.css';

const DeckStoresGeneral = () => {
  const products = [
    {
      name: "Mooring Equipment",
      description: "Mooring ropes, chains and deck fittings",
      manufacturers: ["Bridon", "Lankhorst", "Samson", "Rope", "Van der Giessen"]
    },
    {
      name: "Anchoring Equipment",
      description: "Anchors, chains and anchoring accessories",
      manufacturers: ["Vicinay", "Briare", "Mampaey", "Trelleborg", "Van der Giessen"]
    },
    {
      name: "Deck Fittings",
      description: "Bollards, fairleads, chocks and deck hardware",
      manufacturers: ["Mampaey", "Trelleborg", "Lankhorst", "Van der Giessen", "Hendrik"]
    },
    {
      name: "Safety Equipment",
      description: "Personal protective equipment and safety gear",
      manufacturers: ["Survitec", "Viking", "Hansen Protection", "Mustang", "Crewsaver"]
    },
    {
      name: "Paints & Coatings",
      description: "Marine paints, coatings and surface preparation",
      manufacturers: ["Jotun", "Hempel", "International Paint", "PPG", "Chugoku"]
    },
    {
      name: "Cleaning Supplies",
      description: "Marine cleaning chemicals and supplies",
      manufacturers: ["Unitor", "Drew", "Jotun", "Hempel", "International Paint"]
    }
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Deck Stores & General Marine Stores</h1>
          <p className="page-subtitle">
            Comprehensive deck equipment and general marine supplies
          </p>
        </div>

        <section className="product-intro">
          <p>
            We provide a complete range of deck stores and general marine supplies essential for 
            vessel operations. Our inventory includes mooring equipment, anchoring gear, deck fittings, 
            safety equipment, paints, and cleaning supplies from leading manufacturers, ensuring 
            comprehensive support for all deck operations.
          </p>
        </section>

        <section className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-header">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
              </div>
              <div className="product-manufacturers">
                <h4>Available for:</h4>
                <div className="manufacturer-list">
                  {product.manufacturers.map((manufacturer, idx) => (
                    <span key={idx} className="manufacturer-tag">{manufacturer}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="deck-categories">
          <h2>Deck Equipment Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <h3>Mooring & Anchoring</h3>
              <p>Complete mooring and anchoring solutions</p>
            </div>
            <div className="category-card">
              <h3>Deck Hardware</h3>
              <p>Essential deck fittings and hardware</p>
            </div>
            <div className="category-card">
              <h3>Safety Equipment</h3>
              <p>Personal and vessel safety equipment</p>
            </div>
            <div className="category-card">
              <h3>Maintenance Supplies</h3>
              <p>Paints, coatings and cleaning supplies</p>
            </div>
          </div>
        </section>

        <section className="quality-standards">
          <h2>Quality Standards</h2>
          <div className="standards-grid">
            <div className="standard-card">
              <h3>SOLAS Compliant</h3>
              <p>All safety equipment meets SOLAS requirements</p>
            </div>
            <div className="standard-card">
              <h3>Class Approved</h3>
              <p>Equipment approved by classification societies</p>
            </div>
            <div className="standard-card">
              <h3>ISO Certified</h3>
              <p>Quality management systems certified</p>
            </div>
          </div>
        </section>

        <section className="quality-assurance">
          <h2>Quality Assurance</h2>
          <div className="quality-points">
            <div className="quality-item">
              <h4>Quality Brands</h4>
              <p>Products from leading marine equipment manufacturers</p>
            </div>
            <div className="quality-item">
              <h4>Technical Support</h4>
              <p>Expert advice on equipment selection and application</p>
            </div>
            <div className="quality-item">
              <h4>Complete Inventory</h4>
              <p>Comprehensive stock of essential deck supplies</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DeckStoresGeneral;
