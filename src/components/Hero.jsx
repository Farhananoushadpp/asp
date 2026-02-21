import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Marine & Offshore Solutions Engineered for Reliability
          </h1>
          <p className="hero-subtitle">
            Supplying Genuine, OEM & Equivalent Marine Spare Parts and Safety Equipment Worldwide.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={navigateToContact}
            >
              Request a Quote
            </button>
            <button 
              className="btn btn-outline"
              onClick={navigateToContact}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
