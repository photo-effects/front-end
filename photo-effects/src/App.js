import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Landing from './layout/Landing';
import Dashboard from './layout/Dashboard';
import Canvas from './layout/Canvas';


export default class App extends Component {
  render = () => (
    <Router>
      <Switch>
        <Route 
          exact path="/home" 
           component = { Landing } 
        />
        <Route 
          exact path="/dashboard"
          component = { Dashboard }
        />
        <Route 
          exact path="/canvas"
          component = { Canvas }
        />
      </Switch>
    </Router>
  );
}