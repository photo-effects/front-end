import React, { Component } from "react";
 

import {
  Route,
  Switch
} from "react-router-dom";

import Notfound from "./Pages/NotFound/Notfound";
import Landing from "./Pages/Landing/Landing";
import About from './Pages/About/About';
import Dashboard from "./Pages/Dashboard/Dashboard";
import Canvas from "./Pages/Canvas/Canvas";

import Auth from "./components/Auth/AuthOne/Auth";
import Callback from "./components/Auth/Callback";
import Docs from './Pages/Docs/Docs'

export default class App extends Component {
  state = {
    image: null
  };

  auth = new Auth(this.props.history);

  setBgImage = (item) => {
    this.setState({ image: item })
  }
  

  render = () => (
    
    <div>
    
      <Switch>
        <Route
          path="/"
          exact
          render={props => <Landing auth={this.auth} {...props} />}
        />

        <Route
          path="/about"
          exact
          render={props => <About auth={this.auth} {...props} />}
        />

        <Route
          exact
          path="/docs"
          render={props => <Docs auth={this.auth} image={this.state.image} {...props} />}
        />

        <Route
          path="/callback"
          render={props => <Callback auth={this.auth} {...props} />}
        />

        <Route
          path="/dashboard"
          exact
          render={props => (
            <Dashboard
              auth={this.auth}
              setBgImage={this.setBgImage}
              click={this.click}
              {...props}
            />
          )}
        />

        <Route
          exact
          path="/canvas"
          render={props => <Canvas auth={this.auth} image={this.state.image} {...props} />}
        />

      

        <Route component={Notfound} />
      </Switch>
    
    </div>
  );
}

// Joe is cool
