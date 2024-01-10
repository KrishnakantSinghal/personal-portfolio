import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ProjectCard from "../Projects/ProjectCards";
import projectscarddata from "../Projects/ProjectCardData";


const shuffleprojects = (projectslist) => {
    // Fisher-Yates shuffle algorithm
    for (let i = projectslist.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [projectslist[i], projectslist[j]] = [projectslist[j], projectslist[i]];
    }
    return projectslist;
  };
  
const projects = shuffleprojects([...projectscarddata]).slice(0, 3);;

const Project = ({ image, title, description, ghLink }) => (
    <Col md={4} className="project-card">
      <ProjectCard
        imgPath={image}
        title={title}
        description={description}
        ghLink={ghLink}
      />
    </Col>
  );

function Home3() {
    return (
        <Container fluid className="project-section">
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {projects?.map((project, index) => (
                        <Project 
                            key={index} 
                            image={project?.image} 
                            title={project?.title} 
                            description={project?.description} 
                            ghLink={project?.ghLink} 
                        />
                    ))}
                </Row>
                <Button variant="outline-info" className='text-light text-bold'>
                    <Link to='/projects' className="text-light font-weight-bold text-decoration-none ">View more</Link>
                </Button>
            </Container>
        </Container>
    )
}

export default Home3;
