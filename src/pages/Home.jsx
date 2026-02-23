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
import Partners from "../components/Partners.jsx";
import Clients from "../components/Clients.jsx";
import SisterConcerns from "../components/SisterConcerns.jsx";
import Contact from "../components/Contact.jsx";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Commitment />
      <Strengths />
      <Products />
      <Partners />
      <Clients />
      <SisterConcerns />
      <Contact />
    </div>
  );
};

export default Home;
