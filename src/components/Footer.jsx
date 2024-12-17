import React from "react";
import "../css/Footer.css"; // Separate CSS for Footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Email Section */}
        <div className="footer-item">
          <i className="fa-solid fa-envelope"></i>
          <span>sparkhausdigital@gmail.com</span>
        </div>

        {/* Social Media Icons */}
        <div className="footer-item footer-socials">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div>

        {/* Phone Numbers */}
        <div className="footer-item">
          <i className="fa-solid fa-phone"></i>
          <span>+94 777867920, +94 711631003</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
