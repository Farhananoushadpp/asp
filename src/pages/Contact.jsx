/**
 * ASP Global Marine Trading LLC - Contact Page
 *
 * React page component with contact form and company information
 * Technology: React functional component with JSX
 */

import Contact from "../components/Contact.jsx";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch with ASP Global Marine Trading LLC
          </p>
        </div>
      </div>

      <Contact />

      <section className="additional-contact-info">
        <div className="container">
          <div className="contact-grid-extended">
            <div className="contact-info-card">
              <h3>Business Hours</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span className="day">Monday - Friday</span>
                  <span className="time">9:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Saturday</span>
                  <span className="time">9:00 AM - 1:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sunday</span>
                  <span className="time">Closed</span>
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <h3>Response Time</h3>
              <div className="response-info">
                <div className="response-item">
                  <span className="channel">Email</span>
                  <span className="time">Within 24 hours</span>
                </div>
                <div className="response-item">
                  <span className="channel">Phone</span>
                  <span className="time">Immediate during business hours</span>
                </div>
                <div className="response-item">
                  <span className="channel">WhatsApp</span>
                  <span className="time">Within 2 hours</span>
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <h3>Service Areas</h3>
              <div className="service-areas">
                <ul>
                  <li>Dubai & UAE</li>
                  <li>Middle East</li>
                  <li>Asia Pacific</li>
                  <li>Europe</li>
                  <li>Africa</li>
                  <li>Americas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="group-companies">
        <div className="container">
          <h2>Group Companies</h2>
          <div className="companies-grid">
            <div className="company-card">
              <h4>Ocean Serenity FZ-LLC</h4>
              <p>Marine services and solutions provider</p>
            </div>
            <div className="company-card">
              <h4>Ocean Infinity Marine Service LLC</h4>
              <p>Comprehensive marine engineering services</p>
            </div>
            <div className="company-card">
              <h4>ANC Arabia Contracting Company</h4>
              <p>Industrial contracting and solutions</p>
            </div>
            <div className="company-card">
              <h4>Warmsol Marine & Industrial Company</h4>
              <p>Marine and industrial equipment solutions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h4>Do you ship internationally?</h4>
              <p>
                Yes, we ship marine equipment and spare parts worldwide through
                our network of logistics partners.
              </p>
            </div>
            <div className="faq-item">
              <h4>Are your products genuine and certified?</h4>
              <p>
                All our products are genuine, OEM, or high-quality equivalents
                with proper certification and compliance with maritime
                standards.
              </p>
            </div>
            <div className="faq-item">
              <h4>Do you provide technical support?</h4>
              <p>
                Yes, we offer technical support and assistance for product
                selection, installation, and maintenance.
              </p>
            </div>
            <div className="faq-item">
              <h4>What payment methods do you accept?</h4>
              <p>
                We accept various payment methods including bank transfers,
                letters of credit, and other secure payment options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
