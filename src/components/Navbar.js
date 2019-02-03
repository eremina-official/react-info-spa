import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="col-sm-4 align-items-start navbar navbar-expand-sm navbar-light bg-light pt-4">
      <button className="navbar-toggler mb-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse flex-column" id="navbarSupportedContent">
        <p className="font-weight-bold mb-0 align-self-start pl-sm-2">Contents</p>
        <ul className="navbar-nav mr-auto flex-column list-unstyled">
          {/* exact attribute must be set for Navlink to="/",
          otherwise className="active" attribute is always applied */}
          <li className="nav-item"><NavLink exact to="/" className="nav-link">Intro</NavLink></li>
          <li className="nav-item"><NavLink to="/react-info" className="nav-link">React</NavLink></li>
          <li className="nav-item"><NavLink to="/react-components" className="nav-link">React Components</NavLink></li>
          <li className="nav-item"><NavLink to="/react-elements" className="nav-link">React Elements</NavLink></li>
          <li className="nav-item"><NavLink to="/react-jsx" className="nav-link">JSX</NavLink></li>
          <li className="nav-item"><NavLink to="/create-react-app" className="nav-link">Create React App</NavLink></li>
          <li className="nav-item"><NavLink to="/react-router" className="nav-link">React Router</NavLink></li>
          <li className="nav-item"><NavLink to="/es6-modules" className="nav-link">ES6 Modules</NavLink></li>
          <li className="nav-item"><NavLink to="/webpack" className="nav-link">Webpack</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;