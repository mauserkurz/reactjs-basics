import React from 'react';

export default (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <ul className="nav navbar-nav">
          <li className="nav-item"><a className="nav-link" href="#">{props.homeLink}</a></li>
        </ul>
      </div>
    </nav>
  );
};
