import React from 'react';
import Navbar from '../components/Landing/nav/Navbar';
import TagsCont from '../components/Landing/Tags/TagsCont';
import Hero from '../components/Landing/Hero/Hero';
import WaterfallCont from '../components/waterfall/waterfallCont';
import HeroBg from '../components/Landing/Hero/HeroBg'


const Landing = () => {
  return (
    <div>
      <Navbar />
      <div style={{ height: '5.5vh' }} />
      
      <Hero style={{position:'absolute', top:'0px', backgroundImage:'none'}} />
      <HeroBg style={{zIndex:'-2', position:'absolute', top:'10px'}}/>
      <TagsCont />
    <WaterfallCont/>
   
    </div>
  );
};

export default Landing;

const landing = {
  paddingTop: '14vh',

  color: 'white',
  fontSize: '3rem'
};
