import React, { Component } from 'react';
import axios from 'axios';

import Toolbar from './Toolbar';
import Box from '../../components/CanvasArea/Box';

class CanvasArea extends Component {
  state = {
    items: [],
    top_id: null,
    top_z: null
  }

  componentDidMount() {
    axios
      .get('http://jsonplaceholder.typicode.com/photos')
      .then(res => {
        let arr = [];
        for(let i = 0; i < 10; i++) {
          arr.push({
            ...res.data[i],
            x: 0,
            y: 0,
            height: 100,
            width: 100,
            id: i,
            left: 0,
            top: 0,
            z: i
          })
        }
        this.setState({ items: arr, top_id: arr.length - 1 })
      })
      .catch(err => console.log(err))
  }

  setTop = item => {
    let top_z;
    let sort = this.state.items.sort((a, b) => b.z - a.z);

    top_z = sort[0].z + 1

    let items = sort.map(a => {
      if(a.id === item.id) {
        a.z = top_z
      }
      return a
    })

    console.log(top_z)

    this.setState({ items, top_id: item.id, top_z })
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
                top_id = { item.id === this.state.top_id }
                top_z = { this.state.top_z }
                setTop = { this.setTop }
              />
            ))
          : items.length === 1 ?
              <Box 
                item = { items[0] }
                z = { 0 }
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
