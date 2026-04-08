/**
 * ASP Global Marine Trading LLC - Certifications Page
 *
 * Comprehensive certifications page showcasing company compliance and quality standards
 * Technology: React functional component with JSX
 */

import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";
import PageHero from "../components/PageHero.jsx";
import {
  Award,
  Shield,
  CheckCircle,
  FileText,
  Globe,
  Anchor,
  Star,
  ChevronRight,
} from "lucide-react";
import "../styles/pages/Certifications.css";

const Certifications = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Certifications - ASP Global Marine Trading LLC",
    description:
      "View ASP Global Marine Trading LLC ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications ensuring quality management, environmental responsibility, and occupational health and safety.",
    url: "https://aspglobalmarine.com/certifications",
    mainEntity: {
      "@type": "Organization",
      name: "ASP Global Marine Trading LLC",
      url: "https://aspglobalmarine.com",
      logo: "https://aspglobalmarine.com/logo.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Xavier Business Center, Office Suite A5-18",
        addressLocality: "Dubai",
        addressCountry: "UAE",
      },
      certifications: [
        {
          "@type": "Certification",
          name: "ISO 9001:2015",
          description: "Quality Management Systems",
        },
        {
          "@type": "Certification",
          name: "ISO 14001:2015",
          description: "Environmental Management Systems",
        },
        {
          "@type": "Certification",
          name: "ISO 45001:2018",
          description: "Occupational Health and Safety Management Systems",
        },
      ],
    },
  };

  const certifications = [
    {
      id: 1,
      badge: "ISO",
      title: "ISO 9001:2015",
      description:
        "Quality Management Systems certification ensuring consistent quality and operational excellence in marine equipment supply and service delivery.",
      icon: Award,
      category: "Quality Management",
      features: [
        "Quality Management Systems",
        "Process Excellence",
        "Continuous Improvement",
        "Customer Satisfaction",
      ],
    },
    {
      id: 2,
      badge: "SOLAS",
      title: "SOLAS Compliance",
      description:
        "Safety of Life at Sea compliance for maritime safety equipment and operational standards, ensuring the highest safety protocols for marine operations.",
      icon: Shield,
      category: "Safety Standards",
      features: [
        "Maritime Safety Equipment",
        "Life Saving Appliances",
        "Fire Protection Systems",
        "Navigation Safety",
      ],
    },
    {
      id: 3,
      badge: "IMO",
      title: "IMO Certified",
      description:
        "International Maritime Organization certification for global maritime compliance, ensuring adherence to international maritime conventions and regulations.",
      icon: Globe,
      category: "International Standards",
      features: [
        "International Maritime Conventions",
        "Global Compliance",
        "Marine Environmental Protection",
        "Safety Regulations",
      ],
    },
    {
      id: 4,
      badge: "CLASS",
      title: "Classification Society Approved",
      description:
        "Approved by leading classification societies including DNV, ABS, Lloyd's Register, and Bureau Veritas for marine equipment and services.",
      icon: Anchor,
      category: "Classification",
      features: [
        "DNV Approved",
        "ABS Certified",
        "Lloyd's Register",
        "Bureau Veritas",
      ],
    },
    {
      id: 5,
      badge: "CE",
      title: "CE Marking",
      description:
        "European Conformity marking indicating compliance with EU standards for marine equipment sold in the European Economic Area.",
      icon: CheckCircle,
      category: "European Standards",
      features: [
        "EU Compliance",
        "Marine Equipment Directive",
        "Safety Standards",
        "Quality Assurance",
      ],
    },
    {
      id: 6,
      badge: "API",
      title: "API Certified",
      description:
        "American Petroleum Institute certification for petroleum and marine industry equipment, ensuring industry standards compliance.",
      icon: Star,
      category: "Industry Standards",
      features: [
        "Petroleum Industry Standards",
        "Marine Equipment",
        "Quality Specifications",
        "Technical Compliance",
      ],
    },
  ];

  return (
    <>
      <SEO
        title="ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 Certifications | ASP Global Marine Trading LLC"
        description="ASP Global Marine Trading LLC ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications for quality management, environmental responsibility, and occupational health and safety in marine equipment supply."
        keywords="ISO 9001 marine equipment, ISO 14001 environmental management, ISO 45001 occupational health, ASP Global Marine ISO certification, marine equipment quality standards, safety marine supplier"
        canonicalUrl="https://aspglobalmarine.com/certifications"
        structuredData={structuredData}
      />

      {/* Page Hero */}
      <PageHero
        title="Certifications & Compliance"
        subtitle="Quality Assurance & International Standards"
        description="Our commitment to excellence is demonstrated through internationally recognized certifications and compliance with global maritime standards."
        icon={Award}
        backgroundImage="/certifications.jpg"
      />

      {/* Certification Images Gallery */}
      <section className="certifications-gallery">
        <div className="container-full">
          <div className="certifications-gallery-header">
            <h2>Our Certification Documents</h2>
            <p className="text-center">
              View our official certification documents and compliance
              certificates that demonstrate our commitment to quality and
              international standards.
            </p>
          </div>

          <div className="certifications-gallery-grid">
            {/* ISO 9001:2015 Certificate */}
            <div className="certification-image-card">
              <div className="certification-image-wrapper">
                <div className="certification-image-overlay permanent">
                  <div className="certification-overlay-content">
                    <h4>ISO 9001:2015</h4>
                    <p>Quality Management Systems</p>
                    <button
                      className="view-certificate-btn"
                      onClick={() => window.open("/certificate2.pdf", "_blank")}
                    >
                      View Full Certificate
                    </button>
                  </div>
                </div>
              </div>
              <div className="certification-image-info">
                <h3>ISO 9001:2015 Certificate</h3>
                <p>
                  Quality Management Systems certification ensuring consistent
                  quality and operational excellence.
                </p>
                <div className="certification-meta">
                  <span className="certification-date">Valid until: 2025</span>
                  <span className="certification-status active">Active</span>
                </div>
              </div>
            </div>

            {/* ISO 14001:2015 Certificate */}
            <div className="certification-image-card">
              <div className="certification-image-wrapper">
                <div className="certification-image-overlay permanent">
                  <div className="certification-overlay-content">
                    <h4>ISO 14001:2015</h4>
                    <p>Environmental Management Systems</p>
                    <button
                      className="view-certificate-btn"
                      onClick={() => window.open("/certificate1.pdf", "_blank")}
                    >
                      View Full Certificate
                    </button>
                  </div>
                </div>
              </div>
              <div className="certification-image-info">
                <h3>ISO 14001:2015 Certificate</h3>
                <p>
                  Environmental Management Systems certification ensuring
                  environmental responsibility and sustainable practices.
                </p>
                <div className="certification-meta">
                  <span className="certification-date">Valid until: 2025</span>
                  <span className="certification-status active">Active</span>
                </div>
              </div>
            </div>

            {/* ISO 45001:2018 Certificate */}
            <div className="certification-image-card">
              <div className="certification-image-wrapper">
                <div className="certification-image-overlay permanent">
                  <div className="certification-overlay-content">
                    <h4>ISO 45001:2018</h4>
                    <p>Occupational Health and Safety Management Systems</p>
                    <button
                      className="view-certificate-btn"
                      onClick={() => window.open("/certificate3.pdf", "_blank")}
                    >
                      View Full Certificate
                    </button>
                  </div>
                </div>
              </div>
              <div className="certification-image-info">
                <h3>ISO 45001:2018 Certificate</h3>
                <p>
                  Occupational Health and Safety Management Systems
                  certification ensuring workplace safety and employee
                  well-being.
                </p>
                <div className="certification-meta">
                  <span className="certification-date">Valid until: 2025</span>
                  <span className="certification-status active">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="certifications-cta">
        <div className="container-full">
          <div className="certifications-cta-content">
            <h2>Partner with a Certified Marine Supplier</h2>
            <p>
              Work with a trusted partner who meets the highest international
              standards for quality, safety, and compliance in marine equipment
              supply.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <ChevronRight size={20} />
                Contact Us
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
