import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import resumepdf from "../Assets/resume.pdf"
import {
  AiOutlineHome,
  AiOutlineDownload
} from "react-icons/ai";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [width, setWidth] = useState(1200);
  const isMobile = width <= 890; // Adjust the threshold as needed

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);


  return (
    <div>
          <Nav
            style={{display:"block"}}
           defaultActiveKey="#home"
           >
            <div
              className="centerise"
            >
            <Nav.Item className="nav-item">
              <Button
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
                className="nav-link-button"
              >
                <AiOutlineHome/>
              </Button>
            </Nav.Item>

            <Nav.Item className="nav-item">               
                {isMobile ? (
                  // Button for mobile view
                    <Button
                        variant="primary"
                        href={resumepdf}
                        target="_blank"
                      >
                    <AiOutlineDownload />
                    &nbsp;Download CV
                  </Button>
                ) : (
                  <Button as={Link} to="/resume" onClick={() => updateExpanded(false)} className="nav-link-button">
                    <AiOutlineDownload/> Download CV
                  </Button>
                  )}
            </Nav.Item>
            </div>
          </Nav>
    </div>
  );
}

export default NavBar;
