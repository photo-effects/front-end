import React, { Component } from 'react';

import Toolbar from './Toolbar';
import Box from '../../components/CanvasArea/Box';

class CanvasArea extends Component {
  state = {
    items: []
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.items !== prevState.items) {
      return {
        items: nextProps.items
      }
    }
  }
  

  render() {
    const { items } = this.state;

    return (
      <div style = { container }>
        <Toolbar />
        { items.length > 1 ?
            this.state.items.map((item, i) => (
              <Box
                key = { i }
                item = { item }
                bringToTop = { this.props.bringToTop }
              />
            ))
          : items.length === 1 ?
              <Box 
                item = { items[0] }
                bringToTop = { this.props.bringToTop }
              />
            : 
              <div></div>
        }
      </div>
    )
  };
}

const container = {
  width: '80%',
  height: '100%',
  position: 'relative'
}

export default CanvasArea;
