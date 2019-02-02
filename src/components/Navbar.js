import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        {/* exact attribute must be set for Navlink to="/",
        otherwise className active attribute is always applied */}
        <li><NavLink exact to="/">Intro</NavLink></li>
        <li><NavLink to="/react-info">React</NavLink></li>
        <li><NavLink to="/react-components">React Components</NavLink></li>
        <li><NavLink to="/react-elements">React Elements</NavLink></li>
        <li><NavLink to="/react-jsx">JSX</NavLink></li>
        <li><NavLink to="/create-react-app">Create React App</NavLink></li>
        <li><NavLink to="/react-router">React Router</NavLink></li>
        <li><NavLink to="/es6-modules">ES6 Modules</NavLink></li>
        <li><NavLink to="/webpack">Webpack</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;