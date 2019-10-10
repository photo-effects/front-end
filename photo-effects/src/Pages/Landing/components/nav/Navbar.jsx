import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../../../../assetts/photoLogo.png';

export class Navbar extends Component {
  //push to landing
  render() {
    const nav = {
      borderBottom: '1px solid #ffdb27',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: '11vh',
      backgroundColor: '#364f6b',
      color: 'whitesmoke',
      fontSize: '2rem',
      position: 'fixed',
      zIndex: '3'
    };

    const navbarLogo = {
      marginLeft: '80px',
      height: '60px',
      width: '150px'
    };

    const navlinks = {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '8px',
      width: '400px',
      marginRight: '82px'
    }

    const smallnavlinks = {
      marginTop: '10px'
    }

    const loginbutton = {
      backgroundColor: '#fc5185',
      padding: '12px',
      borderRadius: '8px',
      color: 'whitesmoke',
      boxShadow: '-1px 1px 90px -2px rgba(240,240,240,1)',
      border: 'none',
      fontSize: '2rem',
      cursor: 'pointer'
      
    }

    return (
      <nav style={nav}>
        <img src={navLogo} alt="navbar logo" style={navbarLogo} />

        <ul style = { navlinks }>
          <li style = { smallnavlinks }>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li style = { smallnavlinks }>
            <Link to="/canvas">Canvas</Link>
          </li>
          <li>
            <button style = { loginbutton } onClick={this.props.auth.login}>
              Login/Signup
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
