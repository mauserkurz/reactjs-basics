import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <ul className="nav navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
