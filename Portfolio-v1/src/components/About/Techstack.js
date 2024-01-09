import React from "react";
import { Col, Row } from "react-bootstrap";
import techs from "./TechstackValue";

const Tech = ({ Icon, name }) => (
  <Col xs={4} md={2} className="tech-icons">
    <Icon />
    <div style={{ display: "grid" }}>
      <b className="techstack">{name}</b>
    </div>
  </Col>
);

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    {techs?.map((tool, index) => (
      <Tech key={index} Icon={tool?.icon} name={tool?.name} />
    ))}
    </Row>

  );
}

export default Techstack;
