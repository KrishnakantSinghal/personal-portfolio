import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import krishna_formal from "../../Assets/Krishna_formal.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="sky"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
                Versatile 
                <i>
                  <b className="sky"> Python Developer </b>
                </i>
                 with a passion for solving complex problems through elegant and efficient coding. 
              <br />
              <br />
              Experienced in 
                <i>
                  <b className="sky"> full-stack development </b>
                </i>
                 development, specializing in back-end technologies.
              <br />
              <br />
              Proven ability to 
              <i>
                <b className="sky"> design, develop, and implement </b>
              </i>               software solutions to meet business
                requirements.
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="sky">Web Technologies and Products. </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              That makes other life <b className="sky">easier and secure.</b>


            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={krishna_formal} style={{"maxWidth": "70%"}} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="sky">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/KrishnakantSinghal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/krishna-kant-singhal-7016501a0/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/krishna.singhal.2003?igsh=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
