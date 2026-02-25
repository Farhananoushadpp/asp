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
    </div>
  );
};

export default ContactPage;
