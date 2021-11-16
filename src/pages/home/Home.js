import React from "react";
import "./home.css";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import EventSection from "./EventSection";
import Footer from "../../components/Footer";
import Whyus from "../../components/Whyus";
import Testimonials from "../../components/Testimonials";
import SectionCourse from "../../components/SectionCourse";
import Search from "../search/Search";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Whyus />
      <Testimonials />
      <SectionCourse />
      <EventSection />
      <Footer />
    </>
  );
}
