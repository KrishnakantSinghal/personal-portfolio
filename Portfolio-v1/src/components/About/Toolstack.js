import React from "react";
import { Col, Row } from "react-bootstrap";

import tools from "./ToolstackValue";

// Create a Tool component to render each tool
const Tool = ({ Icon, name }) => (
  <Col xs={4} md={2} className="tech-icons">
    <Icon />
    <div style={{ display: "grid" }}>
      <b className="techstack">{name}</b>
    </div>
  </Col>
);

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    {tools?.map((tool, index) => (
      <Tool key={index} Icon={tool?.icon} name={tool?.name} />
    ))}
    </Row>

  );
}

export default Toolstack;
