import React from 'react';
import Navbar from '../components/Landing/nav/Navbar';
import TagsCont from '../components/Landing/Tags/TagsCont';
import Hero from '../components/Landing/Hero/Hero';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div style={{ height: '5.5vh' }} />
      <Hero />
      <TagsCont />
      <div style={landing}>
        
      </div>
    </div>
  );
};

export default Landing;

const landing = {
  paddingTop: '14vh',

  color: 'white',
  fontSize: '3rem'
};
