import React from 'react';
import { Button } from 'antd';
import '../css/Home.css';
import NavigationBar from '../components/Navbar';

const Home = () => {
  return (
    <div>
        <NavigationBar/>
      <header className="hero-section text-center">
        <h1 className="hero-title">IGNITE THE STORY<br />SHAPE THE LEGACY</h1>
        <p className="hero-subtitle">
          Create experiences, connect audiences and spark ideas that drive your brand forward
        </p>
        <Button type="primary" className="start-button" size="large">
          Start Project ➔
        </Button>
      </header>

      <section className="showcase-section text-center">
        <h2 className="showcase-title">SHOWCASE</h2>
        <p className="showcase-subtitle">
          Crafting Digital Success Stories, One Project at a Time
        </p>
        <div className="showcase-project">
          <div className="project-thumbnail" />
          <div className="project-info">
            <span className="project-type">Website</span>
            <h3 className="project-title">DOCTOR OF BAT</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
