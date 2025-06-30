import React from 'react';
import './About.css';
import aboutImg from '../../assets/about.jpg'; // Replace with your actual image
import { FaGlobe, FaTruck } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={aboutImg} alt="About Us" />
      </div>

      <div className="about-content">
        <p className="about-label">ABOUT US</p>
        <h2>
          Learn more about Us, what we stand for, and our brand story.
          Safaribros Shipping. Our corporate culture and what else we are involved in.
        </h2>
        <p className="about-description">
          Safaribros offers secure hassle-free, credible, convenient, and pocket-friendly
          shipping solutions from Texas to Kenya.
        </p>

        <div className="features">
          <div className="feature-item">
            <FaGlobe className="feature-icon red" />
            <div>
              <h4>Global Coverage</h4>
              <p>We ship from Texas to Kenya</p>
            </div>
          </div>

          <div className="feature-item">
            <FaTruck className="feature-icon red" />
            <div>
              <h4>On Time Delivery</h4>
              <p>We understand the importance of getting your shipment there when you need it. Our proven track record for on-time deliveries ensures peace of mind.</p>
            </div>
          </div>
        </div>

        <button className="explore-btn">Explore More</button>
      </div>
    </div>
  );
};

export default About;
