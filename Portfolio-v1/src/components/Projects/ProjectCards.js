import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view ">
      <Card.Img variant="top" src={props.imgPath} alt="card-img"  />
      <Card.Body >
        <Card.Title>{props.title}</Card.Title>

        <div className="">
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub />
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{borderRadius:"50%",margin:1}}

          >
            <CgWebsite /> 
          </Button>
        )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
