import React, { useEffect } from 'react';
import '../css/Service.css';
import { Link } from 'react-router-dom';
import topRightIcon from '../assets/top-right.png';

const Service = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<div className="service-container">
			{/* Hero Section */}
			<section className="service-hero">
				<h2>
					OUR EXPERTISE
					<br />
					YOUR ARSENAL
				</h2>
				<p>
					At Sparkhaus, we equip you with the tools to succeed in a competitive
					digital landscape. Whether it’s crafting a stunning website, designing
					a memorable brand identity, or strategizing your online presence, our
					expertise becomes your greatest asset. Together, we’ll build solutions
					that empower your story and fuel your growth.
				</p>
			</section>

			{/* Web Design & Development */}
			<section className="service-card">
				<h2>WEB DESIGN & DEVELOPMENT</h2>
				<p>
					Your website is more than just pixels and code – it’s your brand’s
					handshake with the world. At Sparkhaus, we craft stunning, responsive
					sites that blend creativity and functionality, leaving a lasting
					impression every time.
				</p>
				<div className="service-details">
					<div>
						<h4>UI/UX DESIGN</h4>
						<p>Responsive design that reflects your brand identity</p>
					</div>
					<div>
						<h4>SEARCH ENGINE OPTIMIZATION (SEO)</h4>
						<p>Basic SEO setup to comprehensive SEO solutions</p>
					</div>
					<div>
						<h4>WEB DEVELOPMENT</h4>
						<p>Developed to perform seamlessly across all devices</p>
					</div>
					<div>
						<h4>CONTENT MANAGEMENT SYSTEM (CMS)</h4>
						<p>Easy content management for your website</p>
					</div>
					<div>
						<h4>DOMAIN AND HOSTING SETUP</h4>
						<p>Assistance with setting up domain and hosting</p>
					</div>
					<div>
						<h4>MAINTENANCE SUPPORT</h4>
						<p>Support for post-launch issues starting the first month</p>
					</div>
				</div>
				<div className="service-card-footer">
					<p>Starts at USD 350</p>
						<p><a href="/pdfs/Sparkhaus Digital - Company Profile.pdf" download>More Details</a></p>
				</div>
			</section>

			{/* Branding Section */}
			<section className="service-card">
				<h2>BRANDING</h2>
				<p>
					Your brand is more than a logo – it’s your story, your values, and the
					way the world sees you. At Sparkhaus, we craft cohesive, memorable
					brand identities that resonate with your audience.
				</p>
				<div className="service-details">
					<div>
						<h4>LOGO DESIGN</h4>
						<p>A custom, memorable logo tailored to your brand identity</p>
					</div>
					<div>
						<h4>STATIONERY DESIGN</h4>
						<p>
							Professional designs for business cards, letterheads, and
							envelopes
						</p>
					</div>
					<div>
						<h4>VISUAL IDENTITY</h4>
						<p>A cohesive look with colors and typography</p>
					</div>
					<div>
						<h4>SOCIAL MEDIA BRANDING</h4>
						<p>Eye-catching designs for social media profiles and posts</p>
					</div>
					<div>
						<h4>BRAND GUIDELINES</h4>
						<p>A manual to maintain brand consistency across platforms</p>
					</div>
					<div>
						<h4>PACKAGE DESIGN</h4>
						<p>Unique packaging to enhance product appeal</p>
					</div>
				</div>
				<div className="service-card-footer">
					<p>Starts at USD 120</p>
					<p><a href="/pdfs/Sparkhaus Digital - Company Profile.pdf" download>More Details</a></p>
				</div>
			</section>

			{/* Social Media Management */}
			<section className="service-card">
				<h2>SOCIAL MEDIA MANAGEMENT</h2>
				<p>
					Managing content shouldn't feel like a chore. At Sparkhaus, we
					streamline your content creation and management for platforms like
					YouTube, TikTok, and Instagram.
				</p>
				<div className="service-details">
					<div>
						<h4>CONTENT STRATEGY</h4>
						<p>Craft a plan to align content with goals</p>
					</div>
					<div>
						<h4>GRAPHIC DESIGN</h4>
						<p>Professional graphics to enhance your brand</p>
					</div>
					<div>
						<h4>VIDEO EDITING</h4>
						<p>Transform raw footage into engaging content</p>
					</div>
					<div>
						<h4>CONTENT SCHEDULING AND PUBLISHING</h4>
						<p>Optimize reach on YouTube and social platforms</p>
					</div>
					<div>
						<h4>THUMBNAIL DESIGN</h4>
						<p>Eye-catching thumbnails to boost visibility</p>
					</div>
					<div>
						<h4>SCRIPTWRITING FOR VIDEOS</h4>
						<p>Develop compelling scripts for storytelling</p>
					</div>
				</div>
				<div className="service-card-footer">
					<p>Starts at USD 35/month</p>
					<p><a href="/pdfs/Sparkhaus Digital - Company Profile.pdf" download>More Details</a></p>
				</div>
			</section>
		</div>
	);
};

export default Service;
