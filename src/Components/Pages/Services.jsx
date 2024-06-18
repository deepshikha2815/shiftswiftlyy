// src/Services.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Services.css';

const services = [
  { id: 1, name: 'Home Relocation', image: 'logo512.png', description: 'Plan a hassle-free and safe household move anywhere in the country with our packers and movers.' },
  { id: 2, name: 'Office Relocation', image: 'logo512.png', description: 'Office packers and movers companies will safely pack and move your expensive office items within time.' },
  { id: 3, name: 'Car Transport', image: 'logo512.png', description: 'Safely relocate your four-wheeler in specialized car carriers of our car transportation companies.' },
  { id: 4, name: 'Warehouse Services', image: 'logo512.png', description: 'Secure warehouse services to keep your belongings safe for any period of time.' },
  { id: 5, name: 'Packing Services', image: 'logo512.png', description: 'Professional packing services to ensure your items are packed securely and efficiently.' },
  { id: 6, name: 'International Relocation', image: 'logo512.png', description: 'Reliable and safe international relocation services to move you anywhere in the world.' },
  { id: 7, name: 'Bike Transportation', image: 'logo512.png', description: 'Efficient and safe bike transportation services for your two-wheeler.' },
];

const Services = () => {
  const handleCardClick = (serviceName) => {
    alert(`Book Now for ${serviceName}`); 
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Our Services</h2>
      {services.map(service => (
        <Row key={service.id} className="align-items-center mb-4 service-row">
          <Col md={4}>
            <div onClick={() => handleCardClick(service.name)} className="service-card-wrapper">
              <Card className="service-card">
                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/' + service.image} alt={service.name} className="service-image" />
                <Card.Body className="d-flex flex-column justify-content-between">
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={8} className="text-center">
            <h5 className="service-name">{service.name}</h5>
            <p className="service-description">{service.description}</p>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Services;
