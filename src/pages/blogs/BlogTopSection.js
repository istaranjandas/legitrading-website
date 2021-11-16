import React from "react";
import styles from "./css/blogTopSection.module.css";

function BlogTopSection() {
  return (
    <div className={styles.blogTopSection}>
      <div className={styles.blogTopSectionImage}>
        <img
          className={styles.blogTopImage}
          src="/blogs/blogHeadingImage.png"
        />
      </div>
      <div className={styles.blogTopSectionContent}>
        <p className={styles.blogTopSectionDate}>11/10/2021</p>
        <p className={styles.blogTopSectionHeading}>CryptoCrash</p>
        <p className={styles.blogTopSectionPara}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ese
          ultrices dignissim id aenean risus. Ultrices a, pretium gravida diam.
        </p>
      </div>
    </div>
  );
}

export default BlogTopSection;
