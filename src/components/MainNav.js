import React from "react";
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';  
import NavDropdown from 'react-bootstrap/NavDropdown';
import './MainNav.css'


function MainNav() {
  return (
    <div className="homenav">

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        
        <Navbar.Brand href="/shopkart/main">ShopKart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
          </Nav>
          <Nav>
            <Link to="/shopkart/main"><div className="items">Home</div></Link>
            <Link to="/shopkart/cart"><div className="items">Cart</div></Link>
            <Link to="/shopkart/orders"><div className="items">Orders</div></Link>
            <Link to="/shopkart/profile"><div className="items">Profile</div></Link>
            <Link to="/"><div className="items">Logout</div></Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  );
}

export default MainNav;