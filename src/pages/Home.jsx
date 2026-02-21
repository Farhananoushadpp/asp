/**
 * ASP Global Marine Trading LLC - Home Page
 *
 * React page component combining Hero, About, Strengths, and Certifications sections
 * Technology: React functional component with JSX
 */

import React from "react";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Strengths from "../components/Strengths.jsx";
import Certifications from "../components/Certifications.jsx";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Strengths />
      <Certifications />
    </div>
  );
};

export default Home;
