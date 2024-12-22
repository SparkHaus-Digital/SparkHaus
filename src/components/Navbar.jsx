import React, { useState, useEffect, useRef } from 'react';
import '../css/Navbar.css';
import sparkhausLogo from '../assets/sparkhaus-Horizontal1.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const navRef = useRef();

    const toggleMenu = () => {
        if (menuOpen) {
            closeMenu();
        } else {
            setMenuOpen(true);
        }
    };

    const closeMenu = () => {
        setClosing(true);
        setTimeout(() => {
            setClosing(false);
            setMenuOpen(false);
        }, 300); // Delay to match the height transition duration
    };

    const handleLinkClick = () => {
        if (menuOpen) closeMenu();
    };

    const handleOutsideClick = (e) => {
        if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
            closeMenu();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [menuOpen]);

    return (
        <nav className="navbar" ref={navRef}>
            <Link
                to="/"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <img src={sparkhausLogo} className="navbar-logo" alt="logo" />
            </Link>
			<div className='mobile-only'>
				<span></span>
			</div>
            <div
                className={`hamburger ${menuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>		
            <ul
                className={`navbar-links ${menuOpen ? 'active' : closing ? 'closing' : ''}`}
            >
                <li className="navbar-item">
                    <Link to="/services" onClick={handleLinkClick}>
                        Services
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about-us" onClick={handleLinkClick}>
                        About
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/portfolio" onClick={handleLinkClick}>
                        Portfolio
                    </Link>
                </li>
                <li className="navbar-item mobile-only">
                    <Link to="/book-a-call" onClick={handleLinkClick}>
                        Book a Call
                    </Link>
                </li>
            </ul>
            <Link to="/book-a-call" className="desktop-only">
                <div className="navbar-button">BOOK A CALL</div>
            </Link>
        </nav>
    );
};

export default Navbar;
