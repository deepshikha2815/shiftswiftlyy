import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <Container className="contact-us-container mt-5">
      
      <Row>
        <Col md={6}>
          <h2>Get In Touch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan eros, sit amet auctor nunc. Nullam ac purus.
          </p>
          <div className="contact-info">
            <p><i className="fas fa-map-marker-alt"></i> London Eye, London, UK</p>
            <p><i className="fas fa-phone-alt"></i> +123-456-7890</p>
            <p><i className="fas fa-envelope"></i> mailto@subx.com</p>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div> 
        </Col>
        <Col md={6}>
          <h2>Send a Message</h2>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>E-mail address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Text className="text-muted">
                By submitting, you agree to the processing of your personal data by SubX as described in the Privacy Statement.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
      
    </Container>
  );
};

export default Contact;
