import React from 'react';
import Navbar from './components/nav/Navbar';
import TagsCont from './components/Tags/TagsCont';
import Hero from './components/Hero/Hero';
import HeroBg from './components/Hero/HeroBg';

const Landing = props => {
  return (
    <div>
      <Navbar auth={props.auth} />
      <div style={{ height: '5.5vh' }} />

      <Hero
        style={{ position: 'absolute', top: '0px', backgroundImage: 'none' }}
      />
      <HeroBg style={{ zIndex: '-20', position: 'absolute', top: '10px' }} />

      <TagsCont style={{ zIndex: '+20', position: 'absolute', top: '10px' }} />
    </div>
  );
};

export default Landing; 
