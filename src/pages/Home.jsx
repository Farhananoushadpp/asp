/**
 * ASP Global Marine Trading LLC - Home Page
 *
 * Complete website with all ASP PDF sections
 * Technology: React functional component with JSX
 */

import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Commitment from "../components/Commitment.jsx";
import Strengths from "../components/Strengths.jsx";
import Products from "../components/Products.jsx";
import Contact from "../components/Contact.jsx";
import ComplianceBar from "../components/ComplianceBar.jsx";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Commitment />
      <Strengths />
      <Products />
      <Contact />
      <ComplianceBar />
    </div>
  );
};

export default Home;
