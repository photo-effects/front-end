import React, { Component } from 'react';

// import Toolbar from './Toolbar';
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

      <div id="canvasTarget" style = { container }>
        

        { items.length > 1 ?
            this.state.items.map((item, i) => (
              <Box
                key = { i }
                item = { item }
                bringToTop = { this.props.bringToTop }
                setItem = { this.props.setItem }
              />
            ))
          : items.length === 1 ?
              <Box 
                item = { items[0] }
                bringToTop = { this.props.bringToTop }
                setItem = { this.props.setItem }
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

  height: 'calc(100% - 72px)',
  position: 'absolute',
  bottom: 0,
  right: 0,
   backgroundColor: 'rgba(255, 255, 255, 1)'
}

export default CanvasArea;
