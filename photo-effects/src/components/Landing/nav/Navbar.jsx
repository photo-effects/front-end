import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Photolist from '../../waterfall/Photolist';
import TagsCont from '../../Landing/Tags/TagsCont';
import './nav.css';
import navLogo from '../../../assetts/photoLogo.png';
export class Navbar extends Component {
//push to landing
  render() {
    return (
      <nav>
       
      <div>
        <img src= {navLogo} alt="navbar logo" className="navbarLogo" />
        {/* <h1 className="logo">Photo Effects</h1> */}
      </div>
      {/* <p className="navlinks loginbutton">
        <i className="far fa-plus-square plus" /> New Project
      </p> */}
      {/* <div>
        <i className="fas fa-search searchbtn" />
    
      </div> */}
      <ul className="navlinks navright">
        <li className="smallnavlinks"><Link to='/dashboard'>Dashboard</Link></li>
        <li className="smallnavlinks"><Link to='/canvas'>Canvas</Link></li>
        <li ><button className="loginbutton" onClick={this.props.auth.login} >Login/Signup</button></li>
         {/* <li ><button className="loginbutton" onClick={this.props.auth.logout} >Logout</button></li> */}
        
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