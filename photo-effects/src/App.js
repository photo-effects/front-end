import React, { Component } from "react";


import {
  /* BrowserRouter as Router, */
  Route,
  Switch
  /* NavLink */
} from "react-router-dom";

import Notfound from "./Pages/NotFound/Notfound";
import Landing from "./Pages/Landing/Landing";
import About from './Pages/About/About';
import Dashboard from "./Pages/Dashboard/Dashboard";
import Canvas from "./Pages/Canvas/Canvas";
import Test from './Pages/Test/Test'

// import Users from './components/Auth/Users';
import Auth from "./components/Auth/AuthOne/Auth";
// import Home from './components/Auth/Home';
import Callback from "./components/Auth/Callback";

export default class App extends Component {
  state = {
    image: null
  };

  auth = new Auth(this.props.history);


  setBgImage = (item) => {
    this.setState({ image: item })
  }

  // componentDidMount() {
  //   // sets projects in state
  //   axios
  //     .get("https://photo-effects-backend.herokuapp.com/api/projects")
  //     .then(res => this.setState({ image: res.data[res.data.length-1] }))
  //     .catch(err => console.log(err));
  // }
  

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
          path="/about"
          exact
          render={props => <About auth={this.auth} {...props} />}
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

        <Route exact path='/test' component={Test} />

        <Route component={Notfound} />
      </Switch>
      {/* </Router> */}
    </div>
  );
}

// Joe is cool
