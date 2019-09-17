import React, { Component } from 'react';

import { _photo, photoImg, after, plus } from './library';

export default class Photo extends Component {
  state = {
     hover: false
  }

  render() {
     return (
        <div 
           style = { _photo }
           onMouseEnter = { this.state.hover ? null : () => this.setState({ hover: true }) }
           onMouseLeave = { this.state.hover ? () => this.setState({ hover: false }) : null }
        >
           <img 
              style = { photoImg }
              src={this.props.url} 
              alt = { this.props.alt }
           />
           { this.state.hover ?
              <div 
                style = { after }
                onClick={() => this.props.addItem(
                  <img
                     src = { this.props.url }
                     alt = { this.props.alt }
                  />
               )}
              >
                 <span style = { plus }>+</span>
              </div>
           :
              null
           }
        </div>
     )
  }
}