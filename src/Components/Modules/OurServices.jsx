import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './home.css';

const services = [
  {
    title: "Residential Moving",
    description: "We provide comprehensive residential moving services, ensuring a smooth and stress-free relocation.",
    imageUrl: "https://via.placeholder.com/300x200?text=Residential+Moving"
  },
  {
    title: "Commercial Moving",
    description: "Our commercial moving services minimize downtime and ensure your business is up and running quickly.",
    imageUrl: "https://via.placeholder.com/300x200?text=Commercial+Moving"
  },
  {
    title: "Packing and Unpacking",
    description: "Our expert team carefully packs and unpacks your belongings, ensuring they arrive safely at your new location.",
    imageUrl: "https://via.placeholder.com/300x200?text=Packing+and+Unpacking"
  },
 
];

const OurServices = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Our Services</h1>
      <Row>
        {services.map((service, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={service.imageUrl} alt={service.title} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurServices;
