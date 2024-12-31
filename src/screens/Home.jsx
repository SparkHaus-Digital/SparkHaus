import React, { useEffect } from 'react';
import '../css/Home.css';
import topRightIcon from '../assets/top-right.png';
import topArrow from '../assets/top-right.png';
import dob from '../assets/DoB-Website-Element.webp';
import { Link } from "react-router-dom";

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<div className="home-container">
			{/* Main Section */}
			<section className="main-section">
				<h1 className="main-title">
					IGNITE THE STORY
					<br />
					SHAPE THE LEGACY
				</h1>
				<p className="main-subtitle">
					Create experiences, connect audiences and spark ideas that drive your
					brand forward
				</p>
				<Link to="/book-a-call">
				<div className="start-project">
					START PROJECT
					<img src={topArrow} alt="arrow" className="arrow" />
				</div>
				</Link>
			</section>

			{/* Showcase Section */}
			<section className="showcase">
				<h2>Showcase</h2>
				<p>Crafting Digital Success Stories, One Project at a Time</p>
				<div className="showcase-card">
					<div className="project-image">
						<img src={dob} alt="project-image" />
					</div>
					<div className="project-info">
						<h3>Doctor of Bat</h3>
						<span>Cricket Bat Repair Shop</span>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="services">
				<h2>Services</h2>
				<div className="buttons-container">
					<Link to="/services">
					<button className="btn btn-outline-light">
						<span className="text">Web Design & Development</span>
						<img src={topRightIcon} alt="arrow icon" className="icon" />
					</button>
					</Link>
					<Link to="/services">
					<button className="btn btn-outline-light">
						<span className="text">Branding</span>
						<img src={topRightIcon} alt="arrow icon" className="icon" />
					</button>
					</Link>
					<Link to="/services">
					<button className="btn btn-outline-light">
						<span className="text">Social Media Management</span>
						<img src={topRightIcon} alt="arrow icon" className="icon" />
					</button>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Home;
