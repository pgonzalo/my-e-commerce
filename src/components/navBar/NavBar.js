import React from "react";
import logo from "./logo.svg";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav  } from "react-bootstrap";
import CartWidget from "../cartWidget/CartWidget";
import {  NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <>
      <Navbar
        bg="myGreen"
        variant="dark"
        sticky="top"
        expand="lg"
        collapseOnSelect
      >
        <Navbar.Brand href="#home">
          <img src={logo} width="40px" height="40px" alt="Logo de Nativo bar" />{" "}
          Nativo
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <NavLink to="#Burgers"> BURGERS </NavLink>
            <NavLink to="#Pizas"> PIZAS </NavLink>
            <NavLink to="#Fried"> FRITOS </NavLink>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Navbar>
    </>
  );
};

export default NavBar;
