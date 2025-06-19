import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "	#001A6E" }} variant="dark">
  <Container>
    <Navbar.Brand href="/" style={{ fontWeight: 'bold' }}><i class="fa-solid fa-plane-departure"></i> FlyNow</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#flights">Flights</Nav.Link>
        <Nav.Link href="#offers">Offers</Nav.Link>
        <Nav.Link href="#support">Support</Nav.Link>
      </Nav>
      <button className="btn btn-outline-light rounded-pill px-4">Login / Signup</button>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </>
  );
}

export default Header;