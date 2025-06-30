import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Address</h3>
          <p>2127 S Greatsouthwest Pkwy.<br />
            Grand Prairie, TX 75051 Suite 204.</p>
          <p><FaPhone className="icon" /> +1 (763) 221-6122</p>
          <p><FaEnvelope className="icon" /> info@example.com</p>
          <a href="#"><FaFacebookF className="social-icon" /></a>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#">› Pricing Plan</a></li>
            <li><a href="#">› Sea Freight</a></li>
            <li><a href="#">› Our Products</a></li>
            <li><a href="#">› Free Quote</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">› About Us</a></li>
            <li><a href="#">› Contact Us</a></li>
            <li><a href="#">› Our Services</a></li>
            <li><a href="#">› Terms & Condition</a></li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© Safaribros Shipping, All Right Reserved.</p>
        <p>Designed By <a href="#">Violet Gatwiri</a></p>
      </div>

      <a href="https://wa.me/1234567890" className="whatsapp-float" target="_blank" rel="noreferrer">
        <FaWhatsapp />
      </a>
    </footer>
  );
};

export default Footer;
