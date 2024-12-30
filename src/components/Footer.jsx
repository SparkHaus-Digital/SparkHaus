import React from 'react';
import '../css/Footer.css';
import topArrow from '../assets/top-right.png';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import { Link } from "react-router-dom";


const Footer = () => {
	return (
		<section className="contact-section">
			<h2 className="contact-heading">
				SPEAK WITH US IF YOU'D LIKE TO TELL
				<br /> YOUR STORY
			</h2>
			<p className="contact-subheading">Something in mind? Hop on that call!</p>
			<Link to="/book-a-call">
			<div className="footer-button">
				GET IN TOUCH
				<img src={topArrow} alt="arrow" className="arrow" />
			</div>
			</Link>
			<div className="contact-info">
				<div className="email-div">
					<a href='mailto:sparkhausdigital@gmail.com' className='email-subdiv'>
					<MdEmail size={20} color="white" />
					<span>sparkhausdigital@gmail.com</span>
					</a>
				</div>

				<div className="icons-div">
					<a 
						href="https://www.facebook.com/profile.php?id=61566714766536" 
						target="_blank" 
						rel="noopener noreferrer"
					>
						<FaFacebook size={20} color="white" />
					</a>
					<a 
						href="https://www.linkedin.com/company/sparkhausdigital" 
						target="_blank" 
						rel="noopener noreferrer"
					>
						<FaInstagram size={20} color="white" />
					</a>
					<a 
						href="https://www.instagram.com/__.sparkhaus.__/" 
						target="_blank" 
						rel="noopener noreferrer"
					>
						<FaLinkedin size={20} color="white" />
					</a>
				</div>

				<div className="contact-number-div">
					<FaPhone size={20} color="white" />
					<span>+94 777867920, +94 711631003</span>
				</div>
			</div>
		</section>
	);
};

export default Footer;