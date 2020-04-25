import React from 'react';
import { Nav, Navbar, NavItem } from "react-bootstrap"

const NavBar = () => {
    return (
    <div>       
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">MiniProject</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
          <Nav.Link href="https://www.facebook.com/sakdipong.jay" target='_blank'>Facebook</Nav.Link>
          <Nav.Link href="https://github.com/sakdipong6529/dcw" target='_blank'>Github</Nav.Link>
          <Nav.Link href="" target='_blank'>Medium</Nav.Link>
        </Nav>       
      </Navbar>
    </div>
  );
}
export default NavBar;