import React from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';

const Notfound = () => {
  return (
    <div >
        <div style={notfound}>
        <h1 style={fourOfour}>Error 404</h1>
        <h2>Page Not Found</h2>
        <Link to="/" style={goback}>
          Click here to return to the home page.
        </Link>
        {/* <div style={{ height: '550px' }} /> */}
      </div>
      
      <Particles
        params={{
          particles: {
            number: {
              value: 140,
              density: {
                enable: false
              }
            },
            size: {
              value: 20,
              random: true,
              anim: {
                speed: 10,
                size_min: 0.3
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              random: true,
              speed: 0.2,
              direction: 'top',
              out_mode: 'out'
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'bubble'
              },
              onclick: {
                enable: true,
                mode: 'repulse'
              }
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 10,
                opacity: 0
              },
              repulse: {
                distance: 300,
                duration: 4
              }
            }
          }
        }}
        style={{ position: 'absolute', top:'0px', height: '100%', width: '100%', zIndex:'-2', backgroundImage:
        'linear-gradient(to bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa4e9, #7aaeef, #6bb7f1, #56c2f4, #44cbf3, #3bd5ee, #43dde6)' }}
      />
      
    
     
    </div>
  );
};

export default Notfound;

const notfound = {
  color: 'whitesmoke',
  textAlign: 'center',
  fontSize: '12rem',
  textShadow: '-2px 1px 1px rgb(40, 5, 145)',
  margin: 'auto',
  zIndex:'+5'
};

const fourOfour = {
  paddingTop: '200px'
};

const goback = {
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: '5rem',
  margin: 'auto'
};
