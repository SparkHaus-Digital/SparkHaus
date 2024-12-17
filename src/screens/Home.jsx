import React from "react";
import "../css/Home.css";
import topRightIcon from "../../assets/top-right.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <header className="navbar">
        {/* Logo */}
        <a href="#" className="navbar-brand">
            {/* <img src="/logo.svg" alt="Sparkhaus Logo" /> */}
             SPARKHAUS
        </a>

        {/* Navigation Links */}
        <nav className="navbar-links">
          <Link to="/services">Services</Link>
          <Link to="/">Home</Link>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
        </nav>

        {/* CTA Button */}
        <a href="#contact" className="navbar-cta">Book a Call</a>
        </header>




      {/* Main Section */}
      <section className="main-section">
        <h1 className="main-title">IGNITE THE STORY<br />SHAPE THE LEGACY</h1>
        <p className="main-subtitle">
            Create experiences, connect audiences and spark ideas that drive your brand forward
        </p>
        <button className="start-project">Start Project <img src={topRightIcon} alt="arrow icon" className="icon" /></button>
    </section>

      {/* Showcase Section */}
      <section className="showcase">
        <h2>Showcase</h2>
        <p>Crafting Digital Success Stories, One Project at a Time</p>
        <div className="showcase-card">
            <div className="project-image"></div>
            <div className="project-info">
            <h3>Doctor of Bat</h3>
            <span>Website</span>
            </div>
        </div>
        </section>
      {/* Services Section */}
      <section className="services">
        <h2>Services</h2>
        <div className="d-grid gap-3">
            <button className="btn btn-outline-light">Web Design & Development <img src={topRightIcon} alt="arrow icon" className="icon" /></button>
            <button className="btn btn-outline-light">Branding <img src={topRightIcon} alt="arrow icon" className="icon" /></button>
            <button className="btn btn-outline-light">Social Media Management <img src={topRightIcon} alt="arrow icon" className="icon" /></button>
        </div>
        </section>

      {/* Contact Section */}
        <section className="contact">
        <h2>Speak with us if you'd like to tell your story</h2>
        <p>Seems intriguing? Hop on that call</p>
        <button className="get-in-touch">Get in Touch <img src={topRightIcon} alt="arrow icon" className="icon" /></button>
        </section>

        {/* footer Section */}

    </div>
  );
};

export default Home;
