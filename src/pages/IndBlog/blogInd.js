import React from "react";
import "./home.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import IndBlog from "./indBlog";

export default function Home() {
  return (
    <>
      <Navbar />
      <IndBlog/>
      <Footer />
    </>
  );
}
