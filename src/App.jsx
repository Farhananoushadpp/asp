/**
 * ASP Global Marine Trading LLC - Main App Component
 *
 * Technology Stack:
 * - React 18 with functional components and hooks
 * - React Router for page navigation
 * - HTML5 semantic structure rendered by React
 * - CSS3 styling imported from styles.css
 * - JavaScript ES6+ features
 */

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";
import "./styles/main.css";

function App() {
  useEffect(() => {
    // Scroll reveal animation
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");

      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    // Add reveal class to sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("reveal");
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    // Navbar scroll effect
    const handleNavbarScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.style.background = "rgba(255, 255, 255, 0.98)";
        navbar.style.boxShadow = "0 4px 30px rgba(46, 139, 139, 0.15)";
      } else {
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
        navbar.style.boxShadow = "0 2px 20px rgba(46, 139, 139, 0.1)";
      }
    };

    window.addEventListener("scroll", handleNavbarScroll);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleNavbarScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />

        {/* Floating Quote Button */}
        <a
          href="/contact"
          className="floating-quote"
        >
          <span>💬</span>
          Request Quote
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/971525478137"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>📱</span>
        </a>
      </div>
    </Router>
  );
}

export default App;
