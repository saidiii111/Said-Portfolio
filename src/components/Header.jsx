import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => (
  <header className="header">

    <Nav className="justify-content-center mt-1 mb-3 header" pills>
          <NavItem>
            <NavLink exact to="/" activeClassName="active" tag={RRNavLink}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to="/about" activeClassName="active" tag={RRNavLink}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to="/projects" activeClassName="active" tag={RRNavLink}>Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to="/contact" activeClassName="active" tag={RRNavLink}>Contact</NavLink>
          </NavItem>
    </Nav>
  </header>
)

export default Header;
