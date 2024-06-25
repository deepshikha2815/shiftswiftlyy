import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrderCompletePage = () => {
    // Example order details (replace with actual data or props if available)
    const order = {
        customerName: 'John Doe',
        contactNo: '123-456-7890',
        deliveryDate: 'June 23, 2024',
        shippingAddress: '123 Main St, Anytown, USA',
        // Add more order details as needed
    };

    return (
        <Container className="mt-5">
            <h2>Orders Completed Successfully</h2>
            <Card className="mt-3">
                <Card.Body>
                    <Card.Title>Order Summary</Card.Title>
                    <Card.Text>
                        <p><strong>Customer Name:</strong>  {order.customerName}</p>
                        <p><strong>Contact Number:</strong>  {order.contactNo}</p>
                        <p><strong>Delivery Date:</strong>  {order.deliveryDate}</p>
                        <p><strong>Delivery Address:</strong>  {order.shippingAddress}</p>
                        {/* Additional order details as needed */}
                    </Card.Text>
                    {/* <Link to="/" className="btn btn-primary me-2">Back to Home</Link>
                    <Button variant="success">Track Order</Button> */}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default OrderCompletePage;
