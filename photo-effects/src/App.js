import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import Notfound from './layout/Notfound';
import Landing from './layout/Landing';
import Dashboard from './layout/Dashboard';
import Canvas from './layout/Canvas/Canvas';

export default class App extends Component {
  render = () => (
    <div>
      <Router>
        <Switch>
          <Route exact path="/home" component={Landing}  />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/canvas" component={Canvas} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    </div>
  );
}

// Joe is cool
