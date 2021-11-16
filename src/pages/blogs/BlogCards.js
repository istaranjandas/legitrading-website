import React from "react";
import styles from "./css/blogCard.module.css";

function BlogCards(props) {
  return (
    <div className={styles.blogCard}>
      <div className={styles.blogCardImage}>
        <img
          className={styles.blogImage}
          src="/blogs/blogImageOne.png"
          alt="Bitcoin"
        />
      </div>
      <div className={styles.blogCardContent}>
        <p className={styles.blogCardDate}>{props.date}</p>
        <p className={styles.blogCardHeading}>{props.title}</p>
        <p className={styles.blogCardContentPara}>
          {props.blog.substring(0, 200)}
          {"..."}
        </p>
      </div>
    </div>
  );
}

export default BlogCards;
