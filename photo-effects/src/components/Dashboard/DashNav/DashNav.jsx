import React, { Component } from 'react'
import './dashNav.css';


export class DashNav extends Component {



//push to landing

  render() {
    return (
      <nav classnname="dashNav">
        <img style={{width:'250px'}} src="https://files.slack.com/files-pri/T4JUEB3ME-FMKCEGRQT/asset_8.png" alt="logo"/>
      {/* <div>
        <h1 className="logo">Photo Effects</h1>
      </div> */}
      <div className='navWrap'>
      <ul className="dashNavLinks dashNavRight">
        <li className="home">Home</li>
         <li ><button className="dashLogout" >Logout</button></li>
      </ul>
      </div>
    </nav>
    )
  }
}

export default DashNav;