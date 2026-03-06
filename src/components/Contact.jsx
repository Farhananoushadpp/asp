/**
 * ASP Global Marine Trading LLC - Professional Contact Section
 *
 * Modern contact section with NFC card view option
 * Professional maritime corporate design
 */

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  MessageCircle,
  CreditCard,
  X,
} from "lucide-react";
import "../styles/components/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    urgencyLevel: "normal",
  });
  const [showNFC, setShowNFC] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    alert("Thank you for your inquiry. We will contact you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
      urgencyLevel: "normal",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const showPersonNFC = (person) => {
    setSelectedPerson(person);
    setShowNFC(true);
  };

  const closeNFC = () => {
    setShowNFC(false);
    setSelectedPerson(null);
  };

  const contactInfo = {
    headquarters: {
      title: "Headquarters",
      address: "Xavier Business Center, Office Suite A5-18, Dubai, UAE",
      phone: "+971 4 572 4542",
      email: "info@aspglobalmarine.com",
    },
    support: {
      title: "24/7 Support",
      phone: "+971 52 547 8137",
      email: "support@aspglobalmarine.com",
      whatsapp: "+971 52 547 8137",
    },
    hours: {
      title: "Business Hours",
      weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
      weekends: "Saturday: 9:00 AM - 2:00 PM",
      emergency: "Emergency: 24/7 Available",
    },
  };

  const nfcCard = {
    company: {
      name: "ASP Global Marine Trading LLC",
      title: "Marine Equipment Solutions",
      phone: "+971 4 572 4542",
      email: "info@aspglobalmarine.com",
      website: "www.aspglobalmarine.com",
      address: "Dubai, UAE",
    },
    arun: {
      name: "Arun V.V",
      title: "Senior Marine Consultant",
      phone: "+971 XX XXX XXXX",
      email: "arun@aspglobalmarine.com",
      website: "www.aspglobalmarine.com",
      address: "Dubai, UAE",
    },
    yoosaf: {
      name: "Yoosaf N",
      title: "Marine Equipment Specialist",
      phone: "+971 XX XXX XXXX",
      email: "yoosaf@aspglobalmarine.com",
      website: "www.aspglobalmarine.com",
      address: "Dubai, UAE",
    },
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          {/* <span className="section-label">GET IN TOUCH</span> */}
          <h2 className="contact-headline">Contact Our Marine Experts</h2>
          <p className="contact-subtitle">
            Connect with our professional team for comprehensive marine
            equipment solutions and exceptional customer service
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information Cards */}
          <div className="contact-info-section">
            <div className="contact-cards">
              {/* Headquarters Card */}
              <div className="contact-card">
                <div className="card-icon">
                  <MapPin size={24} />
                </div>
                <div className="card-content">
                  <h3>{contactInfo.headquarters.title}</h3>
                  <p className="card-detail">
                    {contactInfo.headquarters.address}
                  </p>
                  <div className="card-contacts">
                    <p>
                      <Phone size={16} /> {contactInfo.headquarters.phone}
                    </p>
                    <p>
                      <Mail size={16} /> {contactInfo.headquarters.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Support Card */}
              <div className="contact-card">
                <div className="card-icon">
                  <Phone size={24} />
                </div>
                <div className="card-content">
                  <h3>{contactInfo.support.title}</h3>
                  <div className="card-contacts">
                    <p>
                      <Phone size={16} /> {contactInfo.support.phone}
                    </p>
                    <p>
                      <Mail size={16} /> {contactInfo.support.email}
                    </p>
                    <p>
                      <MessageCircle size={16} /> WhatsApp:{" "}
                      {contactInfo.support.whatsapp}
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="contact-card">
                <div className="card-icon">
                  <Clock size={24} />
                </div>
                <div className="card-content">
                  <h3>{contactInfo.hours.title}</h3>
                  <div className="card-hours">
                    <p>{contactInfo.hours.weekdays}</p>
                    <p>{contactInfo.hours.weekends}</p>
                    <p className="emergency">{contactInfo.hours.emergency}</p>
                  </div>
                </div>
              </div>

              {/* Arun V.V NFC Card */}
              {/* <div className="contact-card">
                <div className="card-icon">
                  <CreditCard size={24} />
                </div>
                <div className="card-content">
                  <h3>Arun V.V</h3>
                  <p className="card-detail">Senior Marine Consultant</p>
                  <div className="card-contacts">
                    <p>
                      <Phone size={16} /> +971 XX XXX XXXX
                    </p>
                    <p>
                      <Mail size={16} /> arun@aspglobalmarine.com
                    </p>
                    <button
                      className="nfc-card-btn"
                      onClick={() => showPersonNFC("arun")}
                    >
                      <CreditCard size={16} /> View NFC Card
                    </button>
                  </div>
                </div>
              </div> */}

              {/* Yoosaf N NFC Card */}
              {/* <div className="contact-card">
                <div className="card-icon">
                  <CreditCard size={24} />
                </div>
                <div className="card-content">
                  <h3>Yoosaf N</h3>
                  <p className="card-detail">Marine Equipment Specialist</p>
                  <div className="card-contacts">
                    <p>
                      <Phone size={16} /> +971 XX XXX XXXX
                    </p>
                    <p>
                      <Mail size={16} /> yoosaf@aspglobalmarine.com
                    </p>
                    <button
                      className="nfc-card-btn"
                      onClick={() => showPersonNFC("yoosaf")}
                    >
                      <CreditCard size={16} /> View NFC Card
                    </button>
                  </div>
                </div>
              </div> */}
            </div>

            {/* NFC Card Button */}
            {/* <button
              className="nfc-toggle-btn"
              onClick={() => showPersonNFC("company")}
            >
              <CreditCard size={20} />
              {showNFC ? "Hide" : "Show"} NFC Business Card
            </button> */}

            {/* Individual NFC Card Buttons */}
            <div className="individual-nfc-buttons">
              <button
                className="nfc-person-btn arun-btn"
                onClick={() => showPersonNFC("arun")}
              >
                <CreditCard size={18} />
                Arun V.V - NFC Card
              </button>
              <button
                className="nfc-person-btn yoosaf-btn"
                onClick={() => showPersonNFC("yoosaf")}
              >
                <CreditCard size={18} />
                Yoosaf N - NFC Card
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-header">
              <h3>Send us a Message</h3>
              <p>
                Fill out the form below and we&apos;ll respond within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
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
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Marine Equipment Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Please describe your requirements in detail..."
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
                  <option value="normal">
                    Normal - Response within 24 hours
                  </option>
                  <option value="urgent">
                    Urgent - Response within 6 hours
                  </option>
                  <option value="critical">
                    Critical - Immediate response
                  </option>
                </select>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* NFC Business Card Modal */}
        {showNFC && (
          <div className="nfc-modal-overlay" onClick={closeNFC}>
            <div className="nfc-modal" onClick={(e) => e.stopPropagation()}>
              <div className="nfc-modal-header">
                <h3>Digital Business Card</h3>
                <button className="nfc-close-btn" onClick={closeNFC}>
                  <X size={20} />
                </button>
              </div>

              <div className="nfc-card">
                <div className="nfc-card-header">
                  <div className="nfc-logo">
                    <img src="/logo.webp" alt="ASP Logo" />
                  </div>
                  <div className="nfc-company-info">
                    <h4>{nfcCard[selectedPerson].name}</h4>
                    <p>{nfcCard[selectedPerson].title}</p>
                  </div>
                </div>

                <div className="nfc-card-body">
                  <div className="nfc-contact-item">
                    <Phone size={16} />
                    <span>{nfcCard[selectedPerson].phone}</span>
                  </div>
                  <div className="nfc-contact-item">
                    <Mail size={16} />
                    <span>{nfcCard[selectedPerson].email}</span>
                  </div>
                  <div className="nfc-contact-item">
                    <Globe size={16} />
                    <span>{nfcCard[selectedPerson].website}</span>
                  </div>
                  <div className="nfc-contact-item">
                    <MapPin size={16} />
                    <span>{nfcCard[selectedPerson].address}</span>
                  </div>
                </div>

                <div className="nfc-card-footer">
                  <div className="nfc-chip">
                    <div className="chip-lines"></div>
                  </div>
                  <div className="nfc-wifi-icon">
                    <div className="wifi-signal"></div>
                  </div>
                </div>
              </div>

              <div className="nfc-actions">
                <button className="nfc-action-btn primary">
                  <CreditCard size={16} />
                  Add to Contacts
                </button>
                <button className="nfc-action-btn secondary">
                  <Mail size={16} />
                  Share via Email
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
