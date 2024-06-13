import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTruck, FaClipboardList, FaBox, FaTruckLoading } from 'react-icons/fa';

const WorkingProcess = () => {
  return (
    <Container className="text-center my-5">
      <h2>Working Process</h2>
      <h3>We Make It Happen In 4 Easy Steps</h3>
      <p>We provide best relocation or shifting services in this competitive market. We have a team of well trained movers services specialists ready to work according to your demands.</p>
      <Row className="mt-4">
        <Col md={3}>
          <Card className="mb-4">
            <Card.Body>
              <FaTruck size={50} className="mb-3"/>
              <Card.Title>You Book A Service</Card.Title>
              <Card.Text>
                Choose one of our relocation services from enquiry Form on Book Now Page.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Body>
              <FaClipboardList size={50} className="mb-3"/>
              <Card.Title>Schedule a survey</Card.Title>
              <Card.Text>
                Our team will report to your location for a survey which will help in accurate schedule.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Body>
              <FaBox size={50} className="mb-3"/>
              <Card.Title>We Pack Your Goods</Card.Title>
              <Card.Text>
                Our experienced moving professional team pack your goods in sturdy packaging material.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Body>
              <FaTruckLoading size={50} className="mb-3"/>
              <Card.Title>Loaded & Delivered</Card.Title>
              <Card.Text>
                Our professionals deliver, unload, unpack & install your goods safely in your new space.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default WorkingProcess;