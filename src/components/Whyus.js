import React from "react";
import WhyusImage from "../images/whyus.png";
import stocks from "../images/stocks.png";
import blogs from "../images/blogs.png";
import programms from "../images/programms.png";
import { AiOutlineStock } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function Whyus() {
  return (
    <div className="whyus">
      <div className="whyus-start">
        <h1 className="whyus-start-title">Why Us?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu morbi
          tristique elementum tortor. Est sodales ultricies ullamcorper cursus
          neque.
        </p>
        <img src={WhyusImage} alt="imagewhyus" className="mainimg" />
      </div>
      <div className="whyuss">
        <div className="boxes">
          <div className="whyus-desc">
            <i class="fa fa-book fa-3x icons" aria-hidden="true"></i>
            <p className="whyus-title">Course</p>
            <p className="whyus-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
              morbi tristique elementum tortor. Est sodales ultricies
              ullamcorper cursus neque.
            </p>
          </div>
          <div className="boxes">
            <div className="whyus-desc">
              <i class="fa fa-blog fa-3x icons" aria-hidden="true"></i>
              <p className="whyus-title">Blogs</p>
              <p className="whyus-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                morbi tristique elementum tortor. Est sodales ultricies
                ullamcorper cursus neque.
              </p>
            </div>
          </div>
        </div>
        <div className="boxes">
          <div className="whyus-desc">
            <i class="fa fa-money-check fa-3x icons" aria-hidden="true"></i>
            <p className="whyus-title">Stocks</p>
            <p className="whyus-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
              morbi tristique elementum tortor. Est sodales ultricies
              ullamcorper cursus neque.
            </p>
          </div>
          <div className="boxes">
            <div className="whyus-desc">
              <i class="fa fa-laptop fa-3x icons" aria-hidden="true"></i>
              <p className="whyus-title">Programs</p>
              <p className="whyus-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
                morbi tristique elementum tortor. Est sodales ultricies
                ullamcorper cursus neque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
