import React, { useState } from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) {
      setError(true);
      return;
    }
    setError(false);
    // Send email to thvas1911@gmail.com
  };

  return (
    <div className="container my-5">
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <FormControl
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="form-control form-control-lg"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="form-control form-control-lg"
          />
        </InputGroup>
        <Form.Control
          as="textarea"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          className="form-control form-control-lg"
        />
        {error && <p className="text-danger">Message cannot be empty</p>}
        <Button variant="primary" type="submit" className="mt-3">
          Send
        </Button>
      </Form>
    </div>
  );
}
