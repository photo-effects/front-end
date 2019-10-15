import React from 'react';
import Navbar from './components/nav/Navbar';
import TagsCont from './components/Tags/TagsCont';
import Hero from './components/Hero/Hero';
import HeroBg from './components/Hero/HeroBg'

const Landing = (props) => {
  return (
    <div>
      <Navbar auth={props.auth}/>
      <div style={{ height: '5.5vh' }} />
      
      <Hero style={{position:'absolute', top:'0px', backgroundImage:'none'}} />
      <HeroBg style={{zIndex:'-2', position:'absolute', top:'10px'}}/>
      <TagsCont/>
    
   
    </div>
  );
};
export default Landing;
const landing = {
  paddingTop: '14vh',
  color: 'white',
  fontSize: '3rem'
};