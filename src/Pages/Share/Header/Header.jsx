import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import './Header'

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut=()=>{
    signOut(auth)
  }
    return (
        <>
  <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/"><img src={logo} height='30' alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link  href="home#services">Services</Nav.Link>
      <Nav.Link href="home#experts">Experts</Nav.Link> 
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      {user ? <button style={{border:'none',backgroundColor:'transparent',color:'GrayText'}} onClick={handleSignOut}>Sign Out</button>
      :<Nav.Link as={Link} to="/login">
        LogIn
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Header;