import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeStyle={{ color: 'red' }}
              to="/home">Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/user/4">User</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
