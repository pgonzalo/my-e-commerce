import React from "react";
import logo from "./logo.svg";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav  } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
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
        <NavLink to="/home">
        <Navbar.Brand href="#home"className="nav-bar-brand">
          <img src={logo} alt="Logo de Nativo bar"  height="45px"
            font-weight= "bolder" width= "45px"/>{" "}
          Nativo
        </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="nav-items">
            <NavLink to="/category/burger" className="Link">
               BURGERS
            </NavLink>
            <NavLink to="/category/pizza" className="Link">
               PIZZAS 
            </NavLink>
            <NavLink to="/category/picar" className="Link">
               PARA PICAR
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Navbar>
    </>
  );
};

export default NavBar;
