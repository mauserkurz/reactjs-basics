import React from 'react';

import Header from '../components/Header';

export default class Root extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1">
            <Header/>
          </div>
        </div>

        <hr/>

        <div className="row">
          <div className="col-10 offset-1">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}