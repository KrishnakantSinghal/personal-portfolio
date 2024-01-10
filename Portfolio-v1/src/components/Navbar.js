import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import resumepdf from "../Assets/resume.pdf"
import {
  AiOutlineHome,
  AiOutlineUser,
  AiTwotoneContacts,
  AiOutlineDownload
} from "react-icons/ai";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const isMobile = width <= 890; // Adjust the threshold as needed

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item className="resume-btn">
                <Container>
                {isMobile ? (
                    <Button
                        variant="primary"
                        href={resumepdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                      >
                    <AiOutlineDownload />
                    &nbsp;Download CV
                  </Button>
                ) : (
                  <Button as={Link} to="/resume" onClick={() => updateExpanded(false)} className="nav-link-button">
                    <AiOutlineDownload style={{ marginBottom: "2px" }} /> Download CV
                  </Button>
                  )}
                </Container>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
