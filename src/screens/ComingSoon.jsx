import React from 'react';
import { motion } from 'framer-motion';
import '../css/ComingSoon.css';
import logo from '../assets/Sparkhaus-W.png';
import topArrow from '../assets/top-right.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const ComingSoon = () => {
  
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="comingsoon-container"
    >
      
      <motion.div variants={fadeIn} className="logo-container">
        <img src={logo} alt="Logo" />
      </motion.div>

      
      <motion.div variants={fadeIn} className="comingsoon-content">
        <h1>oops, you caught us!</h1>
        <h1>We're currently building our site</h1>
        <p>We can still connect and work together!</p>
        <center>
          <a
            href="https://cal.com/sparkhausdigital"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="book-call-button"
            >
              BOOK A CALL
              <img src={topArrow} alt="arrow" className="arrow" />
            </motion.button>
          </a>
        </center>
      </motion.div>

      
      <motion.div variants={fadeIn} className="comingsoon-footer">
        <a href='mailto:sparkhausdigital@gmail.com'><span>Email: sparkhausdigital@gmail.com</span></a>
        <span>Phone: +94 777867920, +94 711631003</span>
        <div className="social-icons">
          <p>
            <a
              href="https://www.facebook.com/profile.php?id=61566714766536"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="socialmedia_icon"
              />
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/__.sparkhaus.__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="socialmedia_icon"
              />
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/company/sparkhausdigital"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="socialmedia_icon"
              />
            </a>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ComingSoon;
