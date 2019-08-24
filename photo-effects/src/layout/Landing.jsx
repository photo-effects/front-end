import React from 'react';
import Navbar from '../components/Landing/nav/Navbar';
import TagsCont from '../components/Landing/Tags/TagsCont';
import Hero from '../components/Landing/Hero/Hero';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div style={{ height: '11vh' }} />
      <Hero />
      <TagsCont />
      <div style={landing}>
        <p>
          {' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ex
          exercitationem voluptatum ullam accusantium itaque ea. Dolor labore
          sapiente illo sed magni veritatis a impedit ipsam, itaque nam incidunt
          dicta!
        </p>
        <p>
          {' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ex
          exercitationem voluptatum ullam accusantium itaque ea. Dolor labore
          sapiente illo sed magni veritatis a impedit ipsam, itaque nam incidunt
          dicta!
        </p>
        <p>
          {' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ex
          exercitationem voluptatum ullam accusantium itaque ea. Dolor labore
          sapiente illo sed magni veritatis a impedit ipsam, itaque nam incidunt
          dicta!
        </p>
        <p>
          {' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ex
          exercitationem voluptatum ullam accusantium itaque ea. Dolor labore
          sapiente illo sed magni veritatis a impedit ipsam, itaque nam incidunt
          dicta!
        </p>
      </div>
    </div>
  );
};

export default Landing;

const landing = {
  paddingTop: '14vh',
  backgroundColor: '#633875',
  color: 'black',
  fontSize: '3rem'
};
