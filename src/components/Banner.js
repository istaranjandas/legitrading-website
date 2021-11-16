import React from "react";
import ".././pages/home/home.css";
import BannerImage from "../images/BannerImage.png";
import ButtonImage from "../images/button.png"

export default function Banner() {
  return (
    <div className="banner">
      <div>
        <p className="banner-text">Start Trading now with Legitrading</p>
        <div style={{ textAlign: "center" }}>
          <button className="banner-btn">Explore More  <img src={ButtonImage} alt="banner-img" /></button>
        </div>
      </div>
      <img className="banner-img"  src={BannerImage} alt="banner-img" />
    </div>
  );
}
