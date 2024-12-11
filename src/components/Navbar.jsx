import React, { useState } from 'react';
import '../css/Navbar.css';
import sparkhausLogo from '../assets/sparkhaus-Horizontal1.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [closing, setClosing] = useState(false);

	const toggleMenu = () => {
		if (menuOpen) {
			setClosing(true);
			setTimeout(() => {
				setClosing(false);
				setMenuOpen(false);
			}, 100);
		} else {
			setMenuOpen(true);
		}
	};

	return (
		<nav className="navbar">
			<img src={sparkhausLogo} className="navbar-logo" alt="logo" />
			<div
				className={`hamburger ${menuOpen ? 'active' : ''}`}
				onClick={toggleMenu}
			>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<ul
				className={`navbar-links ${
					menuOpen ? 'active' : closing ? 'closing' : ''
				}`}
			>
				<li className="navbar-item">
					<Link to="/services">Services</Link>
				</li>
				<li className="navbar-item">
					<Link to="/about">About</Link>
				</li>
				<li className="navbar-item">
					<Link to="/portfolio">Portfolio</Link>
				</li>
			</ul>
			<Link to="/book-a-call">
				<div className="navbar-button">BOOK A CALL</div>
			</Link>
		</nav>
	);
};

export default Navbar;
