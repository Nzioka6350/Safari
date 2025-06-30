import React from 'react';
import './Features.css';
import image from '../../assets/feature.jpg' 

const FeaturesSection = () => {
  return (
    <section className="features-section">
      {/* Left Column */}
      <div className="features-left">
        <p className="features-subtitle">OUR FEATURES</p>
        <h2 className="features-title">
          We Are Trusted Shipping <br />
          Company Since 1990
        </h2>

        <div className="feature-item">
          <div className="feature-icon">🌍</div>
          <div>
            <h4>Worldwide Service</h4>
            <p>
              Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet.
            </p>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">🚚</div>
          <div>
            <h4>On Time Delivery</h4>
            <p>
              We understand the importance of getting your shipment there when you need it. Our proven track record for on-time deliveries ensures peace of mind.
            </p>
          </div>
        </div>

        <div className="feature-item">
          <div className="feature-icon">🎧</div>
          <div>
            <h4>24/7 Telephone Support</h4>
            <p>
              Call, text or whatsapp for questions or pick up arrangements.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="features-right">
        <img src={image} alt="Shipping Team" />
      </div>
    </section>
  );
};

export default FeaturesSection;
