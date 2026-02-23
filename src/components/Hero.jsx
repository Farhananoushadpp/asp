/**
 * ASP Global Marine Trading LLC - Hero Section
 * 
 * Enhanced hero with ocean wave animation and trust badges
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const trustBadges = [
    { icon: 'shield', label: 'SOLAS Compliant' },
    { icon: 'certificate', label: 'IMO Approved' },
    { icon: 'globe', label: 'Global Logistics Support' }
  ];

  return (
    <section className="hero">
      {/* Ocean Wave Background */}
      <div className="hero-ocean">
        <div className="hero-wave wave-1"></div>
        <div className="hero-wave wave-2"></div>
        <div className="hero-wave wave-3"></div>
        <div className="hero-gradient-overlay"></div>
      </div>

      {/* Floating Particles */}
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${12 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          {/* Badge */}
          <div className="hero-badge">
            <svg className="badge-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L13.09 8.26L20 9.27L15 13.14L16.18 20.02L12 16.77L7.82 20.02L9 13.14L4 9.27L10.91 8.26L12 2Z"/>
            </svg>
            <span className="badge-text">Driven by Quality. Propelled by Trust.</span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline">
            <span className="headline-line">Reliable Marine &</span>
            <span className="headline-line">Offshore Product</span>
            <span className="headline-line highlight">Solutions Worldwide</span>
          </h1>

          {/* Subtext */}
          <p className="hero-subtext">
            Delivering high-quality marine equipment, genuine spare parts, safety systems 
            and industrial solutions to vessels and offshore installations globally.
          </p>

          {/* CTA Buttons */}
          <div className="hero-ctas">
            <Link to="/products" className="btn btn-primary">
              <span>Explore Product Portfolio</span>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"/>
              </svg>
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <span>Request a Quote</span>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="hero-trust">
            {trustBadges.map((badge, index) => (
              <div key={index} className="trust-badge">
                <div className="trust-icon">
                  {badge.icon === 'shield' && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"/>
                    </svg>
                  )}
                  {badge.icon === 'certificate' && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM12 19L10 17L8 19V11H12V19ZM12 9V4L17 9H12Z"/>
                    </svg>
                  )}
                  {badge.icon === 'globe' && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.78 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.77 20 8.64 20 12C20 14.08 19.2 15.97 17.9 17.39Z"/>
                    </svg>
                  )}
                </div>
                <span className="trust-label">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
