import React from 'react';
import Iframe from 'react-iframe';
import './hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='title'>Make your Next Design A Breeze!</div>
      <Iframe
        url="https://www.youtube.com/embed/FUqfZnF-NNQ"
        width="760"
        height="515"
        className="myClassname"
        display="initial"
      />
    </div>
  );
};

export default Hero;
