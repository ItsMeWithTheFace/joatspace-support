import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavLink, Nav, NavItem } from 'reactstrap';

class NavInstance extends Component {
  render = () => {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <a href="https://www.joatspace.com/">JoatSpace</a>
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
  }
}

export default NavInstance;
