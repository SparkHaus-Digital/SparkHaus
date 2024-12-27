import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import '../css/AboutUs.css';
import komuthu from '../assets/komuthu.jpg';
import dinura from '../assets/Dinura.jpg';
import hirusha from '../assets/hirusha.jpg';
import kavishi from '../assets/kavishi.jpg';


const AboutUs = () => {
	const [startAnimation, setStartAnimation] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.isIntersecting) {
					setStartAnimation(true);
					observer.disconnect(); 
				}
			},
			{ threshold: 0.5 } 
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}
	}, []);

	const formatNumber = (value) => value.toString().padStart(2, '0');

	return (
		
			<div className="aboutus-container">
				<div className="experience-section">
					<h2>LET THE WORLD KNOW</h2>
					<p>
						We believe the digital space is vastly underutilized by small to
						medium-scale businesses. Our mission is to amplify their voices and
						share the stories of countless entrepreneurs striving to thrive in a
						constantly evolving digital world. Their journeys are both
						challenging and inspiring, and we want those stories to ignite a
						spark in others, encouraging them to embrace the digital arena with
						confidence and creativity.
					</p>
					<section ref={sectionRef} >
					<div className="stats-container">
						<div className="stat-item">
							<h2>
								{startAnimation && (
									<CountUp
										start={0}
										end={1}
										duration={2}
										formattingFn={formatNumber} 
									/>
								)}
							</h2>
							<h4>YEARS OF EXPERIENCE</h4>
						</div>
						<div className="stat-item">
							<h2>
								{startAnimation && (
									<CountUp
										start={0}
										end={2}
										duration={2}
										formattingFn={formatNumber} 
									/>
								)}
							</h2>
							<h4>PROJECTS</h4>
						</div>
						<div className="stat-item">
							<h2>
								{startAnimation && (
									<CountUp
										start={0}
										end={2}
										duration={2}
										formattingFn={formatNumber} 
									/>
								)}
							</h2>
							<h4>HAPPY CLIENTS</h4>
						</div>
					</div>
					</section>
				</div>
                <div className='team-section'>
                    <h2>WE ARE BRAVE AND BOLD</h2>
                    <p>The team is young and small, and its what we want.<br /> Great teams are confident and synchronized.</p>
                    <div className="team-members">
                        <div className="team-member">
                            <img src={dinura} />
                            <span>Dinura Abeygunawardene</span>
                            <span>Co-Founder</span>
                        </div>

                        <div className="team-member">
                            <img src={komuthu} />
                            <span>Komuthu Fernando</span>
                            <span>Co-Founder</span>
                        </div>

                        <div className="team-member">
                            <img src={hirusha} />
                            <span>Hirusha Rukmal</span>
                            <span>Co-Founder</span>
                        </div>

                        <div className="team-member">
                            <img src={kavishi} />
                            <span>Kavishi Sirisena</span>
                            <span>Designer & Developer</span>
                        </div>
                    </div>

                </div>
			</div>
	);
};

export default AboutUs;
