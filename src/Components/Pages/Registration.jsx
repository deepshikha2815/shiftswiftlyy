import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="login-container">
      <div className="form-wrapper">
        <h2>Registration</h2>
        <Form className="login-form" onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label className="form-label">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="form-control"
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label className="form-label">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
            />
          </Form.Group>

          <Form.Group controlId="formPhone" className="mb-3">
            <Form.Label className="form-label">Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-control"
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-control"
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword" className="mb-3">
            <Form.Label className="form-label">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="form-control"
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="btn-primary">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
