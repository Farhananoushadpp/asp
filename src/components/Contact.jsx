import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
    setIsSubmitting(false);
    alert('Thank you for your inquiry. We will contact you soon!');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to discuss your marine equipment needs? Our team is here to help.
          </p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon icon-location"></div>
                <div className="contact-details">
                  <h4>Office Address</h4>
                  <p>Xavier Business Center<br />Office Suite No: A5-18<br />Dubai, UAE</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon icon-phone"></div>
                <div className="contact-details">
                  <h4>Phone Numbers</h4>
                  <p><a href="tel:+97145724542">+971 4 572 4542</a><br />
                  <a href="tel:+971525478137">+971 52 547 8137</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon icon-email"></div>
                <div className="contact-details">
                  <h4>Email Address</h4>
                  <p><a href="mailto:info@aspglobalmarine.com">info@aspglobalmarine.com</a></p>
                </div>
              </div>
            </div>
            
            <div className="contact-features">
              <div className="feature-item">
                <span className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                  </svg>
                </span>
                <span className="feature-text">Quick Response</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </span>
                <span className="feature-text">Global Shipping</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </span>
                <span className="feature-text">Quality Guaranteed</span>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="form-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Ltd."
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your marine equipment requirements..."
                  rows="6"
                  required
                  className="form-textarea"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary btn-large"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="btn-arrow">→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
