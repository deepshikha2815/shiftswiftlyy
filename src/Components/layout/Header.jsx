import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './logo.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm p-3 mb-0">
      <Container>
        <Navbar.Brand href="/" className="font-weight-bold logo"><span id='FS'>S</span><span id='S'>hift</span><span id='FS'>S</span><span id='S'>wiftly</span></Navbar.Brand> {/* Apply the logo class */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/" className="mx-3">Home</Nav.Link>
            <Nav.Link href="#services" className="mx-3">Services</Nav.Link>
            <Nav.Link href="#about" className="mx-3">About</Nav.Link>
            <Nav.Link href="#contact" className="mx-3">Contact</Nav.Link>
            <Nav.Link href="#login" className="mx-3">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;