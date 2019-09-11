import React, { Component } from 'react';
import {
  /* BrowserRouter as Router, */
  Route,
  Switch,
  /* NavLink */
} from 'react-router-dom';

import Notfound from './layout/Notfound';
import Landing from './layout/Landing';
import Dashboard from './layout/Dashboard';
import Canvas from './layout/Canvas/Canvas';

// import Users from './components/Auth/Users';
import Auth from './components/Auth/AuthOne/Auth';
// import Home from './components/Auth/Home';
import Callback from './components/Auth/Callback';





export default class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }

  render = () => (
    <div>
      {/* <Router> */}
      <Switch>
        <Route
          path="/"
          exact
          render={props => <Landing auth={this.auth} {...props} />}
        />

        <Route 
        path="/callback"
        render = {props => <Callback auth={this.auth} {...props} />} 
      />

        {/* <Route
       path="/profile" render = {props => <Profile auth={this.auth} {...props} />} 
      /> */}

        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
        <Route
          path="/dashboard"
          exact
          render={props => <Dashboard auth={this.auth} {...props} />}
        />

        <Route exact path="/canvas" 
        render = {props => <Canvas auth={this.auth} {...props} />}
        />
        {/* <Route exact path='/textbox' component={Test} /> */}

        <Route component={Notfound} />
      </Switch>
      {/* </Router> */}
    </div>
  );
}

// Joe is cool