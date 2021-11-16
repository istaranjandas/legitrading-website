import React from "react";
import stars from "../images/stars.png";
import man from ".././images/man.png";

export default function Testimonials() {
  return (
    <div className="main">
      <h1 style={{ paddingLeft: "40px" }}>Testimonials</h1>
      <div className="test">
        <div>
          <div className="test-example">
            <img src={man} alt="man" />
            <div>
              <b>Cody Fisher</b>
              <p>Ontario,Canada</p>
            </div>
          </div>
          <div className="test-example">
            <img src={man} alt="man" />
            <div>
              <b>Cody Fisher</b>
              <p>Ontario,Canada</p>
            </div>
          </div>
          <div className="test-example">
            <img src={man} alt="man" />
            <div>
              <b>Cody Fisher</b>
              <p>Ontario,Canada</p>
            </div>
          </div>
        </div>
        <div className="test-exp">
          <div>
            <p>The course was awesome!</p>
            <img src={stars} alt="stars" height="20px" width="90px" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            quis phasellus dignissim vehicula semper vitae fermentum, egestas.
            Est pretium volutpat facilisi nec cras platea nunc.
          </p>
          <p>
            {" "}
            Bibendum posuere elementum lacinia ultricies consectetur sed. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis
            phasellus dignissim vehicula semper vitae fermentum, egestas.
          </p>
        </div>
      </div>
    </div>
  );
}
