import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../../../assetts/photoLogo.png'
import './dashNav.css';



const dashNav = {
    display: "flex" ,
    justifyContent: "space-between" ,
    alignItems: "center" ,
    width: "100%" ,
    height: "14vh" ,
    backgroundColor: "#364f6b" ,
    color: "whitesmoke" ,
    fontSize: "2rem" ,
    position: "fixed" ,
    zIndex: "+3" ,
}

const navBarLogo = {
  marginLeft: "80px" ,
  height: "60px" ,
  width: "150px" 
}

const dashNavLinks = {
  display: "flex" ,
  alignItems: "baseline" ,
  justifyContent: "space-evenly" ,
  margin: "8px" ,
  marginRight: "30px" ,
  padding: "0 25px"
}

const dashLogout = {
  backgroundColor: "#fc5185" ,
  padding: "12px" ,
  paddingLeft: "10px" ,
  borderRadius: "8px" ,
  color: "whitesmoke" ,
  boxShadow:" -1px 1px 90px -2px rgba(240,240,240,1)" ,
  border: "none" ,
  fontSize: "2rem" ,
  cursor: "pointer"
}


export class DashNav extends Component {


 
//push to landing

  render() {
    return (
      <nav style={dashNav}>
      <NavLink to="/">
        <img style={navBarLogo} src={Logo} alt="logo"/>
        </NavLink>
      {/* <div>
        <h1 className="logo">Photo Effects</h1>
      </div> */}
      <div className='navWrap'>
      <ul style={dashNavLinks} className="dashNavRight">
      <NavLink exact to="/">
        <li className="home">Home</li>
        </NavLink>

      <NavLink exact to="/canvas">
        <li classHame="canvasDash"> Canvas </li>
      </NavLink>
         <li style={{paddingLeft: "15px"}}><button style={dashLogout} onClick={this.props.auth.logout} >Logout</button></li>
      </ul>
      </div>
    </nav>
    )
  }
}

export default DashNav;