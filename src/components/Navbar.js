import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  return (
    <Navbar variant="light" bg="light" expand="md" collapseOnSelect className="align-items-start pt-4 min-height-100vh">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="flex-column">
        <p className="font-weight-bold mb-0 align-self-start pt-3 pt-md-0 pl-md-2">Contents</p>
        <Nav className="mr-auto flex-column">
          {/* exact attribute must be set for Navlink to="/",
          otherwise className="active" attribute is always applied */}
          <Nav.Item><NavLink exact to="/" className="nav-link">Intro</NavLink></Nav.Item>
          <Nav.Item><NavLink to="/react-info" className="nav-link">React</NavLink></Nav.Item>
          <Nav.Item><NavLink to="/react-components" className="nav-link">React Components</NavLink></Nav.Item>
          <Nav.Item><NavLink to="/react-elements" className="nav-link">React Elements</NavLink></Nav.Item>
          <Nav.Item><NavLink to="/react-jsx" className="nav-link">JSX</NavLink></Nav.Item>
          <Nav.Item><NavLink to="/create-react-app" className="nav-link">Create React App</NavLink></Nav.Item>
          <Nav.Item><NavLink to="/react-router" className="nav-link">React Router</NavLink></Nav.Item>
          <Nav.Item><NavLink to="/es6-modules" className="nav-link">ES6 Modules</NavLink></Nav.Item>
          <Nav.Item><NavLink to="/webpack" className="nav-link">Webpack</NavLink></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;