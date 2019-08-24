import React from 'react';
import HeroBg from '../components/Landing/Hero/HeroBg';
import { NavLink } from 'react-router-dom';

const Notfound = () => {
  return (
    <div style={notfound}>
      <HeroBg style={BG} />
      <img
        src="https://derpicdn.net/img/2012/8/2/65034/large.png"
        alt="pony"
        style={{ position: 'absolute',left:'20px', zIndex:'-1',  textShadow: '-2px 1px 1px rgb(40, 5, 145)' }}
      />
      <h1 style={fourOfour}>Error 404</h1>
      <h2>Page Not Found</h2>
      <NavLink to="/home" style={goback}>
        Click here to return to the home page.
      </NavLink>
    </div>
  );
};

export default Notfound;

const BG = {
  height: '100%',
  width: '100%',
  background:
    'linear-gradient(to right bottom, #6600d6, #5800d5, #4700d5, #3100d4, #0000d3)',
  position: 'absolute',
  zIndex: '-1'
};

const notfound = {
  color: 'whitesmoke',
  textAlign: 'center',
  fontSize: '12rem',
  textShadow: '-2px 1px 1px rgb(40, 5, 145)'
};

const fourOfour = {
  paddingTop: '200px'
};

const goback = {
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: '5rem',
  marginLeft:'250px'
};
