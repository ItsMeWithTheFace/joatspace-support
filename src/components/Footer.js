import React from 'react';
import { CardFooter, Nav, NavItem, NavLink } from 'reactstrap';

const Footer = () => {
  return (
    <CardFooter>
      <Nav className="ml-auto">
        <NavItem>
          <NavLink href="#terms">Terms and Conditions</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#twitter">Twitter</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#faq">FAQ</NavLink>
        </NavItem>
      </Nav>
    </CardFooter>
  )
}

export default Footer
