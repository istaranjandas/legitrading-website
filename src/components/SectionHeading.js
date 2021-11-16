import React from "react";
import styles from "./css/sectionHeading.module.css";

function SectionHeading(props) {
  return <div className={styles.sectionHeading}>{props.title}</div>;
}

export default SectionHeading;
