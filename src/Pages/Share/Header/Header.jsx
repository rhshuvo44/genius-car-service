import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <>
           <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">
        <img src={logo} height='30' alt="" />
    </Navbar.Brand>
    <Nav className="ms-auto">
      <Link className='nav-link' to="/home">Home</Link>
      <Link className='nav-link' to="/services">Services</Link>
      <Link className='nav-link' to="/experts">Experts</Link>
      <Link className='nav-link' to="/features">Features</Link>
      <Link className='nav-link' to="/pricing">Pricing</Link>
      <Link className='nav-link' to="/pricing">About</Link>
    </Nav>
    </Container>
  </Navbar>
        </>
    );
};

export default Header;