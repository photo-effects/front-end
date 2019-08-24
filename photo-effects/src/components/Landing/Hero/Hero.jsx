import React from 'react';
import Iframe from 'react-iframe';
import HeroBg from './HeroBg';
import './hero.css';

const Hero = () => {
  return (
    <div>
       <HeroBg/>
      <div  className='hero'>
      <div className='title'>Make your Next Design A Breeze!</div>
      <Iframe
        url="https://www.youtube.com/embed/FUqfZnF-NNQ"
        width="660"
        height="415"
        className="video"
        display="initial"
      />
      </div>
     
    </div>
  );
};

export default Hero;
