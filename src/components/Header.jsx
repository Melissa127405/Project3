import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function Header () {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"> Doodle Grooming </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./Homepage">Welcome</Nav.Link>
            <Nav.Link href="./Contactpage">Contact Info </Nav.Link>
            <Nav.Link href="./Groompage">grooming form</Nav.Link>
             </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   )
}


