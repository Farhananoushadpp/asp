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
                ASP Global Marine is a specialized marine and offshore product
                solution provider delivering high-quality equipment, spare
                parts, and consumbales to vessels and offshore installations
                worldwide. With a strong focus on operational reliability and
                compliance requirements of the maritime industry, ASP Global
                offers product solutions for equipment/mechanical systems,
                safety items, deck/engine stores and engine spares.
              </p>
              <p>
                This is backed by extensive sourcing capabilities and technical
                product knowledge, which enables ASP Global marine to serve
                shipowners, ship managers, operators, and marine service
                companies throughout the maritime sector.
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
