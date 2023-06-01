import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

const Navs = () => {
  return (
    <div>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">خدماتي</Nav.Link>
              <Nav.Link href="#">جرافيك ديزاين</Nav.Link>
              <Nav.Link href="#">إعتماداتي</Nav.Link>
              <Navbar.Brand className="logo" href="#">
                <img src="logo192.png" alt="Logo" className="wrapper" />
              </Navbar.Brand>

              <Nav.Link href="#">دبلوم التسويق </Nav.Link>

              <Nav.Link href="#">تدوينات</Nav.Link>
              <Nav.Link href="#">من أنا</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navs;
