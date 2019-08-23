import React, { Component } from 'react';
import { Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Users from './components/Users';

function App() {
 
  return (
    <div>
      <h1>Photo Effects</h1>
      <Users />
    </div>
  );
}

export default App;
