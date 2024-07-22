import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiAndroid,
  DiFlutter,
  DiDart,
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiRedis,
  SiDart,
  SiFirebase,

  SiPostgresql,
} from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";
import { TbBrandFlutter } from "react-icons/tb";
function Techstack() {
    return (
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <TbBrandFlutter />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <TbBrandKotlin />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiAndroid />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDart />
        </Col>
       

        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiRedis />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql />
        </Col>
       
        
      </Row>
    );
  }

export default Techstack;
