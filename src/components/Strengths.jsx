const Strengths = () => {
  const strengths = [
    {
      icon: "icon-portfolio",
      title: "Comprehensive Marine Product Portfolio",
      description: "Wide range of marine and offshore equipment for all vessel types including engines, pumps, compressors, safety equipment, and consumables."
    },
    {
      icon: "icon-oem",
      title: "Genuine, OEM & Equivalent Spare Parts Sourcing",
      description: "Authentic parts ensuring optimal performance and longevity with access to original manufacturer specifications and quality alternatives."
    },
    {
      icon: "icon-solas",
      title: "SOLAS / IMO / Class Compliant Equipment",
      description: "All equipment meets international maritime safety standards and classification society requirements for global vessel operations."
    },
    {
      icon: "icon-fast",
      title: "Rapid Response & Global Logistics",
      description: "Fast and reliable shipping to ports worldwide with strong distribution networks and experienced logistics partners."
    },
    {
      icon: "icon-network",
      title: "Strong Supplier Network (Europe & Asia)",
      description: "Strategic partnerships across Europe and Asia ensuring reliable sourcing and competitive pricing for all marine equipment needs."
    },
    {
      icon: "icon-price",
      title: "Competitive Pricing",
      description: "Quality solutions without compromising on affordability, offering value-driven pricing for marine and offshore equipment."
    }
  ];

  return (
    <section className="strengths">
      <div className="container">
        <h2 className="section-title">Our Strengths</h2>
        <div className="strengths-grid">
          {strengths.map((strength, index) => (
            <div key={index} className="strength-card">
              <div className="strength-icon"><span className={strength.icon}></span></div>
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
