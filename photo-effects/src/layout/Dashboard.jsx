import React, { Component } from 'react'
import Logout from '../components/Dashboard/Logout';

export default class Dashboard extends Component {


  logoutButton = e => {
    e.preventDefault();
    console.log(this.props)
    this.props.history.push('/home');
  }

  render() {
    return (
      <div>
        <Logout logoutButton={this.logoutButton} />
       <h1>Welcome Username!</h1>
       
      </div>
    )
  }
}
