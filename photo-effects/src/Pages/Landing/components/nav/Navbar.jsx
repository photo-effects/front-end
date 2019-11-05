import React, { Component } from "react";
import { Link } from "react-router-dom";
import navLogo from "../../../../assetts/photoLogo.png";

export class Navbar extends Component {
  state = {
    hover: false
  };

  //push to landing
  render() {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));

    const nav = {
      borderBottom: "1px solid #ffdb27",
      padding: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      height: "100px",
      backgroundColor: "#364f6b",
      color: "whitesmoke",
      fontSize: "2rem",
      position: "fixed",
      zIndex: "3"
    };

    const navbarLogo = {
      marginLeft: "80px",
      height: "60px",
      width: "150px",
      cursor: "pointer"
    };

    const navlinks = {
      display: "flex",
      justifyContent: "space-between",
      width: "600px"
    };

    const navLinksLoggedOut = {
      display: "flex",
      justifyContent: "space-between",
      width: "400px"
    };

    const links = [
      {
        name: "About",
        element: "link"
      },
      {
        name: "Docs",
        element: "link"
      },
      {
        name: "Dashboard",
        element: "link"
      },
      {
        name: "auth",
        element: "button"
      }
    ];

    const loggedOutLinks = [
      {
        name: "About",
        element: "link"
      },
      {
        name: "Docs",
        element: "link"
      },
      {
        name: "auth",
        element: "button"
      }
    ];

    return (
      <nav style={nav}>
        <Link to="/">
          <img src={navLogo} alt="navbar logo" style={navbarLogo} />
        </Link>
        {isLoggedIn ? (
          <ul style={navlinks}>
            <>
              {links.map((link, i) => (
                <A
                  link={link}
                  isLoggedIn={isLoggedIn}
                  login={this.props.auth.login}
                  logout={this.props.auth.logout}
                  key={i}
                />
              ))}
            </>
          </ul>
        ) : (
          <ul style={navLinksLoggedOut}>
            <>
              {loggedOutLinks.map(link => (
                <A
                  link={link}
                  isLoggedIn={isLoggedIn}
                  login={this.props.auth.login}
                  logout={this.props.auth.logout}
                />
              ))}
            </>
          </ul>
        )}
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
      backgroundColor: "#fc5185",
      padding: "12px",
      transform: hover ? "scale(1.1)" : "scale(1)",
      transition: hover ? "ease-in-out 0.1s" : "null",
      borderRadius: "8px",
      color: "whitesmoke",
      boxShadow: "-1px 1px 90px -2px rgba(240,240,240,1)",
      border: "none",
      fontSize: "2rem",
      cursor: "pointer"
    };

    const smallnavlinks = {
      marginTop: "10px",
      transform: hover ? "scale(1.1)" : "scale(1)",
      transition: hover ? "ease-in-out 0.1s" : "null"
    };

    const linkStyle = {
      textDecoration: "none",
      color: name === "Dashboard" ? "inherit" : "whitesmoke",
      padding: name === "Dashboard" ? "inherit" : null
    };

    return element === "button" ? (
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
          {isLoggedIn ? "Logout" : "Login / Signup"}
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
