import React, { useState } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";

export default function Resume() {
  const [wordFileUrl, setWordFileUrl] = useState(
    "https://example.com/resume.docx"
  );

  return (
    <Container>
      <h2 className="text-center mt-3">Download Resume</h2>
      <div className="d-flex justify-content-center">
        <a href={wordFileUrl} download>
          <Button variant="primary">Download Word File</Button>
        </a>
      </div>
      <h2 className="text-center mt-5">Front-end Development Skills</h2>
      <ListGroup
        className="mt-3"
        style={{ maxWidth: "20em", margin: "0 auto" }}
      >
        <ListGroup.Item>HTML</ListGroup.Item>
        <ListGroup.Item>CSS</ListGroup.Item>
        <ListGroup.Item>JavaScript</ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
      </ListGroup>
      <h2 className="text-center mt-5">Backend Development Skills</h2>
      <ListGroup
        className="mt-3"
        style={{ maxWidth: "20em", margin: "0 auto" }}
      >
        <ListGroup.Item>Node.js</ListGroup.Item>
        <ListGroup.Item>Express</ListGroup.Item>
        <ListGroup.Item>MySQL</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
