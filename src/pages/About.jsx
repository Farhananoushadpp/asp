/**
 * ASP Global Marine Trading LLC - About Page
 *
 * React page component with detailed company information
 * Technology: React functional component with JSX
 */

import React from "react";
import About from "../components/About.jsx";
import Strengths from "../components/Strengths.jsx";
import Certifications from "../components/Certifications.jsx";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">About ASP Global Marine Trading LLC</h1>
          <p className="page-subtitle">
            Your trusted partner in marine and offshore solutions since 2005
          </p>
        </div>
      </div>

      <About />
      <Strengths />
      <Certifications />
      
      <section className="company-mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-box">
              <h2>Our Mission</h2>
              <p>
                To deliver accurate, reliable, and compliant marine solutions at the right time, every time.
              </p>
              <p>
                We focus on operational reliability, technical compliance, maritime industry standards, and long-term client partnerships.
              </p>
            </div>
            <div className="vision-box">
              <h2>Our Vision</h2>
              <p>
                To become a globally trusted marine supply partner known for technical excellence and operational reliability.
              </p>
              <p>
                Serving shipowners, ship managers, operators, and offshore companies worldwide with unparalleled expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="company-history">
        <div className="container">
          <div className="history-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2005 and part of Ocean Serenity Group, ASP Global Marine Trading LLC has established itself as a leading supplier 
              of marine and offshore equipment. With strong sourcing networks across Europe and Asia, we understand 
              the critical importance of quality, reliability, and timely delivery.
            </p>
            <p>
              Our commitment to excellence has earned us the trust of ship owners, operators, and offshore 
              installations worldwide. We pride ourselves on our technical expertise, competitive pricing, 
              and unwavering dedication to customer satisfaction.
            </p>
            <div className="group-companies">
              <h3>Group Companies</h3>
              <div className="companies-grid">
                <div className="company-item">Ocean Serenity FZ-LLC</div>
                <div className="company-item">Ocean Infinity Marine Service LLC</div>
                <div className="company-item">ANC Arabia Contracting Company</div>
                <div className="company-item">Warmsol Marine & Industrial Company</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
