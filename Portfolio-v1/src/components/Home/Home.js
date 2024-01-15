import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Type from "./Type";
import krishna_image from "../../Assets/krishna_homepage.png";
import Particle from "../Particle";
import About from "../About/About";


function Home() {
  return (
    <section>
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hello! {" "}
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Krishna Kant Singhal</strong>
              </h1>

              <div style={{minHeight:"35px"}} >
                <Type />
              </div>

              <div style={{ marginTop: "6rem"}}>
                <h4 style={{color: "#70e7f0"}}>Contact me:</h4>
                <p style={{ fontSize: "1.2rem", marginBottom: "5px" }}>
                  Email:{" "}
                  <a href="mailto:krishnakant3002@gmail.com" style={{ textDecoration: "none", color:"#FF00FF", }}>
                    krishnakant3002@gmail.com
                  </a>
                </p>
                <p style={{ fontSize: "1.2rem", marginBottom: "5px" }}>
                  Phone:{" "}
                  <a href="tel:+91 89059 39046" style={{ textDecoration: "none", color: "inherit" }}>
                    +91 89059 39046
                  </a>
                </p>
              </div>

            </Col>
            <Col md={4} >
              <img
                src={krishna_image}
                alt="home pic"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      <Home2 />
      <About/>
      <Home3 />
    </section>
  );
}

export default Home;
