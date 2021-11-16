import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SectionHeading from "../../components/SectionHeading";
import BlogCards from "./BlogCards";
import BlogHeading from "./BlogHeading";
import BlogTopSection from "./BlogTopSection";
import styles from "./css/blog.module.css";

export default function Blogs() {
  const [blogDetails, setBlogDetails] = useState([
    {
      dateOfPublishing: "10/08/2021",
      title: "CryptoCrash",
      blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ese ultrices dignissim id aenean risus. Ultrices a, pretium gravida diam.",
    },
    {
      dateOfPublishing: "15/05/2021",
      title: "Crypto is Crashing",
      blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ese ultrices dignissim id aenean risus. Ultrices a, pretium gravida diam.",
    },
    {
      dateOfPublishing: "13/02/2021",
      title: "Crypto Crashed",
      blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ese ultrices dignissim id aenean risus. Ultrices a, pretium gravida diam.",
    },
  ]);
  return (
    <>
      <Navbar />
      <div className={styles.blogs}>
        <SectionHeading title="Blog" />
        <div className={styles.blogTop}>
          <BlogTopSection />
        </div>
        <div className={styles.blogsHeading}>
          <BlogHeading title="Trending Now" />
        </div>
        <div className={styles.blogCards}>
          {blogDetails.map((item, index) => (
            <div className={styles.blogCardIndividual}>
              <BlogCards
                date={item.dateOfPublishing}
                title={item.title}
                blog={item.blog}
              />
            </div>
          ))}
        </div>
        <div className={styles.blogsHeading}>
          <BlogHeading title="New" />
        </div>
        <div className={styles.blogCards}>
          {blogDetails.map((item, index) => (
            <div className={styles.blogCardIndividual}>
              <BlogCards
                date={item.dateOfPublishing}
                title={item.title}
                blog={item.blog}
              />
            </div>
          ))}
        </div>
        <div className={styles.blogsHeading}>
          <BlogHeading title="Trading" />
        </div>
        <div className={styles.blogCards}>
          {blogDetails.map((item, index) => (
            <div className={styles.blogCardIndividual}>
              <BlogCards
                date={item.dateOfPublishing}
                title={item.title}
                blog={item.blog}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
