import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const Navigation = () => {
  return (
    <Navbar variant="light" bg="light" expand="md" collapseOnSelect className="align-items-start pt-4 min-height-100vh">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="flex-column">
        <p className="font-weight-bold mb-0 align-self-start pt-3 pt-md-0 pl-md-2">Contents</p>
        <Nav className="mr-auto flex-column">
          {/* react-router-bootstrap provides integration between React Router v4 and React Bootstrap. 
          React Bootstrap elements are wrapped in a <LinkContainer> to make them behave like a React Router <Link>.
          For <LinkContainer to="/" exact attribute must be set, 
          otherwise the className="active" is always attached.*/}
          <LinkContainer exact to="/">
            <Nav.Link>Intro</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/react-info">
            <Nav.Link>React</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/react-components">
            <Nav.Link>React Components</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/react-elements">
            <Nav.Link>React Elements</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/react-jsx">
            <Nav.Link>JSX</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/create-react-app">
            <Nav.Link>Create React App</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/react-router">
            <Nav.Link>React Router</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/es6-modules">
            <Nav.Link>ES6 Modules</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/webpack">
            <Nav.Link>Webpack</Nav.Link>
          </LinkContainer> 
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;