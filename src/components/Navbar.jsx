import React, { useState, useEffect, useRef } from 'react';
import '../css/Navbar.css';
import sparkhausLogo from '../assets/sparkhaus-Horizontal2.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef();

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleOutsideClick = (e) => {
        if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [menuOpen]);

    return (
        <nav className={`navbar ${menuOpen ? 'navbar-open' : ''}`}
        ref={navRef}>
            <Link to="/" className="navbar-logo-container">
                <img src={sparkhausLogo} className="navbar-logo" alt="logo" />
            </Link>
            <div
                className={`hamburger ${menuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul
                className={`navbar-links ${menuOpen ? 'active' : ''}`}
            >
                <li className="navbar-item">
                    <Link to="/services" onClick={() => setMenuOpen(false)}>
                        Services
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about-us" onClick={() => setMenuOpen(false)}>
                        About
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
                        Portfolio
                    </Link>
                </li>
                <li className="mobile-only">
                    <Link to="/book-a-call" className='navbar-button-mv' onClick={() => setMenuOpen(false)}>
                        Book a Call
                    </Link>
                </li>
            </ul>
            <Link to="/book-a-call" className="desktop-only navbar-button">
                BOOK A CALL
            </Link>
        </nav>
    );
};

export default Navbar;