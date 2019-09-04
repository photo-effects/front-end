import React from 'react';
import Iframe from 'react-iframe';
import HeroBg from './HeroBg'


import './hero.css';

const Hero = () => {
  return (

         
      <div className="hero">
   
        <div className="title">Make your Next Design A Breeze!</div>
        <Iframe
          url="https://www.youtube.com/embed/FUqfZnF-NNQ"
          width="100%"
          height="100%"
          className="video"
          display="initial"
        />
     
      </div>
     
      
  );
};

export default Hero;
