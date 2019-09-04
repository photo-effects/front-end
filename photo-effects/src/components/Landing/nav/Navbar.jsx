import React, { useState } from 'react';

import Photolist from '../../waterfall/Photolist';
import TagsCont from '../../Landing/Tags/TagsCont';
import './nav.css';


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
        <li ><button className="loginbutton" onClick={this.props.auth.login} >Login/Signup</button></li>
        <li ><button className="loginbutton" onClick={this.props.auth.logout} >Logout</button></li>
      </ul>
    </nav>
    )
  }
}

export default Navbar


 // const filteredpics = photos.filter(photo =>
  //   photo.title.toLowerCase().includes(searchbar.toLowerCase())
  // );

  // useEffect(() => {
  //   const fetchpics = async () => {
  //     const res = await axios('http://jsonplaceholder.typicode.com/photos');
  //     setPhotos(res.data);
  //   };
  //   fetchpics();
  // }, []);
  // console.log(photos);
  // console.log(filteredpics)