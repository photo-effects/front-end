import React, { Component } from 'react';
// import axios from 'axios';
import uuidv4 from 'uuid/v4';

import ToolsArea from './layout/ToolsArea/ToolsArea';
import CanvasArea from './layout/CanvasArea/CanvasArea';

export default class Canvas extends Component {
  state = {
    items: []
  }

  // componentDidMount() {
  //   axios
  //     .get('https://photo-effects-backend.herokuapp.com/api/projects')
  //     .then(res => {
  //       console.log(res.data)
  //       const items = res.data.map((item, i) => {
  //         return (
  //           <img 
  //             src = { item.secure_url }
  //             style = {{ 
  //               height: '100%', 
  //               width: '100%',
  //               zIndex: i
  //             }}
  //             key = { item.id }
  //             id = { item.id }
  //           />
  //         )
  //       })
  //       this.setState({ items })
  //     })
  //     .catch(err => console.log(err))
  // }
  

  bringToTop = id => {
    let z = this.state.items.map(item => item.props.style.zIndex).sort((a, b) => b - a)[0]

    let items = this.state.items.map(item => {
      if(item.props.id === id) {
        console.log('in if statement')
        return (
          <item.type
            { ...item.props }
            style = {{
              ...item.props.style,
              zIndex: z + 1
            }}
          >
          { item.props.children }
          </item.type>

        )
      } else return item;
    })

    this.setState({ items })
  }

  addItem = item => {
    console.log(item)
    this.setState({ items: [
      ...this.state.items,
        item.type === 'img' ?
          <img 
            src = { item.props.src }
            height = { 100 }
            width = { 100 }
            x = { 100 }
            y = { 100 }
            style = {{ zIndex: this.state.items.length + 1 }}
            id = { uuidv4() }
            alt = { item.props.title }
          />
        :
          <item.type
            style = {{
              ...item.props.style,
              zIndex: this.state.items.length + 1
            }}
            width = { 80 }
            height = { 50 }
            id = { uuidv4() }
          />
    ] })
  }

  setItem = (id, w, h, x, y) => {
    console.log(id, w, h, x, y)
    let items = this.state.items.map(item => {
      if(item.props.id === id) {
        return (
          <item.type
            { ...item.props }
            width = { w }
            height = { h }
            x = { this.state.items.length === 1 ? x - (w / 2) : x }
            y = { this.state.items.length === 1 ? y - (h / 2) : y }
          >
            { item.props.children }
          </item.type>
        )
      } else return item
    })

    this.setState({ items })
  }

  render() { 
    return (
      <div style = { page }>
        <ToolsArea 
          auth = { this.props.auth } 
          addItem = { this.addItem }
        />
        <CanvasArea 
          items = { this.state.items }
          bringToTop = { this.bringToTop }
          setItem = { this.setItem }
        />
      </div>
    )
  }
}

const page = {
  height: '100vh',
  width: '100vw',
  display: 'flex'
}