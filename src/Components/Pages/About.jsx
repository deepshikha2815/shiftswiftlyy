import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <Container className="about-container mt-5">
      <h2 className="text-center mb-4">About Us</h2>
      <Row>
        <Col md={8}>
          <p className="about-text">
            Welcome to [Your Company Name], your reliable partner for all your packing and moving needs. 
            We are committed to providing top-notch services to ensure a smooth and stress-free moving experience for our customers.
          </p>
          <p className="about-text">
            Our mission is to offer quality and efficient packing and moving services tailored to meet your unique requirements. 
            We value our customers' trust and strive to exceed their expectations with every move.
          </p>
          <p className="about-text">
            Whether you are moving locally or across the country, our team of experienced professionals is here to help you every step of the way.
          </p>
        </Col>
        <Col md={4}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={process.env.PUBLIC_URL + '/a3.jpeg'}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Quality Packing</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={process.env.PUBLIC_URL + '/a3.jpeg'}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Safe Moving</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src={process.env.PUBLIC_URL + '/a3.jpeg'}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Timely Delivery</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <h3 className="text-center mt-5">Our Values</h3>
      <Row>
        <Col md={4}>
          <Card className="value-card">
            <Card.Body>
              <Card.Title>Integrity</Card.Title>
              <Card.Text>
                We uphold the highest standards of integrity in all our actions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="value-card">
            <Card.Body>
              <Card.Title>Customer Commitment</Card.Title>
              <Card.Text>
                We develop relationships that make a positive difference in our customers' lives.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="value-card">
            <Card.Body>
              <Card.Title>Quality</Card.Title>
              <Card.Text>
                We provide outstanding services that deliver premium value to our customers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;