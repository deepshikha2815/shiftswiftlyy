import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './Tlogin.css';

const Tlogin = () => {
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="login-container">
      <div className="form-wrapper">
        <h2>Login</h2>
        <Form className="login-form" onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="formPhone" className="mb-3">
            <Form.Label column sm={4} className="form-label">
              Mobile Number
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                placeholder="Enter your mobile number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-control"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formPassword" className="mb-3">
            <Form.Label column sm={4} className="form-label">
              Password
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="form-control"
              />
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit" className="btn-primary">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Tlogin;
