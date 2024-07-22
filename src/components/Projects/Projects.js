import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import myCards from "../../Assets/Projects/my-cards.png";
import gpaCalc from "../../Assets/Projects/ada-gpa-calculator.png";
import skillvania from "../../Assets/Projects/skillvania-logo.png";
import dimbal from "../../Assets/Projects/dim-bal-kalkulyatoru.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skillvania}
              isBlog={false}
              title="Skillvania"
              description="Skillvania is a platform that makes the hiring process easier, faster and saves money for companies."
              ghLink="https://github.com/karamlyy/skillvania"
              demoLink="https://www.skillvania.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myCards}
              isBlog={false}
              title="My Cards"
              description="My Cards is a application that saves your cards in one place. You can add, edit and delete your cards."
              ghLink="https://github.com/karamlyy/MyCards"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dimbal}
              isBlog={false}
              title="DIM Bal Kalkulyatoru"
              description="DIM Bal Kalkulyatoru is a android app to calculate exam points for students of Azerbaijan."
              ghLink="https://github.com/karamlyy/DIM-Bal-Kalkulyatoru"
                            
            />
          </Col>

  

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gpaCalc}
              isBlog={false}
              title="GPA Calculator for ADA University"
              description="This web app is developed by me to calculate Grade Point Avarage for ADA University students"
              ghLink="https://github.com/karamlyy/ada-gpa-calculator"
              demoLink="https://ada-gpa-calculator.pages.dev/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
