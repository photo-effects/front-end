import React, { Component } from 'react';
import axios from 'axios';

import Toolbar from './Toolbar';
import Canvas from '../../components/CanvasArea/Canvas';

class CanvasArea extends Component {
  state = {
    items: []
  }

  componentDidMount() {
    axios
      .get('http://jsonplaceholder.typicode.com/photos')
      .then(res => {
        let arr = [];
        for(let i = 0; i < 1; i++) {
          arr.push({
            ...res.data[i],
            x: 0,
            y: 0,
            height: 100,
            width: 100
          })
        }
        this.setState({ items: arr })
      })
      .catch(err => console.log(err))
  }

  setCoords = (x, y, id) => {
    let items = this.state.items.map(item => {
      if(item.id === id) {
        item.x = x;
        item.y = y;
      }
      return item;
    })

    this.setState({ items })
  }

  setResize = (height, width, id) => {
    let items = this.state.items.map(item => {
      if(item.id === id) {
        item.height = height;
        item.width = width;
      }
      return item;
    })

    this.setState({ items })
  }

  render() {
    return (
      <div style = { container }>
        <Toolbar />
        <Canvas 
          items = { this.state.items }
          setCoords = { this.setCoords }
          setResize = { this.setResize }
        />
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
