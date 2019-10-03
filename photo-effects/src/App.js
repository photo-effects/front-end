import React, { Component } from "react";
import './App.css';
import axios from 'axios';

import {
  /* BrowserRouter as Router, */
  Route,
  Switch
  /* NavLink */
} from "react-router-dom";

import Notfound from "./layout/Notfound";
import Landing from "./layout/Landing";
import Dashboard from "./layout/Dashboard";
import Canvas from "./layout/Canvas/Canvas";
import MobileCanvas from './mobile/Pages/Canvas/MobileCanvas';

// import Users from './components/Auth/Users';
import Auth from "./components/Auth/AuthOne/Auth";
// import Home from './components/Auth/Home';
import Callback from "./components/Auth/Callback";

import Test from "./layout/TextBox/Test";

export default class App extends Component {
  state = {
    image: [],
    mobile: false
  };

  auth = new Auth(this.props.history);


  setBgImage = (item) => {
    this.setState({ image: item })
    console.log(this.state.image)
  }

  componentDidMount() {
    window.addEventListener("resize", () => this.resize());
    this.resize();
  }

  resize() {
    let current = window.innerWidth <= 600;
    if(current !== this.state.current) {
      this.setState({mobile: current});
    }
  }
  

  render = () => this.state.mobile ? (
    <div className="mobile">

      <Switch>
        <Route
          path="/"
          exact
          render={props => <Landing auth={this.auth} {...props} />}
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

        {/* Douglas commenting to explain canvas */}
        <Route
          exact
          path="/canvas"
          render = { props => (
            <MobileCanvas 
              {...props}
              auth={this.auth} 
              image={this.state.image}
            /> 
          ) }
        />

        <Route component={Notfound} />
      </Switch>
    </div>
  ) : (
    
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
          render={props => <Callback auth={this.auth} {...props} />}
        />

        {/* <Route
       path="/profile" render = {props => <Profile auth={this.auth} {...props} />} 
      /> */}

        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
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

        {/* Douglas commenting to explain canvas */}
        <Route
          exact
          path="/canvas"
          render={props => <Canvas auth={this.auth} image={this.state.image} {...props} />}
        />

        {/* <Route exact path='/textbox' component={Test} /> */}

        <Route component={Notfound} />
      </Switch>
      {/* </Router> */}
    </div>
  );
}

// Joe is cool
