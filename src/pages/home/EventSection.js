import React from "react";
import BlogHeading from "../blogs/BlogHeading";
import styles from "./css/eventSection.module.css";

function EventSection() {
  return (
    <div className={styles.eventSection}>
      <div className={styles.eventHeading}>
        <BlogHeading title="Events" />
      </div>
      <div className={styles.eventContent}>
        <div className={styles.eventLeftCol}>
          <div className={styles.eventLeftContent}>
            <img
              className={styles.eventLeftColImage}
              src="/home/Event1.png"
              alt="First Event"
            />
            <div className={styles.eventAllContent}>
              <p className={styles.eventLeftDate}>11/08/2021</p>

              <p className={styles.eventLeftHeading}>Event</p>

              <p className={styles.eventLeftDesc}>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                ese ultrices dignissim id aenean risus. Ultrices a, pretium
                gravida diam.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.eventRightCol}>
          <div className={styles.eventRightContent}>
            <div className={styles.sectionImage}>
              <img
                className={styles.sectionCardImage}
                src="/home/Event2.png"
                alt="Graph"
              />
            </div>
            <p className={styles.rightColEventDate}>11/08/2021</p>
            <p className={styles.rightColEventName}>Event 1</p>
          </div>
          <div className={styles.sectionImage}>
            <img
              className={styles.sectionCardImage}
              src="/home/Event2.png"
              alt="Graph"
            />
            <p className={styles.rightColEventDate}>11/08/2021</p>
            <p className={styles.rightColEventName}>Event 1</p>
          </div>
          <div className={styles.sectionImage}>
            <img
              className={styles.sectionCardImage}
              src="/home/Event2.png"
              alt="Graph"
            />
            <p className={styles.rightColEventDate}>11/08/2021</p>
            <p className={styles.rightColEventName}>Event 1</p>
          </div>
          <div className={styles.sectionImage}>
            <img
              className={styles.sectionCardImage}
              src="/home/Event2.png"
              alt="Graph"
            />
            <p className={styles.rightColEventDate}>11/08/2021</p>
            <p className={styles.rightColEventName}>Event 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventSection;
