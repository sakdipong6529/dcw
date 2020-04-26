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
          <Nav.Link href="https://medium.com/@sakdipong6529/mini-project-dcw-69a66789c1d1?sk=e83c26752f4126ce2ba75461d0a30161" target='_blank'>Medium</Nav.Link>
        </Nav>       
      </Navbar>
    </div>
  );
}
export default NavBar;