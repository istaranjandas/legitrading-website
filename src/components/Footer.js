import React from "react";
import Fb from "../../src/images/fb.png";
import Insta from "../../src/images/insta.png";
import Twitter from "../images/twitter.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <p className="footer-title">What are you waiting for?</p>
        <button className="footer-btn">Enroll Today</button>
        <div className="terms">
          <span>Terms & Condition</span>
          <span className="social">Privacy Policy</span>
          <div>
            <img src={Fb} alt="fb" />
            <img src={Twitter} alt="twitter" />
            <img src={Insta} alt="insta" />
          </div>
        </div>
      </div>

      <ul className="service">
        <li className="text-main">Services</li>
        <li>Email Marketings</li>
        <li>Campaigns</li>
        <li>Branding</li>
        <li>Offline</li>
      </ul>

      <ul className="service">
        <li className="text-main">About</li>
        <li>Our Story</li>
        <li>Benifits</li>
        <li>Team</li>
        <li>Careers</li>
      </ul>
      <ul className="service">
        <li className="text-main">Help</li>
        <li>FAQs</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
}
