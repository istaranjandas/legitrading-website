import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../images/logo.png";
import ".././pages/home/home.css";

export default function Navigationbar() {
  return (
    <div className="navbar">
      <Navbar collapseOnSelect fixed="top" expand="sm" variant="light">
        <Container>
          <Navbar.Brand variant="dark">
            <img src={logo} alt="logo" /> Legitrading
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link
                style={{ color: "#1F1F1F", width: "100px" }}
                href="/"
                id="link"
              >
                Home
              </Nav.Link>
              <Nav.Link
                style={{ color: "#1F1F1F", width: "100px" }}
                href="/course"
                id="link"
              >
                Course
              </Nav.Link>
              <Nav.Link
                style={{ color: "#1F1F1F", width: "100px" }}
                href="/blog"
                id="link"
              >
                Blog
              </Nav.Link>
              <Nav.Link
                style={{ color: "#1F1F1F", width: "100px" }}
                href="/"
                id="link"
              >
                Explore
              </Nav.Link>
              <button style={{ marginRight: "25px" }} className="loginButton">
                Login
              </button>
              <button className="registerButton">Register</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
