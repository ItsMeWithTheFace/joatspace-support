import React from 'react';
import { Navbar, NavbarBrand, NavLink, Nav, NavItem } from 'reactstrap';

const NavInstance = () => (
  <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="https://www.joatspace.com/">
        JoatSpace
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="#about">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#product">
            Product
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#support">
            Support
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
)

export default NavInstance;
