/**
 * ASP Global Marine Trading LLC - Standard Hero Section
 * 
 * Clean, standard hero design following industry best practices
 * Essential elements only for maximum conversion
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero">
      {/* Video Background */}
      <div className="hero-video-background">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="hero-video"
        >
          <source src="/homebanner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Video Overlay for content readability */}
        <div className="video-overlay"></div>
      </div>

      {/* Standard Hero Content */}
      <div className="hero-container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          
          {/* Main Headline */}
          <h1 className="hero-headline">
            ASP Global Marine Trading LLC
          </h1>
          
          {/* Value Proposition */}
          <p className="hero-subtitle">
            Your Trusted Partner in Marine Solutions
          </p>

          {/* Brief Description */}
          <p className="hero-description">
            Leading supplier of marine and offshore equipment, genuine spare parts, 
            and comprehensive logistics support worldwide.
          </p>

          {/* Call to Action Buttons */}
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary">
              Explore Products
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
