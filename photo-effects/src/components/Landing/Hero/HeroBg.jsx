import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './hero.css';

export class HeroBg extends Component {
  render() {
    return (
      <div className="herobg">
        <Particles
          className="particles"
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
          style={{
            backgroundImage:
              'linear-gradient(to right bottom, #6600d6, #5800d5, #4700d5, #3100d4, #0000d3)',
            zIndex: '-2', 
          }}
        />
      </div>
    );
  }
}

export default HeroBg;
