import React from "react";
import { Col, Row } from "react-bootstrap";
import techs from "./TechstackValue";

const Tech = ({ Icon, name }) => (
  <Col className="tech-icons">
    <Icon />
    <div style={{ display: "grid" }}>
      <b className="techstack">{name}</b>
    </div>
  </Col>
);

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", margin: "0px", display:"grid", gridTemplateColumns: "repeat(4,1fr)", gap:"1rem" }}>
      {techs?.map((tool, index) => (
        <Tech key={index} Icon={tool?.icon} name={tool?.name} />
      ))}
    </Row>

  );
}

export default Techstack;
