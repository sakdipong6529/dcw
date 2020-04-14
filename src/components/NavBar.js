import React from 'react';
//import './NavBar.css'
import { Nav, Navbar, NavItem } from "react-bootstrap"



const NavBar = () => {
    return (
    <div>
        
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">PPP</Nav.Link>
        </Nav>
        
      </Navbar>
    </div>
  );
}


export default NavBar;