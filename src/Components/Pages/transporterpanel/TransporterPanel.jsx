import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./TransporterPanel.css";

const TransporterPanel = () => {
  return (
    <div className="transporter-panel">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="mb-4">

            <Card className="transporter-card">
              <Card.Body>
                <span className="card-title-left">My Profile</span>
                <span className="card-count-right">5</span>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
          
            <Card className="transporter-card">
              <Card.Body>
                <span className="card-title-left">Pending Orders</span>
                <span className="card-count-right">10</span>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="transporter-card">
              <Card.Body>
                <span className="card-title-left">Completed Orders</span>
                <span className="card-count-right">20</span>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="transporter-card">
              <Card.Body>
                <span className="card-title-left">Total Vehicles</span>
                <span className="card-count-right">15</span>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TransporterPanel;
