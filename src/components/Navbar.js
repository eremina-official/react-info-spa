import React from 'react';
import { NavLink } from 'react-router';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  return (
    <Navbar
      variant='light'
      bg='light'
      expand='md'
      collapseOnSelect
      className='align-items-start navbar-custom'
    >
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav' className='flex-column'>
        <p className='font-weight-bold mb-0 align-self-start pt-3 pt-md-0 pl-md-2'>
          Contents
        </p>
        <Nav className='mr-auto flex-column'>
          <NavLink to='/'>
            <div>Intro</div>
          </NavLink>
          <NavLink to='/react-info'>
            <div>React</div>
          </NavLink>
          <NavLink to='/react-components'>
            <div>React Components</div>
          </NavLink>
          <NavLink to='/react-elements'>
            <div>React Elements</div>
          </NavLink>
          <NavLink to='/react-jsx'>
            <div>JSX</div>
          </NavLink>
          <NavLink to='/handling-events-in-react'>
            <div>Handling Events</div>
          </NavLink>
          <NavLink to='/change-detection-in-react'>
            <div>Change Detection in React</div>
          </NavLink>
          <NavLink to='/create-react-app'>
            <div>Create React App</div>
          </NavLink>
          <NavLink to='/react-router'>
            <div>React Router</div>
          </NavLink>
          <NavLink to='/es6-modules'>
            <div>ES6 Modules</div>
          </NavLink>
          <NavLink to='/webpack'>
            <div>Webpack</div>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
