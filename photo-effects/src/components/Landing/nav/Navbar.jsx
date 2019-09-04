import React, { useState } from 'react';

import Photolist from '../../waterfall/Photolist';
import TagsCont from '../../Landing/Tags/TagsCont';
import './nav.css';

const Navbar = () => {
  const [photos, setPhotos] = useState([]);

  const [login, setLogin] = useState('');



  return (
    <nav>
      
      <img style={{width:'250px'}} src="https://files.slack.com/files-pri/T4JUEB3ME-FMKCEGRQT/asset_8.png" alt="logo"/>
    
      {/* <p className="navlinks loginbutton">
        <i className="far fa-plus-square plus" /> New Project
      </p> */}
      <div>
      
      </div>
      <ul className="navlinks navright">
        <li className="smallnavlinks">Docs</li>
        <li className="smallnavlinks">About</li>
        <li ><button className="loginbutton">Login/Signup</button></li>
      </ul>
    </nav>
   
  );
};

export default Navbar;
