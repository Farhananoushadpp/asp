/**
 * ASP Global Marine Trading LLC - Home Page
 *
 * Simplified home page with only Who We Are section
 * Technology: React functional component with JSX
 */

import Hero from "../components/Hero.jsx";
import "../styles/pages/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      
      {/* Who We Are Section */}
      <section className="who-we-are-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">COMPANY OVERVIEW</span>
            <h2 className="section-title">Who We Are</h2>
            <p className="section-subtitle">
              Your trusted partner in marine and offshore solutions since 2005
            </p>
          </div>
          
          <div className="content-with-icon">
            <div className="content-text">
              <p>
                Founded in 2005 and part of Ocean Serenity Group, ASP Global
                Marine Trading LLC has established itself as a leading supplier of
                marine and offshore equipment. With strong sourcing networks
                across Europe and Asia, we understand the critical importance of
                quality, reliability, and timely delivery.
              </p>
              <p>
                Our commitment to excellence has earned us the trust of ship
                owners, operators, and offshore installations worldwide. We pride
                ourselves on our technical expertise, competitive pricing, and
                unwavering dedication to customer satisfaction.
              </p>
            </div>
            <div className="content-icon">
              <img 
                src="/asplogo.svg" 
                alt="ASP Global Marine Trading LLC" 
                className="asp-global-icon"
              />
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">18+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Global Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">9500+</div>
              <div className="stat-label">Products</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
