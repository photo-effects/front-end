import React, { Component } from 'react';
import { Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import Auth from './components/Auth';
import Home from './components/Home'

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
    </div>
  );
 }
}

export default App;
