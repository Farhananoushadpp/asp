/**
 * ASP Global Marine Trading LLC - About Section
 * 
 * Company introduction with highlights
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import '../styles/components/About.css';

const About = () => {
  const highlights = [
    {
      icon: 'reliability',
      title: 'Operational Reliability',
      description: 'Consistent delivery of quality products and services'
    },
    {
      icon: 'compliance',
      title: 'Compliance Assurance',
      description: 'Full adherence to maritime regulations and standards'
    },
    {
      icon: 'expertise',
      title: 'Technical Sourcing Expertise',
      description: 'Deep knowledge in marine equipment procurement'
    }
  ];

  const clients = [
    { icon: 'ship', label: 'Shipowners' },
    { icon: 'manager', label: 'Ship Managers' },
    { icon: 'service', label: 'Marine Service Companies' },
    { icon: 'offshore', label: 'Offshore Operators' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          {/* Section Label */}
          <span className="section-label">COMPANY INTRO</span>
          
          {/* Headline */}
          <h2 className="about-headline">About ASP Global Marine</h2>
          
          {/* Description */}
          <p className="about-description">
            ASP Global Marine is a specialized marine and offshore product solution provider 
            delivering high-quality equipment, spare parts, and consumables to vessels and 
            offshore installations worldwide.
          </p>
          
          {/* Client Types */}
          <div className="client-types">
            <span className="client-label">We serve:</span>
            <div className="client-list">
              {clients.map((client, index) => (
                <div key={index} className="client-item">
                  <span className="client-bullet">•</span>
                  <span className="client-text">{client.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Highlights */}
          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">
                  {item.icon === 'reliability' && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"/>
                    </svg>
                  )}
                  {item.icon === 'compliance' && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 2H6C4.9 2 4.2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM12 19L10 17L8 19V11H12V19ZM12 9V4L17 9H12Z"/>
                    </svg>
                  )}
                  {item.icon === 'expertise' && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3L1 9L12 15L21 10.09V17H23V9L12 3ZM5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"/>
                    </svg>
                  )}
                </div>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
