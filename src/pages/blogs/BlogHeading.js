import React from "react";
import styles from "./css/blogHeading.module.css";
import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";
import { ArrowForwardRounded } from "@mui/icons-material";

function BlogHeading(props) {
  return (
    <div className={styles.blogHeading}>
      <div className={styles.blogHeadingText}>
        <h2>{props.title}</h2>
      </div>
      <div className={styles.blogHeadingArrow}>
        <ArrowBackRounded
          style={{
            backgroundColor: "#1F1F1F",
            color: "white",
            height: 30,
            width: 30,
            marginRight: 5,
            cursor: "pointer",
            fontSize: "20px",
          }}
        />

        <ArrowForwardRounded
          style={{
            backgroundColor: "#1F1F1F",
            color: "white",
            height: 30,
            width: 30,

            marginLeft: 5,
            cursor: "pointer",
            fontSize: "20px",
          }}
        />
      </div>
    </div>
  );
}

export default BlogHeading;
