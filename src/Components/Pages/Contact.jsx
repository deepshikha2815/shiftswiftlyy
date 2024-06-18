import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Contact.css'; // Import custom CSS for additional styling

const Contact = () => {
  return (
    <Container className="contact-container mt-5">
      <div className="form-wrapper">
        <h2 className="text-center mb-4">Contact Us</h2>
        <Form className="contact-form">
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
            />
          </Form.Group>

          <Form.Group controlId="formPhone" className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              name="phone"
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
            />
          </Form.Group>

          <Form.Group controlId="formCity" className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your city"
              name="city"
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Contact;
