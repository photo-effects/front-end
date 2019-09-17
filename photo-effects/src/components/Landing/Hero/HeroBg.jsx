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
            backgroundImage: 'linear-gradient(to bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa4e9, #7aaeef, #6bb7f1, #56c2f4, #44cbf3, #3bd5ee, #43dde6)',
            zIndex: '-2', 
          }}
        />
      </div>
    );
  }
}
export default HeroBg;