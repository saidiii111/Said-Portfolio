import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => (
  <header>
    <h1>The Amazing React Tec</h1>
    <Nav pills>
      <NavItem>
        <NavLink exact to="/" activeClassName="active" tag={RRNavLink}>Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to="/about" activeClassName="active" tag={RRNavLink}>About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to="/contact" activeClassName="active" tag={RRNavLink}>Contact</NavLink>
      </NavItem>
    </Nav>
  </header>
)

export default Header;
