import React, { Component } from 'react';
import { Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import Auth from './components/Auth';

class App extends Component {
 // Constructor for Auth0
 constructor(props) {
   super(props);
   this.auth = new Auth(this.props.history);
 }


 render() {
  return (
    <>
    <div>
      <h1>Photo Effects</h1>
      <Users />
    </div>
    </>
  );
 }
}

export default App;
