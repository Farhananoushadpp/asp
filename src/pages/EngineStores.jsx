/**
 * ASP Global Marine Trading LLC - Engine Stores Page
 * 
 * Engine room stores and equipment
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/pages/Products.css';

const EngineStores = () => {
  const products = [
    {
      name: "Engine Room Tools",
      description: "Specialized tools for engine room maintenance",
      manufacturers: ["Bahco", "Stanley", "Snap-on", "Facom", "Beta"]
    },
    {
      name: "Gaskets & Seals",
      description: "Engine gaskets, seals and packing materials",
      manufacturers: ["Victor Reinz", "Elring", "Gasket", "Corteco", "Payen"]
    },
    {
      name: "Fasteners",
      description: "Marine grade bolts, nuts and fastening hardware",
      manufacturers: ["Bumax", "Unbrako", "Holo-Krome", "Stanley", "Anker"]
    },
    {
      name: "Lubricants & Oils",
      description: "Marine lubricants, oils and greases",
      manufacturers: ["Shell", "Total", "ExxonMobil", "BP", "Chevron"]
    },
    {
      name: "Filters",
      description: "Oil, fuel and air filters for marine engines",
      manufacturers: ["Mann+Hummel", "Donaldson", "Baldwin", "Fleetguard", "Wix"]
    },
    {
      name: "Electrical Components",
      description: "Engine room electrical components and wiring",
      manufacturers: ["Siemens", "ABB", "Schneider", "Hager", "Legrand"]
    }
  ];

  return (
    <div className="product-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Engine Stores</h1>
          <p className="page-subtitle">
            Comprehensive engine room supplies and equipment
          </p>
        </div>

        <section className="product-intro">
          <p>
            We provide a complete range of engine room stores and equipment essential for vessel 
            maintenance and operation. Our inventory includes specialized tools, gaskets, fasteners, 
            lubricants, filters, and electrical components from leading manufacturers, ensuring 
            comprehensive support for all engine room operations.
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

        <section className="engine-categories">
          <h2>Engine Store Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <h3>Maintenance Tools</h3>
              <p>Specialized tools for engine maintenance</p>
            </div>
            <div className="category-card">
              <h3>Consumables</h3>
              <p>Gaskets, seals and consumable items</p>
            </div>
            <div className="category-card">
              <h3>Lubricants & Fluids</h3>
              <p>Marine lubricants and hydraulic fluids</p>
            </div>
            <div className="category-card">
              <h3>Electrical Supplies</h3>
              <p>Engine room electrical components</p>
            </div>
          </div>
        </section>

        <section className="maintenance-support">
          <h2>Maintenance Support</h2>
          <div className="support-grid">
            <div className="support-card">
              <h3>Preventive Maintenance</h3>
              <p>Supplies for scheduled maintenance programs</p>
            </div>
            <div className="support-card">
              <h3>Emergency Repairs</h3>
              <p>Critical spares for emergency repairs</p>
            </div>
            <div className="support-card">
              <h3>Technical Support</h3>
              <p>Expert guidance on maintenance procedures</p>
            </div>
          </div>
        </section>

        <section className="quality-assurance">
          <h2>Quality Assurance</h2>
          <div className="quality-points">
            <div className="quality-item">
              <h4>Marine Grade</h4>
              <p>All products suitable for marine environments</p>
            </div>
            <div className="quality-item">
              <h4>Technical Specifications</h4>
              <p>Products meeting marine technical standards</p>
            </div>
            <div className="quality-item">
              <h3>Complete Inventory</h3>
              <p>Comprehensive stock of essential items</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EngineStores;
