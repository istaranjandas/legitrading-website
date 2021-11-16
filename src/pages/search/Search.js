import React, { useState } from "react";
import "./search.css";
import Button from "@mui/material/Button";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Navbar from "../../components/Navbar";
import stocksimage from "../../images/stocksimage.png";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import BookmarkBorder from "@mui/icons-material/BookmarkBorder";
import { Schedule } from "@mui/icons-material";
import Footer from "../../components/Footer";

export default function Search() {
  const [list, setList] = useState([
    {
      title: "Stock MarketBasics",
      institute: "XYZ Institute",
      star: "4.5",
      rate: "1235 ratings | 56,000 students enrolled",
      type: "Beginner",
      price: "₹ 1500",
      actualprice: "₹ 2000",
      discount: "25% off",
      days: "1 day left for this price",
    },
    {
      title: "Stock MarketBasics",
      institute: "XYZ Institute",
      star: "4.5",
      rate: "1235 ratings | 56,000 students enrolled",
      type: "Beginner",
      price: "₹ 1500",
      actualprice: "₹ 2000",
      discount: "25% off",
      days: "1 day left for this price",
    },
    {
      title: "Stock MarketBasics",
      institute: "XYZ Institute",
      star: "4.5",
      rate: "1235 ratings | 56,000 students enrolled",
      type: "Beginner",
      price: "₹ 1500",
      actualprice: "₹ 2000",
      discount: "25% off",
      days: "1 day left for this price",
    },
    {
      title: "Stock MarketBasics",
      institute: "XYZ Institute",
      star: "4.5",
      rate: "1235 ratings | 56,000 students enrolled",
      type: "Beginner",
      price: "₹ 1500",
      actualprice: "₹ 2000",
      discount: "25% off",
      days: "1 day left for this price",
    },
    {
      title: "Stock MarketBasics",
      institute: "XYZ Institute",
      star: "4.5",
      rate: "1235 ratings | 56,000 students enrolled",
      type: "Beginner",
      price: "₹ 1500",
      actualprice: "₹ 2000",
      discount: "25% off",
      days: "1 day left for this price",
    },
  ]);

  return (
    <div className="search">
      <Navbar />
      <div className="filter">
        <div>
          <Button variant="contained" size="small" className="bttn1">
            <TrendingUpIcon />
            Trading
          </Button>
          <Button
            variant="outlined"
            size="small"
            style={{ borderColor: "#121335" }}
            className="btn2"
          >
            <ListAltIcon />
            Investments
          </Button>
          <Button
            variant="outlined"
            size="small"
            style={{ borderColor: "#121335" }}
            className="btn2"
          >
            <TrendingUpIcon />
            Entrepreneurshi p
          </Button>
        </div>
        <Button
          variant="outlined"
          size="small"
          style={{ borderColor: "#121335" }}
          className="btn3"
        >
          <FilterListIcon />
          Filter
        </Button>
      </div>
      <div className="search-result">
        {list.map((item, index) => (
          <div className="search-example">
            <img className="search-img" src={stocksimage} alt="stocksimage" />
            <div style={{ paddingRight: "430px" }}>
              <p
                style={{
                  color: "#1F1F1F",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  color: "#666666",
                  fontSize: "14px",
                  fontWeight: "normal",
                }}
              >
                {item.institute}
              </p>
              <p>
                <span
                  style={{
                    color: "#242424",
                    fontSize: "16px",
                    fontWeight: "normal",
                  }}
                >
                  {item.star}
                </span>
                <StarIcon style={{ fontSize: 17 }} />
                <StarIcon style={{ fontSize: 17 }} />
                <StarIcon style={{ fontSize: 17 }} />
                <StarIcon style={{ fontSize: 17 }} />
                <StarBorderIcon style={{ fontSize: 17 }} />
                <span
                  style={{
                    color: "#242424",
                    fontSize: "10px",
                    fontWeight: "normal",
                  }}
                >
                  {item.rate}
                </span>
              </p>
              <p
                style={{
                  color: "#1F1F1F",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                {item.type}
              </p>
            </div>
            <div>
              <span style={{ paddingLeft: "152px" }}>
                <BookmarkBorder />
              </span>
              <p style={{ paddingTop: "45px" }}>
                <span
                  style={{
                    fontSize: "24px",
                    color: "#1F1F1F",
                    fontWeight: "bold",
                    paddingRight: "10px",
                  }}
                >
                  {item.price}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#666666",
                    paddingRight: "10px",
                    textDecoration: "line-through",
                  }}
                >
                  {item.actualprice}
                </span>
                <span style={{ fontSize: "12px", color: "#666666" }}>
                  {item.discount}
                </span>
              </p>
              <p style={{ color: "#FF0000" }}>
                <span>
                  <Schedule />
                </span>
                <span style={{ fontSize: "12px" }}>{item.days}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
