import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Root from './components/Root';
import User from './components/User';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Root>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/user">
            <User/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>
        </Root>
      </Router>
    );
  }
}

render(<App/>, window.document.getElementById('app'));
