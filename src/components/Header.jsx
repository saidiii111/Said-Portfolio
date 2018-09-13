import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => (
  <header className="header">

    <Nav className="justify-content-left mt-2 mb-3 header col-sm nav-fill" pills>
          <NavItem className="navitem">
            <NavLink exact to="/" activeClassName="active" tag={RRNavLink}>Home</NavLink>
          </NavItem>

          <NavItem className="navitem">
            <NavLink exact to="/about" activeClassName="active" tag={RRNavLink}>About</NavLink>
          </NavItem>

          <NavItem className="navitem">
            <NavLink exact to="/projects" activeClassName="active" tag={RRNavLink}>Projects</NavLink>
          </NavItem>

          <NavItem className="navitem">
          <NavLink exact to="/contact" activeClassName="active" tag={RRNavLink}>Contact</NavLink>
          </NavItem>

            <NavItem className="navitem">
              <NavLink exact to="/colors" activeClassName="active" tag={RRNavLink}>Colors</NavLink>
            </NavItem>

    </Nav>
  </header>

)

export default Header;
