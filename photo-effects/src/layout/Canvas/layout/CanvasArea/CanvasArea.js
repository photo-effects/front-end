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
      .get('https://photo-effects-backend.herokuapp.com/api/projects')
      .then(res => {
        console.log(res.data)
        this.setState({ items: res.data })
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

  render() { console.log(this.state.items)
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
                // setTop = { this.setTop }
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
