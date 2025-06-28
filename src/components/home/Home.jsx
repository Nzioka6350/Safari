import React from "react";
import "./Home.css";
import homeImg from "../../assets/ferry1.jpg";
function Home() {
  return (
    <div className="hero-page">
      <p className="tagline">SHIP FROM TEXAS TO KENYA</p>
      <h1>
        Your Number One Trusted <br /> Shipping Company
      </h1>
      <p className="description">
        We guarantee that your commodities will be delivered as scheduled. For
        the many years we have been in the shipping business from Texas to
        Kenya, we have never lost an item and our customers have been very
        satisfied.
      </p>
      <div className="hero-buttons">
        <button className="read-more">Read More</button>
        <button className="free-quote">Free Quote</button>
      </div>
    </div>
  );
}

export default Home;
