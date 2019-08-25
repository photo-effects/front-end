import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Users from './components/Users';
import Auth from './components/Auth/Auth';
import Home from './components/Home';
import Callback from './components/Callback';
import Profile from './components/Profile';

class App extends Component {
 // Constructor for Auth0
 constructor(props) {
   super(props);
   this.auth = new Auth(this.props.history);
 }


 render() {
  return (
    
    <div className="body">
      <Route 
        path="/" exact 
        render = {props => <Home auth={this.auth} {...props} />} 
      />
       <Route 
        path="/callback"
        render = {props => <Callback auth={this.auth} {...props} />} 
      />
      <Route
       path="/profile" component={Profile}
      /> 
    </div>
  );
 }
}

export default App;
