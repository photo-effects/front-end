import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./dashNav.css";
import logo from "../../../../assetts/photoLogo.png";

const dashNav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "100px",
  backgroundColor: "#364f6b",
  color: "whitesmoke",
  fontSize: "2rem",
  position: "fixed",
  zIndex: "+3",
  borderBottom: "1px solid yellow"
};

const navBarLogo = {
  marginLeft: "80px",
  height: "70px",
  width: "170px"
};

const dashNavLinks = {
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-evenly",
  marginRight: "10px"
};

const navLink = {
  textDecoration: "none",
  color: "white",
  padding: "0 10px"
};

const dashLogout = {
  backgroundColor: "#fc5185",
  padding: "12px",
  paddingLeft: "10px",
  borderRadius: "8px",
  color: "whitesmoke",
  boxShadow: " -1px 1px 90px -2px rgba(240,240,240,1)",
  border: "none",
  fontSize: "2rem",
  cursor: "pointer"
};

export class DashNav extends Component {
  //push to landing

  render() {
    return (
      <nav style={dashNav}>
        <NavLink to="/">
          <img style={navBarLogo} src={logo} alt="logo" />
        </NavLink>
        <div className="navWrap">
          <ul style={dashNavLinks} className="dashNavRight">
            <NavLink style={navLink} exact to="/">
              <li className="links">Home</li>
            </NavLink>
            <li style={{ paddingLeft: "15px" }}>
              <button style={dashLogout} onClick={this.props.auth.logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default DashNav;
 