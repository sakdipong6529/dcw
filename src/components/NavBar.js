import React from 'react';
import { Nav, Navbar, NavItem } from "react-bootstrap"

const NavBar = () => {
    return (
    <div>       
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">MiniProject</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="https://minipj-d020c.web.app/">Home</Nav.Link>
          <Nav.Link href="https://www.facebook.com/sakdipong.jay" target='_blank'>Facebook</Nav.Link>
          <Nav.Link href="https://github.com/sakdipong6529/dcw" target='_blank'>Github</Nav.Link>
          <Nav.Link href="https://medium.com/@sakdipong6529/mini-project-10a3f48f5787?sk=a4df08374b68c640c0cce46ebb978c09" target='_blank'>Medium</Nav.Link>
        </Nav>       
      </Navbar>
    </div>
  );
}
export default NavBar;