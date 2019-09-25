import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './dashNav.css';


export class DashNav extends Component {



//push to landing

  render() {
    return (
      <nav className="dashNav">
      <NavLink to="/">
        <img style={{width:'250px'}} src="https://files.slack.com/files-pri/T4JUEB3ME-FMKCEGRQT/asset_8.png" alt="logo"/>
        </NavLink>
      {/* <div>
        <h1 className="logo">Photo Effects</h1>
      </div> */}
      <div className='navWrap'>
      <ul className="dashNavLinks dashNavRight">
      <NavLink exact to="/">
        <li className="home">Home</li>
        </NavLink>
         <li ><button className="dashLogout" onClick={this.props.auth.logout} >Logout</button></li>
      </ul>
      </div>
    </nav>
    )
  }
}

export default DashNav;