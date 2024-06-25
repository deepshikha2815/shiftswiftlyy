import React, { useState } from 'react';
import { Button, Container, Row, Col, ListGroup } from 'react-bootstrap';
 import './PendingOrders.css';

const initialOrders = [
  { 
    id: 1, 
    customerName: 'John Doe', 
    contactNo: '123-456-7890', 
    load: 'Household items', 
    from: 'New York', 
    to: 'Los Angeles', 
   
  },
  { 
    id: 2, 
    customerName: 'Jane Smith', 
    contactNo: '987-654-3210', 
    load: 'Electronics', 
    from: 'Chicago', 
    to: 'Houston', 
    
  },
  { 
    id: 3, 
    customerName: 'Jane Smith', 
    contactNo: '987-654-3210', 
    load: 'Electronics', 
    from: 'Chicago', 
    to: 'Houston', 
    
  },
  // Add more orders as needed
];

const PendingOrders = () => {
  const [orders, setOrders] = useState(initialOrders);

  const handleConfirm = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
    console.log(`Order ${orderId} confirmed`);
    // Add logic to handle confirmation, such as updating the server
  };

  const handleReject = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
    console.log(`Order ${orderId} rejected`);
    // Add logic to handle rejection, such as updating the server
  };

  return (
    <Container className="mt-5">
      <h2>Pending Orders</h2>
      <ListGroup>
        {orders.map(order => (
          <ListGroup.Item key={order.id} className="order-list-item">
            <Row>
              <Col md={8}>
                <p><strong>Name:</strong>  {order.customerName}</p>
                <p><strong>Contact Number:</strong>  {order.contactNo}</p>
                <p><strong>Load:</strong>  {order.load}</p>
                <p><strong>From:</strong>  {order.from}</p>
                <p><strong>To:</strong>  {order.to}</p>
                <p>{order.orderDetails}</p>
              </Col>
              <Col md={4} className="text-end">
                <Button
                  variant="success"
                  className="me-2 mb-4"
                  onClick={() => handleConfirm(order.id)}
                >
                  Confirm
                </Button><br></br>
                <Button
                  variant="danger"
                  className="mb-4 me-2"
                  onClick={() => handleReject(order.id)}
                >
                  Reject
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default PendingOrders;
