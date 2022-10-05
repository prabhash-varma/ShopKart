import React from "react";
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';  
import NavDropdown from 'react-bootstrap/NavDropdown';

function HomeNav() {
  return (
    <div>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        
        <Navbar.Brand href="/">ShopKart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
          </Nav>
          <Nav>
            
          <Link to="/login"><div className="items">Login</div></Link>
          <Link to="/register"><div className="items">Register</div></Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  );
}

export default HomeNav;
