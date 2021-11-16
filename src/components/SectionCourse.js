import React from "react";

export default function SectionCourse() {
  return (
    <div>
      <h1 className="course-heading">Courses offered by us</h1>
      <div className="course">
        <div className="whyus-desc">
          <i class="fab fa-tumblr fa-3x icons"></i>
          <p className="course-title">Trading</p>
          <p className="whyus-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu morbi
            tristique elementum tortor. Est sodales ultricies ullamcorper cursus
            neque.
          </p>
          <p className="learn-more">Learn More</p>
        </div>
        <div className="whyus-desc">
          <i class="fas fa-handshake fa-3x icons"></i>
          <p className="course-title">Entrepreneurship</p>
          <p className="whyus-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu morbi
            tristique elementum tortor. Est sodales ultricies ullamcorper cursus
            neque.
          </p>
          <p className="learn-more">Learn More</p>
        </div>
        <div className="whyus-desc">
          <i class="fas fa-business-time fa-3x icons"></i>
          <p className="course-title">Business</p>
          <p className="whyus-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu morbi
            tristique elementum tortor. Est sodales ultricies ullamcorper cursus
            neque.
          </p>
          <p className="learn-more">Learn More</p>
        </div>
      </div>
    </div>
  );
}
