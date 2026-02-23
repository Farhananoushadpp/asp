/**
 * ASP Global Marine Trading LLC - Contact Section
 * 
 * Office info and Quick RFQ Form
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import { useState } from 'react';
import '../styles/components/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vesselName: '',
    productRequirement: '',
    urgencyLevel: 'normal'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('RFQ Submitted:', formData);
    alert('Thank you for your inquiry. We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      vesselName: '',
      productRequirement: '',
      urgencyLevel: 'normal'
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <span className="section-label">GET IN TOUCH</span>
        <h2 className="contact-headline">Contact Us</h2>

        <div className="contact-grid">
          {/* Office Info */}
          <div className="contact-info">
            <h3 className="info-title">Office Location</h3>
            <div className="info-block">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="info-content">
                <p className="info-label">Address</p>
                <p className="info-value">
                  Xavier Business Center<br />
                  Office Suite A5-18<br />
                  Dubai, UAE
                </p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="info-content">
                <p className="info-label">Phone</p>
                <p className="info-value">
                  +971 4 572 4542<br />
                  +971 52 547 8137
                </p>
              </div>
            </div>

            <div className="info-block">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="info-content">
                <p className="info-label">Email</p>
                <p className="info-value">info@aspglobalmarine.com</p>
              </div>
            </div>
          </div>

          {/* RFQ Form */}
          <div className="contact-form">
            <h3 className="form-title">Quick RFQ</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="vesselName">Vessel Name</label>
                <input
                  type="text"
                  id="vesselName"
                  name="vesselName"
                  value={formData.vesselName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="productRequirement">Product Requirement</label>
                <textarea
                  id="productRequirement"
                  name="productRequirement"
                  rows="4"
                  value={formData.productRequirement}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="urgencyLevel">Urgency Level</label>
                <select
                  id="urgencyLevel"
                  name="urgencyLevel"
                  value={formData.urgencyLevel}
                  onChange={handleChange}
                >
                  <option value="normal">Normal</option>
                  <option value="urgent">Urgent</option>
                  <option value="critical">Critical</option>
                </select>
              </div>

              <button type="submit" className="submit-btn">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
