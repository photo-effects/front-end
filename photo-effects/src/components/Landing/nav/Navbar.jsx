import React from 'react';
import './nav.css';

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1 className="logo">Photo Effects</h1>
      </div>
      <p className="navlinks loginbutton"><i className="far fa-plus-square plus"></i> New Project</p>
      <div>
      
        <i className="fas fa-search searchbtn" />
        <input type="text" className="searchnav" placeholder="Search Tags" />
      </div>
      <ul className="navlinks navright">
        <li className="smallnavlinks">Features</li>
        <li className="smallnavlinks">About</li>
        <li className="loginbutton">Login/Signup</li>
      </ul>
    </nav>
  );
};

export default Navbar;
