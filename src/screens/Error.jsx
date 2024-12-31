import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import '../css/ComingSoon.css';
import topArrow from '../assets/top-right.png';

const Error = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const container = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const textAnimation = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: 'easeOut' },
		},
	};

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? 'visible' : 'hidden'}
			variants={container}
			className="comingsoon-container"
		>
			<motion.div className="comingsoon-content" variants={textAnimation}>
				<div>
					<h1>404 Error</h1>
				</div>
				<motion.span className="contact-heading" variants={textAnimation}>
					Page not found
				</motion.span>

				<motion.p variants={textAnimation}>
					This page does not exist or it was removed.
				</motion.p>

				<motion.div variants={textAnimation}>
					<Link to="/">
						<center>
							<div className="footer-button" style={{ maxWidth: '120px' }}>
								GO TO HOME PAGE
								<img src={topArrow} alt="arrow" className="arrow" />
							</div>
						</center>
					</Link>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Error;
