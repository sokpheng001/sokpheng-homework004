import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar_() {
  return (
    <Navbar bg="dark" variant='dark' className='sticky-top'>
    <Container>
      <Navbar.Brand href="/">MovieBox</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/movie">Movies</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}
