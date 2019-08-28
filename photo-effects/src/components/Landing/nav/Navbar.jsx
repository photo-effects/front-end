import React, { useState, useEffect } from 'react';

import Photolist from '../../waterfall/Photolist';
import TagsCont from '../../Landing/Tags/TagsCont';
import './nav.css';

const Navbar = () => {
  const [photos, setPhotos] = useState([]);

  const [searchbar, setSearchbar] = useState('');

  const handleSearchInputChanges = e => {
    setSearchbar(e.target.value);
  };

  const filteredpics = photos.filter(photo =>
    photo.title.toLowerCase().includes(searchbar.toLowerCase())
  );

  // useEffect(() => {
  //   const fetchpics = async () => {
  //     const res = await axios('http://jsonplaceholder.typicode.com/photos');
  //     setPhotos(res.data);
  //   };
  //   fetchpics();
  // }, []);
  // console.log(photos);
  // console.log(filteredpics)

  return (
    <nav>
      <div>
        <h1 className="logo">Photo Effects</h1>
      </div>
      <p className="navlinks loginbutton">
        <i className="far fa-plus-square plus" /> New Project
      </p>
      <div>
        <i className="fas fa-search searchbtn" />
        <form>
          <input
            type="text"
            className="searchnav"
            placeholder="Search Tags"
            value={searchbar}
            onChange={handleSearchInputChanges}
          />
        </form>
      </div>
      <ul className="navlinks navright">
        <li className="smallnavlinks">Features</li>
        <li className="smallnavlinks">About</li>
        <li ><button className="loginbutton">Login/Signup</button></li>
      </ul>
    </nav>
   
  );
};

export default Navbar;
