import React from 'react';

const Strengths = () => {
  const strengths = [
    {
      icon: "icon-portfolio",
      title: "Comprehensive Marine Product Portfolio",
      description: "Wide range of marine and offshore equipment for all vessel types"
    },
    {
      icon: "icon-oem",
      title: "Genuine, OEM & Equivalent Spare Parts",
      description: "Authentic parts ensuring optimal performance and longevity"
    },
    {
      icon: "icon-solas",
      title: "SOLAS & IMO Compliant Equipment",
      description: "All equipment meets international maritime safety standards"
    },
    {
      icon: "icon-fast",
      title: "Rapid Global Delivery",
      description: "Fast and reliable shipping to ports worldwide"
    },
    {
      icon: "icon-network",
      title: "Strong Supplier Network",
      description: "Strategic partnerships across Europe and Asia"
    },
    {
      icon: "icon-price",
      title: "Competitive Pricing",
      description: "Quality solutions without compromising on affordability"
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
