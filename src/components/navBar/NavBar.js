import React from "react";
import logo from "./logo.svg";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="myGreen" variant="dark"
       sticky="top" expand="lg" collapseOnSelect>
        <Navbar.Brand href="#home">
          <img src={logo} width="40px" height="40px" alt="Logo de Nativo bar" />{" "}
          Nativo
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
        
          <Nav>
            <Nav.Link href="#home">Burguers</Nav.Link>
            <Nav.Link href="#features">Pizas</Nav.Link>
            <Nav.Link href="#pricing">Fried</Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
