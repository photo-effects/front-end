import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import Notfound from './layout/Notfound';
import Landing from './layout/Landing';
import Dashboard from './layout/Dashboard';
import Canvas from './layout/Canvas/Canvas';

import Users from './components/Auth/Users';
import Auth from './components/Auth/AuthOne/Auth';
import Home from './components/Auth/Home';
import Callback from './components/Auth/Callback';




export default class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }

  render = () => (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}  />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/canvas" component={Canvas} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    </div>
  );
}

// Joe is cool
