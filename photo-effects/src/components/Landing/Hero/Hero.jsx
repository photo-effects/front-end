import React from 'react';
// import Iframe from 'react-iframe';
// import HeroBg from './HeroBg'
import './hero.css';
const Hero = () => {
  return (
         
      <div className="hero">
   
        <div className="title">Make your Next Design <br /> A Breeze!</div>
        <iframe
          title="landing video"
          src="https://www.youtube.com/embed/M7g7Pfx6zjg"
          width="100%"
          height="100%"
          className="video"
          display="initial"
        />
     
      </div>
     
      
  );
};
export default Hero;