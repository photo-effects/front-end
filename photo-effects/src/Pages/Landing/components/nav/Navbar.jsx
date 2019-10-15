import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../../../../assetts/photoLogo.png';

export class Navbar extends Component {
  state = {
    hover: false
  };
  //push to landing
  render() {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

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
      width: '600px',
      marginRight: '82px'
    };

    const links = [
      {
        name: 'About',
        element: 'link'
      },
      {
        name: 'Features',
        element: 'link'
      },
      {
        name: 'Canvas',
        element: 'link'
      },
      {
        name: 'Dashboard',
        element: 'link'
      },
      {
        name: 'auth',
        element: 'button'
      }
    ];

    const loggedInLinks = 
    [
      {
        name: 'About',
        element: 'link'
      },
      {
        name: 'Features',
        element: 'link'
      },
      {
        name: 'auth',
        element: 'button'
      }
    ];
    

    return (
      <nav style={nav}>
        <img src={navLogo} alt="navbar logo" style={navbarLogo} />

        <ul style={navlinks}>

          {links.map(link => (
            <A
              link={link}
              isLoggedIn={isLoggedIn}
              login={this.props.auth.login}
              logout={this.props.auth.logout}
            />
          ))}

        </ul>

        {/* <ul style={navlinks}>
          <li style={smallnavlinks}>
            <Link to="/about" style = {linkStyle}>About</Link>
          </li>
          <li style={smallnavlinks}></li>
            <Link to="/features" style = {linkStyle}>Features</Link>
          </li>
          <li style={loginbutton}>
                <Link to="/dashboard" style = {linkStyle}><i className="far fa-plus-square"></i>New Image</Link>
              </li>
          {!isLoggedIn ? (
            <li >
              <button style={loginbutton} onClick={this.props.auth.login}>
                Login / SignUp
              </button>
            </li>
          ) : (
              <button style={loginbutton} onClick={this.props.auth.logout} onMouseOver={()=>this.setState({ hover: !this.state.hover})} onMouseOut={()=>this.setState({ hover: !this.state.hover})}>
                Logout
              </button>
          
          )}
        </ul> */}
      </nav>
    );
  }
}

class A extends Component {
  state = {
    hover: false
  };

  render() {
    const { hover } = this.state;
    const { link, isLoggedIn } = this.props;
    const { name, element } = link;

    const loginbutton = {
      backgroundColor: '#fc5185',
      padding: hover ? '15px' : '12px',
      borderRadius: '8px',
      color: hover ? 'red' : 'whitesmoke',
      boxShadow: '-1px 1px 90px -2px rgba(240,240,240,1)',
      border: 'none',
      fontSize: '2rem',
      cursor: 'pointer'
    };

    const smallnavlinks = {
      marginTop: '10px'
    };

    const linkStyle = {
      textDecoration: 'none',
      color: name === 'Dashboard' ? 'inherit' : 'whitesmoke',
      padding: name === 'Dashboard' ? 'inherit' : null
    };

    return element === 'button' ? (
      <li>
        <button
          style={loginbutton}
          onMouseEnter={
            !this.state.hover ? () => this.setState({ hover: true }) : null
          }
          onMouseLeave={
            this.state.hover ? () => this.setState({ hover: false }) : null
          }
          onClick={isLoggedIn ? this.props.logout : this.props.login}
        >

          {isLoggedIn ? 'Logout' : 'Login / Signup'}
        </button>
      </li>
    ) : (
      <li style={smallnavlinks}>
        <Link
          to={`/${name.toLowerCase()}`}
          style={linkStyle}
          onMouseEnter={
            !this.state.hover ? () => this.setState({ hover: true }) : null
          }
          onMouseLeave={
            this.state.hover ? () => this.setState({ hover: false }) : null
          }
        >
         {name}
        </Link>
      </li>
    );
  }
}

export default Navbar;
